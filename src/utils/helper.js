import axios from 'axios';
import { toast } from 'react-toastify'
import { normalizeApiBaseUrl } from './apiBaseUrl';

const API_BASE_URL = normalizeApiBaseUrl();

const client = axios.create({
    baseURL: API_BASE_URL,
    withCredentials:true,
    timeout: 30000,
  });

client.interceptors.response.use(
  (response) => response,
  async (error) => {
    const config = error.config;
    const isGetRequest = config?.method?.toLowerCase() === "get";
    const status = error.response?.status;
    const shouldRetry =
      isGetRequest &&
      !config.__retryCount &&
      (!status || status >= 500 || error.code === "ECONNABORTED");

    if (shouldRetry) {
      config.__retryCount = 1;
      await new Promise((resolve) => setTimeout(resolve, 800));
      return client(config);
    }

    return Promise.reject(error);
  }
);

client.interceptors.request.use((config) => {
  if (typeof window !== "undefined") {
    const isAdminRoute = window.location.pathname.startsWith("/admin");
    const adminToken = JSON.parse(localStorage.getItem("admin") || "null")?.token;
    const userToken = localStorage.getItem("jwt");
    const token =
      isAdminRoute ? adminToken || userToken : userToken || adminToken;

    if (token && token !== "undefined" && token !== "null") {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});
  
const notify = (massage,flag) => toast(massage, {type: flag === true ? "success" : "error"});

const deleteRequest = (type, id) => {
  return client.delete(`${type}/delete/${id}`);
};
export {
    notify,client,deleteRequest
}
