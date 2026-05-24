"use client";
import { io } from "socket.io-client";

const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "https://ishop-backend-2mld.onrender.com/api/";
const socketUrl =
  process.env.NEXT_PUBLIC_SOCKET_URL ||
  apiBaseUrl.replace(/\/api\/?$/, "").replace(/\/$/, "");

export const socket = io(
    socketUrl,
  {
    withCredentials: true,
    transports: ["websocket", "polling"],
    autoConnect: true,
  }
);
