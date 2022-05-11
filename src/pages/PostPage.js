/* eslint-disable import/no-anonymous-default-export */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";

import { fetchPost } from "../store/postpage/actions";
import { selectFeed } from "../store/selectors";

export default () => {
  const dispatch = useDispatch();

  const { id } = useParams();
  useEffect(() => {
    dispatch(fetchPost(id));
  }, [dispatch, id]);

  const postData = useSelector(selectFeed);

  if (!postData) return "loading";

  return (
    <>
      <h1>{postData.post.title}</h1>
      <p className="meta">TODO</p>

      <ReactMarkdown children={postData.post.content} />

      <h2>Comments</h2>
      <p>TODO</p>
    </>
  );
};
