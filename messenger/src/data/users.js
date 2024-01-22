const USER_1_EMAIL = 'mivanova@example.com'
const USER_1_NAME = 'Марина'
const USER_1_SURNAME = 'Иванова'
const USER_1_LOGIN = 'mivanova'
const USER_1_ID = 1
const USER_2_EMAIL = 'tpetrov@example.com'
const USER_2_NAME = 'Тимофей'
const USER_2_SURNAME = 'Петров'
const USER_2_LOGIN = 'tpetrov'
const USER_2_ID = 2

const STORAGE_USERS_KEY = 'am-users';
const STORAGE_CURRENT_FREE_ID_KEY = 'am-users-free-id';
const STORAGE_LOGGED_IN_USER_KEY = 'am-logged-in-user'

export function dateToFormattedString(date) {
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
            id: USER_1_ID,
            email: USER_1_EMAIL,
            name: USER_1_NAME,
            surname: USER_1_SURNAME,
            login: USER_1_LOGIN,
            blocked: false,
            lastLogin: dateToFormattedString(new Date()),
        },
        {
            id: USER_2_ID,
            email: USER_2_EMAIL,
            name: USER_2_NAME,
            surname: USER_2_SURNAME,
            login: USER_2_LOGIN,
            blocked: false,
            lastLogin: dateToFormattedString(new Date()),
        },
    ]

    window.localStorage.setItem(STORAGE_USERS_KEY, JSON.stringify(users));
    window.localStorage.setItem(STORAGE_CURRENT_FREE_ID_KEY, JSON.stringify(3));
}

export function getAllUsers() {
    const rawData = window.localStorage.getItem(STORAGE_USERS_KEY);
    if (rawData && rawData !== '') {
        return JSON.parse(rawData);
    }
    return [];
}

export function getUserByEmail(email) {
    const users = getAllUsers();
    return users.find((user) => user.email === email)
}

export function getLoggedInUser() {
    const rawData = window.localStorage.getItem(STORAGE_LOGGED_IN_USER_KEY);
    if (rawData && rawData !== '') {
        return JSON.parse(rawData);
    }
    return undefined;
}

export function doesUserWithSuchEmailExist(email) {
    const users = getAllUsers();
    return users.some((user) => user.email === email);
}

export function registerUser(email) {
    // TODO: Если реализуем связь состояния между админом и мессенджером - надо менять логику
    let users = getAllUsers();
    let newUserId = 1;
    const rawData = window.localStorage.getItem(STORAGE_CURRENT_FREE_ID_KEY);
    if (rawData) {
        newUserId = JSON.parse(rawData);

        window.localStorage.setItem(STORAGE_CURRENT_FREE_ID_KEY, JSON.stringify(newUserId + 1));
    }
    users = users.concat(
        {
            id: newUserId,
            email: email,
            login: email,
            name: '',
            surname: '',
        }
    );
    window.localStorage.setItem(STORAGE_USERS_KEY, JSON.stringify(users));
}

export function updateUser(user) {
    let users = getAllUsers();
    const oldUserIndex = users.findIndex((iterator) => user.id === iterator.id)
    if (oldUserIndex < 0) return;

    users[oldUserIndex] = user;
    window.localStorage.setItem(STORAGE_USERS_KEY, JSON.stringify(users));

    const loggedInUser = getLoggedInUser()
    if (loggedInUser.id === user.id) {
        window.localStorage.setItem(STORAGE_LOGGED_IN_USER_KEY, JSON.stringify(user));
    }
}

export function doLogout() {
    window.localStorage.removeItem(STORAGE_LOGGED_IN_USER_KEY);
}