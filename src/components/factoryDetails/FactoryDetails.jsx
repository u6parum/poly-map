import React, { useCallback, useState } from "react";
import { Modal } from "antd";

import animal from "../../assets/icons/animal.svg";
import bird from "../../assets/icons/bird.svg";
import fish from "../../assets/icons/fish.svg";
import plant from "../../assets/icons/plant.svg";
import factory from "../../assets/icons/processing.svg";

import styles from "./styles.module.scss";
import Scrollbars from "react-custom-scrollbars";

const FactoryDetailsComponent = ({
  centeredText,
  indirectItems,
  directItems,
  modalData,
}) => {
  const [showDetails, setShowDetails] = useState(false);
  const [showDetailsType, setShowDetailsType] = useState("");
  const [detailsSelectedData, setDetailsData] = useState();

  const getModalData = (markerType, data) => {
    if (!data || !markerType) return null;

    const entries = Object.entries(data);
    const dd = {};
    entries.forEach((g) => {
      if (Array.isArray(dd[g[0]])) {
        dd[g[0]].push([...g[1][markerType]]);
      } else {
        dd[g[0]] = [...g[1][markerType]];
      }
    });
    return dd;
  };

  const handleIndirectItemClick = useCallback((e) => {
    setShowDetailsType("indirect");
    setShowDetails(true);
    setDetailsData(
      getModalData(
        e.target.attributes["type"].value,
        modalData.indirectInfluence
      )
    );
  }, [modalData]);

  const handleDirectItemClick = useCallback((e) => {
    setShowDetailsType("direct");
    setShowDetails(true);
    setDetailsData(
      getModalData(e.target.attributes["type"].value, modalData.directInfluence)
    );
  }, [modalData]);

  const renderGroupArticles = (data) => {
    if (!data || Array.from(data).length === 0) return <p style={{ marginLeft: 24 }}>НЕ ЗАФИКСИРОВАНО</p>;
    return data.map((article) => (
      <article key={article.title}>
        <p>
          <b>{article.title}</b> - {article.description}
        </p>
        <img src={article.photo} alt={article.title} />
      </article>
    ));
  };

  return (
    <svg
      className={styles.radius}
      viewBox="0 0 500 500"
      height="500"
      width="500"
      x={-200}
      y={-200}
    >
      <defs id="defs6">
        <clipPath patternUnits="userSpaceOnUse" id="clip">
          <circle cx="2%" cy="2%" r="6" ></circle>
        </clipPath>
        <filter filterUnits="objectBoundingBox" id="invert" x="0" y="0" height="1" width="1">
          {/* <feFlood flood-color="rgb(255,255,255)" result="background" /> */}
          <feBlend mode="normal" in="SourceGraphic" in2="background" />
          <feComponentTransfer>
              <feFuncR type="table" tableValues="1 0"/>
              <feFuncG type="table" tableValues="1 0"/>
              <feFuncB type="table" tableValues="1 0"/>
          </feComponentTransfer>
        </filter>
      </defs>
      <filter id="dropshadow2" x="-2" y="-2" width="200" height="200">
        <feDropShadow dx="0" dy="0" stdDeviation="1" floodColor="#ccc" />
      </filter>
      <path
        filter="url('#dropshadow2')"
        id="curve1"
        d="M 269 188 A 70 70 320 1 1 212 131"
        stroke="white"
        strokeWidth={0.3}
        fill="rgba(255,0,255,0)"
      />
      <path
        id="curve2"
        d="M 212 131 A 70 70 320 0 1 269 188"
        strokeWidth={0.3}
        fill="transparent"
      />
      <path
        filter="url('#dropshadow2')"
        id="curve3"
        d="M 230 218 A 35 35 320 1 1 197 165"
        stroke="white"
        strokeWidth={0.3}
        fill="rgba(255,0,255,0)"
      />
      <path
        id="curve4"
        d="M 197 165 A 35 35 320 0 1 230 218"
        strokeWidth={0.3}
        fill="transparent"
      />
      <circle
        filter="url('#dropshadow2')"
        cx="200"
        cy="200"
        r="18"
        fill="transparent"
        stroke="white"
        strokeWidth={1}
      />
      <image id="factory" xlinkHref={factory} x="194" y="194" width="12" height="12" />
      <text>
        <textPath
          filter="url('#dropshadow2')"
          fontSize="7px"
          fill="white"
          alignmentBaseline="middle"
          startOffset="1.5%"
          xlinkHref="#curve2"
        >
          косвенное воздействие
        </textPath>
      </text>
      <text>
        <textPath
          filter="url('#dropshadow2')"
          fontSize="7px"
          fill="white"
          alignmentBaseline="middle"
          startOffset="2.5%"
          xlinkHref="#curve4"
        >
          прямое воздействие
        </textPath>
      </text>
      {indirectItems && (
        <>
          {indirectItems.animal && (
            <image
              id="animal"
              x="170"
              y="128"
              width="12"
              height="12"
              xlinkHref={animal}
              type="animal"
              onClick={handleIndirectItemClick}
            />
          )}
          {indirectItems.bird && (
            <image
              x="125"
              y="200"
              width="12"
              height="12"
              xlinkHref={bird}
              type="bird"
              onClick={handleIndirectItemClick}
            />
          )}
          {indirectItems.fish && (
            <image
              x="180"
              y="262"
              width="12"
              height="12"
              xlinkHref={fish}
              type="fish"
              onClick={handleIndirectItemClick}
            />
          )}
          {indirectItems.plant && (
            <image
              x="254"
              y="230"
              width="12"
              height="12"
              xlinkHref={plant}
              type="plant"
              onClick={handleIndirectItemClick}
            />
          )}
        </>
      )}

      {directItems && (
        <>
          {directItems.animal && (
            <image
              x="173"
              y="168"
              width="10"
              height="10"
              xlinkHref={animal}
              type="animal"
              onClick={handleDirectItemClick}
            />
          )}
          {directItems.bird && (
            <image
              x="160"
              y="200"
              width="10"
              height="10"
              xlinkHref={bird}
              type="bird"
              onClick={handleDirectItemClick}
            />
          )}
          {directItems.fish && (
            <image
              x="180"
              y="226"
              width="10"
              height="10"
              xlinkHref={fish}
              type="fish"
              onClick={handleDirectItemClick}
            />
          )}
          {directItems.plant && (
            <image
              x="212"
              y="225"
              width="10"
              height="10"
              xlinkHref={plant}
              type="plant"
              onClick={handleDirectItemClick}
            />
          )}
        </>
      )}

      {showDetails && (
        <Modal
          title={
            showDetailsType === "direct"
              ? "В ЗОНЕ ПРЯМОГО ВОЗДЕЙСТВИЯ"
              : "В ЗОНЕ КОСВЕННОГО ВОЗДЕЙСТВИЯ"
          }
          visible={showDetails}
          onOk={() => setShowDetails(false)}
          onCancel={() => setShowDetails(false)}
          width={800}
          footer={null}
          className={styles.modal}
        >
          <Scrollbars style={{ width: 778, height: 600 }}>
            <section id="disappear">
              <h1>Исчезающие</h1>
              {renderGroupArticles(detailsSelectedData?.EN)}
            </section>
            <section id="disappear_warning">
              <h1>Находящиеся на грани исчезновения</h1>
              {renderGroupArticles(detailsSelectedData?.CR)}
            </section>
            <section id="rare">
              <h1>Редкие</h1>
              {renderGroupArticles(detailsSelectedData?.CD)}
            </section>
            <section id="danger">
              <h1>Уязвимые</h1>
              {renderGroupArticles(detailsSelectedData?.VU)}
            </section>
            <section id="danger_warning">
              <h1>Близкие к уязвимому положению</h1>
              {renderGroupArticles(detailsSelectedData?.NT)}
            </section>
            <section id="no_danger">
              <h1>Находящиеся под наименьшей угрозой</h1>
              {renderGroupArticles(detailsSelectedData?.LC)}
            </section>
          </Scrollbars>
        </Modal>
      )}
    </svg>
  );
};

export default FactoryDetailsComponent;
