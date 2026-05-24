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
const API_BASE_URL = ("TURBOPACK compile-time value", "https://ishop-backend-2mld.onrender.com/api/") || "https://ishop-backend-2mld.onrender.com/api/";
const client = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: API_BASE_URL,
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
"[project]/src/app/components/admin components/DeleteBtn.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DeleteBtn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sweetalert2/dist/sweetalert2.all.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/helper.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
function DeleteBtn(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(8);
    if ($[0] !== "197ff7aeab38ce4571512c53cf949a301a011b84b25477017e01e213e2e3f9ef") {
        for(let $i = 0; $i < 8; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "197ff7aeab38ce4571512c53cf949a301a011b84b25477017e01e213e2e3f9ef";
    }
    const { type, id } = t0;
    console.log(type, "user delete address ");
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    let t1;
    if ($[1] !== id || $[2] !== router || $[3] !== type) {
        t1 = function deleteHandler() {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            }).then({
                "DeleteBtn[deleteHandler > (anonymous)()]": async (result)=>{
                    if (result.isConfirmed) {
                        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteRequest"])(type, id).then({
                            "DeleteBtn[deleteHandler > (anonymous)() > (anonymous)()]": (response)=>{
                                if (response.data.success) {
                                    router.refresh();
                                }
                            }
                        }["DeleteBtn[deleteHandler > (anonymous)() > (anonymous)()]"]).catch(_DeleteBtnDeleteHandlerAnonymousAnonymous);
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fire({
                            title: "Deleted!",
                            text: `${type} has been deleted.`,
                            icon: "success"
                        });
                    }
                }
            }["DeleteBtn[deleteHandler > (anonymous)()]"]);
        };
        $[1] = id;
        $[2] = router;
        $[3] = type;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    const deleteHandler = t1;
    let t2;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
            size: 18
        }, void 0, false, {
            fileName: "[project]/src/app/components/admin components/DeleteBtn.jsx",
            lineNumber: 64,
            columnNumber: 10
        }, this);
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    let t3;
    if ($[6] !== deleteHandler) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: deleteHandler,
            className: "p-2 rounded-lg hover:bg-red-50 text-red-600 hover:text-red-800 transition",
            children: t2
        }, void 0, false, {
            fileName: "[project]/src/app/components/admin components/DeleteBtn.jsx",
            lineNumber: 71,
            columnNumber: 10
        }, this);
        $[6] = deleteHandler;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    return t3;
}
_s(DeleteBtn, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = DeleteBtn;
function _DeleteBtnDeleteHandlerAnonymousAnonymous(error) {
    console.log(error);
}
var _c;
__turbopack_context__.k.register(_c, "DeleteBtn");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/components/admin components/Status.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Status
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/helper.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function Status(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(15);
    if ($[0] !== "7e0df9ef5765e9a980a63b42c2b0f322b51cc72575c632e7a6089fe90bc1de75") {
        for(let $i = 0; $i < 15; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "7e0df9ef5765e9a980a63b42c2b0f322b51cc72575c632e7a6089fe90bc1de75";
    }
    const { value, id, feild, type, onChange } = t0;
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [isUpdating, setIsUpdating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [localValue, setLocalValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const isActive = localValue ?? Boolean(value);
    let t1;
    if ($[1] !== feild || $[2] !== id || $[3] !== isActive || $[4] !== isUpdating || $[5] !== onChange || $[6] !== router || $[7] !== type) {
        t1 = function activeHandler() {
            if (isUpdating || !id || !feild) {
                return;
            }
            const previousValue = isActive;
            const nextValue = !previousValue;
            setIsUpdating(true);
            setLocalValue(nextValue);
            onChange?.(feild, nextValue);
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["client"].put(`${type}/update/${id}`, {
                feild,
                value: nextValue
            }).then({
                "Status[activeHandler > (anonymous)()]": (response)=>{
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notify"])(feild + response.data.masg, response.data.success);
                    if (response.data.success) {
                        const updatedValue = response.data?.data?.[feild];
                        if (typeof updatedValue === "boolean") {
                            setLocalValue(updatedValue);
                            onChange?.(feild, updatedValue);
                        }
                        router.refresh();
                    } else {
                        setLocalValue(previousValue);
                        onChange?.(feild, previousValue);
                    }
                }
            }["Status[activeHandler > (anonymous)()]"]).catch({
                "Status[activeHandler > (anonymous)()]": (error)=>{
                    setLocalValue(previousValue);
                    onChange?.(feild, previousValue);
                    console.log(error?.response, "user error");
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notify"])(error?.response?.data?.masg || "Not updated", false);
                    console.log(error);
                }
            }["Status[activeHandler > (anonymous)()]"]).finally({
                "Status[activeHandler > (anonymous)()]": ()=>{
                    setIsUpdating(false);
                }
            }["Status[activeHandler > (anonymous)()]"]);
        };
        $[1] = feild;
        $[2] = id;
        $[3] = isActive;
        $[4] = isUpdating;
        $[5] = onChange;
        $[6] = router;
        $[7] = type;
        $[8] = t1;
    } else {
        t1 = $[8];
    }
    const activeHandler = t1;
    let t2;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = {
            status: [
                "Active",
                "Inactive"
            ],
            is_home: [
                "Is Home",
                "Not Home"
            ],
            is_top: [
                "Is Top",
                "Not Top"
            ],
            is_popular: [
                "Is Popular",
                "Not Popular"
            ],
            is_hot: [
                "Is Hot",
                "Not Hot"
            ],
            is_best: [
                "Is Best",
                "Not Best"
            ],
            stock: [
                "In stock",
                "Not in stock"
            ],
            is_return: [
                "Can return ",
                "Can't return"
            ]
        };
        $[9] = t2;
    } else {
        t2 = $[9];
    }
    const lable = t2;
    const [Trulabel, Falselabel] = lable[feild];
    const t3 = `cursor-pointer px-4 py-1.5 text-xs font-semibold rounded-full whitespace-nowrap transition-all duration-300 shadow-sm border ${isUpdating ? "opacity-70" : ""} ${isActive === true ? "bg-green-50 text-green-700 border-green-200 hover:bg-green-100" : "bg-red-50 text-red-700 border-red-200 hover:bg-red-100"}`;
    const t4 = isActive ? Trulabel : Falselabel;
    let t5;
    if ($[10] !== activeHandler || $[11] !== isUpdating || $[12] !== t3 || $[13] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            onClick: activeHandler,
            "aria-disabled": isUpdating,
            className: t3,
            children: t4
        }, void 0, false, {
            fileName: "[project]/src/app/components/admin components/Status.jsx",
            lineNumber: 103,
            columnNumber: 10
        }, this);
        $[10] = activeHandler;
        $[11] = isUpdating;
        $[12] = t3;
        $[13] = t4;
        $[14] = t5;
    } else {
        t5 = $[14];
    }
    return t5;
}
_s(Status, "mXDhATRZzGiXOpaPFkcDD1TFY38=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = Status;
var _c;
__turbopack_context__.k.register(_c, "Status");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/components/admin components/StatusDropdown.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CATEGORY_STATUS_FIELDS",
    ()=>CATEGORY_STATUS_FIELDS,
    "PRODUCT_STATUS_FIELDS",
    ()=>PRODUCT_STATUS_FIELDS,
    "default",
    ()=>StatusDropdown
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$menu$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@headlessui/react/dist/components/menu/menu.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$admin__components$2f$Status$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/admin components/Status.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const PRODUCT_STATUS_FIELDS = [
    {
        field: "status",
        label: "Visibility"
    },
    {
        field: "stock",
        label: "Stock"
    },
    {
        field: "is_home",
        label: "Home"
    },
    {
        field: "is_top",
        label: "Top"
    },
    {
        field: "is_popular",
        label: "Popular"
    },
    {
        field: "is_hot",
        label: "Hot"
    },
    {
        field: "is_best",
        label: "Best"
    },
    {
        field: "is_return",
        label: "Returns"
    }
];
const CATEGORY_STATUS_FIELDS = [
    {
        field: "status",
        label: "Visibility"
    },
    {
        field: "is_home",
        label: "Home"
    },
    {
        field: "is_top",
        label: "Top"
    },
    {
        field: "is_popular",
        label: "Popular"
    }
];
const getStatusValues = (item, fields)=>fields.reduce((values, { field })=>{
        values[field] = Boolean(item?.[field]);
        return values;
    }, {});
function StatusDropdown(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(30);
    if ($[0] !== "f3f3badd9fd1ac2f32331938db10d7c57cd426f57b6c55e2d6857f6a75f70598") {
        for(let $i = 0; $i < 30; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "f3f3badd9fd1ac2f32331938db10d7c57cd426f57b6c55e2d6857f6a75f70598";
    }
    const { item, type, fields } = t0;
    let t1;
    if ($[1] !== fields || $[2] !== item) {
        t1 = ({
            "StatusDropdown[useState()]": ()=>getStatusValues(item, fields)
        })["StatusDropdown[useState()]"];
        $[1] = fields;
        $[2] = item;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    const [statusValues, setStatusValues] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t1);
    let t2;
    if ($[4] !== fields || $[5] !== statusValues) {
        let t3;
        if ($[7] !== statusValues) {
            t3 = ({
                "StatusDropdown[fields.filter()]": (t4)=>{
                    const { field } = t4;
                    return statusValues[field];
                }
            })["StatusDropdown[fields.filter()]"];
            $[7] = statusValues;
            $[8] = t3;
        } else {
            t3 = $[8];
        }
        t2 = fields.filter(t3);
        $[4] = fields;
        $[5] = statusValues;
        $[6] = t2;
    } else {
        t2 = $[6];
    }
    const activeCount = t2.length;
    let t3;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = ({
            "StatusDropdown[handleStatusChange]": (field_0, nextValue)=>{
                setStatusValues({
                    "StatusDropdown[handleStatusChange > setStatusValues()]": (current)=>({
                            ...current,
                            [field_0]: nextValue
                        })
                }["StatusDropdown[handleStatusChange > setStatusValues()]"]);
            }
        })["StatusDropdown[handleStatusChange]"];
        $[9] = t3;
    } else {
        t3 = $[9];
    }
    const handleStatusChange = t3;
    let t4;
    if ($[10] !== activeCount || $[11] !== fields.length) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "rounded-full bg-orange-100 px-1.5 py-0.5 text-[10px] font-bold text-orange-700",
            children: [
                activeCount,
                "/",
                fields.length
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/admin components/StatusDropdown.jsx",
            lineNumber: 121,
            columnNumber: 10
        }, this);
        $[10] = activeCount;
        $[11] = fields.length;
        $[12] = t4;
    } else {
        t4 = $[12];
    }
    let t5;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
            size: 14,
            className: "text-gray-500"
        }, void 0, false, {
            fileName: "[project]/src/app/components/admin components/StatusDropdown.jsx",
            lineNumber: 130,
            columnNumber: 10
        }, this);
        $[13] = t5;
    } else {
        t5 = $[13];
    }
    let t6;
    if ($[14] !== t4) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$menu$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MenuButton"], {
            className: "inline-flex items-center gap-1.5 rounded-xl border border-gray-200 bg-white px-3 py-2 text-xs font-semibold text-gray-700 shadow-sm transition hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400",
            children: [
                "Status",
                t4,
                t5
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/admin components/StatusDropdown.jsx",
            lineNumber: 137,
            columnNumber: 10
        }, this);
        $[14] = t4;
        $[15] = t6;
    } else {
        t6 = $[15];
    }
    let t7;
    if ($[16] !== fields || $[17] !== item?._id || $[18] !== statusValues || $[19] !== type) {
        let t8;
        if ($[21] !== item?._id || $[22] !== statusValues || $[23] !== type) {
            t8 = ({
                "StatusDropdown[fields.map()]": (t9)=>{
                    const { field: field_1, label } = t9;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between gap-3 rounded-lg px-3 py-2.5 hover:bg-gray-50",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs font-semibold text-gray-600",
                                children: label
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/admin components/StatusDropdown.jsx",
                                lineNumber: 153,
                                columnNumber: 129
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$admin__components$2f$Status$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                value: statusValues[field_1],
                                type: type,
                                id: item?._id,
                                feild: field_1,
                                onChange: handleStatusChange
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/admin components/StatusDropdown.jsx",
                                lineNumber: 153,
                                columnNumber: 197
                            }, this)
                        ]
                    }, field_1, true, {
                        fileName: "[project]/src/app/components/admin components/StatusDropdown.jsx",
                        lineNumber: 153,
                        columnNumber: 18
                    }, this);
                }
            })["StatusDropdown[fields.map()]"];
            $[21] = item?._id;
            $[22] = statusValues;
            $[23] = type;
            $[24] = t8;
        } else {
            t8 = $[24];
        }
        t7 = fields.map(t8);
        $[16] = fields;
        $[17] = item?._id;
        $[18] = statusValues;
        $[19] = type;
        $[20] = t7;
    } else {
        t7 = $[20];
    }
    let t8;
    if ($[25] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$menu$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MenuItems"], {
            anchor: "bottom start",
            className: "z-20 mt-2 max-h-80 w-72 overflow-y-auto rounded-xl border border-gray-100 bg-white p-2 shadow-lg focus:outline-none",
            children: t7
        }, void 0, false, {
            fileName: "[project]/src/app/components/admin components/StatusDropdown.jsx",
            lineNumber: 174,
            columnNumber: 10
        }, this);
        $[25] = t7;
        $[26] = t8;
    } else {
        t8 = $[26];
    }
    let t9;
    if ($[27] !== t6 || $[28] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$menu$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Menu"], {
            as: "div",
            className: "relative inline-block text-left",
            children: [
                t6,
                t8
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/admin components/StatusDropdown.jsx",
            lineNumber: 182,
            columnNumber: 10
        }, this);
        $[27] = t6;
        $[28] = t8;
        $[29] = t9;
    } else {
        t9 = $[29];
    }
    return t9;
}
_s(StatusDropdown, "zl1dH5u6QdvCSag1xUnytN48Nro=");
_c = StatusDropdown;
var _c;
__turbopack_context__.k.register(_c, "StatusDropdown");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/components/admin components/ProductStatusDropdown.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProductStatusDropdown
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$admin__components$2f$StatusDropdown$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/admin components/StatusDropdown.jsx [app-client] (ecmascript)");
"use client";
;
;
;
function ProductStatusDropdown(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(3);
    if ($[0] !== "422e9ad0ea2533ac1b8912697b55f5768e01475baa272e50dc88d14620e2ae97") {
        for(let $i = 0; $i < 3; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "422e9ad0ea2533ac1b8912697b55f5768e01475baa272e50dc88d14620e2ae97";
    }
    const { product } = t0;
    let t1;
    if ($[1] !== product) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$admin__components$2f$StatusDropdown$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            item: product,
            type: "product",
            fields: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$admin__components$2f$StatusDropdown$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PRODUCT_STATUS_FIELDS"]
        }, void 0, false, {
            fileName: "[project]/src/app/components/admin components/ProductStatusDropdown.jsx",
            lineNumber: 18,
            columnNumber: 10
        }, this);
        $[1] = product;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    return t1;
}
_c = ProductStatusDropdown;
var _c;
__turbopack_context__.k.register(_c, "ProductStatusDropdown");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_085ed777._.js.map