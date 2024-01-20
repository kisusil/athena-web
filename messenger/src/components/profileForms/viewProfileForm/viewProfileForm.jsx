import React from "react";
import Avatar from "../../avatar/avatar";
import '../profileForms.css';
import Button from "../../button/button";

function ViewProfileForm(props) {
    return (
        <div className="background-card">
            <div className="profile-form">
                <Avatar size="large" name={props.user.name} surname={props.user.surname}/>
                <div className="view-profile-form__span-group">
                    <span className="login-span">@{props.user.login}</span>
                    <span className="name-span">{props.user.name} {props.user.surname}</span>
                </div>
                <div className="profile-form__input-group">
                    <Button
                        name="Редактировать"
                        state="active"
                        size="large"
                        accentColor="blue"
                        onClick={props.onEditMode}
                    />
                    <Button
                        name="Выйти"
                        state="active"
                        size="large"
                        accentColor="red"
                        onClick={props.onLogout}
                    />
                </div>
            </div>
        </div>
    )
}

export default ViewProfileForm;