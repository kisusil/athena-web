import React from "react";
import TextField from "../textField/textField";
import Button from "../button/button";

function CreateFormUser() {

    return (
        <div className="block-create-form">
            <div className="card-form-column-1">
                <TextField
                    title="Логин"
                    type="text"
                    placeholder="Введите логин"
                />
                <TextField
                    title="Почта"
                    type="text"
                    placeholder="Введите почту"
                />
                <Button
                    name="Создать пользователя"
                    state="active"
                    size="large"
                    accentColor="blue"
                />
                <Button
                    name="Отмена"
                    state="active"
                    size="large"
                    accentColor="blue"
                />
            </div>
        </div>
    );
}

export default CreateFormUser;