import axios from "axios";

const BASICURL = "http://api.certificates.edisonvalley.com/api/v1";

const localBaseUrl = "http://192.168.1.207:3000/api/v1";

export const AxiosApi = axios.create({
  baseURL: localBaseUrl,
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
