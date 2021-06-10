import React from 'react';
import { Row, Col, Card } from 'antd';
import styles from './Info.module.scss';


const FactoryInfo = ({ title, data }) => {
    return (
        <Card
            className={styles.Info}
            bodyStyle={{
                padding: '20px'
            }}
            cover={<img style={{height: 200, width: "100%"}} alt={data.picture} src={data.picture} />}
        >
            <Row>
                <Col span={24} className={styles.ColHeader} style={{ borderBottom: 'none', padding: 0 }}>
                    <h1>{title}</h1>
                </Col>
            </Row>
        </Card>
    );
}

export default FactoryInfo;