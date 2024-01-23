import MessengerPage from "../../components/messengerPage/messengerPage";
import ChatCard from "../../components/chatCard/chatCard";
import Button from "../../components/button/button";
import './chatsPage.css';

function ChatsPage() {

    return (
        <MessengerPage activeHeaderTab={1}>
            <div className="chats-block">
                <section className="chats-list">
                    <ChatCard/>
                    <ChatCard/>
                    <ChatCard/>
                    <ChatCard/>
                </section>
                <section className="block-create-chats">
                    <Button/>
                </section>
            </div>
        </MessengerPage>
    )
}

export default ChatsPage;