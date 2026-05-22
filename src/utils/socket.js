import { io } from "socket.io-client";

export const socket = io(
    "https://ishop-backend-2mld.onrender.com",
  {
    withCredentials: true,
  }
);