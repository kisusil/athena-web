import { initializeDefaultValues as usersInitializeDefaultValues } from "./users";

const STORAGE_INITIALIZED_FLAG = "am-storage-initialized";

window.onload = function () {
    const isStorageInitialized = Boolean(window.localStorage.getItem(STORAGE_INITIALIZED_FLAG))
    if (!isStorageInitialized) {
        usersInitializeDefaultValues();
        window.localStorage.setItem(STORAGE_INITIALIZED_FLAG, JSON.stringify(true))
    }
}