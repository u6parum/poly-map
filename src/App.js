import React from "react";

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

import './App.scss';

import PolyMap from './components/Map';
import LegendFull from "./components/legendFull/LegendFull";

import defaultMarkers from './markers';
import defaultLegend from './legend';
import defaultRegions from './regions';


const App = () => (
	<div className={"App"}>
		<div className="container">
			<div className="row">
				<div className="col-sm-12 col-xl-12">
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
				</div>
			</div>
		</div>
		<PolyMap 
			defaultLegend={defaultLegend} 
			defaultMarkers={defaultMarkers}
			defaultRegions={defaultRegions}
		/>
		<div className="container-fluid">
			<div className="row">
				<div className="col-12">
					<LegendFull
						defaultRegions={defaultRegions}
						defaultMarkers={defaultMarkers}
					/>
				</div>
			</div>
		</div>
	</div>
);

export default App;

