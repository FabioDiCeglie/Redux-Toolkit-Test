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
      state.post = action.payload.post;
      state.comments = action.payload.comment;
      state.loading = false;
    },
    createComment: (state, action) => {
      state.comments = {
        ...state.comments,
        count: state.comments.count + 1,
        rows: [...state.comments.rows, action.payload],
      };
    },
  },
});

// remember to export the action creators for the new reducer cases
export const { startLoading, postsFullyFetched, createComment } =
  feedSlice.actions;

export default feedSlice.reducer;
