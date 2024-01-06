import React from "react";
import './textField.css';

function TextField(props) {
    return (
        <div className="textField">
            <label
                className="label-for-input"
                htmlFor="login"
            >
                {props.title}
            </label>
            <input
                className="input"
                type="text"
                name="login"
                placeholder={props.placeholder}
            />
        </div>
    );
}

export default TextField;