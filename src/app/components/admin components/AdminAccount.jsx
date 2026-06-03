"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { CircleUserRound } from "lucide-react";
import Logout from "@/app/components/user components/Logout";

export default function AdminAccount() {
  const [admin, setAdmin] = useState(null);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const storedAdmin = JSON.parse(localStorage.getItem("admin") || "null");
      setAdmin(storedAdmin);
    }, 0);

    return () => window.clearTimeout(timer);
  }, []);

  if (!admin?.token) {
    return (
      <Link
        href="/admin-auth/admin/login"
        className="rounded-lg bg-[#ff7b00] px-3 py-2 text-xs font-semibold text-white transition hover:bg-orange-600 md:text-sm"
      >
        Admin Login
      </Link>
    );
  }

  return (
    <div className="flex items-center gap-2">
      <Link
        href="/admin/profile"
        className="hidden items-center gap-2 rounded-lg border border-orange-100 bg-orange-50 px-3 py-2 text-xs font-semibold text-orange-700 transition hover:bg-orange-100 md:inline-flex md:text-sm"
      >
        <CircleUserRound size={16} />
        <span className="max-w-28 truncate">{admin?.name || "Admin"}</span>
      </Link>

      <div className="rounded-lg bg-[#ff7b00] px-2 py-1.5 text-white transition hover:bg-orange-600 md:px-3 md:py-2">
        <Logout
          type="admin"
          redirectTo="/admin-auth/admin/login"
          className="m-0 p-0 text-xs font-semibold text-white md:text-sm"
        />
      </div>
    </div>
  );
}
