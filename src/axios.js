import axios from "axios";
// "https://budget-app-backend-5n3r418f1-ebetheone.vercel.app/";
const BASE_URL = "http://localhost:4000/";
// axios.defaults.withCredentials = true;
export default axios.create({
  baseURL: BASE_URL,
});
