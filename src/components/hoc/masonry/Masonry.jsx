import React from 'react';
import styles from './Masonry.module.scss';

const Masonry = ({ children, alignHeight = false }) => {

    const id = Math.random().toString(36).substring(7);

    React.useEffect(() => {
        const numCols = 3;
        const colHeights = Array(numCols).fill(0);
        const container = document.getElementById(id);
        Array.from(container.children).forEach((child, i) => {
            const order = i % numCols;
            child.style.order = order;
            if (alignHeight)
                colHeights[order] += parseFloat(child.clientHeight);
        });

        if (alignHeight)
            container.style.height = Math.max(...colHeights) + 'px';
    });

    return (
        <div id={id} className={styles.Masonry}>
            {children}
        </div>
    );
}
 
export default Masonry;