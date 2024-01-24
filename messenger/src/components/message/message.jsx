import React from "react";
import './message.css';
import {formatMessageDate} from "../../data/chats";

function Message(props) {
    return (
        <div className={props.isMy ? "alignment-container alignment-container-my" : "alignment-container"}>
            <div className="message">
                <span className="text-in-message">{props.message.text}</span>
                <div className="message-info" ref={props.lastMessageRef}>
                    <span className="time-in-message">{formatMessageDate(props.message.date)}</span>
                    {/*<img src="iconMessage.svg" alt="Доставлено"/>*/}
                </div>
            </div>
        </div>
    )
}

export default Message;