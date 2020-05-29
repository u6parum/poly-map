import React from 'react';
import Icon from "../helpers/icon/Icon";

const Title = ({ text, solar, capitalize }) => {
    const txt = capitalize ? text.toUpperCase() : text;

    return (
        solar ? 
            <><b>{txt}</b> <Icon name="solar" size={[20, 20]} /></> : 
            <b>{txt}</b>
    );
}
 
export default Title;