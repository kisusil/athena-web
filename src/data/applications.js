const DEFAULT_APPLICATIONS = [
    {
        email: "petrov01@yandex.ru",
        date: "30.12.23 15:26"
    },
    {
        email: "masha99@mail.ru",
        date: "29.10.23 20:45"
    },
    {
        email: "iras20@gmail.com",
        date: "28.09.23 13:13"
    },
    {
        email: "vladimir96@gmail.com",
        date: "26.08.23 10:20"
    },
    {
        email: "Latysheva.ilyana@yandex.ru",
        date: "06.05.23 17:56"
    },
    {
        email: "nadi2023@gmail.com",
        date: "04.01.2024 11:24"
    }
]

export function getAllDefaultApplications() {
    return DEFAULT_APPLICATIONS.slice(0, 5);
}

export function getDefaultApplicationsFiltered(emailPattern) {
    return DEFAULT_APPLICATIONS
        .filter((application) => application.email.includes(emailPattern))
        .slice(0, 5);
}