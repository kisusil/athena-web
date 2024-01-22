import React, {useState} from "react";
import './application.css';
import TextField from "../textField/textField";
import Button from "../button/button";

function Application(props) {
    const [login, setLogin] = useState('')

    return (
        <div className="application">
            <section className="info-applications">
                <span className="info-applications-1">
                    {props.application.email}
                </span>
                <span className="info-applications-2">
                    {props.application.date}
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
                <Button
                    name="Принять"
                    state={login && login !== "" ? "active" : "disabled"}
                    size="medium"
                    accentColor="blue"
                    onClick={() => login && login !== "" ? props.onAccept(props.application, login) : () => ""}
                />
                <Button
                    name="Отклонить"
                    state="active"
                    size="medium"
                    accentColor="red"
                    onClick={() => props.onReject(props.application)}
                />
            </section>
        </div>
    );
}

export default Application;