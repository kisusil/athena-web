import React from "react";
import './message.css';

function Message() {
    return (
        <div className="message">
            <span className="text-in-message">Привет! У меня все хорошо. Встретимся завтра?</span>
            <div className="message-info">
                <span className="time-in-message">17:35</span>
                <img src="iconMessage.svg" alt="Доставлено"/>
            </div>
        </div>
    )
}

export default Message;