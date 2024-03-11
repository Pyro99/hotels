import {createSlice} from "@reduxjs/toolkit";

const bookingSlice = createSlice({
    name : "booking",
    initialState :{
        bookings:[]
    },
    reducers : {
        yourBookings : (state,action) =>{
            state.bookings.push(action.payload);
        }
    }
});

export const {yourBookings} = bookingSlice.actions;
export default bookingSlice.reducer;