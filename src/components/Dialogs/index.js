import React from 'react';
import { DialogItem } from "../";
import orderBy from "lodash/orderBy";
import { Input } from "antd";

import './Dialogs.scss';

const { Search } = Input;
const onSearch = value => console.log(value);

// сайдбар слева (поиск и диалоги)
const Dialogs = ({items, userId, onSearch, inputValue, onSelectDialog}) => {
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

            {orderBy(items, ["created_at"], ["desc"]).map(item => (
                <DialogItem
                    onSelect={onSelectDialog}
                    key={item.user._id}
                    {... item}
                    isMe={item.user._id === userId}/>
            ))}            
        </div>
    );
};

export default Dialogs;
 