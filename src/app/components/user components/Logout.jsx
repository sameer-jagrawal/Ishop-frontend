'use client'
import React from 'react'
import { FiLogOut } from "react-icons/fi";
import { client, notify } from "@/utils/helper";
import { useRouter } from 'next/navigation';

export default function Logout() {
    const router = useRouter()
    const handleLogout = async() => {
        const res = await client.post("user/logOut")
        if(!res.data.success){
            return notify("user not found can't logout")
        }

       if(res.data.success){
       router.push("/")
       }
      }
  return (
    <section className=" px-5  md:px-7 my-6 text-red-500 font-semibold">
    <button  onClick={handleLogout} className="flex gap-2 cursor-pointer~">
    <FiLogOut size={20} />
Logout
    </button>
  </section>
  )
}
