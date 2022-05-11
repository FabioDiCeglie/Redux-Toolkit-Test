import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: true,
  post: null,
  comments: [],
};

const feedSlice = createSlice({
  name: "feed",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.loading = true;
    },
    postsFullyFetched: (state, action) => {
      //   state.posts = [...state.posts, ...action.payload];
      //   state.loading = false;
    },
  },
});

// remember to export the action creators for the new reducer cases
export const { startLoading, postsFullyFetched } = feedSlice.actions;

export default feedSlice.reducer;
