import React, {useState} from "react";
import './navigation.css';
import {Link} from "react-router-dom";

function chooseClassesForTab(tab, activeTab) {
    if (activeTab === undefined && tab === 0) return "tab tab-active";

    if (tab === activeTab) return "tab tab-active";
    return "tab";
}
function Navigation(props) {
    return (
        <header>
            <img className="smallLogo" src="smallLogo.svg" alt="Логотип"/>
            <nav>
                <Link className={chooseClassesForTab(0, props.activeTab)} to="/profile">Профиль</Link>
                <Link className={chooseClassesForTab(1, props.activeTab)} to="/chats">Чаты</Link>
                <Link className={chooseClassesForTab(2, props.activeTab)} to="/notifications">Уведомления</Link>
            </nav>
        </header>
    );
}

export default Navigation;