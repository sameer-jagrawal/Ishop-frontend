import axios from 'axios';
import { toast } from 'react-toastify'

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ||
  "https://ishop-backend-2mld.onrender.com/api/";

const client = axios.create({
    baseURL: API_BASE_URL,
    withCredentials:true,
    timeout: 12000,
  });

client.interceptors.request.use((config) => {
  if (typeof window !== "undefined") {
    const token =
      localStorage.getItem("jwt") ||
      JSON.parse(localStorage.getItem("admin") || "null")?.token;
    if (token) {
      config.headers.Authorization = token;
    }
  }
  return config;
});
  
const notify = (massage,flag) => toast(massage, {type: flag === true ? "success" : "error"});

const deleteRequest = (type, id) => {
  return client.delete(`/${type}/delete/${id}`);
};
export {
    notify,client,deleteRequest
}
