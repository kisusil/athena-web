import React from "react";
import './navigation.css';

function Navigation() {

    return (
        <header>
            <img className="smallLogo" src="smallLogo.svg" alt="Логотип"/>
            <nav>
                <a className="tab tab-active" href="">Заявки</a>
                <a className="tab" href="">Пользователи</a>
                <a className="tab" href="">Выход</a>
            </nav>
        </header>
    );
}

export default Navigation;