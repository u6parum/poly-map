import React from 'react';
import { Row, Col, Card } from 'antd';
import Icon from '../helpers/icon/Icon';
import styles from './Info.module.scss';


const Info = ({ title, data }) => {
    return (
        <Card
            className={styles.Info}
            bodyStyle={{
                padding: '20px'
            }}
            cover={<img style={{height: 200, width: 320}} alt={data.picture} src={data.picture} />}
        >
            <Row>
                <Col span={24} className={styles.ColHeader}>
                    <h1>{title}</h1>
                    <Icon name={data.icon} />
                </Col>
                <Col span={24} className={styles.Col}>
                    <h3>Климат</h3>
                    <span>{data.climate}</span>
                </Col>
                <Col span={24} className={styles.Col}>
                    <h3>Особенность</h3>
                    <span>{data.specific}</span>
                </Col>
                <Col span={24} className={styles.Col}>
                    <h3>Зима</h3>
                    <span>{data.winter}</span>
                </Col>
                <Col span={24} className={styles.Col}>
                    <h3>Лето</h3>
                    <span>{data.summer}</span>
                </Col>
            </Row>
        </Card>
    );
}

export default Info;