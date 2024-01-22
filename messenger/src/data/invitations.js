import {dateToFormattedString, getAllUsers, getUserByEmail, registerUser} from "./users";
import {STORAGE_DEV_FLAG} from "./storage";

const STORAGE_INVITATIONS_KEY = 'am-invitations';
const STORAGE_USERS_KEY = 'am-users';
const STORAGE_LOGGED_IN_USER_KEY = 'am-logged-in-user'

const STORAGE_APPLICATIONS_AA_KEY = 'aa-applications';
const STORAGE_APPLICATIONS_CURRENT_FREE_ID = 'aa-applications-current-free-id';

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

    if (!isSuccess) return false;

    const users = getAllUsers();
    const targetIndex = users.findIndex((user) => user.email === email);
    users[targetIndex].lastLogin = dateToFormattedString(new Date());

    if (!users[targetIndex].blocked) {
        window.localStorage.setItem(STORAGE_LOGGED_IN_USER_KEY, JSON.stringify(users[targetIndex]));
        window.localStorage.setItem(STORAGE_USERS_KEY, JSON.stringify(users));
        return true;
    }

    return false;
}

export function sendApplication(email) {
    const rawData = window.localStorage.getItem(STORAGE_APPLICATIONS_AA_KEY);
    let applications = [];
    if (rawData && rawData !== '') {
        applications = JSON.parse(rawData);
    } else {
        window.localStorage.setItem(STORAGE_APPLICATIONS_AA_KEY, JSON.stringify([]));
    }

    const rawDataAppId = window.localStorage.getItem(STORAGE_APPLICATIONS_CURRENT_FREE_ID);
    let applicationId = 1;
    if (rawDataAppId && rawDataAppId !== '') {
        applicationId = JSON.parse(rawDataAppId);

        window.localStorage.setItem(STORAGE_APPLICATIONS_CURRENT_FREE_ID, JSON.stringify(applicationId + 1));
    } else {
        window.localStorage.setItem(STORAGE_APPLICATIONS_CURRENT_FREE_ID, JSON.stringify(2));
    }

    const newApplication = {
        id: applicationId,
        email: email,
        date: dateToFormattedString(new Date()),
    }
    const updatedApplications = applications.concat(newApplication);
    window.localStorage.setItem(STORAGE_APPLICATIONS_AA_KEY, JSON.stringify(updatedApplications));

    const rawDataDevFlag = window.localStorage.getItem(STORAGE_DEV_FLAG);
    let devFlag = false;
    if (rawDataDevFlag && rawDataDevFlag !== '') {
        devFlag = JSON.parse(rawDataDevFlag);
    }

    if (devFlag) {
        let invitations = getAllInvitations();
        invitations = invitations.concat({
            email: email,
            code: '1234',
        })
        window.localStorage.setItem(STORAGE_INVITATIONS_KEY, JSON.stringify(invitations));
    }

    registerUser(email);
}