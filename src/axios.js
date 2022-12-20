import axios from "axios";
const BASE_URL = "https://budget-app-backend-three.vercel.app";
// const BASE_URL = "http://localhost:4000";
// axios.defaults.withCredentials = true;
export default axios.create({
  baseURL: BASE_URL,
});
