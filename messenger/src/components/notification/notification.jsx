import React from "react";
import './notification.css';
import Avatar from "../avatar/avatar";

function Notification() {

    return (
        <div className="notification">
            <Avatar size="medium" name="А" surname="С"/>
            <div className="notification-info">
                <span className="notification-info-1">У вас непрочитанное сообщение</span>
                <span className="notification-info-2">Александр Степанов ждёт вашего ответа</span>
            </div>
        </div>
    );
}

export default Notification;