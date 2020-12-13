import React, { Component } from 'react'
import { Button, WhiteBlock } from './../../../components';
import { Form, Input, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'

import { Redirect } from 'react-router-dom';

import { connect } from "react-redux";
import { login } from "../../../actions/auth";

class LoginForm extends Component {

  state = {
    username: '',
    password: ''
  };

  handle_change = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState(prevstate => {
      const newState = { ...prevstate };
      newState[name] = value;
      return newState;
    });
  };

    render() {
        
        return (
            <div>
                <div className="auth__top">
                    <h2>Login</h2>
                    <p>Please log into your account</p>
                </div>
                <WhiteBlock>
                  <form onSubmit={e => this.props.handle_login(e, this.state)}>
                    <div class="user-box">
                      <input value={this.state.username} onChange={this.handle_change} type="text" name="username"/>
                      <label htmlFor="username">Username</label>
                    </div>
                    <div class="user-box">
                      <input value={this.state.password} onChange={this.handle_change} type="password" name="password"/>
                      <label>Password</label>
                    </div>
                    <input className="submit-button" type="submit" value="Login"/>
                  </form>
                </WhiteBlock>
            </div>
        )
        
    }
};

export default LoginForm;

LoginForm.propTypes = {
  handle_login: PropTypes.func.isRequired
};