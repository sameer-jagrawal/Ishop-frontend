"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  CircleUser,
  Menu,
  Phone,
  RotateCcw,
  Search,
  ShieldCheck,
  ShoppingCart,
  Truck,
  X,
} from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { lsToCart } from "@/redux/features/cartslice";

const navItems = [
  { path: "/", name: "Home" },
  { path: "/about", name: "About Us" },
  { path: "/products", name: "Products" },
  { path: "/contact", name: "Contact Us" },
];

const perks = [
  { icon: Truck, label: "Free shipping over $199" },
  { icon: RotateCcw, label: "30 days money back" },
  { icon: ShieldCheck, label: "100% secure payment" },
];

export default function Header({ user }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const cart = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(lsToCart());
  }, [dispatch]);

  const isActive = (path) =>
    path === "/" ? pathname === "/" : pathname?.startsWith(path);

  const navLinkClass = (path) =>
    `relative py-2 text-[13px] font-semibold uppercase tracking-[0.08em] transition-colors duration-200 ${
      isActive(path)
        ? "text-[#01A49E] after:w-full"
        : "text-gray-700 hover:text-[#01A49E] after:w-0"
    } after:absolute after:left-0 after:bottom-0 after:h-[2px] after:rounded-full after:bg-[#01A49E] after:transition-all after:duration-300 hover:after:w-full`;

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 shadow-[0_10px_30px_-24px_rgba(15,23,42,0.6)] backdrop-blur">
      <div className="hidden border-b border-gray-100 md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2.5 text-sm text-gray-600">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#01A49E]/10 px-3 py-1 text-xs font-semibold text-[#01857f]">
              <Phone size={14} />
              Hotline 24/7
            </span>
            <span className="font-semibold text-gray-800">(025) 3886 25 16</span>
          </div>

          <div className="flex items-center gap-6">
            <Link href="/contact" className="transition-colors hover:text-[#01A49E]">
              Sell on Ishop
            </Link>
            <Link href="/veiw-orders" className="transition-colors hover:text-[#01A49E]">
              Order Tracking
            </Link>
            <select
              className="rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-semibold outline-none transition focus:border-[#01A49E] focus:ring-2 focus:ring-[#01A49E]/15"
              aria-label="Currency"
            >
              <option value="USD">USD</option>
              <option value="INR">INR</option>
              <option value="YEN">YEN</option>
              <option value="EUR">EUR</option>
            </select>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-6 lg:py-4">
        <div className="flex items-center gap-8 xl:gap-12">
          <Link href="/" className="group flex items-center gap-3" aria-label="IShop home">
            <div className="relative grid h-11 w-11 place-items-center rounded-2xl bg-gray-50 ring-1 ring-gray-100 transition group-hover:ring-[#01A49E]/30 md:h-12 md:w-12">
              <Image
                src="/logo/logo.png"
                alt="IShop logo"
                width={50}
                height={44}
                priority
                className="h-10 w-10 object-contain md:h-11 md:w-11"
              />
              <Image
                src="/logo/vector1.png"
                alt=""
                width={13}
                height={9}
                className="absolute"
              />
            </div>
            <span className="text-lg font-extrabold tracking-wide text-gray-900 transition-colors group-hover:text-[#01A49E] md:text-xl">
              ISHOP
            </span>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex xl:gap-9" aria-label="Main navigation">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path} className={navLinkClass(item.path)}>
                {item.name}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-3 md:gap-4">
          <div className="hidden md:block">
            {user ? (
              <Link
                href="/profile"
                className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-3.5 py-2 text-sm font-semibold text-gray-800 transition hover:border-[#01A49E]/40 hover:bg-[#01A49E]/10 hover:text-[#01857f]"
              >
                <CircleUser size={18} />
                <span className="max-w-28 truncate">{user?.data?.name}</span>
              </Link>
            ) : (
              <Link
                href="/login"
                className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-4 py-2 text-sm font-bold text-gray-800 transition hover:border-[#01A49E]/40 hover:bg-[#01A49E]/10 hover:text-[#01857f]"
              >
                <CircleUser size={18} />
                Log In
              </Link>
            )}
          </div>

          <Link
            href="/cart"
            className="group inline-flex items-center gap-3 rounded-full border border-gray-200 px-3 py-2 transition hover:border-[#01A49E]/40 hover:bg-[#01A49E]/10"
            aria-label="Cart"
          >
            <span className="relative grid h-9 w-9 place-items-center rounded-full bg-gray-100 text-gray-800 transition group-hover:bg-white group-hover:text-[#01A49E]">
              <ShoppingCart size={20} />
              <span className="absolute -right-1 -top-1 grid min-w-[19px] place-items-center rounded-full bg-red-600 px-1 text-[10px] font-bold leading-[19px] text-white shadow">
                {cart?.items?.length || 0}
              </span>
            </span>
            <span className="hidden leading-tight sm:block">
              <span className="block text-[11px] font-semibold uppercase tracking-wide text-gray-400">
                Cart
              </span>
              <span className="block text-sm font-bold text-gray-900">
                ${cart?.finalTotal || 0}
              </span>
            </span>
          </Link>

          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full border border-gray-200 text-gray-800 transition hover:border-[#01A49E]/40 hover:bg-[#01A49E]/10 hover:text-[#01857f] lg:hidden"
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="border-t border-gray-100 bg-white px-4 py-4 shadow-lg lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`rounded-xl px-3 py-3 text-sm font-semibold uppercase tracking-wide transition ${
                  isActive(item.path)
                    ? "bg-[#01A49E]/10 text-[#01857f]"
                    : "text-gray-700 hover:bg-gray-50 hover:text-[#01A49E]"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            <div className="mt-3 border-t border-gray-100 pt-3">
              {user ? (
                <Link
                  href="/profile"
                  className="flex items-center gap-2 rounded-xl px-3 py-3 text-sm font-semibold text-gray-800 transition hover:bg-[#01A49E]/10 hover:text-[#01857f]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <CircleUser size={18} />
                  <span>{user?.data?.name}</span>
                </Link>
              ) : (
                <Link
                  href="/login"
                  className="flex items-center gap-2 rounded-xl px-3 py-3 text-sm font-bold text-gray-800 transition hover:bg-[#01A49E]/10 hover:text-[#01857f]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <CircleUser size={18} />
                  Log In
                </Link>
              )}
            </div>
          </nav>
        </div>
      )}

      <div className="bg-[#01A49E]">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-3 md:px-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex min-h-12 flex-1 items-center gap-3 rounded-full bg-white px-4 shadow-sm ring-1 ring-white/20 transition focus-within:ring-4 focus-within:ring-white/25">
            <button
              type="button"
              className="hidden items-center gap-2 rounded-full bg-gray-50 px-3 py-2 text-sm font-semibold text-gray-700 transition hover:bg-[#01A49E]/10 hover:text-[#01857f] sm:inline-flex"
            >
              All Categories
              <ChevronDown size={15} />
            </button>
            <input
              className="min-w-0 flex-1 bg-transparent text-sm font-medium text-gray-800 outline-none placeholder:text-gray-400"
              type="text"
              placeholder="Search for products, brands and more"
            />
            <button
              type="button"
              className="grid h-9 w-9 place-items-center rounded-full bg-[#01A49E] text-white transition hover:bg-[#01857f]"
              aria-label="Search"
            >
              <Search size={18} />
            </button>
          </div>

          <ul className="hidden items-center gap-5 text-xs font-semibold uppercase tracking-wide text-white xl:flex">
            {perks.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2">
                <Icon size={16} />
                {label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
