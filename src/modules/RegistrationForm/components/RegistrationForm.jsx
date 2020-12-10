import React, { Component } from 'react'
import { Button, WhiteBlock } from './../../../components';
import { Form, Input, Checkbox } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { register } from "../../../actions/auth";
class RegistrationForm extends Component {

    constructor(props) {

        super(props);
        this.handleRegister = this.handleRegister.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
    
        this.state = {
          username: "",
          password: "",
          successful: false,
        };

    }
    
      onChangeUsername(e) {
        this.setState({
          username: e.target.value,
        });
      }
    
      onChangePassword(e) {
        this.setState({
          password: e.target.value,
        });
      }
    
      handleRegister(e) {
        e.preventDefault();
    
        this.props
        .dispatch(
          register(this.state.username, this.state.password)
        )
        .then(() => {
          this.setState({
            successful: true,
          });
        })
    }

    render() {
        const success = false;
        const onFinish = values => {
            console.log('Received values of form: ', values);
        };
        return (
            <div>
                <div className="auth__top">
                    <h2>Registration</h2>
                    <p>You have to register before start chatting</p>
                </div>
                <WhiteBlock>

                        <Form onSubmit={this.handleRegister} name="normal_login" className="login-form" initialValues={{ remember: true }} onFinish={onFinish}>
                            <Form.Item hasFeedback name="username">
                                <Input size="large" value={this.state.username} onChange={this.onChangeUsername} validateStatus='success' prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                            </Form.Item>
                            <Form.Item name="password" hasFeedback>
                                <Input value={this.state.password} onChange={this.onChangePassword} prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Password" size="large" />
                            </Form.Item>
                            <Form.Item>
                                <Button size="large" type="primary">Register</Button>
                            </Form.Item>

                            <Link className="auth__registration-link" to="/login">Already registered?</Link>

                        </Form>

                </WhiteBlock>
            </div>
        )
    }
};

const mapStateToProps = state => ({
    username: state.username,
    user: state.auth.user,
    userLoading: state.auth.loading,
});

export default  connect(mapStateToProps)(RegistrationForm);
