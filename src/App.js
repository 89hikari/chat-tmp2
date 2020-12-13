import React, { Component } from 'react';
import { Route } from "react-router-dom";
import { LoginForm, RegistrationForm } from './modules';

import { Auth, Home } from './pages';
import './index.css';

class App extends Component {

  constructor(props) {
    super(props);
    let isLogin;
    if(localStorage.getItem('token') == 'undefined') {
      isLogin = false
    } else {
      isLogin = true
    }
    this.state = {
      displayed_form: '',
      logged_in: isLogin,
      username: '',
    };
  }

  componentDidMount() {
    console.log(localStorage.getItem('token'))
    if (this.state.logged_in) {
      fetch('https://sleepy-waters-05131.herokuapp.com/token-refresh/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `JWT ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({
          token: localStorage.getItem('token')
        })
      })
        .then(res => res.json())
        .then(json => {
          localStorage.setItem('token', json.token);
          this.setState({ username: json.username, displayed_form: 'home', logged_in: true });
        });
    }
  }

  handle_login = (e, data) => {
    e.preventDefault();
    fetch('https://sleepy-waters-05131.herokuapp.com/token-auth/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(json => {
        localStorage.setItem('token', json.token);
        this.setState({
          logged_in: true,
          displayed_form: 'home',
          username: json.user.username
        });
      });
  };

  getDialogs = () => {

  }

  handle_signup = (e, data) => {
    e.preventDefault();
    fetch('http://sleepy-waters-05131.herokuapp.com/users/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        username: data.username,
        password: data.password
      })
    })
      .then(res => res.json())
      .then(json => {
        localStorage.setItem('token', json.token);
        this.setState({
          username: json.username
        });
      });
  };

  handle_logout = () => {
    localStorage.setItem('token', undefined);
    this.setState({ logged_in: false, username: '' });
    this.setState({
      displayed_form: 'login'
    });
  };

  display_form = form => {
    this.setState({
      displayed_form: form
    });
  };

  render() {

    const logged_out_nav = (
      <div className="auth__labels" >
        <label className="login__label" onClick={() => this.display_form('login')}>Login</label>
        <label className="signup__label" onClick={() => this.display_form('signup')}>Sign Up</label>
        <label className="logout" onClick={() => this.handle_logout()}>Logout</label>
      </div>
    );
    let form;
    switch(this.state.displayed_form){
      case 'login':
        form = <LoginForm handle_login={this.handle_login}/>
        break;
      case 'signup':
        form = <RegistrationForm handle_signup={this.handle_signup} />
        break;
      case 'home':
        form = <Home />
        break;
      default:
        form = null;
    }
    return (
      <div className="wrapper">
        { logged_out_nav }
        { form }
      </div>
    ); 
  }
}

export default App;
