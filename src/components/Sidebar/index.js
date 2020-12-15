import React, {useState} from 'react'
import {Modal, Input } from 'antd'
import {Dialogs} from '../../components'
import { TeamOutlined, FormOutlined } from "@ant-design/icons";

import './Sidebar.scss'

const Sidebar = (props) => {
    const { Search } = Input;
    const onSearch = value => console.log(value);
    const [visible, setVisible] = useState(false);

    const onClose = () => {
        setVisible(false);
    }

    ///////////////////////

    const [user, setUser] = React.useState("");

    function wait(ms){
        var start = new Date().getTime();
        var end = start;
        while(end < start + ms) {
          end = new Date().getTime();
       }
     }

    function handleSubmit(event) {
        event.preventDefault();
        const allUsers = props.getAllUsers;
        wait(1000)
        for (let i = 0; i < allUsers.length; i++) {
            if (allUsers[i].username == user) {
                props.addUser(allUsers[i].id)
                break;
            }
        }

        setUser("");
        props.refresh();
        wait(1000)
    }

    function handleChange(event) {
        console.log(user)
        setUser(event.target.value);
    }

    ///////////////////////

    return (
        <div className="chat__sidebar">
                <div className="chat__sidebar-header">
                    <div>
                        <TeamOutlined />
                        <span>Dialog list</span>
                    </div>
                    <FormOutlined onClick={() => setVisible(true)} className="chat__sidebar-header-searchicon" />
                </div>
                <div className="chat__sidebar-dialogs">
                    <div className="dialogs">
                        <Dialogs
                            contactName={props.contactName}
                            items={props.users}
                        />
                    </div>
                    <Modal
                        className="modal"
                        title="Search user"
                        visible={visible}
                        onOk={handleSubmit}
                        onCancel={onClose}
                        okText="Search"
                        cancelText="Cancel"
                        >
                        <form onSubmit={handleSubmit}>
                            <p>Enter username to find:</p>
                                <input
                                    className="searchUsername"
                                    name="user"
                                    type="text"
                                    onChange={handleChange}
                                    value={user}
                                />
                            </form>
                    </Modal>
                </div>
            </div>
    );
}

export default Sidebar;