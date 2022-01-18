import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import MenuItem from "@mui/material/MenuItem";
import LinkUI from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const roles = [
  { value: "ADMIN", label: "Admin" },
  { value: "F0", label: "Patient" },
  { value: "DOCTOR", label: "Doctor" },
];

const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

const theme = createTheme();

export default function SignUp() {
  const [role, setRole] = React.useState("F0");
  const [emailErr, setEmailErr] = React.useState();
  const [passwordErr, setPasswordErr] = React.useState();
  const [nameErr, setNameErr] = React.useState();
  const [phoneErr, setPhoneErr] = React.useState();

  const handleRolePicker = (event) => {
    setRole(event.target.value);
  };

  const handleSubmitBtn = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    // Validation
    var errCount = 0
    if (data.get("email") === "" || !validateEmail(data.get("email"))) {
      setEmailErr(true);
      errCount++;
    }
    if (data.get("password") === "") {
      setPasswordErr(true);
      errCount++;
    }
    if (data.get("name") === "") {
      setNameErr(true);
      errCount++;
    }
    if (data.get("phoneNumber") === "") {
      setPhoneErr(true);
      errCount++;
    }
    if(errCount > 0) {
      return
    }
    setPasswordErr(false);
    setEmailErr(false);
    setNameErr(false);
    setPhoneErr(false);
    // eslint-disable-next-line no-console
    var formData = {
      firstName: data.get("name"),
      phoneNumber: data.get("phoneNumber"),
      email: data.get("email"),
      password: data.get("password"),
      role: role
    };

    window.alert(JSON.stringify(formData, 0, 2))
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "red", fontSize: 60 }}>
          <HealthAndSafetyIcon />
        </Avatar>
        <Typography component="h1" variant="h3">
          HEALTH CARE SYSTEM
        </Typography>
      </Box>

      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmitBtn}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
                <TextField
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  name="name"
                  autoComplete="name"
                  error={nameErr}
                  helperText="need to fill name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="phoneNumber"
                  label="Phone Number"
                  name="phoneNumber"
                  autoComplete="phoneNumber"
                  error={phoneErr}
                  helperText="need to fill this field"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  error={emailErr}
                  helperText="need to fill email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  error={passwordErr}
                  helperText="need to fill password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="outlined-select-role"
                  select
                  fullWidth
                  label="Select Role"
                  value={role}
                  onChange={handleRolePicker}
                  helperText="Please select your role"
                >
                  {roles.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>

              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I accept the user terms and conditions"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <LinkUI href="/LogIn" variant="body2">
                  Already have an account? Sign in
                </LinkUI>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
