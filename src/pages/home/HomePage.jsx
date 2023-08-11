import { Box, Button, Grid, Typography } from "@mui/material";
import "./HomePage.scss";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
export default function HomePage() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const userName = useSelector((state) => state.auth.userInfo.name);
  return (
    <>
      {!isLoggedIn ? (
        <>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={7}>
              <div className="text-home">
                <Typography
                  variant="h2"
                  component="h3"
                  gutterBottom
                  sx={{ color: "#3d3ed6", mb: 5, mt: 10 }}
                >
                  <strong>TeachMe</strong>
                </Typography>
                <Typography
                  variant="h5"
                  component="h5"
                  gutterBottom
                  sx={{ p: 5 }}
                >
                  Welcome to our Online Learning Platform! Expand your horizons
                  and embrace the world of knowledge with our diverse range of
                  courses thanks to our tutors.
                </Typography>
                <Box>
                  <NavLink style={{ textDecoration: "none" }} to="/register">
                    <Button
                      variant="contained"
                      sx={{
                        mt: 3,
                        mb: 2,
                        my: 2,
                        mr: 1,
                        backgroundColor: "#3d3ed6",
                        color: "white",
                        textDecoration: "none",
                      }}
                    >
                      Register
                    </Button>
                  </NavLink>
                  <NavLink style={{ textDecoration: "none" }} to="/login">
                    <Button
                      variant="contained"
                      sx={{
                        mt: 3,
                        mb: 2,
                        my: 2,
                        mr: 1,
                        backgroundColor: "#3d3ed6",
                        color: "white",
                        textDecoration: "none",
                      }}
                    >
                      Login
                    </Button>
                  </NavLink>
                </Box>
              </div>
            </Grid>
            <Grid item xs={12} sm={5}>
              <div className="back-home">
                <img
                  className="logo"
                  src="../../../public/logo/logo_white.png"
                  alt=""
                />
              </div>
            </Grid>
          </Grid>
        </>
      ) : (
        <>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={7}>
              <div className="text-home">
                <Typography
                  variant="h2"
                  component="h3"
                  gutterBottom
                  sx={{ color: "#3d3ed6", mb: 2, mt: 10 }}
                >
                  <strong> Welcome back {userName}!</strong>
                </Typography>
                <Typography variant="h5" component="h5" sx={{ p: 2 }}>
                  good to see you again!
                </Typography>
                <Typography gutterBottom sx={{ p: 2 }}>
                  You can check your tutorships on you profile page or you can
                  contact with others tutors on Tutorships page.
                </Typography>
                <Typography
                  variant="h5"
                  component="h5"
                  gutterBottom
                  sx={{ p: 2 }}
                >
                  Keep going!
                </Typography>
                <Box>
                  <NavLink style={{ textDecoration: "none" }} to="/profile">
                    <Button
                      variant="contained"
                      sx={{
                        mt: 3,
                        backgroundColor: "#3d3ed6",
                        color: "white",
                        textDecoration: "none",
                      }}
                    >
                      My profile
                    </Button>
                  </NavLink>
                </Box>
              </div>
            </Grid>
            <Grid item xs={12} sm={5}>
              <div className="back-home">
                <img
                  className="logo"
                  src="../../../public/logo/logo_white.png"
                  alt=""
                />
              </div>
            </Grid>
          </Grid>
        </>
      )}
    </>
  );
}
