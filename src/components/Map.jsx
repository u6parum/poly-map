import React from "react";
import { ComposableMap, Geographies, Geography, ZoomableGroup } from "react-simple-maps";
import { geoPath, geoMercator } from "d3-geo";
import { config } from "react-spring";
import { Spring } from 'react-spring/renderprops';

import SVGDropShadow from "./hoc/svgDropShadow/SVGDropShadow";
import MapContainer from "./hoc/mapContainer/MapContainer";
import Marker from "./marker/Marker";
import ZoomButtons from "./zoombuttons/ZoomButtons";
import { flatMarkersList, MarkerTypes } from "../utils";
import geographies from "../assets/geodata/map.json";
import FactoryInfo from "./info/FactoryInfo";

const MAP_MAX_WIDTH = window.innerWidth;
const MAP_MAX_HEIGHT = window.innerHeight;
const MAP_CENTER_COORDS = [58, 33];
const MAP_SCALE = 800;



const selectedColor = '#D3C9A8',
    highlightColor = 'rgba(211, 201, 168, 0.5)',
    defaultColor = 'rgba(211, 201, 168, 0.2)';

const commonGeoConfig = {
    transition: 'all .3s ease',
    outline: "none",
};
const defaultGeoConfig = {
    ...commonGeoConfig,
    fill: defaultColor
};
const highlightedGeoConfig = {
    ...commonGeoConfig,
    fill: highlightColor,
    cursor: "pointer"
};
const selectedGeoConfig = {
    ...commonGeoConfig,
    fill: selectedColor,
    filter: "url(#dropshadow)",
    cursor: "pointer"
};
const initialPosition = {
    zoom: 1,
    coordinates: MAP_CENTER_COORDS
};


class PolyMap extends React.Component {

    state = {
        legend: this.props.defaultLegend,
        markers: this.props.defaultMarkers,
        flatMarkers: flatMarkersList(this.props.defaultMarkers),
        regions: this.props.defaultRegions,
        selectedRegion: null,
        selectedMarker: null,
        openedMarker: null,
        position: initialPosition,
        bypass: false,
        markersRadius: 4,
        mappedDirectItems: {},
        mappedIndirectItems: {},
        markerModalData: {},
    }

    constructor(props) {
        super(props);

        this.handleZoomIn = this.handleZoomIn.bind(this);
        this.handleZoomOut = this.handleZoomOut.bind(this);
        this.handleMoveStart = this.handleMoveStart.bind(this);
        this.handleMoveEnd = this.handleMoveEnd.bind(this);
        this.handleZoomReset = this.handleZoomReset.bind(this);
        this.selectRegionByGeoId = this.selectRegionByGeoId.bind(this);
        this.selectRegionById = this.selectRegionById.bind(this);
        this.getMarkers = this.getMarkers.bind(this);
        this.getGeography = this.getGeography.bind(this);
        this.handleMarkerClick = this.handleMarkerClick.bind(this);
        this.handleLegendItemClick = this.handleLegendItemClick.bind(this);
        this.onLegendItemToggleChange = this.onLegendItemToggleChange.bind(this);
        this.isMarkerVisible = this.isMarkerVisible.bind(this);
    }

    handleZoomIn() {
        if (this.state.position.zoom >= 4) return;
        this.setState(prevState => ({ position: { ...prevState.position, zoom: prevState.position.zoom * 2 } }));
    }

    handleZoomOut() {
        if (this.state.position.zoom <= 1) return;
        this.setState(prevState => ({ position: { ...prevState.position, zoom: prevState.position.zoom / 2 } }));
    }

    handleMoveStart(position) {
        this.setState({ bypass: true });
    }

    handleMoveEnd(position) {
        this.setState({ position });
    }

    handleZoomReset() {
        this.setState({ position: { coordinates: MAP_CENTER_COORDS, zoom: 1 } });
        this.setState({ selectedMarker: null, selectedRegion: null });
    }

    selectRegionById(regionId) {
        const region = this.state.regions.find(r => r.id === regionId) || null;
        this.setState({ selectedRegion: region });
    }

    selectRegionByGeoId(geoId) {
        const region = this.state.regions.find(r => r.geos.includes(geoId)) || null;
        this.setState({ selectedRegion: region });
    }

    selectMarkerById(markerId) {
        const selectedMarker = this.state.flatMarkers.find(m => m.id === markerId) || null;
        this.setState({
            selectedMarker,
            mappedDirectItems: this.mapHabitatItems(selectedMarker.directInfluenceMarkers),
            mappedIndirectItems: this.mapHabitatItems(selectedMarker.indirectInfluenceMarkers),
            markerModalData: {
                directInfluence: selectedMarker.directInfluenceItems,
                indirectInfluence: selectedMarker.indirectInfluenceItems
            },
        });
    }

    handleGeographyClick(geography) {
        const path = geoPath().projection(this.projection());
        const centroid = this.projection().invert(path.centroid(geography));

        const newPosition = {
            coordinates: centroid,
            zoom: 4,
        };

        this.setState({ position: newPosition, bypass: false });
        this.setState({ selectedMarker: null });

        this.selectRegionByGeoId(geography.rsmKey);
    }

    handleMarkerClick([x, y], regionId, markerId, bypassAnimation = false) {
        this.setState({
            position: {
                coordinates: [x, y],
                zoom: 6
            },
            bypass: bypassAnimation
        });

        this.selectMarkerById(markerId);
        this.selectRegionById(regionId);
    }

