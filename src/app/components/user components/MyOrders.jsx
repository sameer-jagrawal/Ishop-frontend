import { getMyOrders } from "@/api_call/serverApi";
import { productImageUrl } from "@/utils/mediaUrl";

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

export default async function MyOrdersPage() {
  const ordersRes = await getMyOrders();
  const orders = ordersRes?.data?.orders || [];

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6">
          <h1 className="text-2xl font-medium text-gray-900">My Orders</h1>
          <p className="mt-1 text-sm text-gray-500">View your recent purchases and order status</p>
        </div>

        <div className="space-y-4">
          {orders.map((order) => (
            <section key={order._id} className="border border-gray-200 bg-white">
              <div className="flex flex-col gap-3 border-b border-gray-100 bg-gray-50 p-4 md:flex-row md:items-center md:justify-between">
                <div className="min-w-0">
                  <p className="truncate text-sm text-gray-500">Order ID: {order._id}</p>
                  <p className="mt-1 text-sm text-gray-700">Placed on {formatDate(order.createdAt)}</p>
                </div>

                <div className="flex flex-wrap items-center gap-2 text-sm">
                  <span className="border border-gray-200 bg-white px-3 py-1 capitalize text-gray-700">
                    {order.orderStatus?.replaceAll("_", " ")}
                  </span>
                  <span className="border border-gray-200 bg-white px-3 py-1 capitalize text-gray-700">
                    {order.paymentMethod}
                  </span>
                  <span className="text-base font-medium text-[#01A49E]">
                    {money.format(order.totalAmount || 0)}
                  </span>
                </div>
              </div>

              <div className="divide-y divide-gray-100">
                {order.items?.map((item, index) => {
                  const product = item.product_id;
                  const thumbnail = product?.thumbnail;

                  return (
                    <div key={`${order._id}-${product?._id || index}`} className="flex flex-col gap-4 p-4 sm:flex-row sm:items-center sm:justify-between">
                      <div className="flex items-center gap-4">
                        <div className="h-20 w-20 overflow-hidden border border-gray-200 bg-gray-50">
                          {thumbnail ? (
                            <img
                              src={productImageUrl(thumbnail)}
                              alt={product?.name || "Product"}
                              className="h-full w-full object-cover"
                            />
                          ) : (
                            <div className="grid h-full w-full place-items-center text-xs text-gray-400">
                              No image
                            </div>
                          )}
                        </div>

                        <div>
                          <h2 className="text-sm font-medium text-gray-900">
                            {product?.name || "Product unavailable"}
                          </h2>
                          <p className="mt-1 text-sm text-gray-500">Quantity: {item.qty}</p>
                        </div>
                      </div>

                      <div className="text-left sm:text-right">
                        <p className="text-sm text-gray-500">Item price</p>
                        <p className="mt-1 text-base font-medium text-gray-900">
                          {money.format(item.price || 0)}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          ))}
        </div>

        {!orders.length && (
          <div className="border border-gray-200 bg-white p-10 text-center">
            <p className="text-base font-medium text-gray-900">No orders yet</p>
            <p className="mt-2 text-sm text-gray-500">Your orders will appear here after checkout.</p>
          </div>
        )}
      </div>
    </main>
  );
}
