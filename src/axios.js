import axios from "axios";
// localhost:3000https://developer.chrome.com/docs/devtools/network/reference/?utm_source=devtools#provisional-headers
const instance = axios.create({
  baseURL: "http://localhost:5000",

  withCredentials: false,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    Accept: "multipart/form-data",
  },
});

export default instance;
