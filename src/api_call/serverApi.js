import axios from "axios";
import { cookies } from "next/headers";
import { normalizeApiBaseUrl } from "@/utils/apiBaseUrl";

const getMe = async () => {

   const cookieStore = await cookies();

   const token =
      cookieStore.get("jwt")?.value;

   if (!token) {
      return null;
   }

   try {
      const baseURL = normalizeApiBaseUrl();

      const response = await axios.get(
         `${baseURL}user/get`,
         {
            headers: {
               Authorization: `Bearer ${token}`
            },
            withCredentials: true,
            timeout: 12000,
         }
      );

      return response.data;
   } catch (error) {
      console.log("getMe failed:", error?.response?.data || error?.message);
      return null;
   }
};

const getMyOrders = async () => {
   const cookieStore = await cookies();
   const token = cookieStore.get("jwt")?.value;

   if (!token) {
      return { success: false, data: { orders: [] } };
   }

   try {
      const baseURL = normalizeApiBaseUrl();

      const response = await axios.get(
         `${baseURL}order/my`,
         {
            headers: {
               Authorization: `Bearer ${token}`
            },
            withCredentials: true,
            timeout: 12000,
         }
      );

      return response.data;
   } catch (error) {
      console.log("getMyOrders failed:", error?.response?.data || error?.message);
      return { success: false, data: { orders: [] } };
   }
};

const getAdminUsers = async (query = {}) => {
   const cookieStore = await cookies();
   const token =
      cookieStore.get("admin_jwt")?.value ||
      cookieStore.get("jwt")?.value;

   if (!token) {
      return { success: false, data: { users: [], analytics: {} } };
   }

   try {
      const baseURL = normalizeApiBaseUrl();
      const filter = new URLSearchParams();
      if (query.search) filter.append("search", query.search);
      const queryString = filter.toString();

      const response = await axios.get(
         `${baseURL}user/all${queryString ? `?${queryString}` : ""}`,
         {
            headers: {
               Authorization: `Bearer ${token}`
            },
            withCredentials: true,
            timeout: 12000,
         }
      );

      return response.data;
   } catch (error) {
      console.log("getAdminUsers failed:", error?.response?.data || error?.message);
      return { success: false, data: { users: [], analytics: {} } };
   }
};

export {
   getMe,
   getMyOrders,
   getAdminUsers
};
