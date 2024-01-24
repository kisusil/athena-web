import React, {useCallback, useEffect, useRef, useState} from "react";
import MessengerPage from "../../components/messengerPage/messengerPage";
import {useNavigate} from "react-router-dom";
import {getLoggedInUser} from "../../data/users";
import Message from "../../components/message/message";
import TextField from "../../components/textField/textField";
import './chatPage.css';
import {getSelectedChat, pushMessageToChat} from "../../data/chats";
import SendButton from "../../components/sendButton/sendButton";

function ChatPage() {
    const [, setRefState] = useState(null);
    const scrollChildRef = useCallback((node) => {
        setRefState(node);
        if (node) {
            node.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);

    const navigate = useNavigate();
    const [chat, setChat] = useState(getSelectedChat());
    const [text, setText] = useState('');
    const [lastMessageIndex, setLastMessageIndex] = useState(chat ? chat.messages.length - 1 : -1);
    const thisUser = getLoggedInUser();

    useEffect(() => {
        if (!getLoggedInUser()) {
            navigate("/login");
        }
    }, [navigate, scrollChildRef]);
    if (!getLoggedInUser()) {
        return (<></>);
    }

    function isSendAvailable() {
        return text && text !== '';
    }

    function onMessageSend() {
        pushMessageToChat(chat, text);
        setChat(getSelectedChat());
        setText('');
        setLastMessageIndex(getSelectedChat().messages.length - 1);
    }

    return (
        <MessengerPage activeHeaderTab={1}>
            <section className="block-chat">
                <div className="chat-header">
                    <svg
                        className="card-return-icon"
                        width="36"
                        height="36"
                        viewBox="0 0 36 36"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        onClick={() => navigate("/chats")}
                    >
                        <g id="Back">
                            <path d="M0 0H28C32.4183 0 36 3.58172 36 8V28C36 32.4183 32.4183 36 28 36H0V0Z"
                                  fill="#6A8EE8"
                                  id="fill"
                            />
                            <path id="Arrow 2"
                                  d="M26 19C26.5523 19 27 18.5523 27 18C27 17.4477 26.5523 17 26 17V19ZM9.29289 17.2929C8.90237 17.6834 8.90237 18.3166 9.29289 18.7071L15.6569 25.0711C16.0474 25.4616 16.6805 25.4616 17.0711 25.0711C17.4616 24.6805 17.4616 24.0474 17.0711 23.6569L11.4142 18L17.0711 12.3431C17.4616 11.9526 17.4616 11.3195 17.0711 10.9289C16.6805 10.5384 16.0474 10.5384 15.6569 10.9289L9.29289 17.2929ZM26 17L10 17V19L26 19V17Z"
                                  fill="white"
                            />
                        </g>
                    </svg>
                    <span className="chat-header-name">{chat.user.name} {chat.user.surname}</span>
                </div>
                <div className="chat">
                    <div className="messages">
                        {chat && chat.messages && chat.messages.sort((a, b) => new Date(a.date) - new Date(b.date)).map((message, index) => (
                            <Message
                                key={index + lastMessageIndex}
                                message={message}
                                isMy={thisUser.id === message.authorId}
                                lastMessageRef={index === lastMessageIndex ? scrollChildRef : undefined}
                            />
                        ))}
                    </div>
                    <div className="send-message-form">
                        <TextField
                            title=""
                            type="text"
                            placeholder="Напишите сообщение"
                            value={text}
                            setValue={setText}
                        />
                        <SendButton
                            isActive={isSendAvailable}
                            onClick={onMessageSend}
                        />
                    </div>
                </div>
            </section>
        </MessengerPage>
    );
}

export default ChatPage;