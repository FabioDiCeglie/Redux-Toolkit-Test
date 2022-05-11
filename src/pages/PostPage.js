/* eslint-disable import/no-anonymous-default-export */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";

import { fetchPost } from "../store/postpage/actions";
import { selectFeed } from "../store/selectors";
import { createComment } from "../store/postpage/slice";

export default () => {
  const [comment, setComment] = useState("");
  const [name, setName] = useState("");

  const dispatch = useDispatch();

  const { id } = useParams();
  useEffect(() => {
    dispatch(fetchPost(id));
  }, [dispatch, id]);

  const postData = useSelector(selectFeed);

  if (!postData) return "loading";
  console.log(postData);

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(createComment({ developer: { name: name }, text: comment }));
    setName("");
    setComment("");
  }
  return (
    <>
      <h1>{postData.post?.title}</h1>

      <p>children={postData.post?.content} </p>

      <h2>Comments</h2>
      <>
        {postData.comments?.rows?.length > 0
          ? postData?.comments?.rows.map((comment, i) => (
              <div key={i}>
                <p> {comment.text}</p>
                <> From developer: {comment?.developer?.name}</>
              </div>
            ))
          : "No Comments"}
      </>

      <div>
        <h2>New Comment</h2>
        <form onSubmit={handleSubmit}>
          <label>Name Developer:</label>
          <br />
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <label> Comment:</label>
          <br />
          <input
            type="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <br />
          <input type="submit" />
        </form>
      </div>

      <h2>Developer</h2>
      <p>{postData.post?.developer?.name}</p>
      <p>{postData.post?.developer?.email}</p>

      <Link to="/">
        {" "}
        <button>Back to Homepage</button>
      </Link>
    </>
  );
};
