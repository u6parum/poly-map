import React from 'react';
import { Row, Col, Card } from 'antd';
import { ArrowDownOutlined } from "@ant-design/icons";
import LegendItem from './item/LegendItem';
import styles from './Legend.module.scss';


const Legend = ({ items = [], title = "Легенда", onToggleChanged }) => {

    const [collapsed, setCollapsed] = React.useState(true);

    const legendItems = items.map(item => (
        <LegendItem 
            key={item.title} 
            title={item.title} 
            toggle={item.toggle} 
            visible={item.visible} 
            icon={item.icon} 
            checked={item.isSelected}
            onChange={onToggleChanged}
        />
    ));

    return (
        <Card
            className={styles.Legend}
            bodyStyle={{
                padding: 0,
            }}
        >
            <Row>
                <Col onClick={() => setCollapsed(!collapsed)} span={24} className={`${styles.ColHeader} ${collapsed ? styles.NoBorder : ''}`}>
                    <h1>{title}</h1><ArrowDownOutlined rotate={collapsed ? 0 : 180} />
                </Col>
                <Col className={`${styles.Frame} ${collapsed ? styles.Hidden : ''}`}>
                    <Row className={styles.Items}>
                    {
                        legendItems.map(item => (
                            <Col 
                                key={'col-' + item.key} 
                                span={24} 
                                className={styles.Col}
                            >
                                {item}
                            
                            </Col>
                        ))
                    }
                    </Row>
                </Col>
            </Row>
        </Card>
    );
}
 
export default Legend;