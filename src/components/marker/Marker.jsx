import React, { useState } from 'react';
import { Popover } from 'antd';
import { Marker } from 'react-simple-maps';
import Icon from "../helpers/icon/Icon";
import { MarkerColors, MarkerTypes } from "../../markers";
import Content from '../Content/Content';
import Title from '../Title/Title';

const MapMarker = ({ x, y, type, title, solar, regionId, onClick, radius = 10, items = [], visible = false }) => {

    const [isHovered, setHovered] = useState(false);

    const marker = (
        <Marker
            display={visible ? '' : 'none'}
            coordinates={[x, y]} 
            cursor="pointer" 
            onMouseEnter={() => setHovered(true)} 
            onMouseLeave={() => setHovered(false)}
            onClick={(e) => onClick([x, y], regionId)}
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