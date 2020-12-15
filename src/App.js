import React, { Component } from 'react';
import { Route } from "react-router-dom";
import { LoginForm, RegistrationForm } from './modules';
import fetch from 'isomorphic-fetch';

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
      id: null,
      allUsers: this.getAllUsers(),
      contacts: []
    };
  }

  wait(ms){
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms) {
      end = new Date().getTime();
   }
 }

  componentDidMount() {
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
          localStorage.setItem('id', json.user.id )
          localStorage.setItem('username', json.user.username)
          this.setState({ displayed_form: 'home', logged_in: true });
        });

        fetch('https://sleepy-waters-05131.herokuapp.com/users/contacts/', {
          method: "GET",
            headers: {
              'Content-Type': 'application/json',
              Authorization: `JWT ${localStorage.getItem('token')}`,
            }
          }).then(res => res.json())
          .then(json => {
            this.setState({ contacts: json });
          });
    }
    this.wait(1000)
  }

  getContacts = () => {
    fetch('https://sleepy-waters-05131.herokuapp.com/users/contacts/', {
          method: "GET",
            headers: {
              'Content-Type': 'application/json',
              Authorization: `JWT ${localStorage.getItem('token')}`,
            }
          }).then(res => res.json())
          .then(json => {
            this.setState({ contacts: json });
    })
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
        localStorage.setItem('id', json.user.id)
        localStorage.setItem('username', json.user.username)
        this.setState({
          logged_in: true,
          displayed_form: 'home',
          username: json.user.username,
          id: json.user.id,
        });
      });
      this.wait(500)
  };

  addUser(id) {
    fetch('https://sleepy-waters-05131.herokuapp.com/users/contacts/', {
          method: "POST",
            headers: {
              'Content-Type': 'application/json',
              Authorization: `JWT ${localStorage.getItem('token')}`,
            },
            body: JSON.stringify({
              id: id,
            })
          })
  }

  Rerender = () => {
    this.forceUpdate()
  }

  getAllUsers(){
    fetch('https://sleepy-waters-05131.herokuapp.com/users/users/', {
      method: "GET",
        headers: {
          'Content-Type': 'application/json',
          Authorization: `JWT ${localStorage.getItem('token')}`,
        }
      }).then((response) => response.json())
      .then((responseData) => {
        console.log(responseData);
        this.setState({
          allUsers: responseData,
        })
        return responseData;
      })
  }
  
  getUsers = () => {  
    let a = this.getAllUsers();
    return a;
  };

  handle_signup = (e, data) => {
    e.preventDefault();
    fetch('http://sleepy-waters-05131.herokuapp.com/users/users/', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(json => {
        localStorage.setItem('token', json.token);
        localStorage.setItem('id', json.id)
        localStorage.setItem('username', json.username)
        this.setState({
          username: json.username,
          id: json.id,
          displayed_form: 'home'
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
    let form;
    switch(this.state.displayed_form){
      case 'login':
        form = <LoginForm handle_login={this.handle_login}/>
        return  <div className="auth__labels" >
                  <label className="signup__label" onClick={() => this.display_form('signup')}>Sign Up</label>
                  <LoginForm handle_login={this.handle_login} display_form={this.display_form}/>
                </div>
        break;
      case 'signup':
        form = <RegistrationForm handle_signup={this.handle_signup} />
        return <div className="auth__labels" >
                <label className="login__label" onClick={() => this.display_form('login')}>Login</label>
                <RegistrationForm handle_signup={this.handle_signup} display_form={this.display_form}/>
              </div>
        break;
      case 'home':
        form = 
        <div>
          <label className="logout" onClick={() => this.handle_logout()}>Logout</label>
          <Home getContacts={this.state.contacts} addUser={this.addUser} getAllUsers={this.state.allUsers} refreshContacts={this.getContacts}/>
        </div>

        break;
      default:
        form = 'login';
        return  <div className="auth__labels" >
                  <label className="login__label" onClick={() => this.display_form('login')}>Login</label>
                  <label className="signup__label" onClick={() => this.display_form('signup')}>Sign Up</label>
                </div>
    }
    return (
      <div className="wrapper">
        { form }
      </div>
    ); 
  }
}

export default App;
