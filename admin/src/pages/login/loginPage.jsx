import React, {useState} from "react";
import './loginPage.css';
import TextField from "../../components/textField/textField";
import Button from "../../components/button/button";
import {adminLogin} from "../../data/users";

function LoginPage() {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const [buttonActive, setButtonActive] = useState(false);

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

        const adminId = adminLogin(login, password);
        if (adminId === null) {
            setError(true);
        } else {
            setError(false);
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