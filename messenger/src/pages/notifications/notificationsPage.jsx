import MessengerPage from "../../components/messengerPage/messengerPage";
import './notificationsPage.css';
import Notification from "../../components/notification/notification";
import {useNavigate} from "react-router-dom";
import {getLoggedInUser} from "../../data/users";
import {useEffect} from "react";

function NotificationsPage() {
    const navigate = useNavigate();

    useEffect(() => {
        if (!getLoggedInUser()) navigate("/login");
    });
    if (!getLoggedInUser()) {
        return (<></>);
    }

    return (
        <MessengerPage activeHeaderTab={2}>
            <section className="notifications-block">
                <Notification
                    user={{
                        name: 'Александр',
                        surname: 'Степанов',
                    }}
                />
                <Notification
                    user={{
                        name: 'Ирина',
                        surname: 'Стрельцова',
                    }}
                />
                <Notification
                    user={{
                        name: 'Тимофей',
                        surname: 'Петров',
                    }}
                />
            </section>
        </MessengerPage>
    )
}

export default NotificationsPage;