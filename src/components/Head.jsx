import React from "react";
import gsVideo from "../assets/video/back_video.mp4";
import styles from "./styles.module.scss";

const Head = () => {
  return (
    <div className={styles.banner}>
      <video className={styles.bannerVideo} autoPlay loop muted>
        <source src={gsVideo} type="video/mp4" />
      </video>
      <div className={styles.bannerHeader}>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-xl-12">
              <h1>Биоразнообразие регионов Полиметалла</h1>
              <p>
                Сохранение биоразнообразия – разнообразия видов животных и
                растений, ландшафтов и экосистем – актуальнейшая задача
                современности. Сохранение биоразнообразия не является просто
                новым направлением охраны природы, это неотъемлемая составная
                часть концепции перехода человечества на принципы устойчивого
                развития
              </p>
              <a type="button" className={styles.gotoMapBtn} href="#polymap">
                Карта
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Head;
