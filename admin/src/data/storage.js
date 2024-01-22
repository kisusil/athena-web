import { initializeDefaultValues as usersInitializeDefaultValues } from "./users";
import { initializeDefaultValues as applicationsInitializeDefaultValues } from "./applications";

const STORAGE_INITIALIZED_FLAG = "aa-storage-initialized";
export const STORAGE_DEV_FLAG = "aa-dev-flag";

window.onload = function () {
    const isStorageInitialized = Boolean(window.localStorage.getItem(STORAGE_INITIALIZED_FLAG))
    if (!isStorageInitialized) {
        usersInitializeDefaultValues();
        applicationsInitializeDefaultValues();
        window.localStorage.setItem(STORAGE_INITIALIZED_FLAG, JSON.stringify(true));
        window.localStorage.setItem(STORAGE_DEV_FLAG, JSON.stringify(false));
    }
}