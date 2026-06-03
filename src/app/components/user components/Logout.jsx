'use client'
import React from 'react'
import { FiLogOut } from "react-icons/fi";
import { client, notify } from "@/utils/helper";
import { useRouter } from 'next/navigation';
import { clearAuthSession } from '@/lib/auth';
import Swal from 'sweetalert2';

export default function Logout({
  className = "px-5 md:px-7 my-6 text-red-500 font-semibold",
  type = "user",
  redirectTo,
}) {
    const router = useRouter()
    const handleLogout = async() => {
      const result = await Swal.fire({
        title: "Logout?",
        text: "Are you sure you want to logout?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, logout",
        cancelButtonText: "Cancel",
        confirmButtonColor: "#ef4444",
      });

      if (!result.isConfirmed) return;

      try {
        await client.post("user/logOut")
      } catch (error) {
        console.log(error)
      } finally {
        await clearAuthSession(type)
        notify("Logged out successfully", true)
        router.refresh()
        router.push(redirectTo || (type === "admin" ? "/admin-auth/admin/login" : "/"))
        }
      }
  return (
    <section className={className}>
    <button type="button" onClick={handleLogout} className="flex items-center gap-2 cursor-pointer">
    <FiLogOut size={20} />
Logout
    </button>
  </section>
  )
}
