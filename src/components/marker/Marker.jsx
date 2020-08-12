import React from 'react';
import { Popover } from 'antd';
import { Marker } from 'react-simple-maps';
import Icon from "../helpers/icon/Icon";
import { MarkerColors, MarkerTypes } from "../../markers";
import Content from '../Content/Content';
import Title from '../Title/Title';

const MapMarker = ({ id, x, y, type, title, solar, regionId, onClick, isOpened, radius = 10, items = [], visible = false }) => {

    const [isHovered, setHoveredState] = React.useState(false);

    const marker = (
        <Marker
            display={visible ? '' : 'none'}
            coordinates={[x, y]} 
            cursor="pointer"
            onMouseEnter={(e) => setHoveredState(true)}
            onMouseLeave={(e) => setHoveredState(false)}
            onClick={(e) => onClick([x, y], regionId, id)}
        >
            {
                radius < 4 ?
                    <circle r={radius} fill={MarkerColors[type]} /> :
                    <>
                        <Icon svgImage size={[radius * 2, radius * 2]} name={type} />
                        { solar ? <Icon svgImage name="solar" size={[radius * 1.5, radius * 1.5]} x={-radius * 1.5} y={-radius * 1.5} /> : null }
                    </>
            }
        </Marker>
    );

    const content = (<Content items={items} maxWidth={300} />);

    let rest = {};
    if (type === MarkerTypes.office || type === MarkerTypes.running || type === MarkerTypes.project) {
        rest = {
            arrowPointAtCenter: true,
            placement: "rightTop"
        }
    }


    return (
        <Popover
            trigger="hover"
            visible={isOpened || isHovered}
            title={
                type === MarkerTypes.geosearch || items.length === 0 ? null : <Title text={title} solar={solar} />
            } 
            content={type === MarkerTypes.geosearch || items.length === 0 ? <b>{title}</b> : content} 
            {...rest}
        >
            {marker}
        </Popover>
    );
}

export default React.memo(MapMarker);