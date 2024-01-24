import React from "react";
import './chatCard.css';
import Avatar from "../avatar/avatar";
import {formatMessageDate} from "../../data/chats";

function getLastMessageTime(chat) {
    if (chat.messages.length <= 0) return '';
    return formatMessageDate(chat.messages[0].date);
}

function getLastMessageText(chat) {
    if (chat.messages.length <= 0) return '';
    const text = chat.messages[0].text;
    if (text.length > 60) {
        return `${text.substring(0, 60)}...`;
    }
    return text;
}

function ChatCard(props) {
    return (
        <div className="chat-card" onClick={() => props.onSelect(props.chat)}>
            <Avatar size="medium" name={props.chat.user.name} surname={props.chat.user.surname}/>
            <div className="chat-card-content">
                <div className="chat-card-info">
                    <div className="chat-card-info-1">
                        <span className="user-name">{props.chat.user.name} {props.chat.user.surname}</span>
                        <span className="time">{getLastMessageTime(props.chat)}</span>
                    </div>
                    <div className="chat-card-info-2">
                        <span className="message-text">{getLastMessageText(props.chat)}</span>
                        <div className="number-of-unread">
                            {/*<span className="message-text">1</span>*/}
                        </div>
                    </div>
                </div>
                <div className="chat-card-line"></div>
            </div>
        </div>
    )
}

export default ChatCard;