import React, {useEffect} from "react";
import {logout} from "../../data/users";
import {useNavigate} from "react-router-dom";

function LogoutPage() {
    const navigate = useNavigate();
    useEffect(() => {
        logout();
        navigate("/login");
    });
    return (<></>);
}

export default LogoutPage;