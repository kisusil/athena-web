import React, {useState} from "react";
import './userCard.css';
import TextField from "../textField/textField";
import Button from "../button/button";
import {useNavigate} from "react-router-dom";
import {blockUser, deleteUser, getUserGlobalById, unblockUser, updateUser} from "../../data/users";

function UserCard(props) {
    const navigate = useNavigate();
    const [initialUser, setInitialUser] = useState(getUserGlobalById(props.user.id));
    const [user, setUser] = useState(initialUser);

    function isSaveAvailable() {
        return initialUser.login !== user.login || initialUser.email !== user.email;
    }

    function onSave() {
        updateUser(user);
        const updatedUser = getUserGlobalById(props.user.id);
        setUser(updatedUser);
        setInitialUser(updatedUser);
    }

    function onBlock() {
        if (user.blocked) {
            unblockUser(user);
        } else {
            blockUser(user);
        }
        setUser(getUserGlobalById(props.user.id));
    }

    function onDelete() {
        deleteUser(user);
        navigate("/users");
    }

    return (
        <section className="block-card">
            <div className="card-header">
                <svg
                    className="card-return-icon"
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={() => navigate("/users")}
                >
                    <g id="Back">
                        <path d="M0 0H28C32.4183 0 36 3.58172 36 8V28C36 32.4183 32.4183 36 28 36H0V0Z" fill="#6A8EE8"
                              id="fill"/>
                        <path id="Arrow 2"
                              d="M26 19C26.5523 19 27 18.5523 27 18C27 17.4477 26.5523 17 26 17V19ZM9.29289 17.2929C8.90237 17.6834 8.90237 18.3166 9.29289 18.7071L15.6569 25.0711C16.0474 25.4616 16.6805 25.4616 17.0711 25.0711C17.4616 24.6805 17.4616 24.0474 17.0711 23.6569L11.4142 18L17.0711 12.3431C17.4616 11.9526 17.4616 11.3195 17.0711 10.9289C16.6805 10.5384 16.0474 10.5384 15.6569 10.9289L9.29289 17.2929ZM26 17L10 17V19L26 19V17Z"
                              fill="white"/>
                    </g>
                </svg>
                <span className="card-header-name">User ID: {user.id} {user.blocked ? "(заблокирован)" : ""}</span>
            </div>
            <div className="tab-block">
                <div className="card-form">
                    <div className="card-form-column-1">
                        <TextField
                            title="Логин"
                            type="text"
                            placeholder="Введите логин"
                            value={user.login}
                            setValue={(newLogin) => setUser({...user, login: newLogin})}
                        />
                        <Button
                            name="Отправить код"
                            state="active"
                            size="large"
                            accentColor="blue"
                            onClick={() => ""}
                        />
                        <Button
                            name={user.blocked ? "Разблокировать" : "Заблокировать" }
                            state="active"
                            size="large"
                            accentColor="blue"
                            onClick={onBlock}
                        />
                    </div>
                    <div className="card-form-column-1">
                        <TextField
                            title="Почта"
                            type="text"
                            placeholder="Введите почту"
                            value={user.email}
                            setValue={(newEmail) => setUser({...user, email: newEmail})}
                        />
                        <Button
                            name="Сохранить"
                            state={isSaveAvailable() ? "active" : "disabled"}
                            size="large"
                            accentColor="blue"
                            onClick={() => isSaveAvailable() ? onSave() : () => ""}
                        />
                        <Button
                            name="Удалить"
                            state="active"
                            size="large"
                            accentColor="red"
                            onClick={onDelete}
                        />
                    </div>
                </div>
                <div className="card-info">
                    <img className="info-icon" src="iconInfo.svg" alt="Инфо"></img>
                    <div className="card-info-column">
                        <span className="card-info-text">Последний вход: {user.lastLogin}</span>
                        <span className="card-info-text">Код: 1234</span>
                        <span className="card-info-text">Код истекает: никогда</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default UserCard;