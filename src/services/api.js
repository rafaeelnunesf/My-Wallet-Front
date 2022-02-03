import axios from "axios";

const BASE_URL = "http://localhost:5000";

function register(body) {
  return axios.post(`${BASE_URL}/register`, body);
}

function login(body) {
  return axios.post(`${BASE_URL}/login`, body);
}

function getRecords(headers) {
  return axios.get(`${BASE_URL}/home`, headers);
}

const api = {
  register,
  login,
  getRecords,
};

export default api;
