import React, { useCallback, useMemo } from 'react';
import { Collapse, Row, Col } from "antd";
import { DownOutlined } from "@ant-design/icons";
import styles from "./LegendFull.module.scss";
import Icon from '../helpers/icon/Icon';
import Masonry from '../hoc/masonry/Masonry';
import { MarkerTypes } from '../../utils';
import Content from '../Content/Content';
import Title from '../Title/Title';
import { flatMarkersList } from "../../markers";


const { Panel } = Collapse;


const LegendFull = React.memo(({ defaultRegions, defaultMarkers, itemClick }) => {

    const unique = useCallback((values) => values.filter((v, i) => values.indexOf(v) === i), []);

    const flatMarkers = useMemo(() => flatMarkersList(defaultMarkers), [defaultMarkers]);
    const runningMarkers = useMemo(() => flatMarkers.filter(m => m.type === MarkerTypes.running), [flatMarkers]);
    const projectMarkers = useMemo(() => flatMarkers.filter(m => m.type === MarkerTypes.project), [flatMarkers]);

    const running = useMemo(() => unique(runningMarkers
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
                            <Content items={rm.items} maxWidth={400} clickable marker={rm} selectMarker={itemClick} />
                        </div>
                    ))
                }
            </div>
        )), [defaultRegions, itemClick, unique, runningMarkers]);

    const project = useMemo(() => unique(projectMarkers
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
                            <Content items={rm.items} maxWidth={400} clickable marker={rm} selectMarker={itemClick} />
                        </div>
                    ))
                }
            </div>
        )), [defaultRegions, itemClick, unique, projectMarkers]);


    const geosearch = useMemo(() => flatMarkers
        .filter(m => m.type === MarkerTypes.geosearch)
        .map(rm => (
            <Content key={rm.id} contentType="itemSimple" clickable marker={rm} selectMarker={itemClick} />
        )), [itemClick, flatMarkers]);




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
                            <Row gutter={16}>
                                {geosearch}
                            </Row>
                        </Panel>
                    </Collapse>
                </Col>
            </Row>
        </section>
    );
});

export default LegendFull;