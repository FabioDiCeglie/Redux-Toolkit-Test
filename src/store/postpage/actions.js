import axios from "axios";

const API_URL = `https://codaisseur-coders-network.herokuapp.com`;

export function fetchPost(id) {
  return async function thunk(dispatch, getState) {
    // dispatch start loading

    const [postResponse, commentsResponse] = await Promise.all([
      axios.get(`${API_URL}/posts/${id}`),
      axios.get(`${API_URL}/posts/${id}/comments`),
    ]);

    console.log("post", postResponse.data);
    console.log("comment", commentsResponse.data);

    // dispatch postFullyFetched with the correct object parameter
    dispatch(fetchPost(9));
  };
}
