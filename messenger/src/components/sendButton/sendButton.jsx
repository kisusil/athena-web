import React from "react";
import './sendButton.css';

function SendButton(props) {
    return (
        <svg
            className={props.isActive() ? "send-button-active" : "send-button-disabled"}
            width="54"
            height="54"
            viewBox="0 0 54 54"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => props.isActive ? props.onClick() : () => ""}
        >
            <g id="Message" opacity="0.5">
                <circle id="Ellipse 12" cx="27" cy="27" r="27" fill="#6A8EE8"/>
                <path id="Arrow 2"
                      d="M25.5 39C25.5 39.8284 26.1716 40.5 27 40.5C27.8284 40.5 28.5 39.8284 28.5 39L25.5 39ZM28.0607 13.9393C27.4749 13.3536 26.5251 13.3536 25.9393 13.9393L16.3934 23.4853C15.8076 24.0711 15.8076 25.0208 16.3934 25.6066C16.9792 26.1924 17.9289 26.1924 18.5147 25.6066L27 17.1213L35.4853 25.6066C36.0711 26.1924 37.0208 26.1924 37.6066 25.6066C38.1924 25.0208 38.1924 24.0711 37.6066 23.4853L28.0607 13.9393ZM28.5 39L28.5 15L25.5 15L25.5 39L28.5 39Z"
                      fill="white"/>
            </g>
        </svg>
    );
}

export default SendButton;