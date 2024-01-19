import React from "react";
import './toasted.css';

function Toasted(props) {

    return (
        <div className="toasted">
            <img src="iconSuccess.svg" alt="Успех"/>
            <span className="info-toasted">
                {props.name}
            </span>
        </div>
    );
}

export default Toasted;