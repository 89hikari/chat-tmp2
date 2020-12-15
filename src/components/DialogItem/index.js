import React from 'react';
import classNames from 'classnames';
import { IconReaded, Avatar } from '../';

import './DialogItem.scss';
import { format, isToday } from 'date-fns';

// если получено сегодня - возвращаем час и минуты, если нет, то день + месяц + год
const getMessageTime = created_at => {
    if (isToday(created_at)) {
        return format(created_at, 'HH:mm');
    } else {
        return format(created_at, 'DD.MM.YYYY')
    }
};

// один элемент в баре слева
const DialogItem = ({ id, user, avatar, created_at, unreaded, isMe, text, onSelect, contactName}) => {
        return (
            
            <div className={classNames("dialogs__item", {"dialogs__item--online": user.isOnline})} onClick={() => contactName.setState( {contact_name: user, contact_id: id, contact_avatar: avatar } )}>
                <div className="dialogs__item-avatar"><Avatar avatar={avatar} id={id} user={user}/></div>
                <div className="dialogs__item-info">
                    <div className="dialogs__item-info-top">
                        <b>{user}</b>
                        <span>
                            {}
                        </span>
                    </div>
                    <div className="dialogs__item-info-bottom">
                        <p>{text}</p>
                        {isMe && <IconReaded isMe={true} isReaded={true} />}
                        {unreaded > 0 && <span className="dialogs__item-info-bottom-counter">{unreaded}</span>}
                    </div>
                </div>
            </div>
        );
};

export default DialogItem;
