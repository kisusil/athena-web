import React from "react";
import './notification.css';
import Avatar from "../avatar/avatar";

function Notification(props) {

    return (
        <div className="notification">
            <Avatar size="medium" name={props.user.name} surname={props.user.surname}/>
            <div className="notification-info">
                <span className="notification-info-1">У вас непрочитанное сообщение</span>
                <span className="notification-info-2">{props.user.name} {props.user.surname} ждёт вашего ответа</span>
            </div>
        </div>
    );
}

export default Notification;