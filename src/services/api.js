import axios from "axios";

const BASE_URL = "https://my-wallet-back.herokuapp.com";
/* const BASE_URL = "http://localhost:5000"; */

function register(body) {
  return axios.post(`${BASE_URL}/register`, body);
}

function login(body) {
  return axios.post(`${BASE_URL}/login`, body);
}

function getRecords(headers) {
  return axios.get(`${BASE_URL}/home`, headers);
}

function postEntrie(headers, type, body) {
  return axios.post(`${BASE_URL}/entries/add/${type}`, body, headers);
}

function deleteEntrie(headers, _id) {
  return axios.delete(`${BASE_URL}/entries/${_id}`, headers);
}

function editEntrie(headers, type, body,_id) {
  return axios.put(`${BASE_URL}/entries/edit/${type}?_id=${_id}`, body,headers);
}

const api = {
  register,
  login,
  getRecords,
  postEntrie,
  deleteEntrie,
  editEntrie
};

export default api;
