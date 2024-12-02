import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/Counter";
import userSlice from "./slices/User";

export default configureStore({
    reducer:{
        counter : counterSlice,
        user : userSlice
    }
})