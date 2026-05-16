import axios from 'axios';
import { toast } from 'react-toastify'

const client = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
    withCredentials:true
  });
  
const notify = (massage,flag) => toast(massage, {type: flag === true ? "success" : "error"});

const deleteRequest = (type, id) => {
  return client.delete(`/${type}/delete/${id}`);
};
export {
    notify,client,deleteRequest
}