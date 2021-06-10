import React from 'react';
import { Row, Col } from 'antd';
import Icon from "../helpers/icon/Icon";
import { MarkerTypes } from "../../utils";
import styles from "./Content.module.scss";

import { getMapContainerScrollTopPosition } from "../hoc/mapContainer/MapContainer";

const Content = ({ contentType, items, maxWidth, clickable, marker, selectMarker }) => {

    let onItemClick = () => {
        if (!clickable) return;

        const mapOffset = getMapContainerScrollTopPosition();

        window.scrollTo({
            top: mapOffset,
            left: 0,
            behavior: 'smooth'
        });

        selectMarker(marker);
    };

    let itemClassName = styles.item;
    if (clickable) {
        itemClassName = [styles.item, styles.clickable].join(' ');
    }

    if (contentType === "itemSimple") {
        return (
            <Col key={'col-' + marker.title + '-' + marker.x + '-' + marker.y} span={24} className={itemClassName} sm={24} md={12} lg={6} onClick={(e) => onItemClick()}>
                <p className={styles.GeoSearchP}>{marker.title}</p>
            </Col>
        );
    }

    return (
        <Row style={{ maxWidth: maxWidth ? maxWidth : 'auto', margin: 0 }} gutter={[0, 8]}>
            {
                items.map(item => {
                    return (
                        <Col key={'col-' + item.text} span={24} className={itemClassName} onClick={(e) => onItemClick()}>
                            {
                                item.type === MarkerTypes.h ?
                                    <h4 className={styles.H4} style={{ margin: 0 }}><span>{item.text}</span></h4>
                                    :
                                    <>
                                        <Icon size={[30, 30]} name={item.type} />
                                        <div style={{ marginLeft: 12 }}><span>{item.text}</span></div>
                                    </>
                            }
                        </Col>
                    );
                })
            }
        </Row>
    );
}

export default Content;