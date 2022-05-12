import axios from "axios";
import { startLoading, logInUser } from "./slice";

const API_URL = `https://codaisseur-coders-network.herokuapp.com`;

export function login(email, password) {
  return async function thunk(dispatch, getState) {
    try {
      dispatch(startLoading());

      const response = await axios.post(`${API_URL}/login`, {
        email,
        password,
      });

      const data = response.data;

      dispatch(logInUser(data));
    } catch (e) {
      console.log(e.message);
    }
  };
}
