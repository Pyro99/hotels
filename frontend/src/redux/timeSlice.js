import { createSlice } from "@reduxjs/toolkit";


const timeSlice = createSlice({
    name: "time",
    initialState :{
        checkInDate : 0,
        checkOutDate : 0,
        getDays : 0
    },
    reducers :{
        getCheckInDate :(state,action) => {
            state.checkInDate = action.payload;
        },
        getCheckOutDate :(state,action) => {
            state.checkOutDate =action.payload
        },
    }
});


export const {getCheckInDate,getCheckOutDate} = timeSlice.actions;
export default timeSlice.reducer;