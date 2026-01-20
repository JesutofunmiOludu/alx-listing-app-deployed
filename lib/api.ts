import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000", // replace with real API base URL if different
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
