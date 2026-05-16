import { getSingleOrder } from "@/api_call/api";

export default async function OrderViewPage({ params }) {

  const {id} = await params;
  const orderRes = await getSingleOrder(id);
  const order = orderRes?.data?.order;
  const address = order?.shippingAddress
  console.log(order)

  // console.log(order)
    const statusStyle = {
      Processing:
        "bg-orange-50 text-orange-500 border border-orange-200",
      Delivered:
        "bg-emerald-50 text-emerald-600 border border-emerald-200",
      Pending:
        "bg-yellow-50 text-yellow-600 border border-yellow-200",
      Cancelled:
        "bg-red-50 text-red-600 border border-red-200",
    };
  
   

    return (
      <div className="min-h-screen bg-[#fff7f2] p-6 md:p-10">
  
        {/* Top Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 mb-8">
  
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Order Details
            </h1>
  
            <p className="text-gray-500 mt-2 text-sm">
              Complete overview of customer order
            </p>
          </div>
  
          <div className="flex flex-wrap gap-3">
  
            <button className="px-5 py-2.5 rounded-xl bg-orange-400 text-white font-medium hover:bg-orange-500 transition">
              Update Status
            </button>
  
            <button className="px-5 py-2.5 rounded-xl border border-orange-200 text-orange-500 font-medium hover:bg-orange-50 transition">
              Print Invoice
            </button>
  
          </div>
  
        </div>
        <div className="w-fit bg-white border border-orange-100 rounded-2xl p-2 shadow-sm">
            <p className="text-sm text-gray-500">
              Order ID
            </p>
  
            <h2 className="text-xl font-bold text-gray-900">
              {order?._id}
            </h2>
          </div>
        {/* Order Summary */}
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mb-8">

{/* 
          <div className="bg-white border border-orange-100 rounded-2xl p-5 shadow-sm">
            <p className="text-sm text-gray-500">
              Order ID
            </p>
  
            <h2 className="text-xl font-bold text-gray-900 mt-2">
              {order?._id}
            </h2>
          </div> */}
  
          <div className="bg-white border border-blue-100 rounded-2xl p-5 shadow-sm">
            <p className="text-sm text-gray-500">
              Order Date
            </p>
  
            <h2 className="text-xl font-bold text-gray-900 mt-2">
            {new Date(order.createdAt).toLocaleDateString("en-IN", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })}
            </h2>
          </div>
  
          <div className="bg-white border border-green-100 rounded-2xl p-5 shadow-sm">
            <p className="text-sm text-gray-500">
              Payment
            </p>
  
            <h2 className="text-xl font-bold text-gray-900 mt-2">
              {order?.paymentMethod}
            </h2>
          </div>
  
          <div className="bg-white border border-orange-100 rounded-2xl p-5 shadow-sm">
            <p className="text-sm text-gray-500">
              Status
            </p>
  
            <div className="mt-3">
              <span
                className={`px-3 py-1 rounded-full text-sm font-semibold ${statusStyle[order.status]}`}
              >
                {order?.status}
              </span>
            </div>
          </div>
  
        </div>
  
        {/* Main Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
  
          {/* Left Section */}
          <div className="xl:col-span-2 space-y-6">
  
            {/* Products */}
            <div className="bg-white border border-orange-100 rounded-3xl p-6 shadow-sm">
  
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    Ordered Products
                  </h2>
  
                  <p className="text-sm text-gray-500 mt-1">
                    Products included in this order
                  </p>
                </div>
              </div>
  
              <div className="space-y-4">
  
                {order.items.map((product, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 border border-orange-50 rounded-2xl p-4 hover:bg-orange-50/30 transition"
                  >
  
                    <img
                      src={product?.product_id?.image}
                      alt={product?.product_id?.name}
                      className="w-20 h-20 object-cover rounded-xl border border-orange-100"
                    />
  
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 text-lg">
                        {product?.product_id?.name}
                      </h3>
  
                      <p className="text-sm text-gray-500 mt-1">
                        Quantity : {product?.qty}
                      </p>
                    </div>
  
                    <div className="text-right">
                      <h4 className="text-lg font-bold text-orange-500">
                        {product?.price}
                      </h4>
                    </div>
  
                  </div>
                ))}
  
              </div>
  
            </div>
  
            {/* Shipping Address */}
            <div className="bg-white border border-orange-100 rounded-3xl p-6 shadow-sm">
  
              <h2 className="text-2xl font-bold text-gray-900 mb-5">
                Shipping Address
              </h2>
  
              <div className="space-y-3 text-gray-700">
  
                <p className="text-md font-semibold">
                  {address?.fullName}
                </p>
  
                <p>
                  {address?.addressLine1}, {address?.addressLine2}
                </p>
                <p>
                  {address?.city}, {address?.state}, {address?.country}
                </p>
  
                <p className="text-sky-500 font-semibold">
                   {address?.postalCode}, {address.phone} 
                </p>
  
              </div>
  
            </div>
  
          </div>
  
          {/* Right Sidebar */}
          <div className="space-y-6">
  
            {/* Customer Info */}
            <div className="bg-white border border-orange-100 rounded-3xl p-6 shadow-sm">
  
              <h2 className="text-2xl font-bold text-gray-900 mb-5">
                Customer Details
              </h2>
  
              <div className="space-y-4">
  
                <div>
                  <p className="text-sm text-gray-500">
                    Full Name
                  </p>
  
                  <h3 className="font-semibold text-gray-900 mt-1">
                    {order?.user?.name}
                  </h3>
                </div>
  
                <div>
                  <p className="text-sm text-gray-500">
                    Email Address
                  </p>
  
                  <h3 className="font-semibold text-gray-900 mt-1 break-all">
                    {order?.user?.email}
                  </h3>
                </div>
  
                <div>
                  <p className="text-sm text-gray-500">
                    Phone Number
                  </p>
  
                  <h3 className="font-semibold text-gray-900 mt-1">
                    9832744638
                  </h3>
                </div>
  
              </div>
  
            </div>
  
            {/* Payment Summary */}
            <div className="bg-white border border-orange-100 rounded-3xl p-6 shadow-sm">
  
              <h2 className="text-2xl font-bold text-gray-900 mb-5">
                Payment Summary
              </h2>
  
              <div className="space-y-4">
  
                {/* <div className="flex items-center justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>{order.}</span>
                </div> */}
  
                {/* <div className="flex items-center justify-between text-gray-600">
                  <span>Shipping</span>
                  <span>{order.shippingCharge}</span>
                </div> */}
  
                <div className="border-t border-orange-100 pt-4 flex items-center justify-between">
                  <span className="text-lg font-semibold text-gray-900">
                    Total
                  </span>
  
                  <span className="text-2xl font-bold text-orange-500">
                    {order.totalAmount}
                  </span>
                </div>
  
              </div>
  
            </div>
  
            {/* Order Notes */}
            <div className="bg-white border border-orange-100 rounded-3xl p-6 shadow-sm">
  
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Order Notes
              </h2>
  
              <textarea
                rows="5"
                placeholder="Add internal admin notes..."
                className="w-full border border-orange-200 rounded-2xl p-4 outline-none resize-none focus:ring-2 focus:ring-orange-400"
              />
  
              <button className="w-full mt-4 bg-orange-400 text-white py-3 rounded-2xl font-semibold hover:bg-orange-500 transition">
                Save Notes
              </button>
  
            </div>
  
          </div>
  
        </div>
  
      </div>
    );
  }
  