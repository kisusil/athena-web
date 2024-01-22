import {createNewUser} from "./users";

const DEFAULT_APPLICATIONS = [
    {
        id: 1,
        email: "petrov01@yandex.ru",
        date: "30.12.23 15:26"
    },
    {
        id: 2,
        email: "masha99@mail.ru",
        date: "29.10.23 20:45"
    },
    {
        id: 3,
        email: "iras20@gmail.com",
        date: "28.09.23 13:13"
    },
    {
        id: 4,
        email: "vladimir96@gmail.com",
        date: "26.08.23 10:20"
    },
    {
        id: 5,
        email: "Latysheva.ilyana@yandex.ru",
        date: "06.05.23 17:56"
    },
    {
        id: 6,
        email: "nadi2023@gmail.com",
        date: "04.01.2024 11:24"
    }
]

const STORAGE_APPLICATIONS_KEY = 'aa-applications';
const STORAGE_APPLICATIONS_CURRENT_FREE_ID = 'aa-applications-current-free-id';

export function initializeDefaultValues() {
    window.localStorage.setItem(STORAGE_APPLICATIONS_KEY, JSON.stringify(DEFAULT_APPLICATIONS));
    window.localStorage.setItem(STORAGE_APPLICATIONS_CURRENT_FREE_ID, JSON.stringify(7));
}

export function getAllApplications() {
    const rawData = window.localStorage.getItem(STORAGE_APPLICATIONS_KEY);
    if (rawData && rawData !== '') {
        return JSON.parse(rawData);
    }
    return [];
}

export function getApplicationsPage(emailPattern) {
    const applications = getAllApplications();
    if (!emailPattern || emailPattern === '') {
        return applications.sort((a, b) => a.email - b.email).slice(0, 5);
    }
    return applications.filter((application) => application.email.includes(emailPattern))
        .sort((a, b) => a.email - b.email)
        .slice(0, 5);
}

export function acceptApplications(application, login) {
    const applications = getAllApplications();
    const targetApplicationIndex = applications.findIndex((el) => el.id === application.id);
    if (targetApplicationIndex < 0) return;

    createNewUser(login, application.email);
    const updatedApplications = applications.filter((el) => el.id !== application.id)
    window.localStorage.setItem(STORAGE_APPLICATIONS_KEY, JSON.stringify(updatedApplications));
}

export function rejectApplication(application) {
    const applications = getAllApplications();
    const updatedApplications = applications.filter((el) => el.id !== application.id);
    window.localStorage.setItem(STORAGE_APPLICATIONS_KEY, JSON.stringify(updatedApplications));
}