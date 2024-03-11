import { createSlice } from "@reduxjs/toolkit";


const timeSlice = createSlice({
    name: "time",
    initialState :{
        startTime : "",
        endTime : "",
        getDays : 0
    },
    reducers :{
        getStartTime :(state,action) => {
            state.startTime = action.payload;
        },
        getEndTime :(state,action) => {
            state.endTime =action.payload
        },
        getDays :(state,action) => {
            state.getDays = action.payload;
        }
    }
});


export const {getStartTime,getEndTime,getDays} = timeSlice.actions;
export default timeSlice.reducer;