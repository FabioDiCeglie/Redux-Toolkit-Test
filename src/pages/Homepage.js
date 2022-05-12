import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { Link } from "react-router-dom";

import { selectFeedPosts, selectUser } from "../store/selectors";
import { fetchPosts } from "../store/feed/actions";
import { logout } from "../store/auth/slice";

export default function Homepage() {
  const dispatch = useDispatch();
  const posts = useSelector(selectFeedPosts);
  const user = useSelector(selectUser);

  useEffect(() => {
    dispatch(fetchPosts);
  }, []);

  return (
    <div style={{ marginLeft: 20 }}>
      {user.accessToken ? (
        <button onClick={() => dispatch(logout())}>Log out</button>
      ) : (
        ""
      )}
      <h2>Posts</h2>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <Link to={`/post/${post.id}`}>
              {" "}
              <h3>{post.title}</h3>
            </Link>
            <p className="meta">
              {moment(post.createdAt).format("DD-MM-YYYY")} &bull;{" "}
              <span className="tags">
                {post.tags.map((tag) => {
                  return (
                    <React.Fragment key={tag.id}>
                      <span className="Tag">{tag.tag}</span>{" "}
                    </React.Fragment>
                  );
                })}
              </span>
            </p>
          </div>
        );
      })}
      <button onClick={() => dispatch(fetchPosts)}>Load more</button>
    </div>
  );
}
