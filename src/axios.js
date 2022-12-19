import axios from "axios";
const BASE_URL = "https://budget-app-backend-h217cmnml-ebetheone.vercel.app/";
// axios.defaults.withCredentials = true;
export default axios.create({
  baseURL: BASE_URL,
});
