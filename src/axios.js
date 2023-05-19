import axios from "axios";
const BASE_URL = "https://budget-app-backend-three.vercel.app";

export default axios.create({
  baseURL: BASE_URL,
});
