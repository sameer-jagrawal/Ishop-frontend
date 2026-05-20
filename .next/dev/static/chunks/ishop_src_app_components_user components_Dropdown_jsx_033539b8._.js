(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/ishop/src/app/components/user components/Dropdown.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CurrencySelect
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$ishop$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ishop/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ishop$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ishop/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ishop$2f$node_modules$2f$react$2d$select$2f$dist$2f$react$2d$select$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/ishop/node_modules/react-select/dist/react-select.esm.js [app-client] (ecmascript) <locals>");
"use client";
;
;
;
const options = [
    {
        value: "USD",
        label: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ishop$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ishop$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: "/flags/americaflag.jpg",
                    alt: "US flag",
                    width: "20"
                }, void 0, false, {
                    fileName: "[project]/ishop/src/app/components/user components/Dropdown.jsx",
                    lineNumber: 8,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                "USA"
            ]
        }, void 0, true, {
            fileName: "[project]/ishop/src/app/components/user components/Dropdown.jsx",
            lineNumber: 7,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        value: "INR",
        label: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ishop$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ishop$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: "/flags/indiaflag.jpg",
                    width: "20",
                    alt: "India flag"
                }, void 0, false, {
                    fileName: "[project]/ishop/src/app/components/user components/Dropdown.jsx",
                    lineNumber: 14,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                "IND"
            ]
        }, void 0, true, {
            fileName: "[project]/ishop/src/app/components/user components/Dropdown.jsx",
            lineNumber: 13,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        value: "EUR",
        label: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ishop$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ishop$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: "/flags/EU.jpg",
                    width: "20",
                    alt: "EU flag"
                }, void 0, false, {
                    fileName: "[project]/ishop/src/app/components/user components/Dropdown.jsx",
                    lineNumber: 20,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                "EUR"
            ]
        }, void 0, true, {
            fileName: "[project]/ishop/src/app/components/user components/Dropdown.jsx",
            lineNumber: 19,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        value: "GBP",
        label: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ishop$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ishop$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: "/flags/ukflag.jpg",
                    width: "20",
                    alt: "UK flag"
                }, void 0, false, {
                    fileName: "[project]/ishop/src/app/components/user components/Dropdown.jsx",
                    lineNumber: 26,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                "UK"
            ]
        }, void 0, true, {
            fileName: "[project]/ishop/src/app/components/user components/Dropdown.jsx",
            lineNumber: 25,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0))
    }
];
const customStyles = {
    control: (base)=>({
            ...base,
            border: "none",
            boxShadow: "none",
            background: "transparent",
            minHeight: "auto"
        }),
    indicatorSeparator: ()=>({
            display: "none"
        })
};
function CurrencySelect() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ishop$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "6b38d8e93572c4e1bcb4a6fd75de93ffc70689b92043361e164fe7aa321685cc") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "6b38d8e93572c4e1bcb4a6fd75de93ffc70689b92043361e164fe7aa321685cc";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ishop$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ishop$2f$node_modules$2f$react$2d$select$2f$dist$2f$react$2d$select$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
            options: options,
            defaultValue: options[0],
            isSearchable: false,
            styles: customStyles
        }, void 0, false, {
            fileName: "[project]/ishop/src/app/components/user components/Dropdown.jsx",
            lineNumber: 52,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
}
_c = CurrencySelect;
var _c;
__turbopack_context__.k.register(_c, "CurrencySelect");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=ishop_src_app_components_user%20components_Dropdown_jsx_033539b8._.js.map