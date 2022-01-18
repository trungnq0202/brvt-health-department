import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import BlogService from "../../services/BlogService"

// eslint-disable-next-line import/no-anonymous-default-export
export default ({
  history,
  posts,
  handleBookmark,
  handleRemoveBookmark,
  handleRemove,
}) => {
  const { id } = useParams();
  const [post, setPost] = useState([]); //table data
  useEffect(() => {
    // TODO Get all user API
    BlogService.getById(id)
      .then((res) => {
        setPost(res.data);
      })
      .catch((error) => {
        console.log("Error");
      });
  }, []);

  // let post = posts.filter((post) => post.id == id);
  // post = post[0];

  return (
    <div className="single-post" style={{ margin: "10vh" }}>
      <h1 className="header">{post.title}</h1>
      {post.content}
      <ul className="post-foot">
        <li>
          {post.bookmark ? (
            <button
              className="btn btn-remove-bookmarks"
              onClick={() => handleRemoveBookmark(post)}
            >
              Remove from Bookmark
            </button>
          ) : (
            <button
              className="btn btn-bookmarks"
              onClick={() => handleBookmark(post)}
            >
              Add to Bookmark
            </button>
          )}
        </li>
        <li>
          <button
            className="btn btn-remove"
            onClick={() => handleRemove(post, history)}
          >
            Remove
          </button>
        </li>
      </ul>
    </div>
  );
};
