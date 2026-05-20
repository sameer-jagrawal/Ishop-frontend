(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/utils/helper.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "client",
    ()=>client,
    "deleteRequest",
    ()=>deleteRequest,
    "notify",
    ()=>notify
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-toastify/dist/index.mjs [app-client] (ecmascript)");
;
;
const client = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: ("TURBOPACK compile-time value", "http://localhost:5000/api/")
});
const notify = (massage, flag)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"])(massage, {
        type: flag === true ? "success" : "error"
    });
const deleteRequest = (type, id)=>{
    return client.delete(`/${type}/delete/${id}`);
};
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/(admin)/admin/product/view/[id]/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProductDetails
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/helper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function ProductDetails() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(57);
    if ($[0] !== "17e9480f25fa8f827286e6a73138ce449919673026760d4c65257200123d3485") {
        for(let $i = 0; $i < 57; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "17e9480f25fa8f827286e6a73138ce449919673026760d4c65257200123d3485";
    }
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const id = params.id;
    let t0;
    let t1;
    if ($[1] !== id) {
        t0 = ({
            "ProductDetails[useEffect()]": ()=>{
                if (!id) {
                    return;
                }
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["client"].get(`product/${id}`).then({
                    "ProductDetails[useEffect() > (anonymous)()]": (response)=>{
                        const formdata = response.data.data;
                        console.log("shfshfhskfhs", formdata.images);
                        setData(formdata);
                    }
                }["ProductDetails[useEffect() > (anonymous)()]"]).catch(_ProductDetailsUseEffectAnonymous);
            }
        })["ProductDetails[useEffect()]"];
        t1 = [
            id
        ];
        $[1] = id;
        $[2] = t0;
        $[3] = t1;
    } else {
        t0 = $[2];
        t1 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    const t2 = `http://localhost:5000/product/${data?.thumbnail}`;
    const t3 = data?.name;
    let t4;
    if ($[4] !== t2 || $[5] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-xl overflow-hidden border mb-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: t2,
                    alt: t3,
                    className: "w-full h-80 object-cover"
                }, void 0, false, {
                    fileName: "[project]/src/app/(admin)/admin/product/view/[id]/page.jsx",
                    lineNumber: 48,
                    columnNumber: 71
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/(admin)/admin/product/view/[id]/page.jsx",
                lineNumber: 48,
                columnNumber: 15
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/(admin)/admin/product/view/[id]/page.jsx",
            lineNumber: 48,
            columnNumber: 10
        }, this);
        $[4] = t2;
        $[5] = t3;
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    const t5 = data?.name;
    let t6;
    if ($[7] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "text-2xl font-semibold text-gray-800",
            children: t5
        }, void 0, false, {
            fileName: "[project]/src/app/(admin)/admin/product/view/[id]/page.jsx",
            lineNumber: 58,
            columnNumber: 10
        }, this);
        $[7] = t5;
        $[8] = t6;
    } else {
        t6 = $[8];
    }
    const t7 = data?.original_price;
    let t8;
    if ($[9] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-gray-400 line-through text-lg",
            children: [
                "₹",
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(admin)/admin/product/view/[id]/page.jsx",
            lineNumber: 67,
            columnNumber: 10
        }, this);
        $[9] = t7;
        $[10] = t8;
    } else {
        t8 = $[10];
    }
    const t9 = data?.final_price;
    let t10;
    if ($[11] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-2xl font-bold text-green-600",
            children: [
                "₹",
                t9
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(admin)/admin/product/view/[id]/page.jsx",
            lineNumber: 76,
            columnNumber: 11
        }, this);
        $[11] = t9;
        $[12] = t10;
    } else {
        t10 = $[12];
    }
    const t11 = data?.discount_percentage;
    let t12;
    if ($[13] !== t11) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-sm bg-green-100 text-green-700 px-2 py-1 rounded",
            children: [
                t11,
                "% OFF"
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(admin)/admin/product/view/[id]/page.jsx",
            lineNumber: 85,
            columnNumber: 11
        }, this);
        $[13] = t11;
        $[14] = t12;
    } else {
        t12 = $[14];
    }
    let t13;
    if ($[15] !== t10 || $[16] !== t12 || $[17] !== t8) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-4",
            children: [
                t8,
                t10,
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(admin)/admin/product/view/[id]/page.jsx",
            lineNumber: 93,
            columnNumber: 11
        }, this);
        $[15] = t10;
        $[16] = t12;
        $[17] = t8;
        $[18] = t13;
    } else {
        t13 = $[18];
    }
    const t14 = data?.categoryId?.name;
    let t15;
    if ($[19] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm",
            children: t14
        }, void 0, false, {
            fileName: "[project]/src/app/(admin)/admin/product/view/[id]/page.jsx",
            lineNumber: 104,
            columnNumber: 11
        }, this);
        $[19] = t14;
        $[20] = t15;
    } else {
        t15 = $[20];
    }
    const t16 = data?.brandId?.name;
    let t17;
    if ($[21] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm",
            children: t16
        }, void 0, false, {
            fileName: "[project]/src/app/(admin)/admin/product/view/[id]/page.jsx",
            lineNumber: 113,
            columnNumber: 11
        }, this);
        $[21] = t16;
        $[22] = t17;
    } else {
        t17 = $[22];
    }
    let t18;
    if ($[23] !== t15 || $[24] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex gap-3",
            children: [
                t15,
                t17
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(admin)/admin/product/view/[id]/page.jsx",
            lineNumber: 121,
            columnNumber: 11
        }, this);
        $[23] = t15;
        $[24] = t17;
        $[25] = t18;
    } else {
        t18 = $[25];
    }
    const t19 = data?.status;
    const t20 = data?._id;
    let t21;
    if ($[26] !== t19 || $[27] !== t20) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Status, {
            value: t19,
            type: "product",
            id: t20,
            feild: "status"
        }, void 0, false, {
            fileName: "[project]/src/app/(admin)/admin/product/view/[id]/page.jsx",
            lineNumber: 132,
            columnNumber: 11
        }, this);
        $[26] = t19;
        $[27] = t20;
        $[28] = t21;
    } else {
        t21 = $[28];
    }
    const t22 = data?.stock;
    const t23 = data?._id;
    let t24;
    if ($[29] !== t22 || $[30] !== t23) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Status, {
            value: t22,
            type: "product",
            id: t23,
            feild: "stock"
        }, void 0, false, {
            fileName: "[project]/src/app/(admin)/admin/product/view/[id]/page.jsx",
            lineNumber: 143,
            columnNumber: 11
        }, this);
        $[29] = t22;
        $[30] = t23;
        $[31] = t24;
    } else {
        t24 = $[31];
    }
    let t25;
    if ($[32] !== t21 || $[33] !== t24) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-wrap gap-3",
            children: [
                t21,
                t24
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(admin)/admin/product/view/[id]/page.jsx",
            lineNumber: 152,
            columnNumber: 11
        }, this);
        $[32] = t21;
        $[33] = t24;
        $[34] = t25;
    } else {
        t25 = $[34];
    }
    let t26;
    if ($[35] === Symbol.for("react.memo_cache_sentinel")) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-lg font-semibold text-gray-700 mb-2",
            children: "Description"
        }, void 0, false, {
            fileName: "[project]/src/app/(admin)/admin/product/view/[id]/page.jsx",
            lineNumber: 161,
            columnNumber: 11
        }, this);
        $[35] = t26;
    } else {
        t26 = $[35];
    }
    const t27 = data?.description;
    let t28;
    if ($[36] !== t27) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t26,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-600 text-sm leading-relaxed",
                    children: t27
                }, void 0, false, {
                    fileName: "[project]/src/app/(admin)/admin/product/view/[id]/page.jsx",
                    lineNumber: 169,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(admin)/admin/product/view/[id]/page.jsx",
            lineNumber: 169,
            columnNumber: 11
        }, this);
        $[36] = t27;
        $[37] = t28;
    } else {
        t28 = $[37];
    }
    let t29;
    if ($[38] === Symbol.for("react.memo_cache_sentinel")) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-gray-500",
            children: "Product ID"
        }, void 0, false, {
            fileName: "[project]/src/app/(admin)/admin/product/view/[id]/page.jsx",
            lineNumber: 177,
            columnNumber: 11
        }, this);
        $[38] = t29;
    } else {
        t29 = $[38];
    }
    let t30;
    if ($[39] !== data._id) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-gray-50 p-3 rounded-lg",
            children: [
                t29,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "font-medium text-gray-800",
                    children: data._id
                }, void 0, false, {
                    fileName: "[project]/src/app/(admin)/admin/product/view/[id]/page.jsx",
                    lineNumber: 184,
                    columnNumber: 59
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(admin)/admin/product/view/[id]/page.jsx",
            lineNumber: 184,
            columnNumber: 11
        }, this);
        $[39] = data._id;
        $[40] = t30;
    } else {
        t30 = $[40];
    }
    let t31;
    if ($[41] === Symbol.for("react.memo_cache_sentinel")) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-gray-500",
            children: "Slug"
        }, void 0, false, {
            fileName: "[project]/src/app/(admin)/admin/product/view/[id]/page.jsx",
            lineNumber: 192,
            columnNumber: 11
        }, this);
        $[41] = t31;
    } else {
        t31 = $[41];
    }
    let t32;
    if ($[42] !== data.slug) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-gray-50 p-3 rounded-lg",
            children: [
                t31,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "font-medium text-gray-800",
                    children: data.slug
                }, void 0, false, {
                    fileName: "[project]/src/app/(admin)/admin/product/view/[id]/page.jsx",
                    lineNumber: 199,
                    columnNumber: 59
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(admin)/admin/product/view/[id]/page.jsx",
            lineNumber: 199,
            columnNumber: 11
        }, this);
        $[42] = data.slug;
        $[43] = t32;
    } else {
        t32 = $[43];
    }
    let t33;
    if ($[44] !== t30 || $[45] !== t32) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-2 gap-4 text-sm",
            children: [
                t30,
                t32
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(admin)/admin/product/view/[id]/page.jsx",
            lineNumber: 207,
            columnNumber: 11
        }, this);
        $[44] = t30;
        $[45] = t32;
        $[46] = t33;
    } else {
        t33 = $[46];
    }
    let t34;
    if ($[47] !== t13 || $[48] !== t18 || $[49] !== t25 || $[50] !== t28 || $[51] !== t33 || $[52] !== t6) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col gap-5",
            children: [
                t6,
                t13,
                t18,
                t25,
                t28,
                t33
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(admin)/admin/product/view/[id]/page.jsx",
            lineNumber: 216,
            columnNumber: 11
        }, this);
        $[47] = t13;
        $[48] = t18;
        $[49] = t25;
        $[50] = t28;
        $[51] = t33;
        $[52] = t6;
        $[53] = t34;
    } else {
        t34 = $[53];
    }
    let t35;
    if ($[54] !== t34 || $[55] !== t4) {
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-8 bg-gray-50 min-h-screen",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-6 grid grid-cols-1 md:grid-cols-2 gap-8",
                children: [
                    t4,
                    t34
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(admin)/admin/product/view/[id]/page.jsx",
                lineNumber: 229,
                columnNumber: 56
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/(admin)/admin/product/view/[id]/page.jsx",
            lineNumber: 229,
            columnNumber: 11
        }, this);
        $[54] = t34;
        $[55] = t4;
        $[56] = t35;
    } else {
        t35 = $[56];
    }
    return t35;
}
_s(ProductDetails, "dRw2V3gxWU+erOhinOe+OtJEP1w=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"]
    ];
});
_c = ProductDetails;
function _ProductDetailsUseEffectAnonymous(error) {
    console.log(error, "error is coming");
}
var _c;
__turbopack_context__.k.register(_c, "ProductDetails");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_5ddb5270._.js.map