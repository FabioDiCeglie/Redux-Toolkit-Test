/* eslint-disable import/no-anonymous-default-export */
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { fetchPost } from "../store/postpage/actions";

export default () => {
  const dispatch = useDispatch();

  const { id } = useParams();
  useEffect(() => {
    // the id that comes from the useParams :)
    dispatch(fetchPost(id));
  }, [dispatch, id]);
  return <></>;
};
