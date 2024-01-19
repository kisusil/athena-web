import React, {useState} from "react";
import './application.css';
import TextField from "../textField/textField";
import Button from "../button/button";

function isLoginFilled(login) {
    return login !== undefined && login !== "";
}

function Application(props) {
    const [login, setLogin] = useState(undefined)

    function onAccept() {
        // TODO
    }

    function onReject() {
        // TODO
    }

    return (
        <div className="application">
            <section className="info-applications">
                <span className="info-applications-1">
                    {props.name}
                </span>
                <span className="info-applications-2">
                    {props.date}
                </span>
            </section>
            <section className="form-applications">
                <TextField
                    title="Логин"
                    type="text"
                    placeholder="Введите логин"
                    value={login}
                    setValue={setLogin}
                />
                {isLoginFilled(login) && (
                    <Button
                        name="Принять"
                        state="active"
                        size="medium"
                        accentColor="blue"
                        onClick={onAccept}
                    />
                )}
                {!isLoginFilled(login) && (
                    <Button
                        name="Принять"
                        state="disabled"
                        size="medium"
                        accentColor="blue"
                    />
                )}
                <Button
                    name="Отклонить"
                    state="active"
                    size="medium"
                    accentColor="red"
                    onClick={onReject}
                />
            </section>
        </div>
    );
}

export default Application;