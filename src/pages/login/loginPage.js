import React from "react";
import './login.css';
import TextField from "../../components/textField/textField";
import Button from "../../components/button/button";

function LoginPage() {
    return (
        <div className="loginForm">
            <img src="largeLogo.svg" alt="Логотип"/>
            <section className="form">
                <TextField title="Логин" placeholder="Введите логин"/>
                <TextField title="Пароль" placeholder="Введите пароль"/>
                <Button name="Войти"/>
            </section>
        </div>
    );
}

export default LoginPage;