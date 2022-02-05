import axios from "axios";

const BASE_URL = "https://my-wallet-back.herokuapp.com";
// const BASE_URL = "http://localhost:5000";

function register(body) {
  return axios.post(`${BASE_URL}/register`, body);
}

function login(body) {
  return axios.post(`${BASE_URL}/login`, body);
}

function getRecords(headers) {
  return axios.get(`${BASE_URL}/home`, headers);
}

function postEntrie(headers, param, body) {
  return axios.post(`${BASE_URL}/entries/${param}`, body, headers);
}
function deleteEntrie(headers, _id) {
  return axios.delete(`${BASE_URL}/entries/${_id}`, headers);
}
const api = {
  register,
  login,
  getRecords,
  postEntrie,
  deleteEntrie
};

export default api;
