import MessengerPage from "../../components/messengerPage/messengerPage";
import './notificationsPage.css';
import Notification from "../../components/notification/notification";

function NotificationsPage() {

    return (
        <MessengerPage>
            <section className="notifications-block">
                <Notification/>
                <Notification/>
                <Notification/>
            </section>
        </MessengerPage>
    )
}

export default NotificationsPage;