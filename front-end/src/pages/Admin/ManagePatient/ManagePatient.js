import React, { Component } from "react";
import { Link } from "react-router-dom";

import Header from "../../../components/Header/Header";
import UserTable from "../../../components/DataTable/UserTable";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default class ManagePatient extends Component {
  render() {
    return (
      <div>
        
        <Header role="Admin Page" />
        <Box sx={{ width: "100%", maxWidth: 500 }}>
        </Box>
        <div class="container">
          <UserTable />
        </div>
      </div>
    );
  }
}
