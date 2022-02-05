import axios from "axios";

const BASE_URL = "https://my-wallet-back.herokuapp.com";

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

const api = {
  register,
  login,
  getRecords,
  postEntrie,
};

export default api;
