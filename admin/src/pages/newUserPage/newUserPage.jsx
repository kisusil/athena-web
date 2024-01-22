import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {createNewUser, getLoggedInAdmin} from "../../data/users";
import Navigation from "../../components/navigation/navigation";
import CreateFormUser from "../../components/createFormUser/createFormUser";

function NewUserPage() {
    const navigate = useNavigate();
    const [login, setLogin] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        if (!getLoggedInAdmin()) navigate("/login");
    });
    if (!getLoggedInAdmin()) {
        return (<></>);
    }

    function isCreateAvailable() {
        return login && login !== '' && email && email !== '';
    }

    function onCreate() {
        createNewUser(login, email);
        navigate("/users");
    }

    function onCancel() {
        setLogin('');
        setEmail('');
        navigate("/users");
    }

    return (
        <div className="tab-body">
            <Navigation activeTab={1}/>
            <CreateFormUser
                login={login}
                setLogin={setLogin}
                email={email}
                setEmail={setEmail}
                isCreateAvailable={isCreateAvailable}
                onCreate={onCreate}
                onCancel={onCancel}
            />
        </div>
    );
}

export default NewUserPage;