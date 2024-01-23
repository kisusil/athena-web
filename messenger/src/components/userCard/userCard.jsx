import React from "react";
import './userCard.css';
import Avatar from "../avatar/avatar";

function UserCard() {

    return (
        <div className="user-card">
            <Avatar size="medium" name="А" surname="С"/>
            <div className="user-card-info">
                <span className="user-card-name">Александр Степанов</span>
                <span className="nickname">@aa.stepanov</span>
            </div>
        </div>
    );
}

export default UserCard;