import React, { Component } from "react";
import { Link } from "react-router-dom";

import AdminHeader from "../../../components/Header/userHeader/AdminHeader";
import UserTable from "../../../components/DataTable/UserTable";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default class ManagePatient extends Component {
  render() {
    return (
      <div>
        <div class="container text-center" style={{ padding: "30px"}}>
          <p class="h2 text-primary">Manage list of patients</p>
          <UserTable />
        </div>
      </div>
    );
  }
}
