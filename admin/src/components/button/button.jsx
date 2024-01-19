import React from "react";
import './button.css';

function chooseClasses(state, size, accentColor) {
    if (size==="large" && state === "active" && accentColor === "blue") {
        return "button buttonLarge button-active"
    }
    if (size==="large" && state === "active" && accentColor === "red") {
        return "button buttonLarge button-active-accent"
    }
    if (size==="large" && state === "disabled" && accentColor === "blue") {
        return "button buttonLarge button-disabled"
    }
    if (size==="large" && state === "disabled" && accentColor === "red") {
        return "button buttonLarge button-disabled-accent"
    }
    if (size==="medium" && state === "active" && accentColor === "blue") {
        return "button buttonMedium button-active"
    }
    if (size==="medium" && state === "active" && accentColor === "red") {
        return "button buttonMedium button-active-accent"
    }
    if (size==="medium" && state === "disabled" && accentColor === "blue") {
        return "button buttonMedium button-disabled"
    }
    if (size==="medium" && state === "disabled" && accentColor === "red") {
        return "button buttonMedium button-disabled-accent"
    }
}

function Button(props) {
    return (
        <button
            className={chooseClasses(props.state, props.size, props.accentColor)}
            onClick={props.onClick}
        >
            {props.name}
        </button>
    );
}

export default Button;