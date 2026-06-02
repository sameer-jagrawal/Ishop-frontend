'use client'
import React from 'react'
import { FiLogOut } from "react-icons/fi";
import { client, notify } from "@/utils/helper";
import { useRouter } from 'next/navigation';
import { clearAuthSession } from '@/lib/auth';

export default function Logout({ className = "px-5 md:px-7 my-6 text-red-500 font-semibold" }) {
    const router = useRouter()
    const handleLogout = async() => {
      try {
        await client.post("user/logOut")
      } catch (error) {
        console.log(error)
      } finally {
        await clearAuthSession()
        notify("Logged out successfully", true)
        router.refresh()
        router.push("/")
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
