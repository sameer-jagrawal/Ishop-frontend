(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/(user)/profile/edit/[id]/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EditProfilePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function EditProfilePage() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(37);
    if ($[0] !== "1af90bb63b4795d2e037b8f207b71317b9a3d73df7037a2d6fcde8a82b054275") {
        for(let $i = 0; $i < 37; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "1af90bb63b4795d2e037b8f207b71317b9a3d73df7037a2d6fcde8a82b054275";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {
            firstName: "Mark",
            lastName: "Cole",
            email: "swoo@gmail.com",
            phone: "+1 0231 4554 452",
            image: null
        };
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    let t1;
    if ($[2] !== formData) {
        t1 = function changeHandler(e) {
            const { name, value, files } = e.target;
            setFormData({
                ...formData,
                [name]: files ? files[0] : value
            });
        };
        $[2] = formData;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    const changeHandler = t1;
    let t2;
    if ($[4] !== formData) {
        t2 = function submitHandler(e_0) {
            e_0.preventDefault();
            console.log(formData);
        };
        $[4] = formData;
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    const submitHandler = t2;
    let t3;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "text-2xl font-bold text-gray-800 mb-6",
            children: "Edit Profile"
        }, void 0, false, {
            fileName: "[project]/src/app/(user)/profile/edit/[id]/page.jsx",
            lineNumber: 61,
            columnNumber: 10
        }, this);
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    let t4;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "text-sm text-gray-600 block mb-2",
            children: "First Name"
        }, void 0, false, {
            fileName: "[project]/src/app/(user)/profile/edit/[id]/page.jsx",
            lineNumber: 68,
            columnNumber: 10
        }, this);
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    let t5;
    if ($[8] !== changeHandler || $[9] !== formData.firstName) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t4,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "text",
                    name: "firstName",
                    value: formData.firstName,
                    onChange: changeHandler,
                    className: "w-full border border-gray-200 rounded-lg px-4 py-3 outline-none transition-all duration-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100 hover:border-cyan-300"
                }, void 0, false, {
                    fileName: "[project]/src/app/(user)/profile/edit/[id]/page.jsx",
                    lineNumber: 75,
                    columnNumber: 19
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(user)/profile/edit/[id]/page.jsx",
            lineNumber: 75,
            columnNumber: 10
        }, this);
        $[8] = changeHandler;
        $[9] = formData.firstName;
        $[10] = t5;
    } else {
        t5 = $[10];
    }
    let t6;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "text-sm text-gray-600 block mb-2",
            children: "Last Name"
        }, void 0, false, {
            fileName: "[project]/src/app/(user)/profile/edit/[id]/page.jsx",
            lineNumber: 84,
            columnNumber: 10
        }, this);
        $[11] = t6;
    } else {
        t6 = $[11];
    }
    let t7;
    if ($[12] !== changeHandler || $[13] !== formData.lastName) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t6,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "text",
                    name: "lastName",
                    value: formData.lastName,
                    onChange: changeHandler,
                    className: "w-full border border-gray-200 rounded-lg px-4 py-3 outline-none transition-all duration-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100 hover:border-cyan-300"
                }, void 0, false, {
                    fileName: "[project]/src/app/(user)/profile/edit/[id]/page.jsx",
                    lineNumber: 91,
                    columnNumber: 19
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(user)/profile/edit/[id]/page.jsx",
            lineNumber: 91,
            columnNumber: 10
        }, this);
        $[12] = changeHandler;
        $[13] = formData.lastName;
        $[14] = t7;
    } else {
        t7 = $[14];
    }
    let t8;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "text-sm text-gray-600 block mb-2",
            children: "Email Address"
        }, void 0, false, {
            fileName: "[project]/src/app/(user)/profile/edit/[id]/page.jsx",
            lineNumber: 100,
            columnNumber: 10
        }, this);
        $[15] = t8;
    } else {
        t8 = $[15];
    }
    let t9;
    if ($[16] !== changeHandler || $[17] !== formData.email) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "md:col-span-2",
            children: [
                t8,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "email",
                    name: "email",
                    value: formData.email,
                    onChange: changeHandler,
                    className: "w-full border border-gray-200 rounded-lg px-4 py-3 outline-none transition-all duration-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100 hover:border-cyan-300"
                }, void 0, false, {
                    fileName: "[project]/src/app/(user)/profile/edit/[id]/page.jsx",
                    lineNumber: 107,
                    columnNumber: 45
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(user)/profile/edit/[id]/page.jsx",
            lineNumber: 107,
            columnNumber: 10
        }, this);
        $[16] = changeHandler;
        $[17] = formData.email;
        $[18] = t9;
    } else {
        t9 = $[18];
    }
    let t10;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "text-sm text-gray-600 block mb-2",
            children: "Phone Number"
        }, void 0, false, {
            fileName: "[project]/src/app/(user)/profile/edit/[id]/page.jsx",
            lineNumber: 116,
            columnNumber: 11
        }, this);
        $[19] = t10;
    } else {
        t10 = $[19];
    }
    let t11;
    if ($[20] !== changeHandler || $[21] !== formData.phone) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "md:col-span-2",
            children: [
                t10,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "text",
                    name: "phone",
                    value: formData.phone,
                    onChange: changeHandler,
                    className: "w-full border border-gray-200 rounded-lg px-4 py-3 outline-none transition-all duration-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100 hover:border-cyan-300"
                }, void 0, false, {
                    fileName: "[project]/src/app/(user)/profile/edit/[id]/page.jsx",
                    lineNumber: 123,
                    columnNumber: 47
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(user)/profile/edit/[id]/page.jsx",
            lineNumber: 123,
            columnNumber: 11
        }, this);
        $[20] = changeHandler;
        $[21] = formData.phone;
        $[22] = t11;
    } else {
        t11 = $[22];
    }
    let t12;
    if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "text-sm text-gray-600 block mb-2",
            children: "Profile Image"
        }, void 0, false, {
            fileName: "[project]/src/app/(user)/profile/edit/[id]/page.jsx",
            lineNumber: 132,
            columnNumber: 11
        }, this);
        $[23] = t12;
    } else {
        t12 = $[23];
    }
    let t13;
    if ($[24] !== changeHandler) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "md:col-span-2",
            children: [
                t12,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "file",
                    name: "image",
                    accept: "image/*",
                    onChange: changeHandler,
                    className: "w-full border border-gray-200 rounded-lg px-4 py-3 outline-none transition-all duration-300 hover:border-cyan-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
                }, void 0, false, {
                    fileName: "[project]/src/app/(user)/profile/edit/[id]/page.jsx",
                    lineNumber: 139,
                    columnNumber: 47
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(user)/profile/edit/[id]/page.jsx",
            lineNumber: 139,
            columnNumber: 11
        }, this);
        $[24] = changeHandler;
        $[25] = t13;
    } else {
        t13 = $[25];
    }
    let t14;
    if ($[26] !== formData.image) {
        t14 = formData.image && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "md:col-span-2 flex justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: URL.createObjectURL(formData.image),
                alt: "preview",
                width: 140,
                height: 140,
                className: "rounded-xl object-cover border border-gray-200 shadow"
            }, void 0, false, {
                fileName: "[project]/src/app/(user)/profile/edit/[id]/page.jsx",
                lineNumber: 147,
                columnNumber: 80
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/(user)/profile/edit/[id]/page.jsx",
            lineNumber: 147,
            columnNumber: 29
        }, this);
        $[26] = formData.image;
        $[27] = t14;
    } else {
        t14 = $[27];
    }
    let t15;
    if ($[28] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "md:col-span-2",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "submit",
                className: "bg-cyan-500 text-white px-8 py-3 rounded-lg transition-all duration-300 hover:bg-cyan-600 hover:shadow-lg hover:scale-[1.02]",
                children: "Save Changes"
            }, void 0, false, {
                fileName: "[project]/src/app/(user)/profile/edit/[id]/page.jsx",
                lineNumber: 155,
                columnNumber: 42
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/(user)/profile/edit/[id]/page.jsx",
            lineNumber: 155,
            columnNumber: 11
        }, this);
        $[28] = t15;
    } else {
        t15 = $[28];
    }
    let t16;
    if ($[29] !== submitHandler || $[30] !== t11 || $[31] !== t13 || $[32] !== t14 || $[33] !== t5 || $[34] !== t7 || $[35] !== t9) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-4xl mx-auto p-6  min-h-screen",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "col-span-12 md:col-span-9 bg-white shadow rounded-2xl p-6 transition-all duration-300 hover:shadow-lg",
                children: [
                    t3,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: submitHandler,
                        className: "grid grid-cols-1 md:grid-cols-2 gap-5",
                        children: [
                            t5,
                            t7,
                            t9,
                            t11,
                            t13,
                            t14,
                            t15
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(user)/profile/edit/[id]/page.jsx",
                        lineNumber: 162,
                        columnNumber: 187
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(user)/profile/edit/[id]/page.jsx",
                lineNumber: 162,
                columnNumber: 64
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/(user)/profile/edit/[id]/page.jsx",
            lineNumber: 162,
            columnNumber: 11
        }, this);
        $[29] = submitHandler;
        $[30] = t11;
        $[31] = t13;
        $[32] = t14;
        $[33] = t5;
        $[34] = t7;
        $[35] = t9;
        $[36] = t16;
    } else {
        t16 = $[36];
    }
    return t16;
}
_s(EditProfilePage, "AVhEfndA4vGEUeeFDmvQFHKomrk=");
_c = EditProfilePage;
var _c;
__turbopack_context__.k.register(_c, "EditProfilePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_%28user%29_profile_edit_%5Bid%5D_page_jsx_88b28a86._.js.map