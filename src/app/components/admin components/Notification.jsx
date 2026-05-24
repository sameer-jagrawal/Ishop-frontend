"use client";

import { useEffect, useState } from "react";
import { socket } from "@/utils/socket";

export default function Notification() {

  const [notifications, setNotifications] = useState([]);

  useEffect(() => {

    // join admin room
    const joinAdminRoom = () => socket.emit("join-admin");

    if (socket.connected) {
      joinAdminRoom();
    }

    socket.on("connect", joinAdminRoom);

    socket.on("new-order", (data) => {

      console.log(data);

      setNotifications((prev) => [
        data,
        ...prev
      ]);
    });

    return () => {
      socket.off("connect", joinAdminRoom);
      socket.off("new-order");
    };

  }, []);

  return (
    <div>
      <h1>Notifications</h1>

      {
        notifications.map((item, index) => (
          <div key={index}>
            <p>{item.message}</p>
            <p>{item.customer}</p>
            <p>₹ {item.total}</p>
          </div>
        ))
      }
    </div>
  );
}
