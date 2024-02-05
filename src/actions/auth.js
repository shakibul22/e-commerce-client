import axios from "axios";
import { baseUrl } from "./base";

axios.defaults.withCredentials = true;

export const userLogin = async (info) =>
  await axios.post(`${baseUrl}/api/login/`, info);
