import React, {useEffect, useState} from "react";
import './loginPage.css';
import TextField from "../../components/textField/textField";
import Button from "../../components/button/button";
import {adminLogin, getLoggedInAdmin} from "../../data/users";
import {useNavigate} from "react-router-dom";

function LoginPage() {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const [buttonActive, setButtonActive] = useState(false);
    const navigate= useNavigate();

    useEffect(() => {
        if (getLoggedInAdmin()) {
            navigate("/applications");
        }
    });

    function onLoginChange(newLogin) {
        setLogin(newLogin);
        if (newLogin !== "" && password !== undefined && password !== "") {
            setButtonActive(true);
        } else {
            setButtonActive(false);
        }
    }

    function onPasswordChange(newPassword) {
        setPassword(newPassword);
        if (login !== undefined && login !== "" && newPassword !== "") {
            setButtonActive(true);
        } else {
            setButtonActive(false);
        }
    }

    function onButtonClick() {
        if (login === undefined || login === "") {
            setError(true);
            return;
        }

        if (password === undefined || password === "") {
            setError(true);
            return;
        }

        const isLoggedIn = adminLogin(login, password);
        if (!isLoggedIn) {
            setError(true);
        } else {
            setError(false);
            navigate("/applications");
        }
    }

    return (
        <div className="login-body">
            <div className="loginForm">
                <img src="largeLogo.svg" alt="Логотип"/>
                <section className="form">
                    <TextField
                        title="Логин"
                        type="text"
                        placeholder="Введите логин"
                        isError={error}
                        value={login}
                        setValue={onLoginChange}
                    />
                    <TextField
                        title="Пароль"
                        type="password"
                        placeholder="Введите пароль"
                        error={error && "Неверный логин или пароль, попробуйте еще раз"}
                        isError={error}
                        value={password}
                        setValue={onPasswordChange}
                    />
                    {buttonActive && (
                        <Button
                            name="Войти"
                            state="active"
                            size="large"
                            accentColor="blue"
                            onClick={onButtonClick}
                        />
                    )}
                    {!buttonActive && (
                        <Button
                            name="Войти"
                            state="disabled"
                            size="large"
                            accentColor="blue"
                            onClick={() => ""}
                        />
                    )}
                </section>
            </div>
        </div>
    );
}

export default LoginPage;