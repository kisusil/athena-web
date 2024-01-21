import React from "react";
import './userCard.css';
import TextField from "../textField/textField";
import Button from "../button/button";

function UserCard() {

    return (
        <section className="block-card">
            <div className="card-header">
                <img src="iconBack.svg" alt="Назад"></img>
                <span className="card-header-name">User ID: 8</span>
            </div>
            <div className="tab-block">
                <div className="card-form">
                    <div className="card-form-column-1">
                        <TextField
                            title="Логин"
                            type="text"
                            placeholder="Введите логин"
                        />
                        <Button
                            name="Отправить код"
                            state="active"
                            size="large"
                            accentColor="blue"
                        />
                        <Button
                            name="Заблокировать"
                            state="active"
                            size="large"
                            accentColor="blue"
                        />
                    </div>
                    <div className="card-form-column-1">
                        <TextField
                            title="Почта"
                            type="text"
                            placeholder="Введите почту"
                        />
                        <Button
                            name="Сохранить"
                            state="active"
                            size="large"
                            accentColor="blue"
                        />
                        <Button
                            name="Удалить"
                            state="active"
                            size="large"
                            accentColor="red"
                        />
                    </div>
                </div>
                <div className="card-info">
                    <img className="info-icon" src="iconInfo.svg" alt="Инфо"></img>
                    <div className="card-info-column">
                        <span className="card-info-text">Последний вход: 12.11.23 12:15</span>
                        <span className="card-info-text">Код: QE34sf9YO1xz</span>
                        <span className="card-info-text">Код истекает: 13.11.23 15:45</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default UserCard;