const USER_1_EMAIL = 'mivanova@example.com'
const USER_1_NAME = 'Марина'
const USER_1_SURNAME = 'Иванова'
const USER_1_LOGIN = 'mivanova'
const USER_2_EMAIL = 'tpetrov@example.com'
const USER_2_NAME = 'Тимофей'
const USER_2_SURNAME = 'Петров'
const USER_2_LOGIN = 'tpetrov'

const STORAGE_USERS_KEY = 'am-users';

export function initializeDefaultValues() {
    const users = [
        {
            email: USER_1_EMAIL,
            name: USER_1_NAME,
            surname: USER_1_SURNAME,
            login: USER_1_LOGIN,
        },
        {
            email: USER_2_EMAIL,
            name: USER_2_NAME,
            surname: USER_2_SURNAME,
            login: USER_2_LOGIN,
        },
    ]

    window.localStorage.setItem(STORAGE_USERS_KEY, JSON.stringify(users));
}

export function getAllUsers() {
    const rawData = window.localStorage.getItem(STORAGE_USERS_KEY);
    if (rawData && rawData !== '') {
        return JSON.parse(rawData);
    }
    return [];
}

export function doesUserWithSuchEmailExist(email) {
    const users = getAllUsers();
    return users.some((user) => user.email === email);
}

export function registerUser(email) {
    // TODO: Если реализуем связь состояния между админом и мессенджером - надо менять логику
    let users = getAllUsers();
    users = users.concat(
        {
            email: email,
            login: email,
            name: '',
            surname: '',
        }
    );
    window.localStorage.setItem(STORAGE_USERS_KEY, JSON.stringify(users));
}