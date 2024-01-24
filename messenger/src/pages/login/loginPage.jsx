import React, {useEffect, useState} from "react";
import './loginPage.css';
import TextField from "../../components/textField/textField";
import {doesUserWithSuchEmailExist, getLoggedInUser} from "../../data/users";
import {tryToLogin, sendApplication, generateInvitations} from "../../data/invitations";
import Button from "../../components/button/button";
import Toasted from "../../components/toasted/toasted";
import {useNavigate} from "react-router-dom";

function LoginPage() {
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [invitation, setInvitation] = useState('');
    const [invitationError, setInvitationError] = useState('');
    const [isInvitationFormVisible, setInvitationFormVisible] = useState(false);
    const [successToastVisible, setSuccessToastVisible] = useState(false);
    const [loggedInUser,] = useState(getLoggedInUser())
    const navigate = useNavigate();

    function isEmailFormFilled() {
        return email && email !== '';
    }

    function isInvitationFormFilled() {
        return invitation && invitation !== '';
    }

    function onLogin() {
        if (!isEmailFormFilled()) {
            setEmailError('Email не может быть пустым');
            return;
        }

        if (!doesUserWithSuchEmailExist(email)) {
            setEmailError('Такого пользователя не существует. Проверьте введенные данные или зарегистрируйтесь');
            return;
        }

        setEmailError(undefined);
        setInvitationFormVisible(true);
        generateInvitations(email);
    }

    function onRegister() {
        if (!isEmailFormFilled()) {
            setEmailError('Email не может быть пустым');
            return;
        }

        if (doesUserWithSuchEmailExist(email)) {
            setEmailError('Такой пользователь уже существует. Попробуйте войти');
            return;
        }

        setEmailError(undefined);

        sendApplication(email);
        setSuccessToastVisible(true);
    }

    function onInvitationSend() {
        if (!isInvitationFormFilled()) {
            setInvitationError('Код должен быть введен');
            return;
        }

        if (!tryToLogin(email, invitation)) {
            setInvitationError('Такого кода не существует. Проверьте введенные данные и попробуйте еще раз');
            return;
        }

        setInvitationError('');
        navigate("/profile");
    }

    useEffect(() => {
        if (getLoggedInUser()) navigate("/profile");
        setTimeout(() => setSuccessToastVisible(false), 5000);
    }, [navigate, loggedInUser, successToastVisible]);

    if (loggedInUser) {
        return (<></>);
    }

    return (
        <>
            {successToastVisible && (
                <Toasted className="login-success-toast" name='Ваша заявка отправлена на проверку. В течение 24 часов придет ответ на указанную почту'/>
            )}
            <div className="login-body">
                <div className="loginForm">
                    <img src="largeLogo.svg" alt="Логотип"/>
                    {isInvitationFormVisible && (
                        <section className="form">
                            <TextField
                                title="Код"
                                type="email"
                                placeholder="Введите код"
                                error={invitationError}
                                isError={invitationError && invitationError !== ''}
                                value={invitation}
                                setValue={setInvitation}
                            />
                            {isInvitationFormFilled() && (
                                <Button
                                    name="Подтвердить"
                                    state="active"
                                    size="large"
                                    accentColor="blue"
                                    onClick={onInvitationSend}
                                />
                            )}
                            {!isInvitationFormFilled() && (
                                <Button
                                    name="Подтвердить"
                                    state="disabled"
                                    size="large"
                                    accentColor="blue"
                                    onClick={() => ""}
                                />
                            )}
                        </section>
                    )}
                    {!isInvitationFormVisible && (
                        <section className="form">
                            <TextField
                                title="Почта"
                                type="email"
                                placeholder="Введите почту"
                                error={emailError}
                                isError={emailError && emailError !== ''}
                                value={email}
                                setValue={setEmail}
                            />
                            {isEmailFormFilled() && (
                                <Button
                                    name="Войти"
                                    state="active"
                                    size="large"
                                    accentColor="blue"
                                    onClick={onLogin}
                                />
                            )}
                            {!isEmailFormFilled() && (
                                <Button
                                    name="Войти"
                                    state="disabled"
                                    size="large"
                                    accentColor="blue"
                                    onClick={() => ""}
                                />
                            )}
                            {isEmailFormFilled() && (
                                <Button
                                    name="Зарегистрироваться"
                                    state="active"
                                    size="large"
                                    accentColor="blue"
                                    onClick={onRegister}
                                />
                            )}
                            {!isEmailFormFilled() && (
                                <Button
                                    name="Зарегистрироваться"
                                    state="disabled"
                                    size="large"
                                    accentColor="blue"
                                    onClick={() => ""}
                                />
                            )}
                        </section>
                    )}
                </div>
            </div>
        </>
    );
}

export default LoginPage;