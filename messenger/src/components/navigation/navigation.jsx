import React, {useState} from "react";
import './navigation.css';

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
                <a className={chooseClassesForTab(0, props.activeTab)} href="/profile">Профиль</a>
                <a className={chooseClassesForTab(1, props.activeTab)} href="/chats">Чаты</a>
                <a className={chooseClassesForTab(2, props.activeTab)} href="/notifications">Уведомления</a>
            </nav>
        </header>
    );
}

export default Navigation;