import axios from "axios";

// Use environment variable for production, fallback to localhost for development
const API_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:5001/e-clone-64975/us-central1/api";

const axiosinstance = axios.create({
  baseURL: API_URL,
  headers: { 'Content-Type': 'application/json' },
});

export default axiosinstance;