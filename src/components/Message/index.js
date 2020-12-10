import React, { Component } from 'react';
import PropTypes from 'prop-types'
import classNames from "classnames";
import {Avatar} from '../'

import { Time, IconReaded } from '../';

import './Message.scss';

// определяет какое будет сообщение (моё, собеседника, печатающего собеседника)
const Message = ({avatar, user, text, created_at, isMe, isReaded, isTyping}) => {
        return (
            <div className={classNames("message", {"message--isme" : isMe, "message--is-typing" : isTyping})}>
                <div className="message__avatar">
                    <Avatar user={user}/>
                </div>
                
                <div className="message__content">
                {isMe && isReaded && <IconReaded isMe={isMe} isReaded={isReaded} /> }
                    <div className="message__bubble">
                        {isTyping &&
                            <div class="typing-indicator">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        }
                        <p className="message__text">{text}</p>
                    </div>

                    {created_at && <span className="message__date"><Time date={created_at}/></span>}
                    
                </div>
            </div>
        );
};

Message.defaultProps = {
    user: {} 
}

Message.propTypes = {
    avatar: PropTypes.string,
    text: PropTypes.string,
    user: PropTypes.string,
    date: PropTypes.object,
    isTyping: PropTypes.bool,
    isMe: PropTypes.bool,
    isReaded: PropTypes.bool
};

export default Message;
