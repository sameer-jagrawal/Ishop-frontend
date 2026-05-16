'use client'
import React, { useState } from 'react'
import { FaBars, FaTimes } from "react-icons/fa";
import { LuLayoutDashboard } from "react-icons/lu";
import { MdCategory } from "react-icons/md";
import { FaProductHunt } from "react-icons/fa";
import { IoMdColorPalette } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";
import { MdBusiness } from "react-icons/md";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(true)
  const [mobileOpen, setMobileOpen] = useState(false)

  const pages = [
    { name: "Dashboard", path: "/admin", icon: <LuLayoutDashboard /> },
    { name: "Category", path: "/admin/category", icon: <MdCategory /> },
    { name: "Brands", path: "/admin/brand", icon: <MdBusiness /> },
    { name: "Products", path: "/admin/product", icon: <FaProductHunt /> },
    { name: "Color", path: "/admin/color", icon: <IoMdColorPalette /> },
    { name: "Setting", path: "/admin/setting", icon: <IoMdSettings /> },
  ]

  const NavLinks = ({ onLinkClick }) => (
    <div className='px-4 mt-6 md:mt-10'>
      {pages.map((items, index) => (
        <Link key={index} href={items.path} onClick={onLinkClick}>
          <div className={`${pathname === items.path ? "bg-orange-400 rounded-2xl text-white" : "hover:underline"} flex p-3 items-center gap-4 md:gap-6 mb-3 text-xl md:text-2xl`}>
            {items.icon}
            <p className={`${open ? "block" : "hidden"} text-sm md:text-base`}>{items.name}</p>
          </div>
        </Link>
      ))}
    </div>
  )

  return (
    <>
      {/* Mobile hamburger button - only visible on small screens */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 bg-white shadow-md p-2 rounded-lg"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle sidebar"
      >
        {mobileOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
      </button>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/40 z-40"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile sidebar drawer */}
      <div className={`md:hidden fixed top-0 left-0 h-full w-64 bg-white shadow-2xl z-50 transform transition-transform duration-300 ${mobileOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex items-center justify-between px-4 py-4 border-b border-gray-200">
          <h1 className="font-bold text-xl text-orange-400">Ishop<b className="font-bold text-black">Admin</b></h1>
          <button onClick={() => setMobileOpen(false)}>
            <FaTimes className="text-xl cursor-pointer" />
          </button>
        </div>
        <NavLinks onLinkClick={() => setMobileOpen(false)} />
      </div>

      {/* Desktop sidebar */}
      <div className={`hidden md:block ${open ? 'w-64 lg:w-74' : 'w-20'} h-screen sticky top-0 duration-200 bg-white shadow-2xl text-black flex-shrink-0`}>
        <div className={`${open ? "justify-between" : "justify-center"} flex items-center px-4 py-4 border-b border-gray-500`}>
          <h1 className={`${open ? "block" : "hidden"} font-bold text-xl lg:text-2xl text-orange-400`}>
            Ishop<b className='font-bold text-black'>Admin</b>
          </h1>
          <div onClick={() => setOpen(!open)}>
            <FaBars className='text-xl cursor-pointer' />
          </div>
        </div>
        <NavLinks onLinkClick={() => {}} />
      </div>
    </>
  )
}
