import React, { Component } from "react";
import { Link } from "react-router-dom";
import DoctorList from "../../../components/DataTable/DoctorList";

export default class DoctorListPage extends Component {
  render() {
    return (
      <div  class="container text-center" style={{ padding: "30px"}}>
        <p class="h2 text-primary"> list of doctor</p>

        <DoctorList />
      </div>
    );
  }
}
