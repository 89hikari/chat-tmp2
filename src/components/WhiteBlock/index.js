import React from 'react';
import PropTypes from 'prop-types'
import classNames from 'classnames'; 

import './WhiteBlock.scss';

// блок в авторизации и регистрации
const WhiteBlock = ({children, className}) => <div className={classNames('block', className)}>{children}</div>   

export default WhiteBlock;
