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

    function handleSubmit(event) {
        event.preventDefault();
        const allUsers = props.getAllUsers;

        for (let i = 0; i < allUsers.length; i++) {
            if (allUsers[i].username == user) {
                props.addUser(allUsers[i].id)
                break;
            }
        }

        setUser("");
        props.refresh();
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
                            items={props.users}
                        />
                    </div>
                    <Modal
                        className="modal"
                        title="Search user"
                        visible={visible}
                        onOk={onClose}
                        onCancel={onClose}
                        okText="Search"
                        cancelText="Cancel"
                        >
                        <form onSubmit={handleSubmit}>
                            <label>
                                Имя:
                                <input
                                    name="user"
                                    type="text"
                                    onChange={handleChange}
                                    value={user}
                                />
                            </label>
                            <input type="submit" value="Отправить" />
                            </form>
                    </Modal>
                </div>
            </div>
    );
}

export default Sidebar;