import Image from "next/image";
import Link from "next/link";
import { MapPin, PackageCheck, Pencil, Phone, UserRound } from "lucide-react";
import { getMe } from "@/api_call/serverApi";
import Logout from "@/app/components/user components/Logout";


export default async function ProfilePage() {
  const user = await getMe()
  const profile = user?.data;
  const initials = profile?.name
    ?.split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase() || "U";

  
  return (
    <main className="mx-auto max-w-6xl px-4 py-6 md:px-6 md:py-10 ">
      <div className="overflow-hidden rounded-lg border border-gray-200 bg-white py-2">
        <section className="flex flex-col gap-5 border-b border-gray-200  md:flex-row md:items-center md:justify-between md:px-7 px-5">
          <div className="flex items-center gap-4 ">
            {profile?.image ? (
              <Image
                src={profile.image}
                alt={profile?.name || "User"}
                width={72}
                height={72}
                className="h-18 w-18 rounded-full border border-gray-200 object-cover"
              />
            ) : (
              <div className="grid h-18 w-18 place-items-center rounded-full bg-[#01A49E]/10 text-xl font-bold text-[#01857f]">
                {initials}
              </div>
            )}
            <div className="min-w-0">
              <h1 className="mt-1 truncate text-2xl font-bold text-gray-900">
                {profile?.name || "User"}
              </h1>
              <p className="mt-1 break-all text-sm text-gray-500">{profile?.email}</p>
            </div>
          </div>
          <Link
            href={profile?._id ? `/profile/edit/${profile._id}` : "/profile"}
            className="inline-flex w-fit items-center gap-2 rounded-md bg-[#01A49E] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#01857f] my-3 "
          >
            <Pencil size={16} /> Edit Profile
          </Link>

        </section>

        <section className="grid grid-cols-1 md:grid-cols-[1fr_280px]">
          <div className="divide-y divide-gray-200">
            <div className="grid gap-5 px-5 py-5 sm:grid-cols-2 md:px-7">
              <div>
                <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-gray-500">
                  <UserRound size={16} />
                  Full Name
                </div>
                <p className="font-semibold text-gray-900">{profile?.name || "Not added"}</p>
              </div>
              <div>
                <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-gray-500">
                  <Phone size={16} />
                  Phone Number
                </div>
                <p className="font-semibold text-gray-900">{profile?.phone || "Not added"}</p>
              </div>
            </div>

            <div className="grid gap-3 px-5 py-5 sm:grid-cols-2 md:px-7">
              <Link
                href="/profile/address"
                className="flex items-center justify-between rounded-md border border-gray-200 px-4 py-3 text-sm font-semibold text-gray-800 transition hover:border-[#01A49E] hover:text-[#01857f]"
              >
                <span className="inline-flex items-center gap-2">
                  <MapPin size={17} />
                  My Addresses
                </span>
                <span className="text-gray-400">{profile?.addresses?.length || 0}</span>
              </Link>

              <Link
                href="/veiw-orders"
                className="flex items-center gap-2 rounded-md border border-gray-200 px-4 py-3 text-sm font-semibold text-gray-800 transition hover:border-[#01A49E] hover:text-[#01857f]"
              >
                <PackageCheck size={17} />
                My Orders
              </Link>
            </div>
          </div>

          <aside className="border-t border-gray-200 bg-gray-50 px-5 py-5 md:border-l md:border-t-0 md:px-6">
            <p className="text-sm font-semibold text-gray-900">Account Security</p>
            <p className="mt-2 text-sm leading-6 text-gray-500">
              Keep your profile details updated for faster checkout and delivery support.
            </p>
          </aside>
        </section>
        <Logout/>
      </div>
    </main>
  );
}
