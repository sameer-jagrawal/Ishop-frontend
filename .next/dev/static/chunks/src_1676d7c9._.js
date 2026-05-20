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
    baseURL: ("TURBOPACK compile-time value", "http://localhost:5000/api/"),
    withCredentials: true
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
"[project]/src/app/components/user components/ButtonLoader.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ButtonLoader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
;
;
function ButtonLoader() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "b8f912db46720e78356dfdc37f66842d62428f4d6c579d02c3d210444322e917") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "b8f912db46720e78356dfdc37f66842d62428f4d6c579d02c3d210444322e917";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "w-2.5 h-2.5 rounded-full bg-white animate-bounce [animation-delay:-0.3s]"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/user components/ButtonLoader.jsx",
                    lineNumber: 12,
                    columnNumber: 66
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "w-2.5 h-2.5 rounded-full bg-white animate-bounce [animation-delay:-0.15s]"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/user components/ButtonLoader.jsx",
                    lineNumber: 12,
                    columnNumber: 159
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "w-2.5 h-2.5 rounded-full bg-white animate-bounce"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/user components/ButtonLoader.jsx",
                    lineNumber: 12,
                    columnNumber: 253
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/user components/ButtonLoader.jsx",
            lineNumber: 12,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
}
_c = ButtonLoader;
var _c;
__turbopack_context__.k.register(_c, "ButtonLoader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/(user-auth)/otp-verify/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>OTPVerificationPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/helper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$user__components$2f$ButtonLoader$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/user components/ButtonLoader.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function OTPContent() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(40);
    if ($[0] !== "5b37feae68179889eba69d5f28c9feb43b55b73b26a6586ec47ed75d17a6de62") {
        for(let $i = 0; $i < 40; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "5b37feae68179889eba69d5f28c9feb43b55b73b26a6586ec47ed75d17a6de62";
    }
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    let t0;
    if ($[1] !== searchParams) {
        t0 = searchParams.get("email");
        $[1] = searchParams;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    const email = t0;
    const [loader, setLoader] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t1;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = [
            "",
            "",
            "",
            "",
            "",
            ""
        ];
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    const [otp, setOtp] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t1);
    let t2;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = [];
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    const inputsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(t2);
    let t3;
    let t4;
    let t5;
    let t6;
    let t7;
    let t8;
    let t9;
    if ($[5] !== email || $[6] !== otp || $[7] !== router) {
        const handleChange = {
            "OTPContent[handleChange]": (value, index)=>{
                if (!/^[0-9]?$/.test(value)) {
                    return;
                }
                const newOtp = [
                    ...otp
                ];
                newOtp[index] = value;
                setOtp(newOtp);
                if (value && index < 5) {
                    inputsRef.current[index + 1]?.focus();
                }
            }
        }["OTPContent[handleChange]"];
        const handleKeyDown = {
            "OTPContent[handleKeyDown]": (e, index_0)=>{
                if (e.key === "Backspace" && !otp[index_0] && index_0 > 0) {
                    inputsRef.current[index_0 - 1]?.focus();
                }
            }
        }["OTPContent[handleKeyDown]"];
        const submitHandler = {
            "OTPContent[submitHandler]": (e_0)=>{
                e_0.preventDefault();
                setLoader(true);
                const finalOtp = otp.join("");
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["client"].post("user/verify-otp", {
                    otp: finalOtp,
                    email
                }).then({
                    "OTPContent[submitHandler > (anonymous)()]": (response)=>{
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notify"])(response.data.masg, response.data.success);
                        if (response.data.success) {
                            router.push("/login");
                        }
                    }
                }["OTPContent[submitHandler > (anonymous)()]"]).catch(_OTPContentSubmitHandlerAnonymous).finally({
                    "OTPContent[submitHandler > (anonymous)()]": ()=>{
                        setLoader(false);
                    }
                }["OTPContent[submitHandler > (anonymous)()]"]);
            }
        }["OTPContent[submitHandler]"];
        t9 = "min-h-screen bg-[#f4f7f7] flex items-center justify-center px-4 py-10";
        t7 = "w-full max-w-xl bg-white rounded-[28px] shadow-lg p-8 md:p-10 border border-gray-100";
        let t10;
        let t11;
        if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
            t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-4xl font-bold text-gray-900 tracking-tight",
                children: "OTP Verification"
            }, void 0, false, {
                fileName: "[project]/src/app/(user-auth)/otp-verify/page.jsx",
                lineNumber: 99,
                columnNumber: 13
            }, this);
            t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-gray-500 mt-3 text-sm md:text-base",
                children: "Enter the 6 digit OTP sent to"
            }, void 0, false, {
                fileName: "[project]/src/app/(user-auth)/otp-verify/page.jsx",
                lineNumber: 100,
                columnNumber: 13
            }, this);
            $[15] = t10;
            $[16] = t11;
        } else {
            t10 = $[15];
            t11 = $[16];
        }
        if ($[17] !== email) {
            t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center mb-8",
                children: [
                    t10,
                    t11,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[#01A49E] font-medium mt-1 break-all",
                        children: email
                    }, void 0, false, {
                        fileName: "[project]/src/app/(user-auth)/otp-verify/page.jsx",
                        lineNumber: 108,
                        columnNumber: 56
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(user-auth)/otp-verify/page.jsx",
                lineNumber: 108,
                columnNumber: 12
            }, this);
            $[17] = email;
            $[18] = t8;
        } else {
            t8 = $[18];
        }
        t5 = submitHandler;
        t6 = "space-y-8";
        t3 = "flex items-center justify-center gap-3 md:gap-4";
        t4 = otp.map({
            "OTPContent[otp.map()]": (digit, index_1)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "text",
                    ref: {
                        "OTPContent[otp.map() > <input>.ref]": (el)=>inputsRef.current[index_1] = el
                    }["OTPContent[otp.map() > <input>.ref]"],
                    value: digit,
                    onChange: {
                        "OTPContent[otp.map() > <input>.onChange]": (e_1)=>handleChange(e_1.target.value, index_1)
                    }["OTPContent[otp.map() > <input>.onChange]"],
                    onKeyDown: {
                        "OTPContent[otp.map() > <input>.onKeyDown]": (e_2)=>handleKeyDown(e_2, index_1)
                    }["OTPContent[otp.map() > <input>.onKeyDown]"],
                    maxLength: 1,
                    className: "\r\n                  w-12 h-14 md:w-14 md:h-16\r\n                  text-center text-xl md:text-2xl\r\n                  font-semibold border border-gray-300\r\n                  rounded-2xl outline-none\r\n                  focus:ring-2 focus:ring-[#01A49E]\r\n                  focus:border-transparent transition\r\n                "
                }, index_1, false, {
                    fileName: "[project]/src/app/(user-auth)/otp-verify/page.jsx",
                    lineNumber: 118,
                    columnNumber: 52
                }, this)
        }["OTPContent[otp.map()]"]);
        $[5] = email;
        $[6] = otp;
        $[7] = router;
        $[8] = t3;
        $[9] = t4;
        $[10] = t5;
        $[11] = t6;
        $[12] = t7;
        $[13] = t8;
        $[14] = t9;
    } else {
        t3 = $[8];
        t4 = $[9];
        t5 = $[10];
        t6 = $[11];
        t7 = $[12];
        t8 = $[13];
        t9 = $[14];
    }
    let t10;
    if ($[19] !== t3 || $[20] !== t4) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t3,
            children: t4
        }, void 0, false, {
            fileName: "[project]/src/app/(user-auth)/otp-verify/page.jsx",
            lineNumber: 147,
            columnNumber: 11
        }, this);
        $[19] = t3;
        $[20] = t4;
        $[21] = t10;
    } else {
        t10 = $[21];
    }
    let t11;
    if ($[22] !== loader) {
        t11 = loader ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$user__components$2f$ButtonLoader$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/src/app/(user-auth)/otp-verify/page.jsx",
            lineNumber: 156,
            columnNumber: 20
        }, this) : "Verify OTP";
        $[22] = loader;
        $[23] = t11;
    } else {
        t11 = $[23];
    }
    let t12;
    if ($[24] !== loader || $[25] !== t11) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "submit",
            className: "\r\n              w-full bg-[#01A49E]\r\n              text-white py-3 rounded-xl\r\n              font-semibold hover:opacity-90\r\n              transition-all duration-300\r\n              disabled:opacity-70 disabled:cursor-not-allowed\r\n            ",
            disabled: loader,
            children: t11
        }, void 0, false, {
            fileName: "[project]/src/app/(user-auth)/otp-verify/page.jsx",
            lineNumber: 164,
            columnNumber: 11
        }, this);
        $[24] = loader;
        $[25] = t11;
        $[26] = t12;
    } else {
        t12 = $[26];
    }
    let t13;
    if ($[27] !== t10 || $[28] !== t12 || $[29] !== t5 || $[30] !== t6) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            onSubmit: t5,
            className: t6,
            children: [
                t10,
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(user-auth)/otp-verify/page.jsx",
            lineNumber: 173,
            columnNumber: 11
        }, this);
        $[27] = t10;
        $[28] = t12;
        $[29] = t5;
        $[30] = t6;
        $[31] = t13;
    } else {
        t13 = $[31];
    }
    let t14;
    if ($[32] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-6 text-center text-sm text-gray-600",
            children: [
                "Didn't receive OTP?",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "\r\n              ml-2 text-[#01A49E]\r\n              font-semibold hover:underline\r\n            ",
                    children: "Resend"
                }, void 0, false, {
                    fileName: "[project]/src/app/(user-auth)/otp-verify/page.jsx",
                    lineNumber: 184,
                    columnNumber: 86
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(user-auth)/otp-verify/page.jsx",
            lineNumber: 184,
            columnNumber: 11
        }, this);
        $[32] = t14;
    } else {
        t14 = $[32];
    }
    let t15;
    if ($[33] !== t13 || $[34] !== t7 || $[35] !== t8) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t7,
            children: [
                t8,
                t13,
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(user-auth)/otp-verify/page.jsx",
            lineNumber: 191,
            columnNumber: 11
        }, this);
        $[33] = t13;
        $[34] = t7;
        $[35] = t8;
        $[36] = t15;
    } else {
        t15 = $[36];
    }
    let t16;
    if ($[37] !== t15 || $[38] !== t9) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t9,
            children: t15
        }, void 0, false, {
            fileName: "[project]/src/app/(user-auth)/otp-verify/page.jsx",
            lineNumber: 201,
            columnNumber: 11
        }, this);
        $[37] = t15;
        $[38] = t9;
        $[39] = t16;
    } else {
        t16 = $[39];
    }
    return t16;
}
_s(OTPContent, "j+B8Ke2tzJEV+Wr6TX1VAAJQH1I=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"]
    ];
});
_c = OTPContent;
function _OTPContentSubmitHandlerAnonymous(error) {
    const message = error?.response?.data?.masg || "Internal Server Error";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notify"])(message, false);
}
function OTPVerificationPage() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "5b37feae68179889eba69d5f28c9feb43b55b73b26a6586ec47ed75d17a6de62") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "5b37feae68179889eba69d5f28c9feb43b55b73b26a6586ec47ed75d17a6de62";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
            fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: "Loading..."
            }, void 0, false, {
                fileName: "[project]/src/app/(user-auth)/otp-verify/page.jsx",
                lineNumber: 224,
                columnNumber: 30
            }, void 0),
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OTPContent, {}, void 0, false, {
                fileName: "[project]/src/app/(user-auth)/otp-verify/page.jsx",
                lineNumber: 224,
                columnNumber: 53
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/(user-auth)/otp-verify/page.jsx",
            lineNumber: 224,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
}
_c1 = OTPVerificationPage;
var _c, _c1;
__turbopack_context__.k.register(_c, "OTPContent");
__turbopack_context__.k.register(_c1, "OTPVerificationPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_1676d7c9._.js.map