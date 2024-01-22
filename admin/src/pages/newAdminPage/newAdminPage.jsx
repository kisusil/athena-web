import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {createNewAdmin, getLoggedInAdmin} from "../../data/users";
import Navigation from "../../components/navigation/navigation";
import CreateFormAdmin from "../../components/createFormAdmin/createFormAdmin";

function NewAdminPage() {
    const navigate = useNavigate();
    const [login, setLogin] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        if(!getLoggedInAdmin()) navigate("/login");
    });
    if (!getLoggedInAdmin()) {
        return (<></>);
    }

    function isCreateAvailable() {
        return login && login !== '' && email && email !== '' && password && password !== '';
    }

    function onCreate() {
        createNewAdmin(login, email, password);
        navigate("/users");
    }

    function onCancel() {
        setLogin('');
        setEmail('');
        setPassword('');
        navigate("/users");
    }

    return (
        <div className="tab-body">
            <Navigation activeTab={1}/>
            <CreateFormAdmin
                login={login}
                setLogin={setLogin}
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                isCreateAvailable={isCreateAvailable}
                onCreate={onCreate}
                onCancel={onCancel}
            />
        </div>
    );
}

export default NewAdminPage;