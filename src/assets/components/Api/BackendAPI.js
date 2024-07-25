import axios from "axios";

const AxiosBase = axios.create({
  // baseURL: "http://localhost:4000",
  baseURL: "https://amazo-api-deploye.onrender.com/",
});
export { AxiosBase };
