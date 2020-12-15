import React from 'react';
import { DialogItem } from "../";
import orderBy from "lodash/orderBy";
import { Input } from "antd";

import './Dialogs.scss';

// сайдбар слева (поиск и диалоги)
const Dialogs = ({items, userId, onSearch, inputValue, onSelectDialog, contactName}) => {

    const { Search } = Input;

    const [user, setUser] = React.useState("");
    
    return (
        <div className="dialogs">
            <div className="chat__sidebar-search">
                    <Search
                        placeholder="// TODO"
                        allowClear
                        value={inputValue}
                    />
                </div>   
            {       
            
    items.map(item => (
                 <DialogItem
                    contactName={contactName}
                    id={item.id}
                    user={item.username}
                    avatar={item.avatar}
                    isMe={item.id === userId}
                    onSelect={onSelectDialog}
                    />
            ))
}            
        </div>
    );
};

export default Dialogs;
 