import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Redux/users";
export const store = configureStore({
  reducer: userReducer,
});
