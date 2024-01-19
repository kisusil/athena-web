import React from "react";
import './navigation.css';

function Navigation() {

    return (
        <header>
            <img className="smallLogo" src="smallLogo.svg" alt="Логотип"/>
            <nav>
                <a className="tab" href="">Заявки</a>
                <a className="tab tab-active" href="">Пользователи</a>
                <a className="tab" href="">Выход</a>
            </nav>
        </header>
    );
}

export default Navigation;