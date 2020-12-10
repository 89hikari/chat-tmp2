import React, { useState } from 'react';
import { Input } from "antd";
import { CheckOutlined } from "@ant-design/icons";

import './InputChat.scss';

const InputChat = props => {
    
    const [value, setValue] = useState('');

        return (
            <div className="chat-input">
                <Input placeholder="Enter your message" />
                <div className="chat-input__action">
                    <CheckOutlined />
                </div>
            </div>  
        );
};

export default InputChat;
