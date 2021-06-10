import React from "react";

import "antd/es/card/style/css";
import "antd/es/row/style/css";
import "antd/es/col/style/css";
import "antd/es/modal/style/css";
import "antd/es/button/style/css";
import "antd/es/popover/style/css";
import "antd/es/radio/style/css";
import "antd/es/checkbox/style/css";
import "antd/es/collapse/style/css";
import "antd/es/switch/style/css";

import "./App.scss";

import Head from "./components/Head";
import PolyMap from "./components/Map";

import defaultMarkers from "./markers";
import defaultLegend from "./legend";
import defaultRegions from "./regions";

const App = () => (
  <div className={"App"}>
    <Head />
    <PolyMap
      defaultLegend={defaultLegend}
      defaultMarkers={defaultMarkers}
      defaultRegions={defaultRegions}
    />
  </div>
);

export default App;
