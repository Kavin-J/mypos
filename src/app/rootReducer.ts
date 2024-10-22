// app/rootReducer.ts
import { combineReducers } from '@reduxjs/toolkit';
import counterReducer from './features/counter/counterSlice';
import userReducer from './features/user/userSlice';
import authReducer from './features/auth/authSlice'
const rootReducer = combineReducers({
    counter: counterReducer,
    user: userReducer,
    auth: authReducer
});


export default rootReducer;
