import axios from "axios";
// localhost:3000https://developer.chrome.com/docs/devtools/network/reference/?utm_source=devtools#provisional-headers
const instance = axios.create({
  baseURL: "http://localhost:5000",

  withCredentials: false,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    Accept: "multipart/form-data",
    // add your any user  token here
    Authorization:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMGY5ODRhOWVhYTY1NjVkMDNhODU3YSIsImlhdCI6MTY2MTk2NjQyMywiZXhwIjoxNjYyMDUyODIzfQ.gGhL_hy4drSKUJ_spb3TcXUtaXB_dCtjbsJAUGGqjyk",
  },
});

export default instance;
