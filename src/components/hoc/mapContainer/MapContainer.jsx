import React from 'react';
import styles from "./MapContainer.module.scss";

export const getMapContainerScrollTopPosition = () => {
    const mapContainer = document.querySelector('.' + styles.MapContainer);
    
    return (
        mapContainer ? window.scrollY + mapContainer.getBoundingClientRect().top : 0
    );
}

const MapContainer = ({ children }) => {
    return (
        <div className={styles.MapContainer}>
            {children}
        </div>
    );
}

export default MapContainer;