import { Box, Button, Grid, Typography } from "@mui/material";
import "./HomePage.scss";
import { Link, NavLink } from "react-router-dom";
export default function HomePage() {
  return (
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
            <Typography variant="h5" component="h5" gutterBottom sx={{ p: 5 }}>
              Welcome to our Online Learning Platform! Expand your horizons and
              embrace the world of knowledge with our diverse range of courses.
              Our platform is here to empower you on your learning
              journey. Dive in, explore, and unlock a world of endless
              possibilities with our tutors!
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
          <div className="back-home"></div>
        </Grid>
      </Grid>
    </>
  );
}
