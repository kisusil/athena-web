import {registerUser} from "./users";

const STORAGE_INVITATIONS_KEY = 'am-invitations';

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

export function isInvitationCorrect(email, code) {
    const invitations = getAllInvitations();
    return invitations.some((invitation) => invitation.email === email && invitation.code === code)
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