// app/store.ts
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
function saveStateToLocalStorage(state: any) {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('appState', serializedState);
    } catch (error) {
        console.error('Could not save state', error);
    }
}
function loadStateFromLocalStorage() {
    try {
        const serializedState = localStorage.getItem('appState');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (error) {
        console.error('Could not load state', error);
        return undefined;
    }
}
const preloadedState = loadStateFromLocalStorage();


export const store = configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware:(getDefaultMiddleware) => getDefaultMiddleware({

    })
});
store.subscribe(() => {
    saveStateToLocalStorage(store.getState())
})

// สร้าง RootState และ AppDispatch types จาก store ของเรา
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;