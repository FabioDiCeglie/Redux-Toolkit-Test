import axios from "axios";
import { postsFullyFetched } from "./slice";

const API_URL = `https://codaisseur-coders-network.herokuapp.com`;

export function fetchPost(id) {
  return async function thunk(dispatch, getState) {
    // dispatch start loading

    const [postResponse, commentsResponse] = await Promise.all([
      axios.get(`${API_URL}/posts/${id}`),
      axios.get(`${API_URL}/posts/${id}/comments`),
    ]);

    const post = postResponse.data;
    const comment = commentsResponse.data;

    // dispatch postFullyFetched with the correct object parameter
    dispatch(postsFullyFetched({ post, comment }));
  };
}
