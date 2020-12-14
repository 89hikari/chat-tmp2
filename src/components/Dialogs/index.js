import React from 'react';
import { DialogItem } from "../";
import orderBy from "lodash/orderBy";
import { Input } from "antd";

import './Dialogs.scss';

const { Search } = Input;
const onSearch = value => console.log(value);

// сайдбар слева (поиск и диалоги)
const Dialogs = ({items, userId, onSearch, inputValue, onSelectDialog}) => {
    
    console.log(items) 
    
    return (
        <div className="dialogs">
            <div className="chat__sidebar-search">
                    <Search
                        placeholder="Search dialogs here"
                        allowClear
                        onChange={e => onSearch(e.target.value)}
                        value={inputValue}
                    />
                </div>   
            {       
            
    items.map(item => (
                 <DialogItem
                    id={item.id}
                    user={item.username}
                    avatar={item.avatar}
                    isMe={item.id === userId}/>
            ))
}            
        </div>
    );
};

export default Dialogs;
 