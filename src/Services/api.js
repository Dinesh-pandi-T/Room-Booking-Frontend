import axios from "axios";

const API = axios.create({
  baseURL: "https://booking-backend-3ugk.onrender.com/api",
});

export default API;