    handleLegendItemClick(marker) {
        this.handleMarkerClick([marker.x, marker.y], marker.regionId, marker.id, true);
    }

    getGeographyStyle(geo) {
        const isDefaultHighlighted = this.state.regions.findIndex(r => r.highlighted && r.geos.includes(geo.rsmKey)) > -1;
        const isRegionSelected = this.state.selectedRegion && this.state.selectedRegion.geos.includes(geo.rsmKey);
        const isGeoSelected = (isDefaultHighlighted && isRegionSelected) || geo.rsmKey === this.state.hoveredMarkerGeoKey;

        return {
            default: isGeoSelected ? selectedGeoConfig : isDefaultHighlighted ? highlightedGeoConfig : defaultGeoConfig,
            hover: isGeoSelected ? selectedGeoConfig : isDefaultHighlighted ? selectedGeoConfig : defaultGeoConfig,
        }
    }

    getGeography(geo) {
        return (
            <Geography
                className={geo.rsmKey}
                key={geo.rsmKey}
                geography={geo}
                onClick={(e) => this.handleGeographyClick(geo)}
                style={this.getGeographyStyle(geo)}
                fill="white"
                stroke="white"
                strokeLinejoin="round"
            />
        );
    }

    handleMarkerMouseEnter = (tgtGeo) => {
        //this.setState({ hoveredMarkerGeoKey: tgtGeo && tgtGeo.className.baseVal.split(' ')[1] })
    }

    mapHabitatItems = (habitatItems) => {
        if (!habitatItems || Array.isArray(habitatItems) === false)
            return {};
        return habitatItems.reduce((a, key) => Object.assign(a, { [key]: true }), {});
    }

    getMarkers() {
        return this.state.flatMarkers
            .map(marker => {
                return (
                    <Marker
                        key={`${marker.title}-${marker.x}-${marker.y}`}
                        visible={this.isMarkerVisible(marker)}
                        solar={marker.solar}
                        regionId={marker.regionId}
                        id={marker.id}
                        x={marker.x}
                        y={marker.y}
                        radius={this.state.markersRadius}
                        type={marker.type}
                        solidColor={marker.solidColor}
                        title={marker.title}
                        items={marker.items}
                        isOpened={marker.id === this.state.openedMarker?.id}
                        onClick={this.handleMarkerClick}
                        onMarkerMouseEnter={this.handleMarkerMouseEnter}
                        directItems={this.state.mappedDirectItems}
                        indirectItems={this.state.mappedIndirectItems}
                        modalData={this.state.markerModalData}
                    />
                )
            });
    }

    onLegendItemToggleChange(title, value) {
        const legend = [...this.state.legend];
        const item = legend.find(i => i.title === title);

        if (item) {
            item.isSelected = value;
        }

        this.setState({ legend });
    }

    isMarkerVisible(marker) {
        let visible = 0;

        const legendItem = this.state.legend.find(i => i.toggles === marker.type);
        if (legendItem) {
            visible += legendItem.isSelected;
        }

        if (marker.items) {
            marker.items.forEach(i => {
                const legendItem = this.state.legend.find(l => l.toggles === i.type);
                if (legendItem)
                    visible += legendItem.isSelected;
            });
        } else { 
            return marker.visible && (this.state.selectedMarker === null || this.state.selectedMarker.id === marker.id);
        }

        const solar = this.state.legend.find(l => l.toggles === MarkerTypes.solar);
        if (solar && marker.solar) {
            visible += solar.isSelected;
        }

        return !!visible;
    }

    projection() {
        return geoMercator().scale(MAP_SCALE);
    }

    handleSpringStart = () => {
        const selectedMarker = {...this.state.selectedMarker};
        this.setState({ openedMarker: selectedMarker });
    }

    handleSpringRest = () => {}

    render() {
        return (
            <MapContainer>
                <ComposableMap
                    projection={this.projection()}
                    width={MAP_MAX_WIDTH}
                    height={MAP_MAX_HEIGHT}
                    style={{
                        width: "100%",
                        height: window.innerHeight - 6,
                    }}
                >
                    <Spring
                        from={initialPosition}
                        to={this.state.position}
                        onStart={this.handleSpringStart}
                        onRest={this.handleSpringRest}
                        immediate={this.state.bypass}
                        config={config.fast}
                    >
                        {(styles) => (
                            <ZoomableGroup
                                zoom={styles.zoom}
                                center={styles.coordinates}
                                onMoveStart={this.handleMoveStart}
                                onMoveEnd={this.handleMoveEnd}
                            >
                                <SVGDropShadow>
                                    <Geographies geography={geographies}>
                                        {({ geographies, projection }) =>
                                            geographies.map(this.getGeography)
                                        }
                                    </Geographies>
                                </SVGDropShadow>

                                {this.getMarkers()}

                            </ZoomableGroup>
                        )}
                    </Spring>
                </ComposableMap>
                {this.state.selectedMarker && (
                    <FactoryInfo
                        title={this.state.selectedMarker.title}
                        data={this.state.selectedRegion.info}
                    />
                )}
                <ZoomButtons
                    zoomIn={this.handleZoomIn}
                    zoomOut={this.handleZoomOut}
                    zoomReset={this.handleZoomReset}
                />
            </MapContainer>
        );
    }
}

export default PolyMap;