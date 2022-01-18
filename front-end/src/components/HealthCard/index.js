import React, { useState, useEffect, Component } from "react";
import { forwardRef } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import HealthRecordService from "../../services/HealthRecordService";

// var record = {
//   date: "20/11/2022",
//   temperature: 28,
//   spO2: 99,
//   description: "ok",
// };

export default class HealthCards extends Component {
  //TODO: fetch health record from database
  constructor(props) {
    super(props);

    this.state = {
      healthSampleData: [],
    };
  }

  componentDidMount() {
    HealthRecordService.getByPatientId(this.props.id)
      .then((res) => {
        this.setState({ healthSampleData: res.data });
        console.log(this.state.healthSampleData);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  render() {
    return this.state.healthSampleData.map((record) => (
      <Grid item xs={6} md={6} lg={4}>
        <Card
          sx={{ minWidth: 100 }}
          variant="outlined"
          style={{ margin: "10px", backgroundColor: "green" }}
        >
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
