import React from 'react';
import PropTypes from 'prop-types'
import {Empty} from 'antd';
import {Message} from '../'

import './Messages.scss';

const Messages = ({ blockRef, items }) => {
        // проверка есть ли сообщения или нет (items должно быть без отрицания)
        return (
        <div ref={blockRef} className="messages">
          {items ?  items.map(item =>
             <Message key={item._id} {...item}/>)
          : <Empty description="Nothing here" /> }
        </div> 
        )
};  

Message.propTypes = {
    avatar: PropTypes.string,
};

export default Messages;
