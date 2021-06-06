import React from 'react';
import { Button } from 'antd';
import styles from "./ZoomButtons.module.scss";


const ZoomButtons = React.memo(({ zoomIn, zoomOut, zoomReset }) => {
    return (
        <div className={styles.ZoomButtons}>
            <Button className={styles.Plus} onClick={zoomIn}> </Button>
            <Button className={styles.Minus} onClick={zoomOut}> </Button>
            <Button className={styles.Reset} onClick={zoomReset}> </Button>
        </div>
    );
});

export default ZoomButtons;