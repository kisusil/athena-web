import React from "react";
import Navigation from "../navigation/navigation";

function MessengerPage(props) {
    return (
        <div className="tab-body">
            <Navigation activeTab={props.activeHeaderTab}/>
            {props.children}
        </div>
    )
}

export default MessengerPage;