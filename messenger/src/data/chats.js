import {getLoggedInUser, getUserById} from "./users";

const CHAT_USER_1_2_ID = "1-2"
const CHAT_USER_1_2_MESSAGES = [
    {
        authorId: 1,
        text: "Привет, как ты?",
        date: "2024-01-22T14:11:00.000Z",
    },
    {
        authorId: 1,
        text: "Я скоро уезжаю в командировку...",
        date: "2024-01-22T14:11:30.000Z",
    },
    {
        authorId: 1,
        text: "Жду нашей встречи!",
        date: "2024-01-22T14:12:30.000Z",
    },
    {
        authorId: 2,
        text: "Привет! У меня все хорошо. Давай завтра встретимся?",
        date: "2024-01-23T08:56:00.000Z",
    },
]

const STORAGE_CHATS_KEY = "am-chats";
const STORAGE_SELECTED_CHAT_ID_KEY = "am-selected-chat-id";

export function initializeDefaultValues() {
    const chats = [
        {
            id: CHAT_USER_1_2_ID,
            messages: CHAT_USER_1_2_MESSAGES,
        }
    ]

    window.localStorage.setItem(STORAGE_CHATS_KEY, JSON.stringify(chats));
}

function chatIdFromUsers(userA, userB) {
    if (userA.id === userB.id) return undefined;

    const aId = userA.id;
    const bId = userB.id;

    let chatId;
    if (aId < bId) {
        chatId = `${aId}-${bId}`;
    } else {
        chatId = `${bId}-${aId}`;
    }

    return chatId;
}

function otherUserIdFromChatId(chatId, thisUserId) {
    const parts = chatId.split('-');
    const userAId = Number(parts[0]);
    const userBId = Number(parts[1]);

    if (userAId === thisUserId) return userBId;
    return userAId;
}

export function getAllChats() {
    const rawData = window.localStorage.getItem(STORAGE_CHATS_KEY);
    if (rawData && rawData !== '') {
        return JSON.parse(rawData);
    }
    return [];
}

export function getChatWithUser(userOther) {
    const thisUser = getLoggedInUser();
    const chatId = chatIdFromUsers(thisUser, userOther);

    const chats = getAllChats();
    return chats.find((chat) => chat.id === chatId);
}

export function pushMessageToChat(chat, text) {
    const thisUser = getLoggedInUser();
    const message = {
        authorId: thisUser.id,
        text: text,
        date: new Date().toISOString(),
    }

    const localChat = {...chat};
    localChat.messages.push(message);

    const chats = getAllChats();
    const targetIndex = chats.findIndex((el) => el.id === localChat.id)

    if (targetIndex < 0) return;

    chats[targetIndex] = localChat;
    window.localStorage.setItem(STORAGE_CHATS_KEY, JSON.stringify(chats));
}

export function createChat(userOther) {
    const thisUser = getLoggedInUser();
    if (thisUser.id === userOther.id) return;

    const chat = {
        id: chatIdFromUsers(thisUser, userOther),
        messages: [],
    }

    const chats = getAllChats();
    chats.push(chat);
    window.localStorage.setItem(STORAGE_CHATS_KEY, JSON.stringify(chats));
    window.localStorage.setItem(STORAGE_SELECTED_CHAT_ID_KEY, JSON.stringify(chat.id));
}

export function selectChat(chat) {
    window.localStorage.setItem(STORAGE_SELECTED_CHAT_ID_KEY, JSON.stringify(chat.id));
}

export function getSelectedChat() {
    const rawData = window.localStorage.getItem(STORAGE_SELECTED_CHAT_ID_KEY);
    if (!rawData || rawData === '') return undefined;

    const chatId = JSON.parse(rawData);
    const thisUser = getLoggedInUser();
    const chats = getAllChats();

    const result = chats.filter((chat) => chat.id === chatId)
        .map((chat) => {
            return {
                ...chat,
                user: getUserById(otherUserIdFromChatId(chat.id, thisUser.id)),
                messages: chat.messages.sort((a, b) => new Date(b.date) - new Date(a.date))
            }
        });
    if (result.length <= 0) return undefined;
    return result[0];
}

export function getExtendedChatsByThisUser() {
    const thisUser = getLoggedInUser();
    const chats = getAllChats();

    return chats.filter((chat) => chat.id.includes(`${thisUser.id}`))
        .map((chat) => {
            return {
                ...chat,
                user: getUserById(otherUserIdFromChatId(chat.id, thisUser.id)),
                messages: chat.messages.sort((a, b) => new Date(b.date) - new Date(a.date))
            }
        });
}

export function formatMessageDate(date) {
    const messageDate = new Date(date);
    const currentDate = new Date();
    const diffInTime = currentDate.getTime() - messageDate.getTime();
    const diffInDays = Math.round(diffInTime / (1000 * 3600 * 24));

    if (diffInDays > 0 && diffInDays < 7) {
        return new Intl.DateTimeFormat('ru', {
            weekday: 'short',
        }).format(messageDate);
    }

    if (diffInDays >= 7) {
        return new Intl.DateTimeFormat('ru', {
            day: '2-digit',
            month: '2-digit'
        }).format(messageDate);
    }

    return new Intl.DateTimeFormat('ru', {
        hour: '2-digit',
        minute: '2-digit'
    }).format(messageDate);
}