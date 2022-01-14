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
import { MenuItem } from '@mui/material';
import { createTheme, ThemeProvider } from "@mui/material/styles";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <LinkUI color="inherit" href="https://mui.com/">
        Your Website
      </LinkUI>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const roles = [
  { value: "ADMIN", label: "Admin" },
  { value: "F0", label: "Patient" },
  { value: "DOCTOR", label: "Doctor" },
];

const theme = createTheme();

export default function LogIn() {
  const [role, setRole] = React.useState("F0");

  const handleRolePicker = (event) => {
    setRole(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
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
              <Grid item xs>
                <LinkUI href="#" variant="body2">
                  Forgot password?
                </LinkUI>
              </Grid>
              <Grid item>
                <LinkUI href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </LinkUI>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
