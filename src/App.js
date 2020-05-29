import React from "react"

import 'antd/es/card/style/css';
import 'antd/es/row/style/css';
import 'antd/es/col/style/css';
import 'antd/es/modal/style/css';
import 'antd/es/button/style/css';
import 'antd/es/popover/style/css';
import "antd/es/radio/style/css";
import "antd/es/checkbox/style/css";
import "antd/es/collapse/style/css";
import "antd/es/switch/style/css";
import { Row, Col } from "antd";

import './App.scss';

import PolyMap from './components/Map';
import LegendFull from "./components/legendFull/LegendFull";


import defaultMarkers from './markers';
import defaultLegend from './legend';
import defaultRegions from './regions';


const flatMarkers = [];

for (const regionId of Object.keys(defaultMarkers)) {
	const rMarkers = defaultMarkers[regionId];

	for (const marker of rMarkers) {
		flatMarkers.push({ ...marker, regionId: parseInt(regionId) })
	}
} 


const App = () => (
	<div className={"App"}>
		<div style={{maxWidth: 1420, margin: "auto"}}>
			<Row>
				<Col sm={24} xl={13}>
					<h1>Наша география 2.0</h1>
					<p>
						Четыре года назад редакция «Северной широты» впервые собрала на одной карте всё (ну или почти всё), чем богат «Полиметалл» — фабрики, рудники, карьеры, геологоразведочные проекты и месторождения. 
					</p>
					<p>
						<small>За прошедшее с тех пор время многое изменилось, компания растет и развивается. Только представьте, у нее в два раза больше лицензий на геологоразведку, чем в 2016 году — около 150. Все они и на карту не вошли — мы показали часть.</small>
					</p>
					<p>
						<small>А еще на нашей карте появились значки проектов развития. Это точки роста компании — те объекты, которые «Полиметалл» планирует развивать в ближайшем будущем.</small>
					</p>
				</Col>
			</Row>
		</div>
		<PolyMap 
			defaultLegend={defaultLegend} 
			defaultMarkers={defaultMarkers}
			defaultRegions={defaultRegions}
			flatMarkers={flatMarkers}
		/>
		<LegendFull
			regions={defaultRegions}
			flatMarkers={flatMarkers}
		/>
	</div>
);

export default App;

