import React from "react";
import './adminCard.css';
import TextField from "../textField/textField";
import Button from "../button/button";

function AdminCard() {

    return (
        <section className="block-card">
            <div className="card-header">
                <img src="iconBack.svg" alt="Назад"></img>
                <span className="card-header-name">Admin ID: 3</span>
            </div>
            <div className="tab-block">
                <div className="card-form">
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
                        <TextField
                            title="Новый пароль"
                            type="зфыыцщкв"
                            placeholder="Введите новый пароль"
                        />
                    </div>
                    <div className="card-form-column-2">
                        <Button
                            name="Сохранить"
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
                    <span className="card-info-text">Последний вход: 12.11.23 12:15</span>
                </div>
            </div>
        </section>
    );
}

export default AdminCard;