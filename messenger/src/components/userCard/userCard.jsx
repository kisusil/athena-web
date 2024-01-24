import React from "react";
import './userCard.css';
import Avatar from "../avatar/avatar";

function UserCard(props) {

    return (
        <div
            className={props.card.isSelected ? "user-card user-card-active" : "user-card"}
            onClick={() => props.onSelect(props.card)}
        >
            <Avatar size="medium" name={props.card.name} surname={props.card.surname}/>
            <div className="user-card-info">
                <span className="user-card-name">{props.card.name} {props.card.surname}</span>
                <span className="nickname">@{props.card.login}</span>
            </div>
        </div>
    );
}

export default UserCard;