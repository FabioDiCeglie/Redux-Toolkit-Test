import { configureStore } from "@reduxjs/toolkit";
import balanceReducer from "./balance/slice";
import feedReducer from "./feed/slice";

export const store = configureStore({
  reducer: {
    balance: balanceReducer,
    feed: feedReducer,
  },
});

export default store;
