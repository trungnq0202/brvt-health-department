import React, { Component } from "react";
import { Link, Navigate } from "react-router-dom";

export default class Header extends Component {
  render() {
    return ( <nav class="navbar navbar-expand-lg navbar-light bg-light py-3">
      <div class="container">
        <a href="#" class="navbar-brand d-flex align-items-center">
          {" "}
          <i class="fa fa-snowflake-o fa-lg text-primary mr-2"></i>
          <strong>{ this.props.role }</strong>
        </a>
        <button
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          class="navbar-toggler"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div id="navbarSupportedContent" class="collapse navbar-collapse">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <a href="#" class="nav-link font-italic">
                {" "}
                Home{" "}
              </a>
            </li>
            <li class="nav-item active">
              <a href="#" class="nav-link font-italic">
                {" "}
                About{" "}
              </a>
            </li>
            <li class="nav-item active">
              <a href="#" class="nav-link font-italic">
                {" "}
                Services{" "}
              </a>
            </li>
            <li class="nav-item active">
              <a href="#" class="nav-link font-italic">
                {" "}
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>);
  }
}
