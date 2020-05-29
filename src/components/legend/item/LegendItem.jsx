import React from 'react';
import Icon from '../../helpers/icon/Icon';
import { Switch } from 'antd';
import styles from './LegendItem.module.scss';


const LegendItem = ({ title, icon, toggle, visible, checked, onChange }) => {
    return (
        <div className={styles.LegendItem} style={{display: visible ? '' : 'none'}}>
            <span>
                <Icon name={icon} size={[36, 36]} style={{marginRight: 8}} />
                {title}
            </span>
            { 
                toggle ? <Switch defaultChecked={checked} size="small" className={styles.Switch} onChange={(e) => onChange(title, e)} /> : null 
            }
        </div>
    );
}
 
export default LegendItem;