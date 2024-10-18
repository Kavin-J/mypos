// app/store.ts
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';

export const store = configureStore({
    reducer: rootReducer,
});

// สร้าง RootState และ AppDispatch types จาก store ของเรา
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;