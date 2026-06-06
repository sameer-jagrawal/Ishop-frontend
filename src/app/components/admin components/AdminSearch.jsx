"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { FiSearch } from "react-icons/fi";

export default function AdminSearch() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentSearch = searchParams.get("search") || "";

  const submitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const search = String(formData.get("search") || "").trim();
    const params = new URLSearchParams(searchParams.toString());

    if (search) {
      params.set("search", search);
    } else {
      params.delete("search");
    }

    router.push(`${pathname}${params.toString() ? `?${params.toString()}` : ""}`);
  };

  return (
    <form onSubmit={submitHandler} className="flex w-44 items-center bg-gray-100 px-3 py-2 sm:w-64 md:w-96">
      <FiSearch className="mr-2 shrink-0 text-gray-400" />
      <input
        key={`${pathname}-${currentSearch}`}
        type="search"
        name="search"
        defaultValue={currentSearch}
        placeholder="Search this page..."
        className="w-full bg-transparent text-sm outline-none"
      />
    </form>
  );
}
