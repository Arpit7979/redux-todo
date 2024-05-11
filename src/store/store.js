import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todoSlice";

export const todoStore = configureStore({
    reducer:todoReducer
})