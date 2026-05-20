(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/components/user components/Store/CheckOut.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CheckoutPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/helper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function CheckoutPage(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(65);
    if ($[0] !== "e754f4b991df8e2141a8e6e7348115011d559b9ef966ed6bce26fc70651f0400") {
        for(let $i = 0; $i < 65; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e754f4b991df8e2141a8e6e7348115011d559b9ef966ed6bce26fc70651f0400";
    }
    const { user } = t0;
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const addresses = user?.data?.addresses;
    const [selectedAddress, setSelectedAddress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const cart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])(_CheckoutPageUseSelector);
    const [paymentMethod, setPaymentMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("cod");
    let t1;
    if ($[1] !== cart?.items) {
        t1 = cart?.items?.reduce(_CheckoutPageAnonymous, 0);
        $[1] = cart?.items;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const totalItems = t1;
    let t2;
    if ($[3] !== addresses || $[4] !== paymentMethod || $[5] !== router || $[6] !== selectedAddress) {
        t2 = ({
            "CheckoutPage[handleOrder]": async ()=>{
                const orderData = {
                    address: addresses[selectedAddress],
                    paymentMethod
                };
                ;
                try {
                    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["client"].post("order/create", orderData);
                    if (paymentMethod === "cod") {
                        if (response.data.success) {
                            router.push(`checkout/${response.data.data.orderId}`);
                        }
                    } else {
                        console.log(response, "online payment response");
                    }
                } catch (t3) {
                    const error = t3;
                    console.log(error.response?.data);
                    console.log(error.message);
                }
            }
        })["CheckoutPage[handleOrder]"];
        $[3] = addresses;
        $[4] = paymentMethod;
        $[5] = router;
        $[6] = selectedAddress;
        $[7] = t2;
    } else {
        t2 = $[7];
    }
    const handleOrder = t2;
    let t3;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-xl font-semibold mb-5 text-gray-800",
            children: "Products"
        }, void 0, false, {
            fileName: "[project]/src/app/components/user components/Store/CheckOut.jsx",
            lineNumber: 69,
            columnNumber: 10
        }, this);
        $[8] = t3;
    } else {
        t3 = $[8];
    }
    let t4;
    if ($[9] !== cart?.items) {
        t4 = cart?.items?.map(_CheckoutPageAnonymous2);
        $[9] = cart?.items;
        $[10] = t4;
    } else {
        t4 = $[10];
    }
    let t5;
    if ($[11] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-2xl shadow-sm p-6",
            children: [
                t3,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4",
                    children: t4
                }, void 0, false, {
                    fileName: "[project]/src/app/components/user components/Store/CheckOut.jsx",
                    lineNumber: 84,
                    columnNumber: 66
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/user components/Store/CheckOut.jsx",
            lineNumber: 84,
            columnNumber: 10
        }, this);
        $[11] = t4;
        $[12] = t5;
    } else {
        t5 = $[12];
    }
    let t6;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-xl font-semibold mb-5 text-gray-800",
            children: "Select Delivery Address"
        }, void 0, false, {
            fileName: "[project]/src/app/components/user components/Store/CheckOut.jsx",
            lineNumber: 92,
            columnNumber: 10
        }, this);
        $[13] = t6;
    } else {
        t6 = $[13];
    }
    let t7;
    if ($[14] !== addresses) {
        let t8;
        if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
            t8 = ({
                "CheckoutPage[addresses.map()]": (item_1, index)=>{
                    console.log(item_1);
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "border rounded-xl p-4 flex items-start gap-4 cursor-pointer hover:border-[#01A49E] transition",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "radio",
                                name: "address",
                                className: "mt-1 accent-[#01A49E]",
                                onClick: {
                                    "CheckoutPage[addresses.map() > <input>.onClick]": ()=>setSelectedAddress(index)
                                }["CheckoutPage[addresses.map() > <input>.onClick]"]
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/user components/Store/CheckOut.jsx",
                                lineNumber: 104,
                                columnNumber: 143
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-semibold",
                                        children: item_1?.type
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/user components/Store/CheckOut.jsx",
                                        lineNumber: 106,
                                        columnNumber: 74
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm font-semibold",
                                        children: [
                                            item_1?.fullName,
                                            ","
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/user components/Store/CheckOut.jsx",
                                        lineNumber: 106,
                                        columnNumber: 123
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: " text-gray-500 mt-1",
                                        children: [
                                            item_1?.addressLine1,
                                            ", ",
                                            item_1?.addressLine2,
                                            ", ",
                                            item_1?.city,
                                            ", ",
                                            item_1?.state,
                                            ", ",
                                            item_1?.country
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/user components/Store/CheckOut.jsx",
                                        lineNumber: 106,
                                        columnNumber: 183
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-sky-500 font-semibold",
                                        children: item_1?.postalCode
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/user components/Store/CheckOut.jsx",
                                        lineNumber: 106,
                                        columnNumber: 320
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-sky-500 font-semibold",
                                        children: [
                                            "Phone: ",
                                            item_1?.phone
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/user components/Store/CheckOut.jsx",
                                        lineNumber: 106,
                                        columnNumber: 394
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/user components/Store/CheckOut.jsx",
                                lineNumber: 106,
                                columnNumber: 69
                            }, this)
                        ]
                    }, index, true, {
                        fileName: "[project]/src/app/components/user components/Store/CheckOut.jsx",
                        lineNumber: 104,
                        columnNumber: 18
                    }, this);
                }
            })["CheckoutPage[addresses.map()]"];
            $[16] = t8;
        } else {
            t8 = $[16];
        }
        t7 = addresses.map(t8);
        $[14] = addresses;
        $[15] = t7;
    } else {
        t7 = $[15];
    }
    let t8;
    if ($[17] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-2xl shadow-sm p-6",
            children: [
                t6,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4",
                    children: t7
                }, void 0, false, {
                    fileName: "[project]/src/app/components/user components/Store/CheckOut.jsx",
                    lineNumber: 121,
                    columnNumber: 66
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/user components/Store/CheckOut.jsx",
            lineNumber: 121,
            columnNumber: 10
        }, this);
        $[17] = t7;
        $[18] = t8;
    } else {
        t8 = $[18];
    }
    let t9;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-xl font-semibold mb-5 text-gray-800",
            children: "Payment Method"
        }, void 0, false, {
            fileName: "[project]/src/app/components/user components/Store/CheckOut.jsx",
            lineNumber: 129,
            columnNumber: 10
        }, this);
        $[19] = t9;
    } else {
        t9 = $[19];
    }
    const t10 = paymentMethod === "cod";
    let t11;
    if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = ({
            "CheckoutPage[<input>.onChange]": ()=>setPaymentMode("cod")
        })["CheckoutPage[<input>.onChange]"];
        $[20] = t11;
    } else {
        t11 = $[20];
    }
    let t12;
    if ($[21] !== t10) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "radio",
            name: "payment",
            checked: t10,
            onChange: t11,
            className: "accent-[#01A49E]"
        }, void 0, false, {
            fileName: "[project]/src/app/components/user components/Store/CheckOut.jsx",
            lineNumber: 146,
            columnNumber: 11
        }, this);
        $[21] = t10;
        $[22] = t12;
    } else {
        t12 = $[22];
    }
    let t13;
    if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "font-semibold",
                    children: "Cash on Delivery"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/user components/Store/CheckOut.jsx",
                    lineNumber: 154,
                    columnNumber: 16
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-gray-500",
                    children: "Pay when your order arrives"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/user components/Store/CheckOut.jsx",
                    lineNumber: 154,
                    columnNumber: 67
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/user components/Store/CheckOut.jsx",
            lineNumber: 154,
            columnNumber: 11
        }, this);
        $[23] = t13;
    } else {
        t13 = $[23];
    }
    let t14;
    if ($[24] !== t12) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "border rounded-xl p-4 flex items-center gap-4 cursor-pointer hover:border-[#01A49E] transition",
            children: [
                t12,
                t13
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/user components/Store/CheckOut.jsx",
            lineNumber: 161,
            columnNumber: 11
        }, this);
        $[24] = t12;
        $[25] = t14;
    } else {
        t14 = $[25];
    }
    const t15 = paymentMethod === "online";
    let t16;
    if ($[26] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = ({
            "CheckoutPage[<input>.onChange]": ()=>setPaymentMode("online")
        })["CheckoutPage[<input>.onChange]"];
        $[26] = t16;
    } else {
        t16 = $[26];
    }
    let t17;
    if ($[27] !== t15) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "radio",
            name: "payment",
            checked: t15,
            onChange: t16,
            className: "accent-[#01A49E]"
        }, void 0, false, {
            fileName: "[project]/src/app/components/user components/Store/CheckOut.jsx",
            lineNumber: 179,
            columnNumber: 11
        }, this);
        $[27] = t15;
        $[28] = t17;
    } else {
        t17 = $[28];
    }
    let t18;
    if ($[29] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "font-semibold",
                    children: "UPI Payment"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/user components/Store/CheckOut.jsx",
                    lineNumber: 187,
                    columnNumber: 16
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-gray-500",
                    children: "Pay instantly using any UPI app"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/user components/Store/CheckOut.jsx",
                    lineNumber: 187,
                    columnNumber: 62
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/user components/Store/CheckOut.jsx",
            lineNumber: 187,
            columnNumber: 11
        }, this);
        $[29] = t18;
    } else {
        t18 = $[29];
    }
    let t19;
    if ($[30] !== t17) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "border rounded-xl p-4 flex items-center gap-4 cursor-pointer hover:border-[#01A49E] transition",
            children: [
                t17,
                t18
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/user components/Store/CheckOut.jsx",
            lineNumber: 194,
            columnNumber: 11
        }, this);
        $[30] = t17;
        $[31] = t19;
    } else {
        t19 = $[31];
    }
    let t20;
    if ($[32] !== t14 || $[33] !== t19) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-2xl shadow-sm p-6",
            children: [
                t9,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4",
                    children: [
                        t14,
                        t19
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/user components/Store/CheckOut.jsx",
                    lineNumber: 202,
                    columnNumber: 67
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/user components/Store/CheckOut.jsx",
            lineNumber: 202,
            columnNumber: 11
        }, this);
        $[32] = t14;
        $[33] = t19;
        $[34] = t20;
    } else {
        t20 = $[34];
    }
    let t21;
    if ($[35] !== t20 || $[36] !== t5 || $[37] !== t8) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "lg:col-span-2 space-y-6",
            children: [
                t5,
                t8,
                t20
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/user components/Store/CheckOut.jsx",
            lineNumber: 211,
            columnNumber: 11
        }, this);
        $[35] = t20;
        $[36] = t5;
        $[37] = t8;
        $[38] = t21;
    } else {
        t21 = $[38];
    }
    let t22;
    if ($[39] === Symbol.for("react.memo_cache_sentinel")) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "font-semibold text-xl mb-5",
            children: "Order Summary"
        }, void 0, false, {
            fileName: "[project]/src/app/components/user components/Store/CheckOut.jsx",
            lineNumber: 221,
            columnNumber: 11
        }, this);
        $[39] = t22;
    } else {
        t22 = $[39];
    }
    let t23;
    if ($[40] === Symbol.for("react.memo_cache_sentinel")) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm text-gray-600",
            children: "Total Items"
        }, void 0, false, {
            fileName: "[project]/src/app/components/user components/Store/CheckOut.jsx",
            lineNumber: 228,
            columnNumber: 11
        }, this);
        $[40] = t23;
    } else {
        t23 = $[40];
    }
    let t24;
    if ($[41] !== totalItems) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-[#01A49E]/10 rounded-xl p-4 mb-5",
            children: [
                t23,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-2xl font-bold text-[#01A49E]",
                    children: totalItems
                }, void 0, false, {
                    fileName: "[project]/src/app/components/user components/Store/CheckOut.jsx",
                    lineNumber: 235,
                    columnNumber: 69
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/user components/Store/CheckOut.jsx",
            lineNumber: 235,
            columnNumber: 11
        }, this);
        $[41] = totalItems;
        $[42] = t24;
    } else {
        t24 = $[42];
    }
    let t25;
    if ($[43] === Symbol.for("react.memo_cache_sentinel")) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-gray-500",
            children: "Original Total"
        }, void 0, false, {
            fileName: "[project]/src/app/components/user components/Store/CheckOut.jsx",
            lineNumber: 243,
            columnNumber: 11
        }, this);
        $[43] = t25;
    } else {
        t25 = $[43];
    }
    const t26 = cart?.originalTotal;
    let t27;
    if ($[44] !== t26) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between",
            children: [
                t25,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-semibold",
                    children: [
                        "$",
                        t26
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/user components/Store/CheckOut.jsx",
                    lineNumber: 251,
                    columnNumber: 54
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/user components/Store/CheckOut.jsx",
            lineNumber: 251,
            columnNumber: 11
        }, this);
        $[44] = t26;
        $[45] = t27;
    } else {
        t27 = $[45];
    }
    let t28;
    if ($[46] === Symbol.for("react.memo_cache_sentinel")) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-gray-500",
            children: "Savings"
        }, void 0, false, {
            fileName: "[project]/src/app/components/user components/Store/CheckOut.jsx",
            lineNumber: 259,
            columnNumber: 11
        }, this);
        $[46] = t28;
    } else {
        t28 = $[46];
    }
    const t29 = (cart?.originalTotal || 0) - (cart?.finalTotal || 0);
    let t30;
    if ($[47] !== t29) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between",
            children: [
                t28,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-semibold text-green-600",
                    children: [
                        "$",
                        t29
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/user components/Store/CheckOut.jsx",
                    lineNumber: 267,
                    columnNumber: 54
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/user components/Store/CheckOut.jsx",
            lineNumber: 267,
            columnNumber: 11
        }, this);
        $[47] = t29;
        $[48] = t30;
    } else {
        t30 = $[48];
    }
    let t31;
    if ($[49] === Symbol.for("react.memo_cache_sentinel")) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: "Final Total"
        }, void 0, false, {
            fileName: "[project]/src/app/components/user components/Store/CheckOut.jsx",
            lineNumber: 275,
            columnNumber: 11
        }, this);
        $[49] = t31;
    } else {
        t31 = $[49];
    }
    const t32 = cart?.finalTotal;
    let t33;
    if ($[50] !== t32) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "border-t pt-4 flex justify-between text-lg font-bold",
            children: [
                t31,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-[#01A49E]",
                    children: [
                        "$",
                        t32
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/user components/Store/CheckOut.jsx",
                    lineNumber: 283,
                    columnNumber: 86
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/user components/Store/CheckOut.jsx",
            lineNumber: 283,
            columnNumber: 11
        }, this);
        $[50] = t32;
        $[51] = t33;
    } else {
        t33 = $[51];
    }
    let t34;
    if ($[52] !== t27 || $[53] !== t30 || $[54] !== t33) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-4 text-sm",
            children: [
                t27,
                t30,
                t33
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/user components/Store/CheckOut.jsx",
            lineNumber: 291,
            columnNumber: 11
        }, this);
        $[52] = t27;
        $[53] = t30;
        $[54] = t33;
        $[55] = t34;
    } else {
        t34 = $[55];
    }
    let t35;
    if ($[56] !== handleOrder) {
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: handleOrder,
            className: "w-full mt-6 bg-[#01A49E] text-white py-3 rounded-xl font-semibold hover:opacity-90 active:scale-95 transition-all",
            children: "PLACE ORDER"
        }, void 0, false, {
            fileName: "[project]/src/app/components/user components/Store/CheckOut.jsx",
            lineNumber: 301,
            columnNumber: 11
        }, this);
        $[56] = handleOrder;
        $[57] = t35;
    } else {
        t35 = $[57];
    }
    let t36;
    if ($[58] !== t24 || $[59] !== t34 || $[60] !== t35) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-2xl p-6 shadow-sm border border-[#01A49E] h-fit sticky top-6",
            children: [
                t22,
                t24,
                t34,
                t35
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/user components/Store/CheckOut.jsx",
            lineNumber: 309,
            columnNumber: 11
        }, this);
        $[58] = t24;
        $[59] = t34;
        $[60] = t35;
        $[61] = t36;
    } else {
        t36 = $[61];
    }
    let t37;
    if ($[62] !== t21 || $[63] !== t36) {
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-gray-100 p-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto grid lg:grid-cols-3 gap-6",
                children: [
                    t21,
                    t36
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/user components/Store/CheckOut.jsx",
                lineNumber: 319,
                columnNumber: 57
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/components/user components/Store/CheckOut.jsx",
            lineNumber: 319,
            columnNumber: 11
        }, this);
        $[62] = t21;
        $[63] = t36;
        $[64] = t37;
    } else {
        t37 = $[64];
    }
    return t37;
}
_s(CheckoutPage, "fsknhTI0fdiLhCAZ73Ap8f2nvfc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"]
    ];
});
_c = CheckoutPage;
function _CheckoutPageAnonymous2(item_0) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "border border-gray-200 rounded-xl p-4 flex items-center justify-between",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-semibold text-gray-800",
                        children: item_0?.name
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/user components/Store/CheckOut.jsx",
                        lineNumber: 329,
                        columnNumber: 122
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-gray-500 mt-1",
                        children: [
                            "Qty: ",
                            item_0?.qty
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/user components/Store/CheckOut.jsx",
                        lineNumber: 329,
                        columnNumber: 185
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/user components/Store/CheckOut.jsx",
                lineNumber: 329,
                columnNumber: 117
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-right",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[#01A49E] font-bold text-lg",
                        children: [
                            "$",
                            item_0?.final_price
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/user components/Store/CheckOut.jsx",
                        lineNumber: 329,
                        columnNumber: 283
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-gray-400 line-through",
                        children: [
                            "$",
                            item_0?.original_price
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/user components/Store/CheckOut.jsx",
                        lineNumber: 329,
                        columnNumber: 357
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/user components/Store/CheckOut.jsx",
                lineNumber: 329,
                columnNumber: 255
            }, this)
        ]
    }, item_0?._id, true, {
        fileName: "[project]/src/app/components/user components/Store/CheckOut.jsx",
        lineNumber: 329,
        columnNumber: 10
    }, this);
}
function _CheckoutPageAnonymous(acc, item) {
    return acc + item.qty;
}
function _CheckoutPageUseSelector(store) {
    return store.cart;
}
var _c;
__turbopack_context__.k.register(_c, "CheckoutPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/next/navigation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_e475811b._.js.map