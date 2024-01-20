import {getUserByEmail, registerUser} from "./users";

const STORAGE_INVITATIONS_KEY = 'am-invitations';
const STORAGE_LOGGED_IN_USER_KEY = 'am-logged-in-user'

export function initializeDefaultValues() {
    // nothing
}

function getAllInvitations() {
    const rawData = window.localStorage.getItem(STORAGE_INVITATIONS_KEY);
    if (rawData && rawData !== '') {
        return JSON.parse(rawData);
    }
    return [];
}

export function tryToLogin(email, code) {
    const invitations = getAllInvitations();
    const isSuccess = invitations.some((invitation) => invitation.email === email && invitation.code === code)

    if (isSuccess) {
        const user = getUserByEmail(email);
        window.localStorage.setItem(STORAGE_LOGGED_IN_USER_KEY, JSON.stringify(user));
    }

    return isSuccess;
}

export function sendApplication(email) {
    let invitations = getAllInvitations();
    invitations = invitations.concat({
        email: email,
        code: '1234',
    })
    window.localStorage.setItem(STORAGE_INVITATIONS_KEY, JSON.stringify(invitations));

    registerUser(email);
}