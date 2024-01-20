import React from "react";
import './avatar.css'

function extractInitials(name, surname) {
    return name.slice(0, 1).toUpperCase() + surname.slice(0, 1).toUpperCase();
}

function chooseClasses(size) {
    if (size === "large") return "avatar avatar-large";
    if (size === "small") return "avatar avatar-small";
    return "avatar avatar-medium"
}
function Avatar(props) {
    return (
        <div className={chooseClasses(props.size)}>
            {extractInitials(props.name, props.surname)}
        </div>
    )
}

export default Avatar;