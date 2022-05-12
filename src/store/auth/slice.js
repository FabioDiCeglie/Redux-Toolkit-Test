import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  me: null,
  accessToken: localStorage.getItem("token"),
  loading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.loading = true;
    },
    userLoggedIn: (state, action) => {
      localStorage.setItem("token", action.payload.jwt);
      state.accessToken = { ...action.payload };
    },
    userData: (state, action) => {
      state.me = { ...action.payload };
    },
    logout: (state, action) => {
      localStorage.removeItem("token");
      state.me = null;
      state.accessToken = null;
    },
  },
});

// remember to export the action creators for the new reducer cases
export const { startLoading, userLoggedIn, userData, logout } =
  authSlice.actions;

export default authSlice.reducer;
