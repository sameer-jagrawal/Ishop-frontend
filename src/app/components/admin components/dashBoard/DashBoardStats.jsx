export default function AdminDashboardStats() {
    const stats = [
      {
        title: "Total Sales",
        value: "$48,920",
        icon: "💰",
        growth: "+12.5%",
        border: "border-emerald-200",
        bg: "bg-emerald-50",
      },
      {
        title: "Total Orders",
        value: "1,284",
        icon: "📦",
        growth: "+8.2%",
        border: "border-blue-200",
        bg: "bg-blue-50",
      },
      {
        title: "Products",
        value: "324",
        icon: "🛍️",
        growth: "+4.1%",
        border: "border-violet-200",
        bg: "bg-violet-50",
      },
      {
        title: "Customers",
        value: "2,914",
        icon: "👥",
        growth: "+15.3%",
        border: "border-pink-200",
        bg: "bg-pink-50",
      },
      {
        title: "Revenue",
        value: "$132,480",
        icon: "📈",
        growth: "+10.8%",
        border: "border-orange-200",
        bg: "bg-orange-50",
      },
      {
        title: "Pending Orders",
        value: "18",
        icon: "⏳",
        growth: "Needs Attention",
        border: "border-red-200",
        bg: "bg-red-50",
      },
    ];
  
    return (
      <div className="w-full bg-[#fff7f2] p-2 ">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Admin Dashboard
          </h1>
  
          <p className="text-gray-500 mt-2 text-sm md:text-base">
            Monitor your ecommerce business performance
          </p>
        </div>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
          {stats.map((item, index) => (
            <div
              key={index}
              className={`bg-white border ${item.border} rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-300`}
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">
                    {item.title}
                  </p>
  
                  <h2 className="text-2xl font-bold text-gray-900 mt-2">
                    {item.value}
                  </h2>
                </div>
  
                <div className={`w-12 h-12 rounded-xl ${item.bg} ${item.border} border flex items-center justify-center text-xl`}>
                  {item.icon}
                </div>
              </div>
  
              <div className="mt-4 flex items-center justify-between">
                <span className="text-sm text-orange-400 font-semibold">
                  {item.growth}
                </span>
  
                <span className="text-xs text-gray-400">
                  Last 30 days
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  