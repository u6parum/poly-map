import React from 'react';
import styles from "./MapContainer.module.scss";

const MapContainer = ({ children }) => {
    return (
        <div className={styles.MapContainer}>
            {children}
        </div>
    );
}

export default MapContainer;