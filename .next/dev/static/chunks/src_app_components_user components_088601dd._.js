(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/components/user components/Store/AddToCart.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AddToCartButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$features$2f$cartslice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/redux/features/cartslice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/helper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function AddToCartButton({ user, product }) {
    _s();
    const dispatcher = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"])();
    const cart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])({
        "AddToCartButton.useSelector[cart]": (store)=>store.cart
    }["AddToCartButton.useSelector[cart]"]);
    const cartItem = cart?.items.find((item)=>item._id == product?._id);
    const updateQtyInDb = async (flag)=>{
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["client"].put("cart/update-qty", {
                _id: product?._id,
                flag
            });
        } catch (error) {
            console.log(error);
        }
    };
    const handleAddToCart = async ()=>{
        try {
            if (user) {
                await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["client"].post("cart/add", {
                    productId: product._id,
                    qty: 1
                });
            }
        } catch (error_0) {
            console.log(error_0);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: cartItem ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center w-full h-[40px] rounded-xl border border-[#01A49E] overflow-hidden bg-[#01A49E]/5",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>{
                        dispatcher((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$features$2f$cartslice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["qtyChanges"])({
                            _id: product._id,
                            flag: "dec"
                        }));
                        updateQtyInDb("dec");
                    },
                    className: "w-10 h-full flex items-center justify-center text-[#01A49E] text-lg font-semibold hover:bg-[#01A49E]/10 active:scale-95 transition",
                    children: "−"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/user components/Store/AddToCart.jsx",
                    lineNumber: 41,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 text-center text-sm font-semibold text-[#01A49E] border-x border-[#01A49E]/20",
                    children: cartItem?.qty || 0
                }, void 0, false, {
                    fileName: "[project]/src/app/components/user components/Store/AddToCart.jsx",
                    lineNumber: 52,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>{
                        dispatcher((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$features$2f$cartslice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["qtyChanges"])({
                            _id: product._id,
                            flag: "inc"
                        }));
                        updateQtyInDb("inc");
                    },
                    className: "w-10 h-full flex items-center justify-center text-[#01A49E] text-lg font-semibold hover:bg-[#01A49E]/10 active:scale-95 transition",
                    children: "+"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/user components/Store/AddToCart.jsx",
                    lineNumber: 57,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/user components/Store/AddToCart.jsx",
            lineNumber: 38,
            columnNumber: 19
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: ()=>{
                dispatcher((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$features$2f$cartslice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addToCart"])({
                    name: product?.name,
                    original_price: product?.original_price,
                    final_price: product?.final_price,
                    _id: product?._id,
                    discount: product?.discount_percentage,
                    thumbnail: `http://localhost:5000/product/${product.thumbnail}`,
                    stock: product?.stock,
                    brand: product?.brandId?.name,
                    qty: 1
                }));
                handleAddToCart();
            },
            className: `${product.stock ? "bg-teal-500" : "bg-red-500"} w-full text-white py-2 px-4 rounded-xl text-sm font-medium transition-all duration-300 hover:opacity-90 active:scale-95`,
            disabled: !product.stock,
            children: product.stock ? "Add to Cart" : "Unavailable"
        }, void 0, false, {
            fileName: "[project]/src/app/components/user components/Store/AddToCart.jsx",
            lineNumber: 66,
            columnNumber: 14
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/components/user components/Store/AddToCart.jsx",
        lineNumber: 36,
        columnNumber: 10
    }, this);
}
_s(AddToCartButton, "Au+RahsapwpBB16367X00Z3Y+Hc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"]
    ];
});
_c = AddToCartButton;
var _c;
__turbopack_context__.k.register(_c, "AddToCartButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/components/user components/Store/ProductCard.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProductCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$user__components$2f$Store$2f$AddToCart$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/user components/Store/AddToCart.jsx [app-client] (ecmascript)");
;
;
;
;
function ProductCard(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(33);
    if ($[0] !== "648eaf14663552ab17839a98a4e33268cd3c88b1fe74c6fe8032579138c4f4d9") {
        for(let $i = 0; $i < 33; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "648eaf14663552ab17839a98a4e33268cd3c88b1fe74c6fe8032579138c4f4d9";
    }
    const { items, user } = t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between items-start",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "bg-green-500 text-white text-xs px-2 md:px-3 py-1 rounded-md font-semibold",
                    children: "SAVE $59.00"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/user components/Store/ProductCard.jsx",
                    lineNumber: 18,
                    columnNumber: 60
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-6 h-6 bg-gray-200 rounded-full transition group-hover:bg-gray-300"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/user components/Store/ProductCard.jsx",
                    lineNumber: 18,
                    columnNumber: 171
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/user components/Store/ProductCard.jsx",
            lineNumber: 18,
            columnNumber: 10
        }, this);
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const t2 = `http://localhost:5000/product/${items.thumbnail}`;
    const t3 = items?.name;
    let t4;
    if ($[2] !== t2 || $[3] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-center my-3 md:my-4 overflow-hidden",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: t2,
                className: "h-16 md:h-20 object-contain transition-transform duration-300 group-hover:scale-110",
                alt: t3
            }, void 0, false, {
                fileName: "[project]/src/app/components/user components/Store/ProductCard.jsx",
                lineNumber: 27,
                columnNumber: 76
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/components/user components/Store/ProductCard.jsx",
            lineNumber: 27,
            columnNumber: 10
        }, this);
        $[2] = t2;
        $[3] = t3;
        $[4] = t4;
    } else {
        t4 = $[4];
    }
    let t5;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center text-xs text-gray-400 mb-2",
            children: "(8)"
        }, void 0, false, {
            fileName: "[project]/src/app/components/user components/Store/ProductCard.jsx",
            lineNumber: 36,
            columnNumber: 10
        }, this);
        $[5] = t5;
    } else {
        t5 = $[5];
    }
    const t6 = items?.brandId?.name;
    let t7;
    if ($[6] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-xs md:text-sm font-semibold text-gray-400 leading-snug transition-colors",
            children: t6
        }, void 0, false, {
            fileName: "[project]/src/app/components/user components/Store/ProductCard.jsx",
            lineNumber: 44,
            columnNumber: 10
        }, this);
        $[6] = t6;
        $[7] = t7;
    } else {
        t7 = $[7];
    }
    const t8 = items?.name;
    let t9;
    if ($[8] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-xs md:text-sm font-semibold text-gray-900 leading-snug transition-colors group-hover:text-black line-clamp-2",
            children: t8
        }, void 0, false, {
            fileName: "[project]/src/app/components/user components/Store/ProductCard.jsx",
            lineNumber: 53,
            columnNumber: 10
        }, this);
        $[8] = t8;
        $[9] = t9;
    } else {
        t9 = $[9];
    }
    const t10 = items?.final_price;
    let t11;
    if ($[10] !== t10) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-black font-bold text-base md:text-lg",
            children: [
                "$",
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/user components/Store/ProductCard.jsx",
            lineNumber: 62,
            columnNumber: 11
        }, this);
        $[10] = t10;
        $[11] = t11;
    } else {
        t11 = $[11];
    }
    const t12 = items?.original_price;
    let t13;
    if ($[12] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-gray-400 line-through text-xs md:text-sm",
            children: [
                "$",
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/user components/Store/ProductCard.jsx",
            lineNumber: 71,
            columnNumber: 11
        }, this);
        $[12] = t12;
        $[13] = t13;
    } else {
        t13 = $[13];
    }
    let t14;
    if ($[14] !== t11 || $[15] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-2 flex items-center gap-2 flex-wrap",
            children: [
                t11,
                t13
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/user components/Store/ProductCard.jsx",
            lineNumber: 79,
            columnNumber: 11
        }, this);
        $[14] = t11;
        $[15] = t13;
        $[16] = t14;
    } else {
        t14 = $[16];
    }
    let t15;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-2",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "bg-green-100 text-green-600 text-xs px-2 py-1 rounded font-semibold",
                children: "FREE SHIPPING"
            }, void 0, false, {
                fileName: "[project]/src/app/components/user components/Store/ProductCard.jsx",
                lineNumber: 88,
                columnNumber: 33
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/components/user components/Store/ProductCard.jsx",
            lineNumber: 88,
            columnNumber: 11
        }, this);
        $[17] = t15;
    } else {
        t15 = $[17];
    }
    const t16 = items.status ? "text-green-500" : "text-red-500";
    let t17;
    if ($[18] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: t16,
            children: "●"
        }, void 0, false, {
            fileName: "[project]/src/app/components/user components/Store/ProductCard.jsx",
            lineNumber: 96,
            columnNumber: 11
        }, this);
        $[18] = t16;
        $[19] = t17;
    } else {
        t17 = $[19];
    }
    const t18 = items?.status ? "In stock" : "Out of stock";
    let t19;
    if ($[20] !== t17 || $[21] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 mt-2 text-xs md:text-sm text-gray-500",
            children: [
                t17,
                t18
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/user components/Store/ProductCard.jsx",
            lineNumber: 105,
            columnNumber: 11
        }, this);
        $[20] = t17;
        $[21] = t18;
        $[22] = t19;
    } else {
        t19 = $[22];
    }
    let t20;
    if ($[23] !== items || $[24] !== user) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-3 md:mt-4 flex gap-2",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$user__components$2f$Store$2f$AddToCart$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                user: user,
                product: items
            }, void 0, false, {
                fileName: "[project]/src/app/components/user components/Store/ProductCard.jsx",
                lineNumber: 114,
                columnNumber: 52
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/components/user components/Store/ProductCard.jsx",
            lineNumber: 114,
            columnNumber: 11
        }, this);
        $[23] = items;
        $[24] = user;
        $[25] = t20;
    } else {
        t20 = $[25];
    }
    let t21;
    if ($[26] !== t14 || $[27] !== t19 || $[28] !== t20 || $[29] !== t4 || $[30] !== t7 || $[31] !== t9) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "group bg-white rounded-md p-3 md:p-4 shadow-sm w-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1",
            children: [
                t1,
                t4,
                t5,
                t7,
                t9,
                t14,
                t15,
                t19,
                t20
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/user components/Store/ProductCard.jsx",
            lineNumber: 123,
            columnNumber: 11
        }, this);
        $[26] = t14;
        $[27] = t19;
        $[28] = t20;
        $[29] = t4;
        $[30] = t7;
        $[31] = t9;
        $[32] = t21;
    } else {
        t21 = $[32];
    }
    return t21;
}
_c = ProductCard;
var _c;
__turbopack_context__.k.register(_c, "ProductCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/components/user components/Home/MulitTabsClient.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MultiTabsClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$user__components$2f$Store$2f$ProductCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/user components/Store/ProductCard.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function MultiTabsClient(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(33);
    if ($[0] !== "da06fe6cbdea0c4f8d5f9ba7778979ba757634a64ebfeb9b5cfc80811671aff7") {
        for(let $i = 0; $i < 33; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "da06fe6cbdea0c4f8d5f9ba7778979ba757634a64ebfeb9b5cfc80811671aff7";
    }
    const { products, user } = t0;
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("best");
    let t1;
    let t2;
    let t3;
    let t4;
    if ($[1] !== activeTab || $[2] !== products || $[3] !== user) {
        const filteredProducts = activeTab === "best" ? products.slice(0, 8) : activeTab === "new" ? [
            ...products
        ].reverse().slice(0, 8) : products.slice(4, 12);
        t3 = "max-w-7xl mt-2 mx-auto bg-gray-100 rounded-2xl p-4 md:p-6 px-4 md:px-6";
        let t5;
        if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
            t5 = ({
                "MultiTabsClient[<button>.onClick]": ()=>setActiveTab("best")
            })["MultiTabsClient[<button>.onClick]"];
            $[8] = t5;
        } else {
            t5 = $[8];
        }
        const t6 = `whitespace-nowrap transition-colors ${activeTab === "best" ? "text-black border-b-2 border-black" : "text-gray-500"}`;
        let t7;
        if ($[9] !== t6) {
            t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: t5,
                className: t6,
                children: "BEST SELLER"
            }, void 0, false, {
                fileName: "[project]/src/app/components/user components/Home/MulitTabsClient.jsx",
                lineNumber: 38,
                columnNumber: 12
            }, this);
            $[9] = t6;
            $[10] = t7;
        } else {
            t7 = $[10];
        }
        let t8;
        if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
            t8 = ({
                "MultiTabsClient[<button>.onClick]": ()=>setActiveTab("new")
            })["MultiTabsClient[<button>.onClick]"];
            $[11] = t8;
        } else {
            t8 = $[11];
        }
        const t9 = `whitespace-nowrap transition-colors ${activeTab === "new" ? "text-black border-b-2 border-black" : "text-gray-500"}`;
        let t10;
        if ($[12] !== t9) {
            t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: t8,
                className: t9,
                children: "NEW IN"
            }, void 0, false, {
                fileName: "[project]/src/app/components/user components/Home/MulitTabsClient.jsx",
                lineNumber: 56,
                columnNumber: 13
            }, this);
            $[12] = t9;
            $[13] = t10;
        } else {
            t10 = $[13];
        }
        let t11;
        if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
            t11 = ({
                "MultiTabsClient[<button>.onClick]": ()=>setActiveTab("popular")
            })["MultiTabsClient[<button>.onClick]"];
            $[14] = t11;
        } else {
            t11 = $[14];
        }
        const t12 = `whitespace-nowrap transition-colors ${activeTab === "popular" ? "text-black border-b-2 border-black" : "text-gray-500"}`;
        let t13;
        if ($[15] !== t12) {
            t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: t11,
                className: t12,
                children: "POPULAR"
            }, void 0, false, {
                fileName: "[project]/src/app/components/user components/Home/MulitTabsClient.jsx",
                lineNumber: 74,
                columnNumber: 13
            }, this);
            $[15] = t12;
            $[16] = t13;
        } else {
            t13 = $[16];
        }
        let t14;
        if ($[17] !== t10 || $[18] !== t13 || $[19] !== t7) {
            t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-4 md:gap-6 text-xs md:text-sm font-medium overflow-x-auto",
                children: [
                    t7,
                    t10,
                    t13
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/user components/Home/MulitTabsClient.jsx",
                lineNumber: 82,
                columnNumber: 13
            }, this);
            $[17] = t10;
            $[18] = t13;
            $[19] = t7;
            $[20] = t14;
        } else {
            t14 = $[20];
        }
        let t15;
        if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
            t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-xs text-gray-500 cursor-pointer whitespace-nowrap ml-4",
                children: "View All"
            }, void 0, false, {
                fileName: "[project]/src/app/components/user components/Home/MulitTabsClient.jsx",
                lineNumber: 92,
                columnNumber: 13
            }, this);
            $[21] = t15;
        } else {
            t15 = $[21];
        }
        if ($[22] !== t14) {
            t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mb-4 md:mb-6",
                children: [
                    t14,
                    t15
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/user components/Home/MulitTabsClient.jsx",
                lineNumber: 98,
                columnNumber: 12
            }, this);
            $[22] = t14;
            $[23] = t4;
        } else {
            t4 = $[23];
        }
        t1 = "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5";
        let t16;
        if ($[24] !== user) {
            t16 = ({
                "MultiTabsClient[filteredProducts.map()]": (items)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$user__components$2f$Store$2f$ProductCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        items: items,
                        user: user
                    }, items._id, false, {
                        fileName: "[project]/src/app/components/user components/Home/MulitTabsClient.jsx",
                        lineNumber: 108,
                        columnNumber: 61
                    }, this)
            })["MultiTabsClient[filteredProducts.map()]"];
            $[24] = user;
            $[25] = t16;
        } else {
            t16 = $[25];
        }
        t2 = filteredProducts.map(t16);
        $[1] = activeTab;
        $[2] = products;
        $[3] = user;
        $[4] = t1;
        $[5] = t2;
        $[6] = t3;
        $[7] = t4;
    } else {
        t1 = $[4];
        t2 = $[5];
        t3 = $[6];
        t4 = $[7];
    }
    let t5;
    if ($[26] !== t1 || $[27] !== t2) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t1,
            children: t2
        }, void 0, false, {
            fileName: "[project]/src/app/components/user components/Home/MulitTabsClient.jsx",
            lineNumber: 131,
            columnNumber: 10
        }, this);
        $[26] = t1;
        $[27] = t2;
        $[28] = t5;
    } else {
        t5 = $[28];
    }
    let t6;
    if ($[29] !== t3 || $[30] !== t4 || $[31] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t3,
            children: [
                t4,
                t5
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/user components/Home/MulitTabsClient.jsx",
            lineNumber: 140,
            columnNumber: 10
        }, this);
        $[29] = t3;
        $[30] = t4;
        $[31] = t5;
        $[32] = t6;
    } else {
        t6 = $[32];
    }
    return t6;
}
_s(MultiTabsClient, "KNnLmPDMzhpdSwyrXzuRO/YFf0c=");
_c = MultiTabsClient;
var _c;
__turbopack_context__.k.register(_c, "MultiTabsClient");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/components/user components/Home/LaptopsSection.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LaptopsSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const categories = [
    {
        name: "Macbook",
        count: 74,
        img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=80&h=60&fit=crop"
    },
    {
        name: "Gaming PC",
        count: 5,
        img: "https://images.unsplash.com/photo-1593640408182-31c228b1a94b?w=80&h=60&fit=crop"
    },
    {
        name: "Laptop Office",
        count: 22,
        img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=80&h=60&fit=crop"
    },
    {
        name: 'Laptop 15"',
        count: 55,
        img: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=80&h=60&fit=crop"
    },
    {
        name: "M1 2023",
        count: 32,
        img: "https://images.unsplash.com/photo-1611186871525-c4e0f98fcc27?w=80&h=60&fit=crop"
    },
    {
        name: "Secondhand",
        count: 16,
        img: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=80&h=60&fit=crop"
    }
];
const products = [
    {
        id: 1,
        name: "Pineapple Macbook Pro 2022 M1 / 512 GB",
        price: "$579.00",
        freeShipping: true,
        inStock: true,
        badge: "NEW",
        badgeColor: "#222",
        reviews: 152,
        img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=220&h=200&fit=crop"
    },
    {
        id: 2,
        name: "C&O Bluetooth Speaker",
        price: "$979.00",
        freeShipping: true,
        badge: "NEW",
        badgeColor: "#222",
        img: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=220&h=200&fit=crop",
        colors: [
            "#c8b8a2",
            "#333"
        ]
    },
    {
        id: 3,
        name: "Gigaby Custome Case",
        price: "$1,259.00",
        freeShipping: true,
        freeGift: true,
        inStock: true,
        img: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=220&h=200&fit=crop"
    },
    {
        id: 4,
        name: "BEOS PC Gaming Case",
        price: "$1,239.00",
        oldPrice: "$1,619.00",
        contact: true,
        img: "https://images.unsplash.com/photo-1593640408182-31c228b1a94b?w=220&h=200&fit=crop"
    }
];
function ProductCard(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(42);
    if ($[0] !== "cc6cefd49f5f9660ce7b44999ff72329db165de447376dc52d0b52d38c60e432") {
        for(let $i = 0; $i < 42; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "cc6cefd49f5f9660ce7b44999ff72329db165de447376dc52d0b52d38c60e432";
    }
    const { product } = t0;
    let t1;
    if ($[1] !== product.badge || $[2] !== product.badgeColor) {
        t1 = product.badge && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute top-2 left-2 text-white text-[10px] font-bold px-2 py-1 rounded",
            style: {
                background: product.badgeColor
            },
            children: product.badge
        }, void 0, false, {
            fileName: "[project]/src/app/components/user components/Home/LaptopsSection.jsx",
            lineNumber: 78,
            columnNumber: 27
        }, this);
        $[1] = product.badge;
        $[2] = product.badgeColor;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    let t2;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: "absolute top-2 right-2 bg-gray-100 rounded-full w-7 h-7 flex items-center justify-center",
            children: "❤"
        }, void 0, false, {
            fileName: "[project]/src/app/components/user components/Home/LaptopsSection.jsx",
            lineNumber: 89,
            columnNumber: 10
        }, this);
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] !== product.img || $[6] !== product.name) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-center items-center h-28",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: product.img,
                className: "max-h-[110px] object-contain",
                alt: product.name
            }, void 0, false, {
                fileName: "[project]/src/app/components/user components/Home/LaptopsSection.jsx",
                lineNumber: 96,
                columnNumber: 65
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/components/user components/Home/LaptopsSection.jsx",
            lineNumber: 96,
            columnNumber: 10
        }, this);
        $[5] = product.img;
        $[6] = product.name;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    let t4;
    if ($[8] !== product.reviews) {
        t4 = product.reviews && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-[11px] text-gray-400 text-center",
            children: [
                "(",
                product.reviews,
                ")"
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/user components/Home/LaptopsSection.jsx",
            lineNumber: 105,
            columnNumber: 29
        }, this);
        $[8] = product.reviews;
        $[9] = t4;
    } else {
        t4 = $[9];
    }
    let t5;
    if ($[10] !== product.name) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "font-semibold text-sm text-slate-900",
            children: product.name
        }, void 0, false, {
            fileName: "[project]/src/app/components/user components/Home/LaptopsSection.jsx",
            lineNumber: 113,
            columnNumber: 10
        }, this);
        $[10] = product.name;
        $[11] = t5;
    } else {
        t5 = $[11];
    }
    let t6;
    if ($[12] !== product.price) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "font-bold text-base",
            children: product.price
        }, void 0, false, {
            fileName: "[project]/src/app/components/user components/Home/LaptopsSection.jsx",
            lineNumber: 121,
            columnNumber: 10
        }, this);
        $[12] = product.price;
        $[13] = t6;
    } else {
        t6 = $[13];
    }
    let t7;
    if ($[14] !== product.oldPrice) {
        t7 = product.oldPrice && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-xs line-through text-gray-400",
            children: product.oldPrice
        }, void 0, false, {
            fileName: "[project]/src/app/components/user components/Home/LaptopsSection.jsx",
            lineNumber: 129,
            columnNumber: 30
        }, this);
        $[14] = product.oldPrice;
        $[15] = t7;
    } else {
        t7 = $[15];
    }
    let t8;
    if ($[16] !== t6 || $[17] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 flex-wrap",
            children: [
                t6,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/user components/Home/LaptopsSection.jsx",
            lineNumber: 137,
            columnNumber: 10
        }, this);
        $[16] = t6;
        $[17] = t7;
        $[18] = t8;
    } else {
        t8 = $[18];
    }
    let t9;
    if ($[19] !== product.freeShipping) {
        t9 = product.freeShipping && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "bg-green-100 text-green-700 text-[10px] px-2 py-1 rounded font-bold",
            children: "FREE SHIPPING"
        }, void 0, false, {
            fileName: "[project]/src/app/components/user components/Home/LaptopsSection.jsx",
            lineNumber: 146,
            columnNumber: 34
        }, this);
        $[19] = product.freeShipping;
        $[20] = t9;
    } else {
        t9 = $[20];
    }
    let t10;
    if ($[21] !== product.freeGift) {
        t10 = product.freeGift && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "bg-pink-100 text-pink-600 text-[10px] px-2 py-1 rounded font-bold",
            children: "FREE GIFT"
        }, void 0, false, {
            fileName: "[project]/src/app/components/user components/Home/LaptopsSection.jsx",
            lineNumber: 154,
            columnNumber: 31
        }, this);
        $[21] = product.freeGift;
        $[22] = t10;
    } else {
        t10 = $[22];
    }
    let t11;
    if ($[23] !== t10 || $[24] !== t9) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-wrap gap-1",
            children: [
                t9,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/user components/Home/LaptopsSection.jsx",
            lineNumber: 162,
            columnNumber: 11
        }, this);
        $[23] = t10;
        $[24] = t9;
        $[25] = t11;
    } else {
        t11 = $[25];
    }
    let t12;
    if ($[26] !== product.inStock) {
        t12 = product.inStock && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-green-700 text-xs font-medium",
            children: "In stock"
        }, void 0, false, {
            fileName: "[project]/src/app/components/user components/Home/LaptopsSection.jsx",
            lineNumber: 171,
            columnNumber: 30
        }, this);
        $[26] = product.inStock;
        $[27] = t12;
    } else {
        t12 = $[27];
    }
    let t13;
    if ($[28] !== product.contact) {
        t13 = product.contact && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: "border rounded px-3 py-1 text-xs text-gray-600 w-fit",
            children: "Contact"
        }, void 0, false, {
            fileName: "[project]/src/app/components/user components/Home/LaptopsSection.jsx",
            lineNumber: 179,
            columnNumber: 30
        }, this);
        $[28] = product.contact;
        $[29] = t13;
    } else {
        t13 = $[29];
    }
    let t14;
    if ($[30] !== product.colors) {
        t14 = product.colors && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex gap-1",
            children: product.colors.map(_ProductCardProductColorsMap)
        }, void 0, false, {
            fileName: "[project]/src/app/components/user components/Home/LaptopsSection.jsx",
            lineNumber: 187,
            columnNumber: 29
        }, this);
        $[30] = product.colors;
        $[31] = t14;
    } else {
        t14 = $[31];
    }
    let t15;
    if ($[32] !== t1 || $[33] !== t11 || $[34] !== t12 || $[35] !== t13 || $[36] !== t14 || $[37] !== t3 || $[38] !== t4 || $[39] !== t5 || $[40] !== t8) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-xl p-3 flex flex-col gap-2 shadow-sm relative min-h-[260px]",
            children: [
                t1,
                t2,
                t3,
                t4,
                t5,
                t8,
                t11,
                t12,
                t13,
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/user components/Home/LaptopsSection.jsx",
            lineNumber: 195,
            columnNumber: 11
        }, this);
        $[32] = t1;
        $[33] = t11;
        $[34] = t12;
        $[35] = t13;
        $[36] = t14;
        $[37] = t3;
        $[38] = t4;
        $[39] = t5;
        $[40] = t8;
        $[41] = t15;
    } else {
        t15 = $[41];
    }
    return t15;
}
_c = ProductCard;
function _ProductCardProductColorsMap(c, i) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "w-4 h-4 rounded-full border",
        style: {
            background: c
        }
    }, i, false, {
        fileName: "[project]/src/app/components/user components/Home/LaptopsSection.jsx",
        lineNumber: 212,
        columnNumber: 10
    }, this);
}
function LaptopsSection() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(32);
    if ($[0] !== "cc6cefd49f5f9660ce7b44999ff72329db165de447376dc52d0b52d38c60e432") {
        for(let $i = 0; $i < 32; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "cc6cefd49f5f9660ce7b44999ff72329db165de447376dc52d0b52d38c60e432";
    }
    const [scrollIndex, setScrollIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    let t0;
    let t1;
    let t2;
    let t3;
    let t4;
    let t5;
    let t6;
    let t7;
    if ($[1] !== scrollIndex) {
        const visibleProducts = products.slice(scrollIndex, scrollIndex + 4);
        t4 = "font-sans bg-gray-100 rounded-2xl p-4 md:p-6 max-w-7xl mt-2 mx-auto shadow-lg px-4 md:px-6";
        if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
            t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-bold text-xs md:text-sm uppercase",
                        children: "Best Laptops & Computers"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/user components/Home/LaptopsSection.jsx",
                        lineNumber: 237,
                        columnNumber: 55
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        className: "text-xs text-gray-500 cursor-pointer",
                        children: "View All"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/user components/Home/LaptopsSection.jsx",
                        lineNumber: 237,
                        columnNumber: 147
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/user components/Home/LaptopsSection.jsx",
                lineNumber: 237,
                columnNumber: 12
            }, this);
            $[10] = t5;
        } else {
            t5 = $[10];
        }
        let t8;
        if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
            t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-slate-900 text-white rounded-xl p-5 w-full md:w-[320px] lg:w-[400px] flex flex-col justify-between relative overflow-hidden min-h-[140px]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "font-extrabold text-lg md:text-xl",
                                children: "Mobok 2 Supercharged"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/user components/Home/LaptopsSection.jsx",
                                lineNumber: 244,
                                columnNumber: 175
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-gray-400 text-sm mt-1",
                                children: "By M2"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/user components/Home/LaptopsSection.jsx",
                                lineNumber: 244,
                                columnNumber: 252
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/user components/Home/LaptopsSection.jsx",
                        lineNumber: 244,
                        columnNumber: 170
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=300",
                        className: "absolute right-0 bottom-0 w-28 md:w-36 opacity-80",
                        alt: "laptop"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/user components/Home/LaptopsSection.jsx",
                        lineNumber: 244,
                        columnNumber: 313
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/user components/Home/LaptopsSection.jsx",
                lineNumber: 244,
                columnNumber: 12
            }, this);
            $[11] = t8;
        } else {
            t8 = $[11];
        }
        if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
            t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col md:flex-row gap-4 mb-6",
                children: [
                    t8,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 sm:grid-cols-3 gap-3 flex-1",
                        children: categories.map(_LaptopsSectionCategoriesMap)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/user components/Home/LaptopsSection.jsx",
                        lineNumber: 250,
                        columnNumber: 70
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/user components/Home/LaptopsSection.jsx",
                lineNumber: 250,
                columnNumber: 12
            }, this);
            t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-t mb-5"
            }, void 0, false, {
                fileName: "[project]/src/app/components/user components/Home/LaptopsSection.jsx",
                lineNumber: 251,
                columnNumber: 12
            }, this);
            $[12] = t6;
            $[13] = t7;
        } else {
            t6 = $[12];
            t7 = $[13];
        }
        t2 = "relative";
        const t9 = {
            "LaptopsSection[<button>.onClick]": ()=>setScrollIndex(Math.max(0, scrollIndex - 1))
        }["LaptopsSection[<button>.onClick]"];
        if ($[14] !== t9) {
            t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: t9,
                className: "absolute -left-3 top-1/2 -translate-y-1/2 bg-white w-7 h-7 md:w-8 md:h-8 rounded-full shadow z-10 text-sm",
                children: "◀"
            }, void 0, false, {
                fileName: "[project]/src/app/components/user components/Home/LaptopsSection.jsx",
                lineNumber: 263,
                columnNumber: 12
            }, this);
            $[14] = t9;
            $[15] = t3;
        } else {
            t3 = $[15];
        }
        t0 = "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4";
        t1 = visibleProducts.map(_LaptopsSectionVisibleProductsMap);
        $[1] = scrollIndex;
        $[2] = t0;
        $[3] = t1;
        $[4] = t2;
        $[5] = t3;
        $[6] = t4;
        $[7] = t5;
        $[8] = t6;
        $[9] = t7;
    } else {
        t0 = $[2];
        t1 = $[3];
        t2 = $[4];
        t3 = $[5];
        t4 = $[6];
        t5 = $[7];
        t6 = $[8];
        t7 = $[9];
    }
    let t8;
    if ($[16] !== t0 || $[17] !== t1) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t0,
            children: t1
        }, void 0, false, {
            fileName: "[project]/src/app/components/user components/Home/LaptopsSection.jsx",
            lineNumber: 292,
            columnNumber: 10
        }, this);
        $[16] = t0;
        $[17] = t1;
        $[18] = t8;
    } else {
        t8 = $[18];
    }
    let t9;
    if ($[19] !== scrollIndex) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: {
                "LaptopsSection[<button>.onClick]": ()=>setScrollIndex(scrollIndex + 1)
            }["LaptopsSection[<button>.onClick]"],
            className: "absolute -right-3 top-1/2 -translate-y-1/2 bg-white w-7 h-7 md:w-8 md:h-8 rounded-full shadow z-10 text-sm",
            children: "▶"
        }, void 0, false, {
            fileName: "[project]/src/app/components/user components/Home/LaptopsSection.jsx",
            lineNumber: 301,
            columnNumber: 10
        }, this);
        $[19] = scrollIndex;
        $[20] = t9;
    } else {
        t9 = $[20];
    }
    let t10;
    if ($[21] !== t2 || $[22] !== t3 || $[23] !== t8 || $[24] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t2,
            children: [
                t3,
                t8,
                t9
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/user components/Home/LaptopsSection.jsx",
            lineNumber: 311,
            columnNumber: 11
        }, this);
        $[21] = t2;
        $[22] = t3;
        $[23] = t8;
        $[24] = t9;
        $[25] = t10;
    } else {
        t10 = $[25];
    }
    let t11;
    if ($[26] !== t10 || $[27] !== t4 || $[28] !== t5 || $[29] !== t6 || $[30] !== t7) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: t4,
            children: [
                t5,
                t6,
                t7,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/user components/Home/LaptopsSection.jsx",
            lineNumber: 322,
            columnNumber: 11
        }, this);
        $[26] = t10;
        $[27] = t4;
        $[28] = t5;
        $[29] = t6;
        $[30] = t7;
        $[31] = t11;
    } else {
        t11 = $[31];
    }
    return t11;
}
_s(LaptopsSection, "6CI/eJBXbKueEesPikgfRh+JpOM=");
_c1 = LaptopsSection;
function _LaptopsSectionVisibleProductsMap(p) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProductCard, {
        product: p
    }, p.id, false, {
        fileName: "[project]/src/app/components/user components/Home/LaptopsSection.jsx",
        lineNumber: 335,
        columnNumber: 10
    }, this);
}
function _LaptopsSectionCategoriesMap(cat) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-2 bg-white p-2 rounded-lg shadow-sm",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: cat.img,
                className: "w-10 h-8 md:w-12 md:h-9 object-cover rounded",
                alt: cat.name
            }, void 0, false, {
                fileName: "[project]/src/app/components/user components/Home/LaptopsSection.jsx",
                lineNumber: 338,
                columnNumber: 100
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-xs md:text-sm font-semibold",
                        children: cat.name
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/user components/Home/LaptopsSection.jsx",
                        lineNumber: 338,
                        columnNumber: 198
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-xs text-gray-400",
                        children: [
                            cat.count,
                            " Items"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/user components/Home/LaptopsSection.jsx",
                        lineNumber: 338,
                        columnNumber: 264
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/user components/Home/LaptopsSection.jsx",
                lineNumber: 338,
                columnNumber: 193
            }, this)
        ]
    }, cat.name, true, {
        fileName: "[project]/src/app/components/user components/Home/LaptopsSection.jsx",
        lineNumber: 338,
        columnNumber: 10
    }, this);
}
var _c, _c1;
__turbopack_context__.k.register(_c, "ProductCard");
__turbopack_context__.k.register(_c1, "LaptopsSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_components_user%20components_088601dd._.js.map