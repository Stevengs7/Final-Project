import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import authService from "../../services/authService";
import { NavLink } from "react-router-dom";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://localhost:3000">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

//----------------------------ROLE------------------------------------
const name = [
  {
    id: 2,
    name: "Tutor",
  },
  {
    id: 3,
    name: "Student",
  },
];

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getNameStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

//----------------------------------------------------------------

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function RegisterPage() {
  const [showPassword, setShowPassword] = React.useState(false);
  const [userRegister, setUserRegister] = React.useState(false);
  const [personName, setPersonName] = React.useState([]);
  const theme = useTheme();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const credentials = {
      id_role: data.get("role"),
      user_name: data.get("firstName"),
      user_last_name: data.get("lastName"),
      birthday: data.get("birthday"),
      email: data.get("email"),
      password: data.get("password"),
    };
    console.log(credentials);
    register(credentials);
  };

  const register = async (credentials) => {
    try {
      await authService.register(credentials);
      setUserRegister(true);
    } catch (error) {
      setError(error.response.data.message);
      console.log(error.response);
      console.log(error.response.data.message);
    }
  };

  const handleNameChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <>
      {!userRegister && (
        <ThemeProvider theme={defaultTheme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography component="h1" variant="h5">
                Register
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 3 }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      autoComplete="given-name"
                      name="firstName"
                      required
                      fullWidth
                      id="firstName"
                      label="First Name"
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      id="lastName"
                      label="Last Name"
                      name="lastName"
                      autoComplete="family-name"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="birthday"
                      label="Birthday yy-mm-dd"
                      name="birthday"
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
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type={showPassword ? "text" : "password"}
                      id="password"
                      autoComplete="new-password"
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                              edge="end"
                            >
                              {showPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />

                    <InputLabel id="demo-multiple-name-label">Role</InputLabel>
                    <Select
                      fullWidth
                      labelId="demo-multiple-name-label"
                      id="demo-multiple-name"
                      name="role"
                      label="role"
                      multiple
                      value={personName}
                      onChange={handleNameChange}
                      input={<OutlinedInput label="Name" />}
                      MenuProps={MenuProps}
                    >
                      {name.map((n) => (
                        <MenuItem
                          key={n.id}
                          value={n.id}
                          style={getNameStyles(name, personName, theme)}
                        >
                          {n.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </Grid>
                  <Grid item xs={12}></Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2, backgroundColor: "#3d3ed6" }}
                >
                  Register
                </Button>
                <Grid container justifyContent="center">
                  <Grid item>
                    <Link href="#" variant="body2">
                      Already have an account? Sign in
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
            <Copyright sx={{ mt: 5 }} />
          </Container>
        </ThemeProvider>
      )}{" "}
      {userRegister && (
        <Box
          sx={{
            mt: 5,
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontSize: 30 }}>
            your account was created sucessfully!
          </Typography>
          <NavLink style={{ textDecoration: "none" }} to="/login">
            <Button
              variant="contained"
              size="medium"
              sx={{
                mt: 2,
                color: "white",
                bgcolor: "#3d3ed6",
                alignItems: "center",
              }}
            >
              Login
            </Button>
          </NavLink>
        </Box>
      )}
    </>
  );
}
