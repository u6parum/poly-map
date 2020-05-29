import React from 'react';

const SVGDropShadow = ({ children }) => {
    return (
        <>
            <filter id="dropshadow">
                <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#ccc"/>
            </filter>
            { children }
        </>
    );
}
 
export default SVGDropShadow;