import React from "react";
import './table.css';

function Table() {

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
            <section className="row-1">
                <span className="data height-id">1</span>
                <span className="data height-login">admin1</span>
                <span className="data height-email">admin1@gmail.com</span>
                <span className="data height-admin">да</span>
                <span className="data height-blocking">да</span>
            </section>
            <section className="row-2">
                <span className="data height-id">2</span>
                <span className="data height-login">admin1</span>
                <span className="data height-email">admin1@gmail.com</span>
                <span className="data height-admin">да</span>
                <span className="data height-blocking">да</span>
            </section>
            <section className="row-1">
                <span className="data height-id">3</span>
                <span className="data height-login">admin1</span>
                <span className="data height-email">admin1@gmail.com</span>
                <span className="data height-admin">да</span>
                <span className="data height-blocking">да</span>
            </section>
            <section className="row-2">
                <span className="data height-id">4</span>
                <span className="data height-login">admin1</span>
                <span className="data height-email">admin1@gmail.com</span>
                <span className="data height-admin">да</span>
                <span className="data height-blocking">да</span>
            </section>
            <section className="row-1">
                <span className="data height-id">5</span>
                <span className="data height-login">admin1</span>
                <span className="data height-email">admin1@gmail.com</span>
                <span className="data height-admin">да</span>
                <span className="data height-blocking">да</span>
            </section>
        </section>
    );
}

export default Table;