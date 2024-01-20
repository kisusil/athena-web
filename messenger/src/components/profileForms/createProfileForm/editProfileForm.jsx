import React from "react";
import '../profileForms.css';
import Avatar from "../../avatar/avatar";
import TextField from "../../textField/textField";
import Button from "../../button/button";

function EditProfileForm(props) {
    return (
        <div className="background-card">
            <Avatar size="large" name={props.user.name} surname={props.user.surname} />
            <div className="profile-form">
                <div className="profile-form__input-group">
                    <TextField
                        title="Имя"
                        type="text"
                        placeholder="Введите имя"
                        value={props.user.name}
                        setValue={props.onNameChange}
                    />
                    <TextField
                        title="Фамилия"
                        type="text"
                        placeholder="Введите фамилию"
                        value={props.user.surname}
                        setValue={props.onSurnameChange}
                    />
                </div>
                <div className="profile-form__input-group">
                    <TextField
                        title="Логин"
                        type="text"
                        placeholder="Введите логин"
                        value={props.user.login}
                        setValue={props.onLoginChange}
                    />
                    <TextField
                        title="Почта"
                        type="text"
                        placeholder="Введите почту"
                        value={props.user.email}
                        setValue={props.onEmailChange}
                    />
                </div>
                <div className="profile-form__input-group">
                    <Button
                        name="Сохранить"
                        state={props.isFormFilled() ? "active" : "disabled"}
                        size="large"
                        accentColor="blue"
                        onClick={props.onSave}
                    />
                    <Button
                        name="Отмена"
                        state={props.onCancel ? "active" : "disabled"}
                        size="large"
                        accentColor="blue"
                        onClick={() => props.onCancel ? props.onCancel() : ""}
                    />
                </div>
            </div>
        </div>
    )
}

export default EditProfileForm;