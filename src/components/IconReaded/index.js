import React from 'react';
import PropTypes from 'prop-types'
import checkedImg from './../../assets/img/checked.png'

// прочитано ли 
const IconReaded = ({isMe, isReaded}) => {return (isMe && isReaded && <img className="dialogs__item-info-bottom-checked" src={checkedImg} alt=""/>);}

IconReaded.propTypes = {
    isMe: PropTypes.bool
};

export default IconReaded;
