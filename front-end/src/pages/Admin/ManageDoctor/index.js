import React, { Component } from "react";

import DoctorManaTable from "../../../components/DataTable/DoctorManaList"
export default class ManageUser extends Component {
  render() {
    return (
      <div>
        <div class="container text-center" style={{ padding: "30px"}}>
          <p class="h2 text-primary">Manage list of Doctor</p>
          <DoctorManaTable />
        </div>
      </div>
    );
  }
}
