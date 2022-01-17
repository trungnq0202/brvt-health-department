import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import LinkUI from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { MenuItem } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const roles = [
  { value: "ADMIN", label: "Admin" },
  { value: "F0", label: "Patient" },
  { value: "DOCTOR", label: "Doctor" },
];

const theme = createTheme();

export default function LogIn() {
  const [role, setRole] = React.useState("F0");
  const [emailErr, setEmailErr] = React.useState();
  const [passwordErr, setPasswordErr] = React.useState();

  const handleRolePicker = (event) => {
    setRole(event.target.value);
  };

  const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

  const handleSubmit = (event) => {
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

    if(errCount > 0) {
      return
    }

    setPasswordErr(false)
    setEmailErr(false)

    var formData = {
      email: data.get("email"),
      password: data.get("password"),
      role: role,
    };

    window.alert(JSON.stringify(formData, 0, 2));
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
          <Typography component="h1" variant="h4">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              error={emailErr}
              helperText="need to fill email"
            />

            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              error={passwordErr}
              helperText="need to fill password"
            />

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
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <LinkUI href="/SignUp" variant="body2">
                  {"Don't have an account? Sign Up"}
                </LinkUI>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
