import axios from "axios";

import { global } from "../config/global.js";

const tutorService = {};

// ===================== Get profile ========================================================

tutorService.getMyProfile = async (token) => {
  const options = {
    method: "GET",
    url: `${global.BASE_API_URL}/api/tutor/my-profile`,
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

tutorService.updateMyProfile = async (token, updates) => {
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

tutorService.getTutorships = async (token) => {
  const options = {
    method: "GET",
    url: `${global.BASE_API_URL}/api/tutor/my-tutorship`,
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

tutorService.updateTutorship = async (token, appointment, id) => {
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

tutorService.deleteTutorship = async (token, value) => {
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

export default tutorService;
