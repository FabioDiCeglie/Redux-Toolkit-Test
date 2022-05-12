import axios from "axios";
import { startLoading, userLoggedIn, userData } from "./slice";

const API_URL = `https://codaisseur-coders-network.herokuapp.com`;

export function login(email, password) {
  return async function thunk(dispatch, getState) {
    try {
      dispatch(startLoading());

      const response = await axios.post(`${API_URL}/login`, {
        email,
        password,
      });

      const jwt = response.data.jwt;

      dispatch(userLoggedIn(jwt));
      dispatch(bootstrapLoginState());
    } catch (e) {
      console.log(e.message);
    }
  };
}

export function bootstrapLoginState() {
  return async function thunk(dispatch, getState) {
    const jwt = getState().user.accessToken;

    if (jwt === null) return;

    try {
      dispatch(startLoading());
      const user = await axios.get(`${API_URL}/me`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });

      dispatch(userData(user.data));
    } catch (e) {
      console.log(e.message);
    }
  };
}
