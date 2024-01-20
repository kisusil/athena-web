import React, {useEffect} from "react";
import {getLoggedInUser} from "../data/users";
import {useNavigate} from "react-router-dom";

function IndexPage() {
    const navigate = useNavigate();
    useEffect(() => {
        if (getLoggedInUser()) {
            navigate("/profile");
        } else {
            navigate("/login");
        }
    })
    return (<></>)
}

export default IndexPage;