import { configureStore } from "@reduxjs/toolkit";
import balanceReducer from "./balance/slice";
import feedReducer from "./feed/slice";
import postPageSliceReducer from "./postpage/slice";
import authReducer from "./auth/slice";

export const store = configureStore({
  reducer: {
    balance: balanceReducer,
    feed: feedReducer,
    postPage: postPageSliceReducer,
    user: authReducer,
  },
});

export default store;
