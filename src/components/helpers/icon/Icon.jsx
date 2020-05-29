import React from 'react';

import rainy from '../../../assets/icons/rainy.svg';
import conflict from '../../../assets/icons/conflict.svg';
import exotic from '../../../assets/icons/exotic.svg';
import extreme from '../../../assets/icons/extreme.svg';
import sunny from '../../../assets/icons/sunny.svg';
import surov from '../../../assets/icons/surov.svg';
import windy from '../../../assets/icons/windy.svg';
import zontik from '../../../assets/icons/zontik.svg';
import career from '../../../assets/icons/career.svg';
import fabric from '../../../assets/icons/fabric.svg';
import geosearch from '../../../assets/icons/geosearch.svg';
import mining from '../../../assets/icons/mining.svg';
import office from '../../../assets/icons/office.svg';
import project from '../../../assets/icons/project.svg';
import running from '../../../assets/icons/running.svg';
import solar from '../../../assets/icons/solar.svg';
import caret from '../../../assets/icons/caret.svg';

export const IconType = {
    'rainy': 'rainy',
    'conflict': 'conflict',
    'exotic': 'exotic',
    'extreme': 'extreme',
    'sunny': 'sunny',
    'surov': 'surov',
    'windy': 'windy',
    'zontik': 'zontik',
    'career': 'career',
    'fabric': 'fabric',
    'geosearch': 'geosearch',
    'mining': 'mining',
    'office': 'office',
    'project': 'project',
    'running': 'running',
    'solar': 'solar',
    'caret': 'caret'
};

const Icon = ({ name, style, x, y, size = [50, 50], svgImage = false }) => {

    const width = size[0];
    const height = size[1];


    let src = rainy;

    switch (name) {
        case 'rainy': src = rainy; break;
        case 'conflict': src = conflict; break;
        case 'exotic': src = exotic; break;
        case 'extreme': src = extreme; break;
        case 'sunny': src = sunny; break;
        case 'surov': src = surov; break;
        case 'windy': src = windy; break;
        case 'zontik': src = zontik; break;
        case 'career': src = career; break;
        case 'fabric': src = fabric; break;
        case 'geosearch': src = geosearch; break;
        case 'mining': src = mining; break;
        case 'office': src = office; break;
        case 'project': src = project; break;
        case 'running': src = running; break;
        case 'solar': src = solar; break;
        case 'caret': src = caret; break;
        default: break;
    }

    if (svgImage) {
        return <image x={x ? x : -(width / 2)} y={y ? y : -(height / 2)} width={`${width}`} height={`${height}`} href={src} />
    }

    return <img src={src} alt={src} width={width} height={height} style={style} />
}
 
export default Icon;