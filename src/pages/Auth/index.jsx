import React from 'react';
import "./Auth.scss"
import { LoginForm, RegistrationForm } from "./../../modules";
import { Route } from "react-router-dom";

const Auth = () => (
    <section className="auth">
        <div className="auth__content">
            <Route exact path={["/", "/login"]} component={LoginForm}/>
            <Route exact path="/reg" component={RegistrationForm}/>
        </div>
    </section>
);

export default Auth;