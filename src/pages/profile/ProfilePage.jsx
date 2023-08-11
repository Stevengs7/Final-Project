import { Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import studentService from "../../services/studentService";
import { useSelector } from "react-redux";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import {
  Box,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import "./ProfilePage.scss";

//------------------------------------DIALOG WINDOW---------------------------------------------------------

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
//------------------------------------ICONS---------------------------------------------------------

import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import CakeRoundedIcon from "@mui/icons-material/CakeRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import CreateRoundedIcon from "@mui/icons-material/CreateRounded";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
import { format } from "date-fns";
import { red } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";

export default function ProfilePage() {
  // ----------------------------- hooks -----------------------------------------

  const token = useSelector((state) => state.auth.token);
  const [profile, setProfile] = useState({});
  const [isLoading, setisLoading] = useState(true);
  const [open, setOpen] = React.useState(false);
  const [tutorships, setTutorships] = useState([]);
  const [deleteId, setDeleteId] = React.useState({});
  const navigate = useNavigate();

  useEffect(() => {
    getProfile();
    getTutorships();
  }, []);

  const getProfile = async () => {
    try {
      const data = await studentService.getMyProfile(token);
      setProfile(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    } finally {
      setisLoading(false);
    }
  };

  const getTutorships = async () => {
    try {
      const data = await studentService.getTutorships(token);
      setTutorships(data.results.tutorships);
      console.log(data.results.tutorships);
    } catch (error) {
      console.log(error);
    } finally {
      setisLoading(false);
    }
  };

  // ================================ DIALOG WINDOW ===========================================

  const handleClickOpen = (id) => {
    setOpen(true);
    setDeleteId(id);
  };

  const handleClose = () => {
    setOpen(false);
  };
  // ============================= HANDLES ==============================================

  // appointment delete
  const handleDeleteTutorship = async () => {
    try {
      const id = { id: deleteId };
      await studentService.deleteTutorship(token, id);
      const data = await studentService.getTutorships(token);
      setTutorships(data.results.tutorships);
      setOpen(false);
    } catch (error) {
      console.log(error);
    } finally {
      setisLoading(false);
    }
  };

  // ============================= EDIT APPOINTMENT ==============================================
  const handleEditAppointment = async (id) => {
    try {
      navigate(`/update-appointment/${id}`);
    } catch (error) {
      console.log(error);
    } finally {
      setisLoading(false);
    }
  };

  // Edit profile
  const handleEditProfile = async () => {
    navigate("/profile-edit");
  };

  const handleCreateAppointment = async () => {
    navigate("/create-appointment");
  };

  // ---------------------------------- return ----------------------------------------------------

  return (
    <>
      {!isLoading ? (
        <Container sx={{ mt: 5 }}>
          <React.Fragment>
            <Grid item xs={12} md={6}>
              <Box className={"user-info"}>
                <Box
                  className={"cabecera"}
                  style={{
                    backgroundImage: `url(assets/covers/cover_default.jpg)`,
                  }}
                >
                  <Box
                    className={"profile-image"}
                    style={{
                      backgroundImage: `url(/assets/avatars/avatar_default.jpg)`,
                    }}
                  ></Box>
                </Box>
                <Box sx={{ pl: 3, pt: 10 }}>
                  <List>
                    <ListItem>
                      <Typography sm={{ mt: 5 }} component={"h2"} variant="h4">
                        {`${profile.user_name} ${profile.user_last_name}`}
                      </Typography>
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <EmailRoundedIcon />
                      </ListItemIcon>
                      <ListItemText primary={profile.email} />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <CakeRoundedIcon />
                      </ListItemIcon>
                      <ListItemText
                        primary={format(
                          new Date(profile?.birthday),
                          "yyyy-MM-dd"
                        )}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <PersonRoundedIcon />
                      </ListItemIcon>
                      <ListItemText primary={profile?.role.role} />
                    </ListItem>
                  </List>
                </Box>
                <Box className={"edit-button"} sx={{ gap: 2 }}>
                  <Button
                    variant="contained"
                    size="small"
                    sx={{ backgroundColor: "#3d3ed6" }}
                    startIcon={<CreateRoundedIcon />}
                    onClick={() => handleEditProfile(profile)}
                  >
                    Edit profile
                  </Button>
                  <Button
                    variant="contained"
                    size="small"
                    sx={{ backgroundColor: "#3d3ed6" }}
                    startIcon={<CreateRoundedIcon />}
                    onClick={handleCreateAppointment}
                  >
                    New Tutorship
                  </Button>
                </Box>
              </Box>
            </Grid>
          </React.Fragment>

          {/* tabla tutorships*/}
          <Typography
            sx={{ mt: 5, mb: 5, justify: "center" }}
            component={"h2"}
            variant="h2"
            gutterBottom
          >
            Tutorships
          </Typography>
          <TableContainer className="tutorships-table" sx={{ mb: 10 }}>
            <Table sx={{ minWidth: 600 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="left">ID</TableCell>
                  <TableCell align="left">Tutor</TableCell>
                  <TableCell align="left">Subject</TableCell>
                  <TableCell align="left">Date</TableCell>
                  <TableCell align="left">Time</TableCell>
                  <TableCell align="left">Email</TableCell>
                  <TableCell align="left">Location</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tutorships.map((u) => (
                  <TableRow
                    key={u.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {u.id}
                    </TableCell>
                    <TableCell align="left">
                      {u.tutor.user.user_name} {u.tutor.user.user_last_name}
                    </TableCell>
                    <TableCell align="left">
                      {u.tutor.subject.subject_name}
                    </TableCell>
                    <TableCell align="left">{u.date}</TableCell>
                    <TableCell align="left">{u.time} h</TableCell>
                    <TableCell align="left">{u.tutor.user.email}</TableCell>
                    <TableCell align="left">{u.location}</TableCell>
                    <TableCell align="left">
                      <Button style={{ Align: "center" }}>
                        <CreateRoundedIcon
                          onClick={() => handleEditAppointment(u.id)}
                        />
                      </Button>
                    </TableCell>
                    <TableCell align="left">
                      <Button style={{ Align: "center", color: red }}>
                        <DeleteForeverRoundedIcon
                          sx={{ color: "red" }}
                          onClick={() => handleClickOpen(u.id)}
                        />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          {/* DIALOG */}
          <div>
            <Dialog
              open={open}
              TransitionComponent={Transition}
              keepMounted
              onClose={handleClose}
              aria-describedby="alert-dialog-slide-description"
            >
              <DialogTitle>{`Are you sure to delte your Tutorship?`}</DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                  Once deleted this change cannot be reversed.
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Disagree</Button>
                <Button onClick={(handleClose, handleDeleteTutorship)}>
                  Agree
                </Button>
              </DialogActions>
            </Dialog>
          </div>
        </Container>
      ) : (
        <Typography>Loading...</Typography>
      )}
    </>
  );
}
