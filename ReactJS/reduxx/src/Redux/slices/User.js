import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const userList = createAsyncThunk("userList", async () => {
    const api = await axios.get("http://localhost:5000/userlist");
    console.log(api.data);
    return api.data;
})

const User = createSlice({
    name: "User",
    initialState: {
        list: []
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(userList.pending, () => {
            console.log("pending");
        });
        builder.addCase(userList.fulfilled, (state, action) => {
            console.log("fulfilled");
            state.list = (action.payload);
            console.log(state);
        });
        builder.addCase(userList.rejected, (state, action) => {
            console.log("rejected");
            console.error("Error:", action.error.message);
        });
    }
})

export default User.reducer;