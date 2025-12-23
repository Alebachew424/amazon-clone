import axios from "axios";

// CORRECT Firebase Functions URL
const axiosinstance = axios.create({
  baseURL: "http://127.0.0.1:5001/e-clone-64975/us-central1/api",
});

export default axiosinstance;