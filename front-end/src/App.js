import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
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
import BlogService from "./services/BlogService";
// Sample blog data
import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };

    this.handleBookmark = this.handleBookmark.bind(this);
    this.handleRemoveBookmark = this.handleRemoveBookmark.bind(this);
    this.handleSubmission = this.handleSubmission.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  componentDidMount() {
    BlogService.getAll()
      .then((res) => {
        this.setState({ posts: res.data });
      })
      .catch((error) => {
        console.log("Error");
      });
  }

  // Blog handler methods
  handleBookmark(data) {
    let posts = this.state.posts;
    posts = posts.map((post) =>
      post === data
        ? {
            id: post.id,
            title: post.title,
            content: post.content,
            bookmark: true,
          }
        : post
    );
    this.setState({ posts });
  }

  handleRemoveBookmark(data) {
    let posts = this.state.posts;
    posts = posts.map((post) =>
      post === data
        ? {
            id: post.id,
            title: post.title,
            content: post.content,
            bookmark: false,
          }
        : post
    );
    this.setState({ posts });
  }

  handleSubmission(data) {
    let posts = this.state.posts;
    BlogService.add(data);
    posts = [data, ...posts];
    this.setState({ posts });
  }

  handleRemove(post) {
    let posts = this.state.posts;
    BlogService.delete(post.id);
    posts = posts.filter((onepost) => onepost !== post);
    this.setState({ posts });
    this.handleWindow();
  }

  handleWindow() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="App">
        <Header />

        <Routes>
          <Route path="/log-in" element={<LogIn />} />
          <Route path="/sign-up" element={<SignUp />} />

          <Route path="/patient-mana" element={<ManageUser />} />
          <Route path="/doctor-mana" element={<ManageDoctor />} />

          <Route path="/register-f0" element={<RegisterF0 />} />
          <Route path="/update-health" element={<UpdateHealth />} />

          <Route path="/patient-list" element={<PatientList />} />
          <Route path="/doctor-list" element={<DoctorListPage />} />

          {/* BLOG ROUTE */}
          <Route
            path="/blog"
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
