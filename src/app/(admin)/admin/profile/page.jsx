"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { BadgeCheck, Mail, ShieldCheck, UserRound } from "lucide-react";
import Logout from "@/app/components/user components/Logout";

export default function AdminProfilePage() {
  const [admin, setAdmin] = useState(null);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const storedAdmin = JSON.parse(localStorage.getItem("admin") || "null");
      setAdmin(storedAdmin);
    }, 0);

    return () => window.clearTimeout(timer);
  }, []);

  const initials = useMemo(() => {
    return (
      admin?.name
        ?.split(" ")
        .map((part) => part[0])
        .slice(0, 2)
        .join("")
        .toUpperCase() || "A"
    );
  }, [admin?.name]);

  if (!admin?.token) {
    return (
      <main className="mx-auto max-w-4xl px-4 py-10">
        <div className="rounded-lg border border-gray-200 bg-white p-8 text-center">
          <h1 className="text-2xl font-bold text-gray-900">Admin session not found</h1>
          <p className="mt-2 text-sm text-gray-500">Login again to access the admin profile.</p>
          <Link
            href="/admin-auth/admin/login"
            className="mt-5 inline-flex rounded-md bg-orange-500 px-4 py-2 text-sm font-semibold text-white hover:bg-orange-600"
          >
            Admin Login
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-6 md:px-6 md:py-10">
      <div className="overflow-hidden rounded-lg border border-gray-200 bg-white py-2">
        <section className="flex flex-col gap-5 border-b border-gray-200 px-5 md:flex-row md:items-center md:justify-between md:px-7">
          <div className="flex items-center gap-4">
            <div className="grid h-18 w-18 place-items-center rounded-full bg-orange-100 text-xl font-bold text-orange-700">
              {initials}
            </div>
            <div className="min-w-0">
              <h1 className="mt-1 truncate text-2xl font-bold text-gray-900">
                {admin?.name || "Admin"}
              </h1>
              <p className="mt-1 break-all text-sm text-gray-500">{admin?.email}</p>
            </div>
          </div>

          <div className="my-3 inline-flex w-fit items-center gap-2 rounded-md bg-orange-500 px-4 py-2 text-sm font-semibold text-white">
            <ShieldCheck size={16} /> Admin Account
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-[1fr_280px]">
          <div className="divide-y divide-gray-200">
            <div className="grid gap-5 px-5 py-5 sm:grid-cols-2 md:px-7">
              <div>
                <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-gray-500">
                  <UserRound size={16} />
                  Full Name
                </div>
                <p className="font-semibold text-gray-900">{admin?.name || "Not added"}</p>
              </div>
              <div>
                <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-gray-500">
                  <Mail size={16} />
                  Email
                </div>
                <p className="break-all font-semibold text-gray-900">{admin?.email || "Not added"}</p>
              </div>
            </div>

            <div className="px-5 py-5 md:px-7">
              <div className="flex items-center justify-between rounded-md border border-gray-200 px-4 py-3 text-sm font-semibold text-gray-800">
                <span className="inline-flex items-center gap-2">
                  <BadgeCheck size={17} />
                  Role
                </span>
                <span className="rounded-full bg-orange-100 px-3 py-1 text-orange-700">
                  {admin?.role || "admin"}
                </span>
              </div>
            </div>
          </div>

          <aside className="border-t border-gray-200 bg-gray-50 px-5 py-5 md:border-l md:border-t-0 md:px-6">
            <p className="text-sm font-semibold text-gray-900">Admin Security</p>
            <p className="mt-2 text-sm leading-6 text-gray-500">
              Use a separate admin session for dashboard access. User login no longer affects admin login.
            </p>
          </aside>
        </section>

        <Logout
          type="admin"
          redirectTo="/admin-auth/admin/login"
          className="px-5 py-5 text-red-500 font-semibold"
        />
      </div>
    </main>
  );
}
