import {STORAGE_DEV_FLAG} from "./storage";

const ADMIN_1_ID = 101
const ADMIN_1_LOGIN = "admin1"
const ADMIN_1_PASSWORD = "admin12345678"
const ADMIN_1_EMAIL = "admin1@example.com"
const ADMIN_2_ID = 102
const ADMIN_2_LOGIN = "admin2"
const ADMIN_2_PASSWORD = "admin2222"
const ADMIN_2_EMAIL = "admin2@example.com"

const STORAGE_ADMINS_KEY = "aa-admins";
const STORAGE_LOGGED_IN_ADMIN_KEY = "aa-logged-in-admin";
const STORAGE_CURRENT_AA_FREE_ID_KEY = 'aa-admins-free-id';

const STORAGE_USERS_KEY = "am-users";
const STORAGE_INVITATIONS_KEY = 'am-invitations';
const STORAGE_CURRENT_AM_FREE_ID_KEY = 'am-users-free-id';
const STORAGE_SELECTED_USER_ID_KEY = "aa-selected-user-id";

function dateToFormattedString(date) {
    return new Intl.DateTimeFormat('ru', {
        day: '2-digit',
        month: '2-digit',
        year: '2-digit',
        minute: 'numeric',
        hour: 'numeric'
    }).format(date).replace(',', '');
}

export function initializeDefaultValues() {
    const users = [
        {
            id: ADMIN_1_ID,
            login: ADMIN_1_LOGIN,
            email: ADMIN_1_EMAIL,
            password: ADMIN_1_PASSWORD,
            admin: true,
            blocked: false,
            lastLogin: dateToFormattedString(new Date()),
        },
        {
            id: ADMIN_2_ID,
            login: ADMIN_2_LOGIN,
            email: ADMIN_2_EMAIL,
            password: ADMIN_2_PASSWORD,
            admin: true,
            blocked: false,
            lastLogin: dateToFormattedString(new Date()),
        },
    ]
    window.localStorage.setItem(STORAGE_ADMINS_KEY, JSON.stringify(users));
    window.localStorage.setItem(STORAGE_CURRENT_AA_FREE_ID_KEY, JSON.stringify(103));
}

export function adminLogin(login, password) {
    const admins = getAllAdmins();
    let adminId = admins.findIndex((admin) => admin.login === login)
    if (adminId < 0) return false;

    const targetAdmin = admins[adminId];
    if (targetAdmin.password !== password || targetAdmin.blocked) return false;

    admins[adminId].lastLogin = dateToFormattedString(new Date());
    const loggedInAdmin = admins[adminId]
    window.localStorage.setItem(STORAGE_LOGGED_IN_ADMIN_KEY, JSON.stringify(loggedInAdmin));
    window.localStorage.setItem(STORAGE_ADMINS_KEY, JSON.stringify(admins));
    return true;
}

export function logout() {
    window.localStorage.removeItem(STORAGE_LOGGED_IN_ADMIN_KEY);
}

export function getLoggedInAdmin() {
    const rawData = window.localStorage.getItem(STORAGE_LOGGED_IN_ADMIN_KEY);
    if (rawData && rawData !== '') {
        return JSON.parse(rawData);
    }
    return undefined;
}

export function getAllAdmins() {
    const rawData = window.localStorage.getItem(STORAGE_ADMINS_KEY);
    if (rawData && rawData !== '') {
        return JSON.parse(rawData);
    }
    return [];
}

export function getAllUsers() {
    const rawData = window.localStorage.getItem(STORAGE_USERS_KEY);
    if (rawData && rawData !== '') {
        return JSON.parse(rawData);
    }
    return [];
}

export function getAllUsersGlobal() {
    const users = getAllUsers();
    const admins = getAllAdmins();

    return users.concat(admins);
}

export function getUsersGlobalFilteredByLogin(login, pageSize, pageNumber) {
    if (pageSize <= 0 || pageNumber < 1) return undefined;

    const mergedUsers = getAllUsersGlobal();

    const allContent =  mergedUsers.filter((user) => user.login.includes(login)).sort((a, b) => a.id - b.id)
    const totalPages = Math.ceil(allContent.length / pageSize);
    if (pageNumber > totalPages) {
        return {
            totalPages: totalPages,
            pageNumber: pageNumber,
            content: [],
        }
    }

    let pageContent = []
    for (let i = (pageNumber - 1) * pageSize; i < pageNumber * pageSize && i < allContent.length; i++) {
        pageContent[i - (pageNumber - 1) * pageSize] = allContent[i];
    }

    return {
        totalPages: totalPages,
        pageNumber: pageNumber,
        content: pageContent,
    }
}

export function getUserGlobalById(id) {
    const mergedUsers = getAllUsersGlobal();
    return mergedUsers.find((user) => user.id === id);
}

export function getSelectedUser() {
    const rawData = window.localStorage.getItem(STORAGE_SELECTED_USER_ID_KEY);
    if (rawData && rawData !== '') {
        const selectedUserId = JSON.parse(rawData);
        return getUserGlobalById(selectedUserId);
    }
    return undefined;
}

export function selectUser(id) {
    window.localStorage.setItem(STORAGE_SELECTED_USER_ID_KEY, JSON.stringify(id));
}

