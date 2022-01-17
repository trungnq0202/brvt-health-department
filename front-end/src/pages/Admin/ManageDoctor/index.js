import React, { Component } from "react";

import Typography from "@mui/material/Typography";
import UserManaTable from "../../../components/DataTable/UserManaList"

export default class ManageUser extends Component {
  render() {
    return (
      <div>
        <div class="container text-center" style={{ padding: "30px"}}>
          <p class="h2 text-primary">Manage list of Doctor</p>
          <UserManaTable />
        </div>
      </div>
    );
  }
}
