import React from "react";
import TextField from "../textField/textField";
import Button from "../button/button";

function CreateFormAdmin(props) {
    return (
        <div className="block-create-form">
            <div className="card-form-column-1">
                <TextField
                    title="Логин"
                    type="text"
                    placeholder="Введите логин"
                    value={props.login}
                    setValue={props.setLogin}
                />
                <TextField
                    title="Почта"
                    type="text"
                    placeholder="Введите почту"
                    value={props.email}
                    setValue={props.setEmail}
                />
                <TextField
                    title="Пароль"
                    type="password"
                    placeholder="Введите пароль"
                    value={props.password}
                    setValue={props.setPassword}
                />
                <Button
                    name="Создать администратора"
                    state={props.isCreateAvailable() ? "active" : "disabled"}
                    size="large"
                    accentColor="blue"
                    onClick={() => props.isCreateAvailable() ? props.onCreate() : () => ""}
                />
                <Button
                    name="Отмена"
                    state="active"
                    size="large"
                    accentColor="blue"
                    onClick={props.onCancel}
                />
            </div>
        </div>
    );
}

export default CreateFormAdmin;