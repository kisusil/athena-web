import React from "react";
import './chatCard.css';
import Avatar from "../avatar/avatar";

function ChatCard() {
    return (
        <div className="chat-card">
            <Avatar size="medium" name="А" surname="С"/>
            <div className="chat-card-content">
                <div className="chat-card-info">
                    <div className="chat-card-info-1">
                        <span className="user-name">Александр Степанов</span>
                        <span className="time">14:30</span>
                    </div>
                    <div className="chat-card-info-2">
                        <span className="message-text">Добрый день!</span>
                        <div className="number-of-unread">
                            <span className="message-text">3</span>
                        </div>
                    </div>
                </div>
                <div className="chat-card-line"></div>
            </div>
        </div>
    )
}

export default ChatCard;