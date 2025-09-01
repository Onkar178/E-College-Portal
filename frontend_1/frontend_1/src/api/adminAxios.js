import axios from "axios";

const adminAxios = axios.create({
  baseURL: "http://localhost:5034/api", // updated port and path
});

export default adminAxios;
