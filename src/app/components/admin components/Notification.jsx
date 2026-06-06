"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const STORAGE_KEY = "admin_notifications";

const money = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

function readNotifications() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  } catch {
    return [];
  }
}

export default function Notification() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const markAllAsRead = (notifyBell = true) => {
      const currentNotifications = readNotifications();
      const hasUnread = currentNotifications.some((item) => !item.read);
      const nextNotifications = currentNotifications.map((item) => ({
        ...item,
        read: true,
      }));

      if (hasUnread) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(nextNotifications));
      }

      setNotifications(nextNotifications);

      if (hasUnread && notifyBell) {
        window.dispatchEvent(new Event("admin-notifications-updated"));
      }
    };

    const refresh = () => markAllAsRead(false);

    markAllAsRead();
    window.addEventListener("admin-notifications-updated", refresh);

    return () => {
      window.removeEventListener("admin-notifications-updated", refresh);
    };
  }, []);

  const clearNotifications = () => {
    localStorage.removeItem(STORAGE_KEY);
    setNotifications([]);
    window.dispatchEvent(new Event("admin-notifications-updated"));
  };

  return (
    <main className="bg-gray-50 p-2">
      <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-medium text-gray-900">Notifications</h1>
          <p className="mt-1 text-sm text-gray-500">New order alerts from the storefront</p>
        </div>
        {notifications.length > 0 && (
          <button
            type="button"
            onClick={clearNotifications}
            className="w-fit border border-gray-200 bg-white px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
          >
            Clear
          </button>
        )}
      </div>

      <div className="border border-gray-200 bg-white">
        {notifications.length ? (
          notifications.map((item, index) => (
            <div key={`${item.orderId || index}`} className="border-b border-gray-100 p-4 last:border-b-0">
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-900">{item.message || "New order received"}</p>
                  <p className="mt-1 text-sm text-gray-500">
                    {item.customer || "Customer"} placed an order for {money.format(item.total || 0)}
                  </p>
                  <p className="mt-1 text-xs text-gray-400">
                    {item.createdAt ? new Date(item.createdAt).toLocaleString("en-IN") : "Just now"}
                  </p>
                </div>
                {item.orderId && (
                  <Link
                    href={`/admin/order/${item.orderId}`}
                    className="w-fit border border-gray-200 px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50"
                  >
                    View Order
                  </Link>
                )}
              </div>
            </div>
          ))
        ) : (
          <div className="p-8 text-center text-sm text-gray-500">
            No notifications yet. New orders will appear here while the admin panel is open.
          </div>
        )}
      </div>
    </main>
  );
}
