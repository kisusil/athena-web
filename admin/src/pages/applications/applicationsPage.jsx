import React, {useEffect, useState} from "react";
import './applicationsPage.css';
import TextField from "../../components/textField/textField";
import Button from "../../components/button/button";
import Navigation from "../../components/navigation/navigation";
import Application from "../../components/application/application";
import {useNavigate} from "react-router-dom";
import {getLoggedInAdmin} from "../../data/users";
import {acceptApplications, getApplicationsPage, rejectApplication} from "../../data/applications";

function ApplicationsPage() {
    const [emailPattern, setEmailPattern] = useState('');
    const [applications, setApplications] = useState(getApplicationsPage(emailPattern));
    const navigate = useNavigate();

    useEffect(() => {
        if (!getLoggedInAdmin()) {
            navigate("/login");
        }
    })
    if (!getLoggedInAdmin()) {
        return (<></>);
    }

    function onSearch() {
        setApplications(getApplicationsPage(emailPattern));
    }

    function onAccept(application, login) {
        acceptApplications(application, login);
        setApplications(getApplicationsPage(emailPattern));
    }

    function onReject(application) {
        rejectApplication(application);
        setApplications(getApplicationsPage(emailPattern))
    }

    return (
        <div className="tab-body">
            <Navigation activeTab={0}/>
            <article>
              <h1>Заявки на регистрацию</h1>
            </article>
            <section className="tab-block">
                <section className="searchForm">
                    <TextField
                        title="Поиск по почте"
                        type="text"
                        placeholder="Введите почту"
                        value={emailPattern}
                        setValue={setEmailPattern}
                    />
                    <Button
                        name="Поиск"
                        state="active"
                        size="medium"
                        accentColor="blue"
                        onClick={onSearch}
                    />
                </section>
                <section className="list-applications">
                    { applications.map((application) => (
                        <Application
                            key={application.id}
                            application={application}
                            onAccept={onAccept}
                            onReject={onReject}
                        />
                    ))}
                </section>
            </section>
        </div>
    );
}

export default ApplicationsPage;