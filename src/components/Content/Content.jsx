import React from 'react';
import { Row, Col } from 'antd';
import Icon from "../helpers/icon/Icon";
import { MarkerTypes } from "../../markers";
import styles from "./Content.module.scss";

const Content = ({ items, maxWidth }) => {
    return (
        <Row style={{maxWidth: maxWidth ? maxWidth : 'auto', margin: 0}} gutter={[0,8]}>
        {
            items.map(item => {
                switch (item.type) {
                    case MarkerTypes.h:
                        return (
                            <Col key={'col-' + item.text} span={24}>
                                <h4 className={styles.H4} style={{margin: 0}}>{item.text}</h4>
                            </Col>
                        );
                    default:
                        return (
                            <Col key={'col-' + item.text} span={24}>
                                <Icon size={[30, 30]} name={item.type} style={{float: 'left'}} />
                                <div style={{verticalAlign: 'middle', marginLeft: '42px'}}>{item.text}</div>
                            </Col>
                        );
                }
            })
        }
</Row>
    );
}
 
export default Content;