import React, { Component } from 'react'
import { Button, WhiteBlock } from './../../../components';
import { Form, Input, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

import { Redirect } from 'react-router-dom';

import { connect } from "react-redux";
import { login } from "../actions/auth";

class LoginForm extends Component {
    constructor(props) {

        super(props);
        this.handleLogin = this.handleLogin.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
    
        this.state = {
          username: "",
          password: "",
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
    
      handleLogin(e) {
        e.preventDefault();
    
        this.setState({
          loading: true,
        });
    
        this.form.validateAll();
    
        const { dispatch, history } = this.props;
    
        if (this.checkBtn.context._errors.length === 0) {
          dispatch(login(this.state.username, this.state.password))
            .then(() => {
              history.push("/profile");
              window.location.reload();
            })
            .catch(() => {
              this.setState({
                loading: false
              });
            });
        } else {
          this.setState({
            loading: false,
          });
        }
    }

    render() {
        const onFinish = values => {
            console.log('Received values of form: ', values);
        };

        const { isLoggedIn, message } = this.props;

        if (isLoggedIn) {
        return <Redirect to="/im" />;
        }
        
        return (
            <div>
                <div className="auth__top">
                    <h2>Login</h2>
                    <p>Please log into your account</p>
                </div>
                <WhiteBlock>
                    <Form name="normal_login" className="login-form" onSubmit={this.handleLogin}
                                                                     ref={(c) => {
                                                                     this.form = c;
                                                                     }} 
                                                                     initialValues={{ remember: true }} 
                                                                     onFinish={onFinish}>
                        <Form.Item hasFeedback name="username">
                            <Input size="large" validateStatus='success' value={this.state.username} onChange={this.onChangeUsername} validations={[required]} prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                        </Form.Item>
                        <Form.Item name="password" hasFeedback>
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="Password"
                                size="large"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Form.Item name="remember" valuePropName="checked" noStyle>
                                <Checkbox>Remember me</Checkbox>
                            </Form.Item>
                        </Form.Item>
                        <Form.Item>
                            <Button size="large" type="primary" >Login</Button>
                        </Form.Item>

                        <Link className="auth__registration-link" to="/reg">Register now</Link>

                    </Form>
                </WhiteBlock>
            </div>
        )
    }
};

export default LoginForm;