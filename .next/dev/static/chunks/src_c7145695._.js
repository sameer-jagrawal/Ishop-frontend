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
"[project]/src/app/components/user components/GlobalLoader.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GlobalLoader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
;
;
function GlobalLoader(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4);
    if ($[0] !== "40475ab24a8afe3727943dec049c73e01ae6d3e6683b0c6ab5a3053464f95eac") {
        for(let $i = 0; $i < 4; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "40475ab24a8afe3727943dec049c73e01ae6d3e6683b0c6ab5a3053464f95eac";
    }
    const { fullScreen: t1 } = t0;
    const fullScreen = t1 === undefined ? true : t1;
    const t2 = `
          ${fullScreen ? "fixed inset-0" : "relative w-full h-full"}
          flex items-center justify-center
          bg-white/80 backdrop-blur-sm z-50
        `;
    let t3;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative flex items-center justify-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-20 h-20 rounded-full border-[6px] border-[#01A49E]/20 border-t-[#01A49E] animate-spin"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/user components/GlobalLoader.jsx",
                    lineNumber: 21,
                    columnNumber: 69
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute w-10 h-10 rounded-full bg-[#01A49E] animate-pulse shadow-[0_0_30px_rgba(1,164,158,0.6)]"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/user components/GlobalLoader.jsx",
                    lineNumber: 21,
                    columnNumber: 176
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute top-28 text-[#01A49E] font-semibold tracking-[6px] text-sm uppercase",
                    children: "iShop"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/user components/GlobalLoader.jsx",
                    lineNumber: 21,
                    columnNumber: 292
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/user components/GlobalLoader.jsx",
            lineNumber: 21,
            columnNumber: 10
        }, this);
        $[1] = t3;
    } else {
        t3 = $[1];
    }
    let t4;
    if ($[2] !== t2) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t2,
            children: t3
        }, void 0, false, {
            fileName: "[project]/src/app/components/user components/GlobalLoader.jsx",
            lineNumber: 28,
            columnNumber: 10
        }, this);
        $[2] = t2;
        $[3] = t4;
    } else {
        t4 = $[3];
    }
    return t4;
}
_c = GlobalLoader;
var _c;
__turbopack_context__.k.register(_c, "GlobalLoader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/(user)/profile/address/add/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AddAddressPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/house.js [app-client] (ecmascript) <export default as Home>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/helper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$user__components$2f$GlobalLoader$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/user components/GlobalLoader.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
function AddAddressPage() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(12);
    if ($[0] !== "daad97b6aa8fbf52f77b38d18d5f59e3769f6b603d00a5182def805eb237ce77") {
        for(let $i = 0; $i < 12; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "daad97b6aa8fbf52f77b38d18d5f59e3769f6b603d00a5182def805eb237ce77";
    }
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {
            fullName: "",
            phone: "",
            addressLine1: "",
            addressLine2: "",
            city: "",
            state: "",
            postalCode: "",
            country: "India"
        };
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    const [loader, setLoader] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t1;
    if ($[2] !== form) {
        t1 = ({
            "AddAddressPage[handleChange]": (e)=>{
                setForm({
                    ...form,
                    [e.target.name]: e.target.value
                });
            }
        })["AddAddressPage[handleChange]"];
        $[2] = form;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    const handleChange = t1;
    let t2;
    if ($[4] !== form || $[5] !== router) {
        t2 = ({
            "AddAddressPage[handleSubmit]": async (e_0)=>{
                e_0.preventDefault();
                setLoader(true);
                ;
                try {
                    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["client"].post("user/address", form).then({
                        "AddAddressPage[handleSubmit > (anonymous)()]": (response)=>{
                            console.log(response, "address response");
                            if (response.data.success) {
                                router.push("/profile/address");
                            }
                        }
                    }["AddAddressPage[handleSubmit > (anonymous)()]"]).catch(_AddAddressPageHandleSubmitAnonymous).finally({
                        "AddAddressPage[handleSubmit > (anonymous)()]": ()=>{
                            setLoader(false);
                        }
                    }["AddAddressPage[handleSubmit > (anonymous)()]"]);
                } catch (t3) {
                    const error = t3;
                }
            }
        })["AddAddressPage[handleSubmit]"];
        $[4] = form;
        $[5] = router;
        $[6] = t2;
    } else {
        t2 = $[6];
    }
    const handleSubmit = t2;
    let t3;
    if ($[7] !== form || $[8] !== handleChange || $[9] !== handleSubmit || $[10] !== loader) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: loader ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$user__components$2f$GlobalLoader$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/(user)/profile/address/add/page.jsx",
                lineNumber: 87,
                columnNumber: 25
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-h-screen bg-gray-50 flex items-center justify-center px-4 py-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full max-w-3xl bg-white rounded-2xl shadow-md border border-gray-100 p-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-2xl font-bold text-gray-800",
                                    children: "Add New Address"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(user)/profile/address/add/page.jsx",
                                    lineNumber: 87,
                                    columnNumber: 243
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-500 mt-1",
                                    children: "Fill in your delivery details"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(user)/profile/address/add/page.jsx",
                                    lineNumber: 87,
                                    columnNumber: 312
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(user)/profile/address/add/page.jsx",
                            lineNumber: 87,
                            columnNumber: 221
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleSubmit,
                            className: "space-y-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid md:grid-cols-2 gap-5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-sm text-gray-600",
                                                    children: "Full Name"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(user)/profile/address/add/page.jsx",
                                                    lineNumber: 87,
                                                    columnNumber: 485
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative mt-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                            className: "absolute left-3 top-3 text-gray-400",
                                                            size: 18
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(user)/profile/address/add/page.jsx",
                                                            lineNumber: 87,
                                                            columnNumber: 574
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            name: "fullName",
                                                            value: form.fullName,
                                                            onChange: handleChange,
                                                            placeholder: "John Doe",
                                                            className: "w-full pl-10 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#01A49E]",
                                                            required: true
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(user)/profile/address/add/page.jsx",
                                                            lineNumber: 87,
                                                            columnNumber: 640
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(user)/profile/address/add/page.jsx",
                                                    lineNumber: 87,
                                                    columnNumber: 543
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(user)/profile/address/add/page.jsx",
                                            lineNumber: 87,
                                            columnNumber: 480
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-sm text-gray-600",
                                                    children: "Phone"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(user)/profile/address/add/page.jsx",
                                                    lineNumber: 87,
                                                    columnNumber: 873
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative mt-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                            className: "absolute left-3 top-3 text-gray-400",
                                                            size: 18
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(user)/profile/address/add/page.jsx",
                                                            lineNumber: 87,
                                                            columnNumber: 958
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            name: "phone",
                                                            value: form.phone,
                                                            onChange: handleChange,
                                                            placeholder: "+91 9876543210",
                                                            className: "w-full pl-10 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#01A49E]",
                                                            required: true
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(user)/profile/address/add/page.jsx",
                                                            lineNumber: 87,
                                                            columnNumber: 1025
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(user)/profile/address/add/page.jsx",
                                                    lineNumber: 87,
                                                    columnNumber: 927
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(user)/profile/address/add/page.jsx",
                                            lineNumber: 87,
                                            columnNumber: 868
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(user)/profile/address/add/page.jsx",
                                    lineNumber: 87,
                                    columnNumber: 437
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-sm text-gray-600",
                                            children: "Address Line 1"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(user)/profile/address/add/page.jsx",
                                            lineNumber: 87,
                                            columnNumber: 1264
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative mt-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"], {
                                                    className: "absolute left-3 top-3 text-gray-400",
                                                    size: 18
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(user)/profile/address/add/page.jsx",
                                                    lineNumber: 87,
                                                    columnNumber: 1358
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    name: "addressLine1",
                                                    value: form.addressLine1,
                                                    onChange: handleChange,
                                                    placeholder: "House no, Street, Area",
                                                    className: "w-full pl-10 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#01A49E]",
                                                    required: true
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(user)/profile/address/add/page.jsx",
                                                    lineNumber: 87,
                                                    columnNumber: 1424
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(user)/profile/address/add/page.jsx",
                                            lineNumber: 87,
                                            columnNumber: 1327
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(user)/profile/address/add/page.jsx",
                                    lineNumber: 87,
                                    columnNumber: 1259
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-sm text-gray-600",
                                            children: "Address Line 2 (Optional)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(user)/profile/address/add/page.jsx",
                                            lineNumber: 87,
                                            columnNumber: 1679
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            name: "addressLine2",
                                            value: form.addressLine2,
                                            onChange: handleChange,
                                            placeholder: "Apartment, Landmark",
                                            className: "w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#01A49E]"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(user)/profile/address/add/page.jsx",
                                            lineNumber: 87,
                                            columnNumber: 1753
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(user)/profile/address/add/page.jsx",
                                    lineNumber: 87,
                                    columnNumber: 1674
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid md:grid-cols-2 gap-5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-sm text-gray-600",
                                                    children: "Type"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(user)/profile/address/add/page.jsx",
                                                    lineNumber: 87,
                                                    columnNumber: 2020
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    placeholder: "ex. Home,Office",
                                                    name: "type",
                                                    value: form.type,
                                                    onChange: handleChange,
                                                    className: "w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#01A49E]",
                                                    required: true
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(user)/profile/address/add/page.jsx",
                                                    lineNumber: 87,
                                                    columnNumber: 2073
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(user)/profile/address/add/page.jsx",
                                            lineNumber: 87,
                                            columnNumber: 2015
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-sm text-gray-600",
                                                    children: "Postal Code"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(user)/profile/address/add/page.jsx",
                                                    lineNumber: 87,
                                                    columnNumber: 2293
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    name: "postalCode",
                                                    value: form.postalCode,
                                                    onChange: handleChange,
                                                    className: "w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#01A49E]",
                                                    required: true
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(user)/profile/address/add/page.jsx",
                                                    lineNumber: 87,
                                                    columnNumber: 2353
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(user)/profile/address/add/page.jsx",
                                            lineNumber: 87,
                                            columnNumber: 2288
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(user)/profile/address/add/page.jsx",
                                    lineNumber: 87,
                                    columnNumber: 1972
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-sm text-gray-600",
                                            children: "City"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(user)/profile/address/add/page.jsx",
                                            lineNumber: 87,
                                            columnNumber: 2561
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            name: "city",
                                            value: form.city,
                                            onChange: handleChange,
                                            className: "w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#01A49E]",
                                            required: true
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(user)/profile/address/add/page.jsx",
                                            lineNumber: 87,
                                            columnNumber: 2614
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(user)/profile/address/add/page.jsx",
                                    lineNumber: 87,
                                    columnNumber: 2556
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-sm text-gray-600",
                                            children: "State"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(user)/profile/address/add/page.jsx",
                                            lineNumber: 87,
                                            columnNumber: 2804
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            name: "state",
                                            value: form.state,
                                            onChange: handleChange,
                                            className: "w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#01A49E]",
                                            required: true
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(user)/profile/address/add/page.jsx",
                                            lineNumber: 87,
                                            columnNumber: 2858
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(user)/profile/address/add/page.jsx",
                                    lineNumber: 87,
                                    columnNumber: 2799
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-sm text-gray-600",
                                            children: "Country"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(user)/profile/address/add/page.jsx",
                                            lineNumber: 87,
                                            columnNumber: 3050
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            name: "country",
                                            value: form.country,
                                            onChange: handleChange,
                                            className: "w-full px-4 py-3 border rounded-xl bg-gray-100 text-gray-600",
                                            disabled: true
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(user)/profile/address/add/page.jsx",
                                            lineNumber: 87,
                                            columnNumber: 3106
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(user)/profile/address/add/page.jsx",
                                    lineNumber: 87,
                                    columnNumber: 3045
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-end gap-3 pt-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/profile/address",
                                            className: "px-6 py-3 rounded-xl border text-gray-600 hover:bg-gray-100 transition",
                                            children: "Cancel"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(user)/profile/address/add/page.jsx",
                                            lineNumber: 87,
                                            columnNumber: 3315
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            className: "px-6 py-3 rounded-xl bg-[#01A49E] text-white hover:bg-[#01857f] transition shadow-md",
                                            children: "Save Address"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(user)/profile/address/add/page.jsx",
                                            lineNumber: 87,
                                            columnNumber: 3441
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(user)/profile/address/add/page.jsx",
                                    lineNumber: 87,
                                    columnNumber: 3270
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(user)/profile/address/add/page.jsx",
                            lineNumber: 87,
                            columnNumber: 385
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(user)/profile/address/add/page.jsx",
                    lineNumber: 87,
                    columnNumber: 129
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/(user)/profile/address/add/page.jsx",
                lineNumber: 87,
                columnNumber: 44
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/(user)/profile/address/add/page.jsx",
            lineNumber: 87,
            columnNumber: 10
        }, this);
        $[7] = form;
        $[8] = handleChange;
        $[9] = handleSubmit;
        $[10] = loader;
        $[11] = t3;
    } else {
        t3 = $[11];
    }
    return t3;
}
_s(AddAddressPage, "SmNadj485o20mSXX6LUFIfPlnRY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = AddAddressPage;
function _AddAddressPageHandleSubmitAnonymous(error_0) {
    console.log(error_0);
}
var _c;
__turbopack_context__.k.register(_c, "AddAddressPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_c7145695._.js.map