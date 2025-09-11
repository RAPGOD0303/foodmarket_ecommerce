import {configureStore} from '@reduxjs/toolkit';
import cartSlice from './cartSlice';
import userSlice from './userSlice';
import authReducer from "./authSlice";

 const store = configureStore({
    reducer:{
        cart : cartSlice,
        users: userSlice,
        auth: authReducer,
    }
})
export default store;