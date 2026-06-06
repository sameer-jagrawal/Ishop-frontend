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

export {
   getMe,
   getMyOrders
};
