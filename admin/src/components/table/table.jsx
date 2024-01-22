import React from "react";
import './table.css';

function chooseRowClassByIndex(index) {
    return index % 2 === 0 ? "row row-1" : "row row-2";
}

function booleanToRussian(booleanValue) {
    if (booleanValue) return "да";
    return "";
}

function Table(props) {
    return (
        <section className="table">
            <section className="table-header">
                <div className="block-name">
                    <span className="name height-id">ID</span>
                </div>
                <div className="block-name">
                    <div className="delimiter"></div>
                    <span className="name height-login">Логин</span>
                </div>
                <div className="block-name">
                    <div className="delimiter"></div>
                    <span className="name height-email">Почта</span>
                </div>
                <div className="block-name">
                <div className="delimiter"></div>
                    <span className="name height-admin">Админ</span>
                </div>
                <div className="block-name">
                <div className="delimiter"></div>
                    <span className="name height-blocking">Блокировка</span>
                </div>
            </section>
            {props.pageContent && props.pageContent.map((user, index) => (
                <section key={index} className={chooseRowClassByIndex(index)} onClick={() => props.onUserSelected(user.id)}>
                    <span className="data height-id">{user.id}</span>
                    <span className="data height-login">{user.login}</span>
                    <span className="data height-email">{user.email}</span>
                    <span className="data height-admin">{booleanToRussian(user.admin)}</span>
                    <span className="data height-blocking">{booleanToRussian(user.blocked)}</span>
                </section>
            ))}
        </section>
    );
}

export default Table;