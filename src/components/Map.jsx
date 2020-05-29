import React from "react";
import { ComposableMap, Geographies, Geography, ZoomableGroup } from "react-simple-maps";
import { geoPath, geoMercator } from "d3-geo";
import { config } from "react-spring";
import { Spring } from 'react-spring/renderprops';

import SVGDropShadow from "./hoc/svgDropShadow/SVGDropShadow";
import MapContainer from "./hoc/MapContainer";
import Info from "./info/Info";
import Marker from "./marker/Marker";
import Legend from "./legend/Legend";
import ZoomButtons from "./zoombuttons/ZoomButtons";


const MAP_MAX_WIDTH = window.innerWidth;
const MAP_MAX_HEIGHT = window.innerHeight;
const MAP_CENTER_COORDS = [58, 33];


const geoUrl = process.env.PUBLIC_URL + "map.json";

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



class PolyMap extends React.Component {

    state = {
        legend: this.props.defaultLegend,
        markers: this.props.defaultMarkers,
        flatMarkers: this.props.flatMarkers,
        regions: this.props.defaultRegions,
        selectedRegion: null,
        position: {
            coordinates: MAP_CENTER_COORDS,
            zoom: 1
        },
        bypass: false,
        markersRadius: 4
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
    }

    selectRegionById(regionId) {
        const region = this.state.regions.find(r => r.id === regionId) || null;
        this.setState({ selectedRegion: region });
    }

    selectRegionByGeoId(geoId) {
        const region = this.state.regions.find(r => r.geos.includes(geoId)) || null;
        this.setState({ selectedRegion: region });
    }

    handleGeographyClick(geography) {
        const path = geoPath().projection(this.projection());
        const centroid = this.projection().invert(path.centroid(geography));

        const newPosition = {
            coordinates: centroid,
            zoom: 4,
        };

        this.setState({ position: newPosition, bypass: false });

        this.selectRegionByGeoId(geography.rsmKey);
    }

    handleMarkerClick([x, y], regionId) {
        this.setState({
            position: {
                coordinates: [x, y],
                zoom: 8
            },
            bypass: false
        });

        this.selectRegionById(regionId);
    }

    getGeographyStyle(geo) {
        const isDefaultHighlighted = this.state.regions.findIndex(r => r.highlighted && r.geos.includes(geo.rsmKey)) > -1;
        const isRegionSelected = this.state.selectedRegion && this.state.selectedRegion.geos.includes(geo.rsmKey);
        const isGeoSelected = isDefaultHighlighted && isRegionSelected;

        return {
            default: isGeoSelected ? selectedGeoConfig : isDefaultHighlighted ? highlightedGeoConfig : defaultGeoConfig,
            hover: isGeoSelected ? selectedGeoConfig : isDefaultHighlighted ? selectedGeoConfig : defaultGeoConfig,
        }
    }

    getGeography(geo, projection) {
        return (
            <Geography
                className={geo.rsmKey}
                key={geo.rsmKey}
                geography={geo}
                projection={projection}
                onClick={(e) => this.handleGeographyClick(geo)}
                style={this.getGeographyStyle(geo)}
                fill="white"
                stroke="white"
                strokeLinejoin="round"
            />);
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
                        x={marker.x}
                        y={marker.y}
                        radius={4}
                        type={marker.type}
                        solidColor={marker.solidColor}
                        title={marker.title}
                        items={marker.items}
                        onClick={this.handleMarkerClick}
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
        const legendItem = this.state.legend.find(i => i.toggles === marker.type);

        if (legendItem) {
            return legendItem.isSelected;
        }

        return false;
    }

    projection() {
        return geoMercator()
            .scale(600)
    }

    render() {
        return (
            <MapContainer>
                <Legend items={this.state.legend} onToggleChanged={this.onLegendItemToggleChange} />
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
                        from={{
                            zoom: 1,
                            coordinates: MAP_CENTER_COORDS
                        }}
                        to={{
                            zoom: this.state.position.zoom,
                            coordinates: this.state.position.coordinates
                        }}
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
                                    <Geographies geography={geoUrl} disableOptimization>
                                        {({ geographies, projection }) =>
                                            geographies.map(geo => this.getGeography(geo, projection))
                                        }
                                    </Geographies>
                                </SVGDropShadow>

                                {this.getMarkers()}

                            </ZoomableGroup>
                        )}
                    </Spring>
                </ComposableMap>
                {this.state.selectedRegion ? <Info title={this.state.selectedRegion.name} data={this.state.selectedRegion.info} /> : null}

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