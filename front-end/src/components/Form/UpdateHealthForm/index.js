import ReactDOM from "react-dom";
import React, { Component } from "react";

import { Form, Field } from "react-final-form";
import { OnChange } from "react-final-form-listeners";
import { TextField, Select } from "final-form-material-ui";
import {
  Typography,
  Paper,
  Link,
  Grid,
  Button,
  CssBaseline,
  MenuItem,
} from "@material-ui/core";
import HealthRecordService from "../../../services/HealthRecordService"

const onSubmit = async (values) => {
  HealthRecordService.add(JSON.stringify(values))
  window.alert(JSON.stringify(values, 0, 2));
};

function validateDate(dateString) {
  var regEx = /^\d{4}-\d{2}-\d{2}$/;

  if (!dateString.match(regEx)) return false; // Invalid format
  var d = new Date(dateString);
  var dNum = d.getTime();
  if (!dNum && dNum !== 0) return false; // NaN value, Invalid date
  return d.toISOString().slice(0, 10) === dateString;
}

const validate = (values) => {
  const errors = {};
  if (!values.patientId) {
    errors.patientId = "Required";
  }
  if (!values.date || !validateDate(values.date)) {
    errors.date = "Required or invalid date. The format is dd/mm/yyyy";
  }
  if (!values.temperature) {
    errors.temperature = "Required";
  }
  if (!values.spO2) {
    errors.spO2 = "Required";
  }
  if (!values.description) {
    errors.description = "Required";
  }
  return errors;
};

export default class UpdateHealthForm extends Component {
  render() {
    return (
      <div
        class="border border-primary border-3 rounded-3 text-center"
        style={{ padding: "10px", marginTop: "7vh", maxWidth: 600 }}
      >
        <CssBaseline />
        <Typography variant="h4" align="center" component="h1" gutterBottom>
          Register F0
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          component="h2"
          gutterBottom
        >
          Update your daily health condition
        </Typography>

        <Form
          onSubmit={onSubmit}
          validate={validate}
          render={({ form, handleSubmit, submitting, pristine, values }) => (
            <form onSubmit={handleSubmit} noValidate>
              <OnChange name="country">
                {(value) => {
                  form.reset({
                    ...values,
                  });
                }}
              </OnChange>

              <Paper style={{ padding: 16 }}>
                <Grid container alignItems="flex-start" spacing={8}>
                  <Grid item xs={12}>
                    <Field
                      fullWidth
                      name="patientId"
                      component={TextField}
                      label="Enter your patient id"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Field
                      fullWidth
                      name="date"
                      component={TextField}
                      label="Day of report"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Field
                      fullWidth
                      name="temperature"
                      component={TextField}
                      label="Temperature"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Field
                      fullWidth
                      name="spO2"
                      component={TextField}
                      label="Oxygen saturation (SpO2) "
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Field
                      fullWidth
                      name="description"
                      component={TextField}
                      multiline
                      label="Tell us more information if needed"
                    />
                  </Grid>
                  <Grid item xs={6} style={{ marginTop: 16 }}>
                    <Button
                      type="button"
                      variant="contained"
                      onClick={form.reset}
                      disabled={submitting || pristine}
                    >
                      Reset
                    </Button>
                  </Grid>
                  <Grid item xs={6} style={{ marginTop: 16 }}>
                    <Button
                      variant="contained"
                      color="primary"
                      type="submit"
                      disabled={submitting}
                    >
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </Paper>
            </form>
          )}
        />
      </div>
    );
  }
}
