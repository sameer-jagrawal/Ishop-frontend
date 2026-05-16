import axios from "axios";
import { cookies } from "next/headers";

const getMe = async () => {

   const cookieStore = await cookies();

   const token =
      cookieStore.get("jwt")?.value;

   if (!token) {
      return null;
   }

   try {
      const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:5000/api/";

      const response = await axios.get(
         `${baseURL}user/get`,
         {
            headers: {
               Authorization: token
            }
         }
      );

      return response.data;
   } catch (error) {
      console.log("getMe failed:", error?.response?.data || error?.message);
      return null;
   }
};

export {
   getMe
};
