"use client";
import { io } from "socket.io-client";
import { backendOriginFromApiBaseUrl } from "./apiBaseUrl";

const socketUrl =
  process.env.NEXT_PUBLIC_SOCKET_URL ||
  backendOriginFromApiBaseUrl();

export const socket = io(
    socketUrl,
  {
    withCredentials: true,
    transports: ["websocket", "polling"],
    autoConnect: true,
  }
);
