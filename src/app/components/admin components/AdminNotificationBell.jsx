"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FiBell } from "react-icons/fi";
import { socket } from "@/utils/socket";

const STORAGE_KEY = "admin_notifications";

function readNotifications() {
  if (typeof window === "undefined") return [];

  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  } catch {
    return [];
  }
}

function saveNotifications(notifications) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(notifications.slice(0, 50)));
  window.dispatchEvent(new Event("admin-notifications-updated"));
}

export default function AdminNotificationBell() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const refreshCount = () => {
      setCount(readNotifications().filter((item) => !item.read).length);
    };

    const joinAdminRoom = () => {
      socket.emit("join-admin");
    };

    const handleNewOrder = (data) => {
      const current = readNotifications();
      const exists = current.some((item) => item.orderId === data.orderId);
      const nextNotifications = exists ? current : [{ ...data, read: false }, ...current];

      saveNotifications(nextNotifications);
      setCount(nextNotifications.length);
    };

    refreshCount();

    if (socket.connected) {
      joinAdminRoom();
    }

    socket.on("connect", joinAdminRoom);
    socket.on("new-order", handleNewOrder);
    window.addEventListener("admin-notifications-updated", refreshCount);

    return () => {
      socket.off("connect", joinAdminRoom);
      socket.off("new-order", handleNewOrder);
      window.removeEventListener("admin-notifications-updated", refreshCount);
    };
  }, []);

  return (
    <Link href="/admin/notification" className="relative cursor-pointer" aria-label="Notifications">
      <FiBell className="text-xl text-gray-600 md:text-2xl" />
      {count > 0 && (
        <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-red-500 px-1 text-[11px] text-white">
          {count > 9 ? "9+" : count}
        </span>
      )}
    </Link>
  );
}
