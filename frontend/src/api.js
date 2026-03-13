import axios from "axios";

const API = "http://localhost:5000/api";

export const loginUser = (data) => {
  return axios.post(`${API}/login`, data);
};

export const verifyOTP = (data) => {
  return axios.post(`${API}/verify`, data);
};