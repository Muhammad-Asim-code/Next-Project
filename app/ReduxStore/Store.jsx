import cartReducer from "./cartSlice";
import { configureStore } from "@reduxjs/toolkit";

export const Store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
