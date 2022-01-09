import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="nav-header">
      <a href="#" className="logo">
        <i className="fas fa-heartbeat"></i> medcare.
      </a>

      <nav className="navbar">
        <a style={{ marginRight: "5px" }} href="#home">
          Home
        </a>
        <a style={{ marginRight: "5px" }} href="#services">
          Services
        </a>
        <a style={{ marginRight: "5px" }} href="#about">
          About
        </a>
        <a style={{ marginRight: "5px" }} href="#doctors">
          Doctors
        </a>
        <a style={{ marginRight: "5px" }} href="#review">
          Review
        </a>
        <a style={{ marginRight: "5px" }} href="#blogs">
          Blogs
        </a>
      </nav>

      <div id="menu-btn" className="fas fa-bars"></div>
    </div>
  );
};

export default Navbar;
