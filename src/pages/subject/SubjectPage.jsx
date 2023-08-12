import {
  Box,
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import subjectService from "../../services/subjectService";
import "./SubjectPage.scss";
// =============================== Create tutorship window ==============================================

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

//----------------------------------------------------------------------------------------------------

import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateField } from "@mui/x-date-pickers/DateField";
import { useTheme } from "@emotion/react";

// =============================================================================
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

function getTimeStyles(time, personTime, theme) {
  return {
    fontWeight: personTime.indexOf(time) === -1,
  };
}

const times = ["08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00"];

function getLocationStyles(location, personLocation, theme) {
  return {
    fontWeight: personLocation.indexOf(location) === -1,
  };
}

const location = ["Online", "Student House", "Tutor House", "Library"];

// =============================================================================

export default function SubjectPage() {
  const [subject, setSubject] = useState({});
  const [tutor, setTutor] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [open, setOpen] = React.useState(false);
  const [createId, setCreateTutorship] = React.useState(0);
  const token = useSelector((state) => state.auth.token);
  const navigate = useNavigate();
  const { id } = useParams();

  const theme = useTheme();
  const [value, setValue] = React.useState(dayjs(""));
  const [personTime, setPersonTime] = React.useState([]);
  const [personLocation, setPersonLocation] = React.useState([]);

  useEffect(() => {
    getTutors();
  }, []);

  const getTutors = async () => {
    setIsLoading(true);
    try {
      const data = await subjectService.getSubjectByID(token, id);
      setTutor(data.tutor);
      setSubject(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  // ================================ DIALOG WINDOW ===========================================

  const handleClickOpen = (id) => {
    setOpen(true);
    setCreateTutorship(id);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // ===========================================================================

  const handleTimeChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonTime(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const handleLocationChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonLocation(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  // ===========================================================================

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const tutorship = {
      id_tutor: data.get("mytutor"),
      date: data.get("date"),
      time: data.get("time"),
      location: data.get("location"),
    };
    CreateTutorship(tutorship);
  };

  const CreateTutorship = async (tutorship) => {
    try {
      const newTutorship = await subjectService.CreateTutorship(
        token,
        tutorship
      );
      console.log(newTutorship);
      setOpen(false);
      navigate("/profile");
    } catch (error) {
      console.log(error.response.data.message);
    }
  };
  return (
    <>
      <Container
        sx={{
          mt: 5,
          pb: 4,
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="h1"
          fontSize={35}
          align="center"
          fontWeight={400}
          gutterBottom
        >
          {subject.subject_name}
        </Typography>
        <Container>
          <Box></Box>
          <Box
            sx={{
              mt: 4,
              display: "grid",
              gridTemplateColumns: {
                xs: "repeat(1, 1fr)",
                md: "repeat(3, 1fr)",
              },
              gap: "3em",
            }}
          >
            {tutor.map((tut) => (
              <Card
                key={tut.id}
                sx={{
                  minWidth: 200,
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={`/assets/avatars/avatar_${tut.id}.jpg`}
                />
                <CardContent value={tut.id}>
                  <Typography gutterBottom variant="h5">
                    {tut.user.user_name} {tut.user.user_last_name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <strong>email:</strong> {tut.user.email} <br />
                    <strong>verified:</strong> {tut.verificated}
                  </Typography>
                  <Box
                    sx={{
                      mt: 2,
                      display: "flex",
                      justifyContent: "flex-end",
                    }}
                  >
                    <Button
                      variant="contained"
                      size="small"
                      sx={{
                        mt: 2,
                        backgroundColor: "#3d3ed6",
                      }}
                      onClick={() => handleClickOpen(tut.id)}
                    >
                      Create Tutorship
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            ))}
          </Box>

          {/* POP UP CREATE TUTORSHIP */}
          <Box>
            <Dialog
              component="form"
              noValidate
              onSubmit={handleSubmit}
              open={open}
              TransitionComponent={Transition}
              keepMounted
              onClose={handleClose}
              aria-describedby="alert-dialog-slide-description"
            >
              <DialogTitle>{`You're creating a ${subject.subject_name} tutorship`}</DialogTitle>
              <DialogContent>
                <TextField
                  fullWidth
                  id="outlined-read-only-input"
                  label="Tutor"
                  name="mytutor"
                  value={createId}
                  defaultValue="Tutor"
                  InputProps={{
                    readOnly: true,
                  }}
                />
                <DialogContentText id="alert-dialog-slide-description">
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={["DateField", "DateField"]}>
                      <DateField
                        fullWidth
                        label="Introduce the date"
                        name="date"
                        value={value}
                        onChange={(newValue) => setValue(newValue)}
                        format="YYYY-MM-DD"
                      />
                    </DemoContainer>
                  </LocalizationProvider>

                  <FormControl fullWidth sx={{ m: 1 }}>
                    <InputLabel id="demo-multiple-name-label">Time</InputLabel>
                    <Select
                      fullWidth
                      labelId="demo-multiple-name-label"
                      id="demo-multiple-name"
                      name="time"
                      multiple
                      value={personTime}
                      onChange={handleTimeChange}
                      input={<OutlinedInput label="Time" />}
                      MenuProps={MenuProps}
                    >
                      {times.map((time) => (
                        <MenuItem
                          key={time}
                          value={time}
                          style={getTimeStyles(time, personTime, theme)}
                        >
                          {time}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>

                  <FormControl fullWidth sx={{ m: 1 }}>
                    <InputLabel id="demo-multiple-name-label">
                      Location
                    </InputLabel>
                    <Select
                      fullWidth
                      labelId="demo-multiple-name-label"
                      id="demo-multiple-name"
                      name="location"
                      multiple
                      value={personLocation}
                      onChange={handleLocationChange}
                      input={<OutlinedInput label="Location" />}
                      MenuProps={MenuProps}
                    >
                      {location.map((location) => (
                        <MenuItem
                          key={location}
                          value={location}
                          style={getLocationStyles(
                            location,
                            personLocation,
                            theme
                          )}
                        >
                          {location}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button
                  sx={{ bmt: 2, backgroundColor: "#3d3ed6", color: "#fff" }}
                  onClick={handleClose}
                >
                  Cancel
                </Button>
                <Button
                  sx={{ bmt: 2, backgroundColor: "#3d3ed6", color: "#fff" }}
                  type="submit"
                >
                  Create
                </Button>
              </DialogActions>
            </Dialog>
          </Box>
        </Container>
      </Container>
    </>
  );
}
