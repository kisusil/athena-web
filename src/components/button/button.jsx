import React from "react";
import './button.css';

function chooseClasses(state) {
    if (state === "active") {
        return "button button-active"
    } else {
        return "button button-disabled"
    }
}

function Button(props) {
    return (
        <button
            className={chooseClasses(props.state)}
            onClick={props.onClick}
        >
            {props.name}
        </button>
    );
}

export default Button;