import MessengerPage from "../../components/messengerPage/messengerPage";
import './chatsPage.css';
import TextField from "../../components/textField/textField";
import Message from "../../components/message/message";
import ChatCard from "../../components/chatCard/chatCard";
import UserCard from "../../components/userCard/userCard";
import Button from "../../components/button/button";

function ChatsPage(props) {

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
                    <div className="block-users">
                        <UserCard/>
                        <UserCard/>
                        <UserCard/>
                    </div>
                    <Button
                        name="Создать чат"
                        state="active"
                        size="large"
                        accentColor="blue"
                    />
                </section>
            </div>
        </MessengerPage>
        // <MessengerPage activeHeaderTab={1}>
        //     <section className="block-chat">
        //         <div className="chat-header">
        //             <svg
        //                 className="card-return-icon"
        //                 width="36"
        //                 height="36"
        //                 viewBox="0 0 36 36"
        //                 fill="none"
        //                 xmlns="http://www.w3.org/2000/svg"
        //                 //onClick={() => navigate("/chats")}
        //             >
        //                 <g id="Back">
        //                     <path d="M0 0H28C32.4183 0 36 3.58172 36 8V28C36 32.4183 32.4183 36 28 36H0V0Z"
        //                           fill="#6A8EE8"
        //                           id="fill"
        //                     />
        //                     <path id="Arrow 2"
        //                           d="M26 19C26.5523 19 27 18.5523 27 18C27 17.4477 26.5523 17 26 17V19ZM9.29289 17.2929C8.90237 17.6834 8.90237 18.3166 9.29289 18.7071L15.6569 25.0711C16.0474 25.4616 16.6805 25.4616 17.0711 25.0711C17.4616 24.6805 17.4616 24.0474 17.0711 23.6569L11.4142 18L17.0711 12.3431C17.4616 11.9526 17.4616 11.3195 17.0711 10.9289C16.6805 10.5384 16.0474 10.5384 15.6569 10.9289L9.29289 17.2929ZM26 17L10 17V19L26 19V17Z"
        //                           fill="white"
        //                     />
        //                 </g>
        //             </svg>
        //             <span className="chat-header-name">Ирина Стрельцова</span>
        //         </div>
        //         <div className="chat">
        //             <div className="messages">
        //                 <Message/>
        //                 <Message/>
        //             </div>
        //             <div className="send-message-form">
        //                 <TextField
        //                     title=""
        //                     type="text"
        //                     placeholder="Напишите сообщение"
        //                     value=""
        //                     setValue=""
        //                 />
        //                 <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
        //                     <g id="Message" opacity="0.5">
        //                         <circle id="Ellipse 12" cx="27" cy="27" r="27" fill="#6A8EE8"/>
        //                         <path id="Arrow 2"
        //                               d="M25.5 39C25.5 39.8284 26.1716 40.5 27 40.5C27.8284 40.5 28.5 39.8284 28.5 39L25.5 39ZM28.0607 13.9393C27.4749 13.3536 26.5251 13.3536 25.9393 13.9393L16.3934 23.4853C15.8076 24.0711 15.8076 25.0208 16.3934 25.6066C16.9792 26.1924 17.9289 26.1924 18.5147 25.6066L27 17.1213L35.4853 25.6066C36.0711 26.1924 37.0208 26.1924 37.6066 25.6066C38.1924 25.0208 38.1924 24.0711 37.6066 23.4853L28.0607 13.9393ZM28.5 39L28.5 15L25.5 15L25.5 39L28.5 39Z"
        //                               fill="white"/>
        //                     </g>
        //                 </svg>
        //             </div>
        //         </div>
        //     </section>
        // </MessengerPage>
    )
}

export default ChatsPage;