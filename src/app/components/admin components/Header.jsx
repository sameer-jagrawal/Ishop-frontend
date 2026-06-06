import React from "react";
import { FiSearch } from "react-icons/fi";
import AdminAccount from "@/app/components/admin components/AdminAccount";
import AdminNotificationBell from "@/app/components/admin components/AdminNotificationBell";

export default function Header() {
  return (
    <header className="w-full h-16 md:h-20 bg-white shadow-md rounded-xl mb-4 px-4 md:px-6 py-3 md:py-4 flex justify-between items-center sticky top-0 z-100">

        {/* RIGHT: Notification + Login */}
      <div className="flex items-center gap-3 md:gap-6">

        <AdminNotificationBell />

        <AdminAccount />

      </div>
    </header>
  );
}
