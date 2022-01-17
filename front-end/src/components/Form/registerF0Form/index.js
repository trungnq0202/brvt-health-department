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

const onSubmit = async (values) => {
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  await sleep(300);
  window.alert(JSON.stringify(values, 0, 2));
};

function validateDate(date) {
  var date_regex = /(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d/;
  if (!date_regex.test(date)) {
    return false;
  }
  return true
}

const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = "Required";
  }
  if (!values.dateOfBirth || !validateDate(values.dateOfBirth)) {
    errors.dateOfBirth = "Required or invalid date. The format is dd/mm/yyyy";
  }
  if (!values.email) {
    errors.email = "Required";
  }
  if (!values.phoneNumber) {
    errors.phoneNumber = "Required";
  }
  if (!values.address) {
    errors.address = "Required";
  }
  return errors;
};

export default class registerF0Form extends Component {
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
        <Typography variant="subtitle1" align="center" component="h2" gutterBottom>
          If you have the positive result from covid 19 test, please let us know your infomation !!
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
                      name="name"
                      component={TextField}
                      label="Enter your name"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Field
                      fullWidth
                      name="dateOfBirth"
                      component={TextField}
                      label="Enter your DOB"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Field
                      fullWidth
                      name="email"
                      component={TextField}
                      label="Email"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Field
                      fullWidth
                      name="phoneNumber"
                      component={TextField}
                      label="Phone Number"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Field
                      fullWidth
                      name="address"
                      component={TextField}
                      multiline
                      label="Enter your address"
                    />
                  </Grid>
                  <Grid item xs={6} style={{ marginTop: 16 }}>
                    <Button
                      type="button"
                      variant="contained"
                      onClick={form.reset}
                      //disabled={submitting || pristine}
                    >
                      Reset
                    </Button>
                  </Grid>
                  <Grid item xs={6} style={{ marginTop: 16 }}>
                    <Button
                      variant="contained"
                      color="primary"
                      type="submit"
                      //disabled={submitting}
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
