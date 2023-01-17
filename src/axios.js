import axios from "axios";
const BASE_URL = "https://budget-app-backend-three.vercel.app";
// const BASE_URL = "https://localhost:4000";

export default axios.create({
  baseURL: BASE_URL,
});
