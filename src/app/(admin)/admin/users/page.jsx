import { getAdminUsers } from "@/api_call/serverApi";
import { BarChart, PieChart, ProgressList } from "@/app/components/admin components/AdminCharts";
import { userImageUrl } from "@/utils/mediaUrl";
import { CalendarDays, Mail, MapPin, PackageCheck, Phone, UserRound, WalletCards } from "lucide-react";

const money = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

function formatDate(dateValue) {
  if (!dateValue) return "Not available";

  return new Date(dateValue).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

function StatCard({ icon: Icon, label, value }) {
  return (
    <div className="border border-gray-200 bg-white p-4">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-sm text-gray-500">{label}</p>
          <p className="mt-2 text-xl font-medium text-gray-900">{value}</p>
        </div>
        <span className="grid h-9 w-9 place-items-center rounded-md bg-gray-50 text-gray-600">
          <Icon size={18} />
        </span>
      </div>
    </div>
  );
}

function UserAvatar({ user }) {
  const initials = user?.name
    ?.split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase() || "U";

  if (user?.image) {
    return (
      <img
        src={userImageUrl(user.image)}
        alt={user.name || "User"}
        className="h-14 w-14 rounded-full border border-gray-200 object-cover"
      />
    );
  }

  return (
    <div className="grid h-14 w-14 place-items-center rounded-full border border-gray-200 bg-gray-50 text-sm font-medium text-gray-700">
      {initials}
    </div>
  );
}

export default async function AdminUsersPage({ searchParams }) {
  const params = await searchParams;
  const search = params?.search || "";
  const usersRes = await getAdminUsers({ search });
  const users = usersRes?.data?.users || [];
  const analytics = usersRes?.data?.analytics || {};
  const topCustomers = [...users]
    .sort((a, b) => Number(b.totalSpent || 0) - Number(a.totalSpent || 0))
    .slice(0, 6)
    .map((user) => ({ _id: user.name || user.email, count: user.totalSpent || 0 }));

  return (
    <main className="min-h-screen bg-gray-50 p-2 md:p-4">
      <div className="mb-6">
        <h1 className="text-2xl font-medium text-gray-900">Users</h1>
        <p className="mt-1 text-sm text-gray-500">Customer profiles, orders and activity analytics</p>
      </div>

      <section className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard icon={UserRound} label="Total Users" value={analytics.totalUsers || 0} />
        <StatCard icon={PackageCheck} label="Users With Orders" value={analytics.usersWithOrders || 0} />
        <StatCard icon={Mail} label="Verified Users" value={analytics.verifiedUsers || 0} />
        <StatCard icon={WalletCards} label="Customer Revenue" value={money.format(analytics.totalCustomerRevenue || 0)} />
      </section>

      <section className="mt-4 grid gap-4 xl:grid-cols-3">
        <div className="border border-gray-200 bg-white p-4 xl:col-span-2">
          <h2 className="text-base font-medium text-gray-900">User Joining Growth</h2>
          <p className="mb-4 mt-1 text-sm text-gray-500">Monthly account creation</p>
          <BarChart data={analytics.monthlyGrowth || []} valueKey="count" />
        </div>
        <div className="border border-gray-200 bg-white p-4">
          <h2 className="text-base font-medium text-gray-900">Role Mix</h2>
          <p className="mb-4 mt-1 text-sm text-gray-500">Users by role</p>
          <PieChart data={analytics.roleBreakdown || []} />
        </div>
        <div className="border border-gray-200 bg-white p-4 xl:col-span-3">
          <h2 className="text-base font-medium text-gray-900">Top Customer Activity</h2>
          <p className="mb-4 mt-1 text-sm text-gray-500">Highest total spending by user</p>
          <ProgressList data={topCustomers} />
        </div>
      </section>

      <section className="mt-4 border border-gray-200 bg-white">
        <div className="border-b border-gray-100 p-4">
          <h2 className="text-base font-medium text-gray-900">All Users</h2>
          <p className="mt-1 text-sm text-gray-500">
            {search ? `Search results for "${search}"` : "Complete user list"}
          </p>
        </div>

        <div className="divide-y divide-gray-100">
          {users.map((user) => {
            const address = user.defaultAddress;

            return (
              <article key={user._id} className="grid gap-4 p-4 xl:grid-cols-[320px_1fr_260px]">
                <div className="flex gap-4">
                  <UserAvatar user={user} />
                  <div className="min-w-0">
                    <h3 className="truncate text-base font-medium text-gray-900">{user.name}</h3>
                    <p className="mt-1 break-all text-sm text-gray-500">{user.email}</p>
                    <span className="mt-2 inline-block border border-gray-200 px-2 py-1 text-xs capitalize text-gray-600">
                      {user.role}
                    </span>
                  </div>
                </div>

                <div className="grid gap-3 text-sm text-gray-600 sm:grid-cols-2 lg:grid-cols-4">
                  <p className="flex items-center gap-2"><Phone size={15} /> {user.phone || "No phone"}</p>
                  <p className="flex items-center gap-2"><CalendarDays size={15} /> Joined {formatDate(user.createdAt)}</p>
                  <p className="flex items-center gap-2"><PackageCheck size={15} /> {user.ordersCount || 0} orders</p>
                  <p className="flex items-center gap-2"><WalletCards size={15} /> {money.format(user.totalSpent || 0)}</p>
                </div>

                <div className="text-sm text-gray-600">
                  <p className="mb-1 flex items-center gap-2 text-gray-500"><MapPin size={15} /> Default address</p>
                  <p>{address ? `${address.addressLine1}, ${address.city}, ${address.state} - ${address.postalCode}` : "No address added"}</p>
                  <p className="mt-2 text-xs text-gray-400">Last order: {formatDate(user.lastOrderAt)}</p>
                </div>
              </article>
            );
          })}

          {!users.length && (
            <div className="p-10 text-center text-sm text-gray-500">No users found.</div>
          )}
        </div>
      </section>
    </main>
  );
}
