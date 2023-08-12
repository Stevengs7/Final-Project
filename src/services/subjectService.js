import axios from "axios";

import { global } from "../config/global.js";

const subjectService = {};

// ===================== Get profile ========================================================

subjectService.getAllSubjects = async (token) => {
  const options = {
    method: "GET",
    url: `${global.BASE_API_URL}/api/subject/all-subjects`,
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  //await sleep(2000); // TODO
  const response = await axios.request(options);
  return response.data;
};

// ============================= Subject by pk ================================================

subjectService.getSubjectByID = async (token, id) => {
  const options = {
    method: "GET",
    params: { id },
    url: `${global.BASE_API_URL}/api/subject/subject/${id}`,
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  //await sleep(2000); // TODO
  const response = await axios.request(options);
  return response.data;
};

// =================== Create Tutorship ==========================================================

subjectService.CreateTutorship = async (token, tutorship) => {
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
export default subjectService;
