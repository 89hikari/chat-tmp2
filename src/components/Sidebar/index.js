import React, {useState} from 'react'
import {Modal, Input } from 'antd'
import {Dialogs} from '../../containers'
import { TeamOutlined, FormOutlined } from "@ant-design/icons";

import './Sidebar.scss'

const Sidebar = ({ user }) => {
    const { Search } = Input;
    const onSearch = value => console.log(value);
    const [visible, setVisible] = useState(false);

    const onClose = () => {
        setVisible(false);
    }

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
                            userId={0}
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
                        <Search
                            placeholder="input search text"
                            allowClear
                            onSearch={onSearch}
                            style={{ width: '100%'}}
                        />
                    </Modal>
                </div>
            </div>
    );
}

export default Sidebar;