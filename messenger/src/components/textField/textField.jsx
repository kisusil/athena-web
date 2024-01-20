import React from "react";
import './textField.css';

function chooseClassesForLabel(isError, error) {
    if (isError === true && error !== undefined && error !== "") {
        return "label-for-input label-for-input-textError";
    }
    if (isError === true && error === undefined) {
        return "label-for-input label-for-input-error";
    }
    return "label-for-input";
}

function chooseClassesForInput(isError, error) {
    if (isError === true && error !== undefined && error !== "") {
        return "input input-textError";
    }
    if (isError === true && error === undefined) {
        return "input input-error";
    }
    return "input";
}

function TextField(props) {
    function onInputChange(e) {
        props.setValue(e.target.value)
    }

    return (
        <div className="textField">
            <label
                className={chooseClassesForLabel(props.isError, props.error)}
            >
                {props.title}
            </label>
            <input
                className={chooseClassesForInput(props.isError, props.error)}
                type={props.type}
                placeholder={props.placeholder}
                value={props.value}
                onChange={onInputChange}
            />
            <span
                className="error-for-input"
            >
                {props.error}
            </span>
        </div>
    );
}

export default TextField;