"use client";
// import React, { Children } from "react
import CurrencySelect from "./Dropdown";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { FaChevronDown, FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { lsToCart } from "@/redux/features/cartslice";
import { CircleUser } from 'lucide-react';
export default function Header({ user }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navitmes = [
    {
      path: "/",
      name: "Home",
    },

    {
      path: "/about",
      name: "About Us",
    },

    {
      path: "/products",
      name: "Products",
    },

    {
      path: "/contact",
      name: "Contact Us",
    },
  ];

  const cart = useSelector((store) => store.cart);

  const dispatcher = useDispatch();

  useEffect(() => {
    dispatcher(lsToCart());
  }, []);

  return (
    <>
      <header className="w-full sticky top-[-60px] z-100 bg-white ms-auto duration-75">
        {/* top section - hidden on mobile */}
        <div className="hidden md:block w-full py-3 px-6">
          <div className="w-full flex justify-between font items-center">
            <div className="flex items-center gap-5">
              <div className="px-2 py-1 rounded-md bg-[#EBEEF6] text-black">
                Hotline 24/7
              </div>
              <div className="font-semibold">(025) 3886 25 16</div>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex gap-5">
                <a href="">Sell on Ishop</a>
                <a href="">Order Tracking</a>
              </div>
              <div className="flex items-center gap-2">
                <select className="border-r h-6 border-gray-300" name="" id="">
                  <option value="">USD</option>
                  <option value="">INR</option>
                  <option value="">YEN</option>
                  <option value="">EUR</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* nav section */}
        <div className="px-4 md:px-6 w-full mb-3 md:mb-5 flex justify-between items-center mt-3 md:mt-4">
          {/* nav left section */}
          <div className="flex gap-20 md:gap-40 lg:gap-60 items-center">
            <Link href={"/"}>
            <div className="flex gap-3 items-center">
              {/* logo */}
              <div className="relative">
                <Image
                  src="/logo/logo.png"
                  alt="Company logo"
                  width={45}
                  height={40}
                  priority
                  className="md:w-[55px] md:h-[49px]"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image
                    src={"/logo/vector1.png"}
                    alt="vector"
                    width={12}
                    height={8}
                    className="md:w-[15px] md:h-[10px]"
                  />
                </div>
              </div>

              <a className="font-bold text-sm md:text-base" href="/">
                ISHOP
              </a>
            </div>
            </Link>

            {/* Desktop nav links - hidden on mobile */}
            <div className="hidden  lg:flex gap-6 xl:gap-10  uppercase">
              {navitmes.map((itmes, index) => {
                return (
                  <Link key={index} href={itmes.path} className="">
                    {itmes.name}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* nav right section */}
          <div className="flex items-center gap-4 md:gap-8 lg:gap-12">
            {/* login / register - hidden on mobile (shown in mobile menu) */}
            <div className="hidden md:block">
              <div className="font-semibold">
                {user ? (
                  <Link
                    href="/profile"
                    className="flex items-center gap-2 hover:underline transition-all duration-300"
                  >
                    <CircleUser className="w-5 h-5" />
                    <span>{user?.data?.name}</span>
                  </Link>
                ) : (
                  <Link
                    href="/login"
                    className="hover:underline transition-all duration-300"
                  >
                    <span>LOG IN</span>
                  </Link>
                )}
              </div>
            </div>

            {/* cart section */}
            <div className="flex items-center gap-2 md:gap-3">
              <div className="relative inline-flex items-center justify-center">
                <Link href={"/cart"}>
                  <ShoppingCart className="w-5 h-5 md:w-6 md:h-6 text-gray-800" />
                </Link>
                <span className="absolute -top-2 -right-2 min-w-[18px] h-[18px] px-1 flex items-center justify-center text-[10px] font-semibold text-white bg-red-600 rounded-full leading-none shadow">
                  {cart?.items?.length || 0}
                </span>
              </div>
              <div className="hidden sm:block">
                <p className="text-gray-400 text-xs">CART</p>
                <p className="font-bold text-sm">${cart?.finalTotal}</p>
              </div>
            </div>

            {/* Hamburger - visible on mobile/tablet */}
            <button
              className="lg:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <FaTimes className="text-xl" />
              ) : (
                <FaBars className="text-xl" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 px-4 py-4 shadow-md">
            <nav className="flex flex-col gap-3 mb-4">
              {navitmes.map((item, index) => (
                <Link
                  key={index}
                  href={item.path}
                  className=" uppercase py-2 border-b border-gray-100"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            <div className="font-bold py-2">
              {user ? (
                <Link
                  href="/profile"
                  className="flex items-center gap-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <CircleUser className="w-5 h-5" />
                  <span>{user?.data?.name}</span>
                </Link>
              ) : (
                <Link
                  href="/login"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  LOG IN
                </Link>
              )}
            </div>
          </div>
        )}

        {/* search section */}
        <div className="w-full">
          <div className="px-4 md:px-6 flex flex-col sm:flex-row items-stretch sm:items-center w-full py-3 md:py-4 bg-[#01A49E] gap-3 md:gap-6">
            {/* Search bar */}
            <div className="rounded-full bg-white flex items-center flex-1 py-2 px-4 text-black gap-3">
              {/* Category - hidden on small screens */}
              <div className="hidden sm:flex items-center gap-2 whitespace-nowrap">
                <span className="text-sm">All Categories</span>
                <FaChevronDown className="text-gray-500 text-xs" />
              </div>

              {/* Input */}
              <input
                className="flex-1 outline-none text-sm min-w-0"
                type="text"
                placeholder="Search for Products, Brand & More"
              />

              {/* Search icon */}
              <FaSearch className="text-gray-500 cursor-pointer flex-shrink-0" />
            </div>

            {/* Promo items - hidden on mobile */}
            <ul className="hidden xl:flex text-white gap-8 2xl:gap-12 uppercase text-xs whitespace-nowrap">
              <li>free shipping over $199</li>
              <li>30 days money back</li>
              <li>100% secure payment</li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}
