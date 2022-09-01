// import axios from "axios";
import axios from "axios";

const BASICURL = "http://api.certificates.edisonvalley.com/api/v1";

const localBaseUrl = "http://192.168.1.47:3000/api/v1";

export const AxiosApi = axios.create({
  baseURL: BASICURL,
  withCredentials: true,
});

AxiosApi.interceptors.request.use(function (config) {
  const token = sessionStorage.getItem("token");
  if (token) {
    config.headers["Authorization"] =
      "Token " + sessionStorage.getItem("token");
  } else {
    console.log("error");
  }

  return config;
});
