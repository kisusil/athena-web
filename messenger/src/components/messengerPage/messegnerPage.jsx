import React from "react";
import Navigation from "../navigation/navigation";
import './messengerPage.css';

function MessengerPage(props) {
    return (
        <div className="messenger-page">
            <Navigation activeTab={props.activeHeaderTab}/>
            <div className="messenger-page__content-wrapper">
                {props.children}
            </div>
        </div>
    )
}

export default MessengerPage;