import MessengerPage from "../../components/messengerPage/messengerPage";
import './chatsPage.css';
import ChatCard from "../../components/chatCard/chatCard";
import UserCard from "../../components/userCard/userCard";
import Button from "../../components/button/button";
import {useEffect, useState} from "react";
import {getLoggedInUser, getOtherUsers} from "../../data/users";
import {createChat, getExtendedChatsByThisUser, selectChat} from "../../data/chats";
import {useNavigate} from "react-router-dom";

function transformUsersToCards(users, selectedCardId) {
    return users.map((user) => {
        return {...user, isSelected: user.id === selectedCardId};
    })
}

function ChatsPage(props) {
    const [cards, setCards] = useState(transformUsersToCards(getOtherUsers(), 0));
    const chats = getExtendedChatsByThisUser();
    const navigate = useNavigate();

    function onCardSelect(selectedCard) {
        setCards(transformUsersToCards(getOtherUsers(), selectedCard.id));
    }

    function onChatSelect(chat) {
        selectChat(chat);
        navigate("/chat");
    }

    function onChatCreate() {
        const selectedCard = cards.find((card) => card.isSelected);
        if (!selectedCard) return;
        createChat(selectedCard);
        navigate("/chat");
    }

    useEffect(() => {
        if (!getLoggedInUser()) navigate("/login");
    });
    if (!getLoggedInUser()) {
        return (<></>);
    }

    return (
        <MessengerPage activeHeaderTab={1}>
            <div className="chats-block">
                <section className="chats-list">
                    {chats && chats.map((chat) => (
                        <ChatCard
                            key={chat.id}
                            chat={chat}
                            onSelect={onChatSelect}
                        />
                    ))}
                </section>
                <section className="block-create-chats">
                    <div className="block-users">
                        {cards && cards.map((card) => (
                            <UserCard key={card.id} card={card} onSelect={onCardSelect}/>
                        ))}
                    </div>
                    <Button
                        name="Создать чат"
                        state="active"
                        size="large"
                        accentColor="blue"
                        onClick={onChatCreate}
                    />
                </section>
            </div>
        </MessengerPage>
    )
}

export default ChatsPage;