export function updateAdmin(admin) {
    const admins = getAllAdmins();
    const targetIndex = admins.findIndex((el) => el.id === admin.id);
    admins[targetIndex] = admin;
    if (targetIndex < 0) return;
    window.localStorage.setItem(STORAGE_ADMINS_KEY, JSON.stringify(admins));

    const loggedInAdmin = getLoggedInAdmin();
    if (loggedInAdmin.id === admin.id) {
        window.localStorage.setItem(STORAGE_LOGGED_IN_ADMIN_KEY, JSON.stringify(admin));
    }
}

export function blockAdmin(admin) {
    admin.blocked = true;
    updateAdmin(admin);

    const loggedInAdmin = getLoggedInAdmin();
    if (admin.id === loggedInAdmin.id) {
        window.localStorage.removeItem(STORAGE_LOGGED_IN_ADMIN_KEY);
    }
}

export function unblockAdmin(admin) {
    admin.blocked = false;
    updateAdmin(admin);
}

export function deleteAdmin(admin) {
    const admins = getAllAdmins();
    const updatedAdmins = admins.filter((el) => el.id !== admin.id);
    window.localStorage.setItem(STORAGE_ADMINS_KEY, JSON.stringify(updatedAdmins));

    const loggedInAdmin = getLoggedInAdmin();
    if (loggedInAdmin.id === admin.id) {
        window.localStorage.removeItem(STORAGE_LOGGED_IN_ADMIN_KEY);
    }
}

export function updateUser(user) {
    const users = getAllUsers();
    const targetIndex = users.findIndex((el) => el.id === user.id);
    if (targetIndex < 0) return;
    users[targetIndex] = user;
    window.localStorage.setItem(STORAGE_USERS_KEY, JSON.stringify(users));
}

export function blockUser(user) {
    user.blocked = true;
    updateUser(user);
}

export function unblockUser(user) {
    user.blocked = false;
    updateUser(user);
}

export function deleteUser(user) {
    const users = getAllUsers();
    const updatedUsers = users.filter((el) => el.id !== user.id);
    window.localStorage.setItem(STORAGE_USERS_KEY, JSON.stringify(updatedUsers));

    const rawData = window.localStorage.getItem(STORAGE_INVITATIONS_KEY);
    if (rawData && rawData !== '') {
        const invitations = JSON.parse(rawData);
        const updatedInvitations = invitations.filter((invitation) => invitation.email !== user.email);
        window.localStorage.setItem(STORAGE_INVITATIONS_KEY, JSON.stringify(updatedInvitations));
    }
}

function getAllInvitations() {
    const rawData = window.localStorage.getItem(STORAGE_INVITATIONS_KEY);
    if (rawData && rawData !== '') {
        return JSON.parse(rawData);
    }
    return [];
}

export function createNewUser(login, email) {
    const rawDataDevFlag = window.localStorage.getItem(STORAGE_DEV_FLAG);
    let devFlag = false;
    if (rawDataDevFlag && rawDataDevFlag !== '') {
        devFlag = JSON.parse(rawDataDevFlag);
    }

    const rawData = window.localStorage.getItem(STORAGE_CURRENT_AM_FREE_ID_KEY);
    if (!devFlag && (!rawData || rawData === '')) return;

    const users = getAllUsers();
    const alreadyExistedUser = users.find((user) => user.login === login || user.email === email)
    if (alreadyExistedUser) return;

    const admins = getAllAdmins();
    const alreadyExistedAdmin = admins.find((admin) => admin.login === login || admin.email === email)
    if (alreadyExistedAdmin) return;

    let currentAvailableId = 1;
    if (devFlag && (!rawData || rawData === '')) {
        window.localStorage.setItem(STORAGE_CURRENT_AM_FREE_ID_KEY, JSON.stringify(2));
        window.localStorage.setItem(STORAGE_USERS_KEY, JSON.stringify([]));
    } else {
        currentAvailableId = JSON.parse(rawData);
    }
    window.localStorage.setItem(STORAGE_SELECTED_USER_ID_KEY, JSON.stringify(currentAvailableId + 1));

    const invitations = getAllInvitations();
    const newUser = {
        id: currentAvailableId,
        login: login,
        email: email,
        name: '',
        surname: '',
        blocked: false,
        lastLogin: 'никогда',
    }
    const newInvitation = {
        email: email,
        code: '1234'
    }

    users.push(newUser);
    window.localStorage.setItem(STORAGE_USERS_KEY, JSON.stringify(users));

    invitations.push(newInvitation);
    window.localStorage.setItem(STORAGE_INVITATIONS_KEY, JSON.stringify(invitations));
}

export function createNewAdmin(login, email, password) {
    const rawData = window.localStorage.getItem(STORAGE_CURRENT_AA_FREE_ID_KEY);
    if (!rawData || rawData === '') return;

    const admins = getAllAdmins();
    const alreadyExistedAdmin = admins.find((admin) => admin.login === login || admin.email === email);
    if (alreadyExistedAdmin) return;

    const users = getAllUsers();
    const alreadyExistedUser = users.find((user) => user.login === login || user.email === email)
    if (alreadyExistedUser) return;

    const currentAvailableId = JSON.parse(rawData);
    window.localStorage.setItem(STORAGE_CURRENT_AA_FREE_ID_KEY, JSON.stringify(currentAvailableId + 1));

    const newAdmin = {
        id: currentAvailableId,
        login: login,
        email: email,
        password: password,
        blocked: false,
        admin: true,
        lastLogin: 'никогда',
    }

    admins.push(newAdmin);
    window.localStorage.setItem(STORAGE_ADMINS_KEY, JSON.stringify(admins));
}