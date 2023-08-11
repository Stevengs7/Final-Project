import axios from "axios";

import { global } from "../config/global.js";

const studentService = {};

// ===================== Get profile ========================================================

studentService.getMyProfile = async (token) => {
  const options = {
    method: "GET",
    url: `${global.BASE_API_URL}/api/student/my-profile`,
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  //await sleep(2000); // TODO
  const response = await axios.request(options);
  return response.data;
};

// ===================== Update profile ========================================================

studentService.updateMyProfile = async (token, updates) => {
  const options = {
    method: "PUT",
    url: `${global.BASE_API_URL}/api/users/update-profile`,
    data: updates,
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  //await sleep(2000); // TODO
  const response = await axios.request(options);
  return response.data;
};

// ==================== Get tutorships =========================================================

studentService.getTutorships = async (token) => {
  const options = {
    method: "GET",
    url: `${global.BASE_API_URL}/api/student/my-tutorships`,
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  //await sleep(2000); // TODO
  const response = await axios.request(options);
  return response.data;
};

// Create Appointment ----------------------------------------------------

studentService.CreateAppointment = async (token, tutorship) => {
  const options = {
    method: "POST",
    url: `${global.BASE_API_URL}/api/student/tutorship-create`,
    data: tutorship,
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  //await sleep(2000); // TODO
  const response = await axios.request(options);
  return response.data;
};

// ====================== Update Tutorship =======================================================

studentService.updateTutorship = async (token, appointment, id) => {
  const options = {
    method: "PUT",
    url: `${global.BASE_API_URL}/api/tutor/tutorship-update/${id}`,
    data: appointment,
    params: { id },
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  //await sleep(2000); // TODO
  const response = await axios.request(options);
  return response.data;
};

// Delete Appointment----------------------------------------------------

studentService.deleteTutorship = async (token, value) => {
  const options = {
    method: "DELETE",
    url: `${global.BASE_API_URL}/api/student/tutorship-delete`,
    data: value,
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  //await sleep(2000); // TODO
  const response = await axios.request(options);
  return response.data;
};

// ====================== Get Tutors =======================================================

studentService.getAllTutors = async (token, usersPage) => {
  const options = {
    method: "GET",
    url: `${global.BASE_API_URL}/api/student/all-tutors`,
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  //await sleep(2000); // TODO
  const response = await axios.request(options);
  return response.data;
};

export default studentService;
