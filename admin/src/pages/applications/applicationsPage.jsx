import React, {useState} from "react";
import './applicationsPage.css';
import TextField from "../../components/textField/textField";
import Button from "../../components/button/button";
import Navigation from "../../components/navigation/navigation";
import Application from "../../components/application/application";
import {getAllDefaultApplications, getDefaultApplicationsFiltered} from "../../data/applications";

function ApplicationsPage() {
    const [emailPattern, setEmailPattern] = useState(undefined)
    const [applications, setApplications] = useState(getAllDefaultApplications())

    function onSearch() {
        if (emailPattern === undefined || emailPattern === "") {
            setApplications(getAllDefaultApplications())
        } else {
            setApplications(getDefaultApplicationsFiltered(emailPattern))
        }
    }

    return (
        <div className="tab-body">
            <Navigation/>
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
                    { applications.map((application, index) => (
                        <Application
                            key={index}
                            name={application.email}
                            date={application.date}
                        />
                    ))}
                </section>
            </section>
        </div>
    );
}

export default ApplicationsPage;