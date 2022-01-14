import React from 'react';
import ReactDOM from 'react-dom';
import { Form, Field } from 'react-final-form';
import { OnChange } from 'react-final-form-listeners';
import { TextField, Select } from 'final-form-material-ui';
import {
  Typography,
  Paper,
  Link,
  Grid,
  Button,
  CssBaseline,
  MenuItem,
} from '@material-ui/core';

const onSubmit = async values => {
  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
  await sleep(300);
  window.alert(JSON.stringify(values, 0, 2));
};

const validate = values => {
  const errors = {};
  if (!values.notes) {
    errors.notes = 'Required';
  }
  if (!values.country) {
    errors.country = 'Required';
  }
  if (!values.city) {
    errors.city = 'Required';
  }
  return errors;
};

function App() {
  return (
    <div style={{ padding: 16, margin: 'auto', maxWidth: 600 }}>
      <CssBaseline />
      <Typography variant="h4" align="center" component="h1" gutterBottom>
        🏁 React Final Form
      </Typography>
      <Typography variant="h5" align="center" component="h2" gutterBottom>
        Material-UI Example with Field dependencies
      </Typography>
      <Typography paragraph>
        <Link href="https://github.com/erikras/react-final-form#-react-final-form">
          Read Docs
        </Link>
        . This example demonstrates using{' '}
        <Link href="https://material-ui.com/demos/text-fields/">
          Material-UI
        </Link>{' '}
        form controls and a simple method of resetting a field when another
        field changes via{' '}
        <Link href="https://medium.com/@erikras/declarative-form-rules-c5949ea97366">
          react-final-form-listeners
        </Link>
      </Typography>

      <Form
        onSubmit={onSubmit}
        validate={validate}
        render={({ form, handleSubmit, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit} noValidate>
            <OnChange name="country">
              {value => {
                form.reset({
                  ...values,
                  city: null,
                  country: value,
                });
              }}
            </OnChange>

            <Paper style={{ padding: 16 }}>
              <Grid container alignItems="flex-start" spacing={8}>
                <Grid item xs={12}>
                  <Field
                    fullWidth
                    name="notes"
                    component={TextField}
                    multiline
                    label="Notes"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    fullWidth
                    name="country"
                    component={Select}
                    label="Select a Country"
                    formControlProps={{ fullWidth: true }}
                  >
                    <MenuItem value="France">France</MenuItem>
                    <MenuItem value="Hungary">Hungary</MenuItem>
                    <MenuItem value="Germany">Germany</MenuItem>
                  </Field>
                </Grid>
                <Grid item xs={12}>
                  <Field
                    fullWidth
                    name="city"
                    component={Select}
                    label="Select a City"
                    formControlProps={{ fullWidth: true }}
                  >
                    <MenuItem value="London">London</MenuItem>
                    <MenuItem value="Paris">Paris</MenuItem>
                    <MenuItem value="Budapest">Budapest</MenuItem>
                  </Field>
                </Grid>
                <Grid item style={{ marginTop: 16 }}>
                  <Button
                    type="button"
                    variant="contained"
                    onClick={form.reset}
                    disabled={submitting || pristine}
                  >
                    Reset
                  </Button>
                </Grid>
                <Grid item style={{ marginTop: 16 }}>
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

            <pre>{JSON.stringify(values, 0, 2)}</pre>
          </form>
        )}
      />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('#root'));
