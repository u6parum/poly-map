import React from 'react';
import { Collapse, Row, Col } from "antd";
import { DownOutlined } from "@ant-design/icons";
import styles from "./LegendFull.module.scss";
import Icon from '../helpers/icon/Icon';
import Masonry from '../hoc/masonry/Masonry';
import { MarkerTypes } from '../../markers';
import Content from '../Content/Content';
import Title from '../Title/Title';
import { flatMarkersList } from "../../markers";


const { Panel } = Collapse;


const LegendFull = ({ defaultRegions, defaultMarkers }) => {

    const unique = (values) => values.filter((v, i) => values.indexOf(v) === i);

    const flatMarkers = flatMarkersList(defaultMarkers);
    const runningMarkers = flatMarkers.filter(m => m.type === MarkerTypes.running);
    const projectMarkers = flatMarkers.filter(m => m.type === MarkerTypes.project);

    const running = unique(runningMarkers
        .map(m => defaultRegions.find(reg => reg.id === m.regionId)))
        .map(r => (
            <div key={r.id}>
                <h2 className={styles.RegionHeader}>{r.name}</h2>
                {
                    runningMarkers
                    .filter(rm => rm.regionId === r.id)
                    .map(rm => (
                        <div key={`${rm.title}_${rm.x}_${rm.y}`} style={{ marginTop: 16 }}>
                            <Title text={rm.title} solar={rm.solar} />
                            <Content items={rm.items} maxWidth={400} />
                        </div>
                    ))
                }
            </div>
        ));

    const project = unique(projectMarkers
        .map(m => defaultRegions.find(reg => reg.id === m.regionId)))
        .map(r => (
            <div key={r.id}>
                <h2 className={styles.RegionHeader}>{r.name}</h2>
                {
                    projectMarkers
                    .filter(rm => rm.regionId === r.id)
                    .map(rm => (
                        <div key={`${rm.title}_${rm.x}_${rm.y}`} style={{ marginTop: 16 }}>
                            <Title text={rm.title} solar={rm.solar} />
                            <Content items={rm.items} maxWidth={400} />
                        </div>
                    ))
                }
            </div>
        ));


    const geosearch = flatMarkers
        .filter(m => m.type === MarkerTypes.geosearch)
        .map(rm => (
            <Col key={`${rm.title}_${rm.x}_${rm.y}`} sm={24} md={12} lg={6}>
                <p className={styles.GeoSearchP}>{rm.title}</p>
            </Col>
        ));




    return (
        <section className={styles.Legend}>
            <Row>
                <Col sm={24} lg={{ span: 20, offset: 2 }}>
                    <Collapse
                        className={styles.LSections}
                        defaultActiveKey={['1', '2', '3']}
                        bordered={false}
                        expandIcon={({ isActive }) => <DownOutlined rotate={isActive ? 180 : 0} style={{ fontSize: 25, color: '#BDBDBD' }} />}
                        expandIconPosition={"right"}
                    >
                        <Panel
                            className={styles.Section}
                            header={
                                <div className={styles.SectionHeader}>
                                    <div className={styles.SectionIcon}><Icon name="office" size={[40, 40]} /></div>
                                    <h1>Действующие предприятия</h1>
                                </div>
                            }
                            key="1"
                        >
                            <Masonry>
                                {running}
                            </Masonry>
                        </Panel>
                        <Panel
                            className={styles.Section}
                            header={
                                <div className={styles.SectionHeader}>
                                    <div className={styles.SectionIcon}><Icon name="project" size={[40, 40]} /></div>
                                    <h1>Проекты развития</h1>
                                </div>
                            }
                            key="2"
                        >
                            <Masonry>
                                {project}
                            </Masonry>
                        </Panel>
                        <Panel
                            className={styles.Section}
                            header={
                                <div className={styles.SectionHeader}>
                                    <div className={styles.SectionIcon}><Icon name="geosearch" size={[40, 40]} /></div>
                                    <h1>Геологоразведочные проекты</h1>
                                </div>
                            }
                            key="3"
                        >
                            <Row>
                                {geosearch}
                            </Row>
                        </Panel>
                    </Collapse>
                </Col>
            </Row>
        </section>
    );
}

export default LegendFull;