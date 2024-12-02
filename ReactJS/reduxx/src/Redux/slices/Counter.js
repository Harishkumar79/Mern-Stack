import { createSlice } from "@reduxjs/toolkit";

const Counter = createSlice({
    name:"Counter",
    initialState:{
        value : 5,
        steps : 1
    },
    reducers:{
        inc: state => {
            state.value += 2;
            state.steps += 1;
        },
        dec: state => {
            state.value -= 2;
            state.steps -= 1;
        },
        auser: (state , action) => {
            console.log(action);
            state.value = parseInt(action.payload);
            state.steps = parseInt(action.payload);
        }
    },
    // extraReducers:{}
})

export const {inc , dec , auser} = Counter.actions;
export default Counter.reducer;