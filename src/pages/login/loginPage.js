import React from "react";
import './login.css';

function LoginPage() {
    return (
        <div className="loginForm">
            <img src="largeLogo.svg" alt="Логотип"/>
            <section className="form">
                <div className="textField"></div>
                <div className="textField"></div>
                <div className="button"></div>
            </section>
        </div>
    );
}

export default LoginPage;