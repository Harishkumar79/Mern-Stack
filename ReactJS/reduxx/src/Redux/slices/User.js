import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const userList = createAsyncThunk("userList", async () => {
    const api = await axios.get("http://localhost:5000/userlist");
    console.log(api.data);
    return api.data;
});

export const userRegister = createAsyncThunk("userRegister", async (item) => {
    const api = await axios.post("http://localhost:5000/register",item);
    console.log(api.data);
    return api.data;
});

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
        builder.addCase(userRegister.pending, () => {
            console.log("Register pending");
        });
        builder.addCase(userRegister.fulfilled, (state, action) => {
            console.log("Register fulfilled");
            console.log(action.payload);
        });
        builder.addCase(userRegister.rejected, (state, action) => {
            console.log("Register rejected");
            console.error("Error:", action.error.message);
        });
    }
})

export default User.reducer;