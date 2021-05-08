import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.1.185:3333", //change every project
});

export default api;
