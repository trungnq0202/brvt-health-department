import React, { useState, useEffect, Component } from "react";
import { forwardRef } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
/**
 Sample usage
 {
	 users.map(user => (
		 <Grid item key= {user.id} xs={12} md={6} lg={4}>
		 	<BasicCard user/>
		 </Grid>
	 ))
 }
 */
var healthSampleData = [
  {
    date: "20/12/2022",
    temperature: 28,
    spO2: 99,
    description: "Normal",
  },
  {
    date: "20/1/2022",
    temperature: 28,
    spO2: 99,
    description: "tired",
  },
  {
    date: "20/11/2022",
    temperature: 28,
    spO2: 99,
    description: "ok",
  },
];

// var record = {
//   date: "20/11/2022",
//   temperature: 28,
//   spO2: 99,
//   description: "ok",
// };

export default class HealthCards extends Component {
  //TODO: fetch health record from database

  render() {
    return healthSampleData.map((record) => (
      <Grid item xs={6} md={6} lg={4}>
        <Card sx={{ minWidth: 100 }}  variant="outlined" style = {{margin: "10px", backgroundColor: "green"}}>
          <CardContent>
            <Typography variant="h6" component="div">
              <strong>Date: </strong> {record.date}
            </Typography>

            <Typography variant="body2">
              <strong>Temperature: </strong> {record.temperature}
            </Typography>

            <Typography variant="body2">
              {" "}
              <strong>SpO2: </strong> {record.spO2}
            </Typography>

            <Typography variant="body2">
              <strong>Note: </strong> {record.description}
            </Typography>
          </CardContent>
        </Card>{" "}
      </Grid>
    ));
  }
}

