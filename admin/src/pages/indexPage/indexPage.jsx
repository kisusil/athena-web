import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {getLoggedInAdmin} from "../../data/users";

function IndexPage() {
    const navigate = useNavigate();
    useEffect(() => {
        if (getLoggedInAdmin()) {
            navigate("/applications");
        } else {
            navigate("/login");
        }
    });
    return (<></>);
}

export default IndexPage;