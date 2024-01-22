import React, {useEffect, useState} from "react";
import MessengerPage from "../../components/messengerPage/messengerPage";
import EditProfileForm from "../../components/profileForms/createProfileForm/editProfileForm";
import {doLogout, getLoggedInUser} from "../../data/users";
import {updateUser} from "../../data/users";
import ViewProfileForm from "../../components/profileForms/viewProfileForm/viewProfileForm";
import {useNavigate} from "react-router-dom";

function ProfilePage() {
    const [user, setUser] = useState(getLoggedInUser())
    const [isNewUser, setIsNewUser] = useState(findOutIsNewUser());
    const [isEditMode, setIsEditMode] = useState(false);

    const navigate = useNavigate();
    useEffect(() => {
        if (!user) navigate("/login");
    }, [navigate, user]);
    if (!user) {
        return (<></>);
    }

    function findOutIsNewUser() {
        const loggedInUser = getLoggedInUser();
        return loggedInUser && (!loggedInUser.name || !loggedInUser.surname);
    }

    function isFormFilled() {
        return user.name && user.name !== '' && user.surname && user.surname !== ''
            && user.login && user.login !== '' && user.email && user.email !== '';
    }

    function onSave() {
        if (!isFormFilled()) return;

        updateUser(user);
        setIsNewUser(findOutIsNewUser());
        setIsEditMode(false);
    }

    function onCancel() {
        setUser(getLoggedInUser());
        setIsEditMode(false);
    }

    function onLogout() {
        doLogout();
        setUser(undefined);
    }

    function onNameChange(name) {
        setUser({
            ...user,
            name: name
        })
    }
    function onSurnameChange(surname) {
        setUser({
            ...user,
            surname: surname
        })
    }
    function onLoginChange(login) {
        setUser({
            ...user,
            login: login
        })
    }
    function onEmailChange(email) {
        setUser({
            ...user,
            email: email
        })
    }

    return (
        <MessengerPage activeHeaderTab={0}>
            {isNewUser && (
                <EditProfileForm
                    user={user}
                    onNameChange={onNameChange}
                    onSurnameChange={onSurnameChange}
                    onLoginChange={onLoginChange}
                    onEmailChange={onEmailChange}
                    isFormFilled={isFormFilled}
                    onSave={onSave}
                />
            )}
            {!isNewUser && !isEditMode && (
                <ViewProfileForm
                    user={user}
                    onEditMode={() => setIsEditMode(true)}
                    onLogout={onLogout}
                />
            )}
            {!isNewUser && isEditMode && (
                <EditProfileForm
                    user={user}
                    onNameChange={onNameChange}
                    onSurnameChange={onSurnameChange}
                    onLoginChange={onLoginChange}
                    onEmailChange={onEmailChange}
                    isFormFilled={isFormFilled}
                    onSave={onSave}
                    onCancel={onCancel}
                />
            )}
        </MessengerPage>
    )
}

export default ProfilePage;