import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TeamOutlined, FormOutlined, EllipsisOutlined } from "@ant-design/icons";
import { Status, InputChat, Sidebar } from "./../../components";
import { Dialogs, Messages } from "./../../containers";
import { Modal, Button, Space } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import './Home.scss'
import { useState } from 'react';

//главная страница im

const Home = (props) => (
    <section className="home">

        <div className="chat">
            <Sidebar users={props.getAllUsers}/>
            
            <div className="chat__dialog">
                <div className="chat__dialog-header">
                    <div />
                    <div className="chat__dialog-header-center">
                        <b className="chat__dialog-header-username">Vladislav Belousov</b>
                        <div className="chat__dialog-header-status">
                            <Status online />
                        </div>
                    </div>
                    <EllipsisOutlined style={{ fontSize: "25px" }} />
                </div>
                <div className="chat__dialog-messages">
                    <Messages />
                </div>
                <div className="chat__dialog-input">
                    <InputChat />
                </div>
            </div>
        </div>
        {/*<div className="dialogs">
            <DialogItem user={{
                fullname: 'Vladislav Belousov',
                isOnline: true
            }}
            unreaded={0}/>
            <DialogItem user={{
                fullname: 'Vanya Tumakov',
                isOnline: false
            }}
            unreaded={0}/>
            <DialogItem user={{
                fullname: 'Vladislav Belousov',
                isOnline: true
            }}
            unreaded={2}/>
        </div>


        <Message
            avatar="https://sun1-16.userapi.com/impg/1vpwAguMrPdvMCewriWWmXbD_qlxQfho1d0alg/xO9Z3Tg0SlE.jpg?size=200x0&quality=90&crop=39,259,772,772&sign=31f6de9bf7a33835a4c41bcfe6f9a738&ava=1"
            text="Salam Aleykoom, let's kill some jews Salam Aleykoom, let's kill some jews Salam Aleykoom, let's kill some jews Salam Aleykoom, let's kill some jewsSalam Aleykoom, let's kill some jews Salam Aleykoom, let's kill some jews Salam Aleykoom, let's kill some jews"
            date={new Date(2020, 10, 1, 23, 44, 55)}
            isMe={false} />
        <Message
            avatar="https://sun1-84.userapi.com/impg/jHnucCxXDejZhQe6AbwVTAZtzqBjspRkr4QykQ/_9HK6ls2YmA.jpg?size=200x0&quality=90&crop=102,1,2158,2159&sign=702a94befa58106ac4703a448ebc0221&ava=1"
            text="Ok let's go Ok let's go Ok let's go Ok let's go Ok let's go Ok let's go Ok let's go Ok let's go Ok let's go "
            date={new Date(2020, 10, 1, 23, 52, 55)}
            isMe={true}
            isReaded={false} />

        <Message
            avatar="https://sun1-84.userapi.com/impg/jHnucCxXDejZhQe6AbwVTAZtzqBjspRkr4QykQ/_9HK6ls2YmA.jpg?size=200x0&quality=90&crop=102,1,2158,2159&sign=702a94befa58106ac4703a448ebc0221&ava=1"
        isTyping />
*/}
    </section>
);

Home.propTypes = {
    date: PropTypes.string
};

export default Home;