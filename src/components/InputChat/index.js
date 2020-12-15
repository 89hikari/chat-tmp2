import React, { useState } from 'react';
import { Input } from "antd";
import { CheckOutlined } from "@ant-design/icons";

import './InputChat.scss';

const InputChat = props => {
    
    const [value, setValue] = useState('');

    function handleChange(event) {
        console.log(value)
        setValue(event.target.value);
    }
    
    function wait(ms){
        var start = new Date().getTime();
        var end = start;
        while(end < start + ms) {
          end = new Date().getTime();
       }
    }

    function handleSubmit(event) {
        event.preventDefault();
        let recipient_id = props.contactData.state.contact_id
        props.contactData.createMessage(recipient_id, value, new Date())
        setValue("");
        props.refresh();
    }

        return (
            <div className="chat-input">
                <Input placeholder="Enter your message" value={value} onPressEnter={handleSubmit} onChange={handleChange}/>
                <div className="chat-input__action">
                    <CheckOutlined />
                </div>
            </div>  
        );
};

export default InputChat;
