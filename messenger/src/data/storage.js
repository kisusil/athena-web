import { initializeDefaultValues as usersInitializeDefaultValues } from "./users";
import { initializeDefaultValues as chatsInitializeDefaultValues } from "./chats";

const STORAGE_INITIALIZED_FLAG = "am-storage-initialized";
export const STORAGE_DEV_FLAG = 'am-dev-flag';

window.onload = function () {
    const isStorageInitialized = Boolean(window.localStorage.getItem(STORAGE_INITIALIZED_FLAG))
    if (!isStorageInitialized) {
        usersInitializeDefaultValues();
        chatsInitializeDefaultValues();
        window.localStorage.setItem(STORAGE_INITIALIZED_FLAG, JSON.stringify(true))
        window.localStorage.setItem(STORAGE_DEV_FLAG, JSON.stringify(false));
    }
}