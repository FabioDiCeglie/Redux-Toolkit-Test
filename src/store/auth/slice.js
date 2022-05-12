import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  me: null,
  accessToken: null,
  loading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.loading = true;
    },
    logInUser: (state, action) => {
      state.accessToken = { ...action.payload };
    },
  },
});

// remember to export the action creators for the new reducer cases
export const { startLoading, logInUser } = authSlice.actions;

export default authSlice.reducer;
