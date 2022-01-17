import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

import LogIn from "./pages/LogIn/LogIn";
import SignUp from "./pages/SignUp/SignUp";

import Header from "./components/Header/Header";
import ManageUser from "./pages/Admin/ManageUser/ManageUser";
import RegisterF0 from "./pages/Patient/RegisterF0/RegisterF0";
import UpdateHealth from "./pages/Patient/UpdateHealth/UpdateHealth";
import PatientList from "./pages/Doctor/PatientList";
import DoctorListPage from "./pages/Patient/DoctorListPage";
import ManageDoctor from "./pages/Admin/ManageDoctor";


import Content from "./components/BlogComponents/Content";
import Bookmark from "./components/BlogComponents/Bookmark";
import NewStory from "./components/BlogComponents/NewStory";
import SinglePost from "./components/BlogComponents/SinglePost";
import React, { Component } from "react";

import data from "./data";
import './App.css';

export default class App extends Component {
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
  // Blog handler methods
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
      <div className="App">
        <Header role="ADMIN" />
        <Routes>
          <Route path="/LogIn" element={<LogIn />} />
          <Route path="/SignUp" element={<SignUp />} />

          <Route path="/UserMana" element={<ManageUser />} />
          <Route path="/DoctorMana" element={<ManageDoctor />} />

          <Route path="/RegisterF0" element={<RegisterF0 />} />
          <Route path="/UpdateHealth" element={<UpdateHealth />} />

          <Route path="/PatientList" element={<PatientList />} />
          <Route path="/DoctorList" element={<DoctorListPage />} />

          {/* BLOG ROUTE */}
          <Route
            path="/"
            element={
              <Content
                posts={this.state.posts}
                bookmarks={this.state.posts.filter((post) => post.bookmark)}
                handleBookmark={this.handleBookmark}
                handleRemoveBookmark={this.handleRemoveBookmark}
              />
            }
          />
          <Route
            path="/new"
            element={<NewStory handleSubmission={this.handleSubmission} />}
          />
          <Route
            path="/bookmark"
            element={
              <Bookmark
                bookmarks={this.state.posts.filter((post) => post.bookmark)}
              />
            }
          />
          <Route
            path="/post/:id"
            element={
              <SinglePost
                posts={this.state.posts}
                handleBookmark={this.handleBookmark}
                handleRemoveBookmark={this.handleRemoveBookmark}
                handleRemove={this.handleRemove}
                handleWindow={this.handleWindow()}
              />
            }
          />
        </Routes>
      </div>
    );
  }
}
