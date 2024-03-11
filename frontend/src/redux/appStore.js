import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import bookingReducer from "./bookingSlice";
import timeReducer from "./timeSlice";

const store = configureStore({
    reducer:{
        user:userReducer,
        booking:bookingReducer,
        time:timeReducer,
    }
});

export default store;