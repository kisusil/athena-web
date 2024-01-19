const ADMIN_1_ID = 1
const ADMIN_1_LOGIN = "admin1"
const ADMIN_1_PASSWORD = "admin12345678"
const ADMIN_2_ID = 2
const ADMIN_2_LOGIN = "admin2"
const ADMIN_2_PASSWORD = "admin2222"

export function adminLogin(login, password) {
    if (login === ADMIN_1_LOGIN && password === ADMIN_1_PASSWORD) {
        return ADMIN_1_ID;
    }

    if (login === ADMIN_2_LOGIN && password === ADMIN_2_PASSWORD) {
        return ADMIN_2_ID;
    }

    return null;
}