import React, { Component } from "react";
import { Link } from "react-router-dom";
import PatientListTable from "../../../components/DataTable/PatientList";
export default class PatientList extends Component {
  render() {
    return (
      <div  class="container text-center" style={{ padding: "30px"}}>
        <p class="h2 text-primary"> List of patients</p>

        <PatientListTable />
      </div>
    );
  }
}
