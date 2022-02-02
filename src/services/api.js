import axios from "axios";

const BASE_URL = "http://localhost:5000";

async function register(body) {
  return axios.post(`${BASE_URL}/register`, body);
}

const api = {
  register,
};

export default api;
