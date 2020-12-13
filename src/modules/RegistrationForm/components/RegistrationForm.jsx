import React, { Component } from 'react'
import { Button, WhiteBlock } from './../../../components';
import { Form, Input, Checkbox } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import PropTypes from 'prop-types'
class RegistrationForm extends Component {

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
                    <h2>Registration</h2>
                    <p>You have to register before start chatting</p>
                </div>
                <WhiteBlock>

                        <form onSubmit={e => this.props.handle_signup(e, this.state)}>
                            <div class="user-box">
                            <input value={this.state.username} onChange={this.handle_change} type="text" name="username"/>
                            <label htmlFor="username">Username</label>
                            </div>
                            <div class="user-box">
                            <input value={this.state.password} onChange={this.handle_change} type="password" name="password"/>
                            <label>Password</label>
                            </div>
                            <input className="submit-button" type="submit" value="Signup"/>
                        </form>

                            <Link className="auth__registration-link" to="/login">Already registered?</Link>

                </WhiteBlock>
            </div>
        )
    }
};

export default RegistrationForm;

RegistrationForm.propTypes = {
    handle_signup: PropTypes.func.isRequired
  };
