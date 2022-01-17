import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "../../components/BlogComponents/Header";
import Content from "../../components/BlogComponents/Content";
import Bookmark from "../../components/BlogComponents/Bookmark";
import NewStory from "../../components/BlogComponents/NewStory";
import SinglePost from "../../components/BlogComponents/SinglePost";

import data from "../../data";

export default class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: data,
    };

    this.handleBookmark = this.handleBookmark.bind(this);
    this.handleRemoveBookmark = this.handleRemoveBookmark.bind(this);
    this.handleSubmission = this.handleSubmission.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleBookmark(data) {
    let posts = this.state.posts;
    posts = posts.map((post) =>
      post === data
        ? { id: post.id, title: post.title, body: post.body, bookmark: true }
        : post
    );
    this.setState({ posts });
  }

  handleRemoveBookmark(data) {
    let posts = this.state.posts;
    posts = posts.map((post) =>
      post === data
        ? { id: post.id, title: post.title, body: post.body, bookmark: false }
        : post
    );
    this.setState({ posts });
  }

  handleSubmission(data) {
    let posts = this.state.posts;
    posts = [data, ...posts];
    this.setState({ posts });
  }

  handleRemove(post, history) {
    let posts = this.state.posts;
    posts = posts.filter((onepost) => onepost !== post);
    this.setState({ posts });
    history.push("/");
    this.handleWindow();
  }

  handleWindow() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="Blog">
        <Header {...this.props} />

        <Content
          posts={this.state.posts}
          bookmarks={this.state.posts.filter((post) => post.bookmark)}
          handleBookmark={this.handleBookmark}
          handleRemoveBookmark={this.handleRemoveBookmark}
        />

        <NewStory handleSubmission={this.handleSubmission} />

        <Bookmark
          bookmarks={this.state.posts.filter((post) => post.bookmark)}
        />

        <SinglePost
          {...this.props}
          posts={this.state.posts}
          handleBookmark={this.handleBookmark}
          handleRemoveBookmark={this.handleRemoveBookmark}
          handleRemove={this.handleRemove}
          handleWindow={this.handleWindow()}
        />
      </div>
    );
  }
}
