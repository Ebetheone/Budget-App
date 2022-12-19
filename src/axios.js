import axios from "axios";
const BASE_URL = "https://budget-app-backend-5n3r418f1-ebetheone.vercel.app/";
// axios.defaults.withCredentials = true;
export default axios.create({
  baseURL: BASE_URL,
});
