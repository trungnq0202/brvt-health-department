/* eslint-disable import/no-anonymous-default-export */
import React from "react";

import Posts from "./Posts";
import Bookmarks from "./Bookmarks";
import { Link } from "react-router-dom";

export default ({ posts, bookmarks, handleBookmark, handleRemoveBookmark }) => {
  return (
    <div className="content-area" style={{ margin: "10vh" }}>
      <h1 className="text-center text-primary" style={{ padding: "10px" }}> COVID - 19 news </h1>
      <Link to="/new" className="btn text-light" style={{ backgroundColor: "blue"}}>
        Add New Blog
      </Link>
      <div className="all-posts">
        <Posts
          posts={posts}
          handleBookmark={handleBookmark}
          handleRemoveBookmark={handleRemoveBookmark}
        />
      </div>
      <div className="bookmarks-sidebar">
        <h1>Bookmarks</h1>
        <Bookmarks bookmarks={bookmarks} />
      </div>
    </div>
  );
};
