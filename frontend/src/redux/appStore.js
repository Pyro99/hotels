import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import timeReducer from "./timeSlice";

const store = configureStore({
    reducer:{
        user:userReducer,
        time:timeReducer,
    }
});

export default store;