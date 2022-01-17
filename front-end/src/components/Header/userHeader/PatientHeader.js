import React, { Component } from "react";
import { Link, Navigate } from "react-router-dom";

export default class PatientHeader extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark text-light py-3" style={{ paddingLeft: "80px", paddingRight: "80px"}}>
        <div class="container-fluid">
          <a href="#" class="navbar-brand d-flex align-items-center">
            {" "}
            <i class="fa fa-snowflake-o fa-lg text-primary mr-2"></i>
            <strong>Patient Page</strong>
          </a>
          <button
            type="button"
            class="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav">
              <a href="#" class="nav-item nav-link active">
                User Profile
              </a>
              <a href="/RegisterF0" class="nav-item nav-link active">
                Register F0
              </a>
              <a href="/UpdateHealth" class="nav-item nav-link active">
                Update Health
              </a>
            </div>
            <div class="navbar-nav ms-auto">
              <a href="#" class="nav-item nav-link active">
                Log Out
              </a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
