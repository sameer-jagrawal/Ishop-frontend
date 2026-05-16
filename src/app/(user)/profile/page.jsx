import Image from "next/image";
import Link from "next/link";
import { Pencil } from "lucide-react";
import { getMe } from "@/api_call/serverApi";

export default async function ProfilePage() {
  const user = await getMe()
  console.log(user.data.name, "user at profile")
  return (
    <div className="max-w-6xl mx-auto p-4 md:p-6 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
      {/* Sidebar */}
      <div className="col-span-1 md:col-span-3 bg-white shadow rounded-xl p-4 md:p-5 h-fit">
        <div className="flex flex-row md:flex-col items-center md:text-center gap-4 md:gap-0 border-b pb-4 md:pb-5">
          <Image
            src={user?.image}
            alt="user"
            width={80}
            height={80}
            className="rounded-lg object-cover md:w-[120px] md:h-[120px]"
          />
          <div>
            <h2 className="mt-0 md:mt-4 text-base md:text-lg font-semibold text-gray-800">
              {user?.data?.name}
            </h2>
            <p className="text-xs md:text-sm text-gray-500">{user.email}</p>
          </div>
        </div>

        <div className="mt-4 md:mt-5 space-y-3">
          <Link
            href="/profile/address"
            className="block bg-[#01A49E] text-white px-4 py-2 rounded-lg text-sm border border-[#01A49E] hover:bg-gray-100 hover:text-black transition"
          >
            My Addresses
          </Link>

          <button className="w-full text-left mt-2 md:mt-3 px-4 py-2 rounded-lg text-sm md:text-md font-semibold text-red-500 cursor-pointer">
            Logout
          </button>
        </div>
      </div>

      {/* Profile Details */}
      <div className="col-span-1 md:col-span-9 bg-white shadow rounded-xl p-4 md:p-6">
        <div className="flex items-center justify-between mb-4 md:mb-6">
          <h1 className="text-xl md:text-2xl font-bold text-gray-800">
            Profile Information
          </h1>
          <Link
            href="/profile/edit"
            className="flex gap-2 items-center bg-cyan-500 text-white px-3 md:px-5 py-2 rounded-lg text-xs md:text-sm"
          >
            <Pencil size={16} /> Edit
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
          {/* Name */}
          <div className="bg-gray-50 shadow-lg border border-gray-100 rounded-xl p-4 md:p-5 transition-all duration-300 hover:shadow-md hover:border-cyan-200">
            <p className="text-xs md:text-sm text-gray-500 mb-2">Full Name</p>
            <h3 className="font-semibold text-gray-800 text-base md:text-lg">{user?.data?.name}</h3>
          </div>

          {/* Email */}
          <div className="bg-gray-50 shadow-lg border border-gray-100 rounded-xl p-4 md:p-5 transition-all duration-300 hover:shadow-md hover:border-cyan-200">
            <p className="text-xs md:text-sm text-gray-500 mb-2">Email Address</p>
            <h3 className="font-semibold text-gray-800 text-base md:text-lg break-all">{user?.data?.email}</h3>
          </div>

          {/* Phone */}
          <div className="bg-gray-50 border shadow-lg border-gray-100 rounded-xl p-4 md:p-5 transition-all duration-300 hover:shadow-md hover:border-cyan-200">
            <p className="text-xs md:text-sm text-gray-500 mb-2">Phone Number</p>
            <h3 className="font-semibold text-gray-800 text-base md:text-lg">9249294924</h3>
          </div>

          {/* My orders */}
          <Link href={"/veiw-orders"}>
            <div className="bg-gray-50 shadow-lg border border-gray-100 rounded-xl p-4 md:p-5 transition-all duration-300 hover:shadow-md hover:border-cyan-200">
              <p className="text-xs md:text-sm text-gray-500 mb-2">My Orders</p>
              <h3 className="font-semibold text-gray-800 text-base md:text-lg break-all">View Orders</h3>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
