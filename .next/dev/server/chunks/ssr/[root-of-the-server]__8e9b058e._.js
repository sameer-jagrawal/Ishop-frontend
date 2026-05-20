module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/src/app/(admin)/admin/layout.jsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/(admin)/admin/layout.jsx [app-rsc] (ecmascript)"));
}),
"[project]/src/app/(admin)/admin/order/[id]/page.jsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>OrderViewPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
async function OrderViewPage({ params }) {
    const { id } = await params;
    console.log(id);
    const order = {
        orderId: "#ORD1021",
        createdAt: "13 May 2026",
        status: "Processing",
        paymentMethod: "Cash On Delivery",
        paymentStatus: "Pending",
        totalAmount: "$420",
        shippingCharge: "$20",
        subtotal: "$400",
        customer: {
            name: "Rahul Sharma",
            email: "rahul@gmail.com",
            phone: "+91 9876543210"
        },
        address: {
            street: "221B MG Road",
            city: "Jaipur",
            state: "Rajasthan",
            country: "India",
            pincode: "302001"
        },
        products: [
            {
                name: "Wireless Headphones",
                image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300",
                qty: 2,
                price: "$120"
            },
            {
                name: "Smart Watch",
                image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300",
                qty: 1,
                price: "$180"
            }
        ]
    };
    const statusStyle = {
        Processing: "bg-orange-50 text-orange-500 border border-orange-200",
        Delivered: "bg-emerald-50 text-emerald-600 border border-emerald-200",
        Pending: "bg-yellow-50 text-yellow-600 border border-yellow-200",
        Cancelled: "bg-red-50 text-red-600 border border-red-200"
    };
    return;
    //TURBOPACK unreachable
    ;
}
}),
"[project]/src/app/(admin)/admin/order/[id]/page.jsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/(admin)/admin/order/[id]/page.jsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__8e9b058e._.js.map