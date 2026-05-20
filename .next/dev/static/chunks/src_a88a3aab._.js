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
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(11);
    if ($[0] !== "3abd87d62a749c640a3348d045845bfe3e236236dbb9889a9670a8738da0ec1a") {
        for(let $i = 0; $i < 11; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "3abd87d62a749c640a3348d045845bfe3e236236dbb9889a9670a8738da0ec1a";
    }
    const { value, id, feild, type } = t0;
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    let t1;
    if ($[1] !== feild || $[2] !== id || $[3] !== router || $[4] !== type) {
        t1 = function activeHandler() {
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["client"].put(`${type}/update/${id}`, {
                feild
            }).then({
                "Status[activeHandler > (anonymous)()]": (response)=>{
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notify"])(feild + response.data.masg, response.data.success);
                    if (response.data.success) {
                        router.refresh();
                    }
                }
            }["Status[activeHandler > (anonymous)()]"]).catch(_StatusActiveHandlerAnonymous);
        };
        $[1] = feild;
        $[2] = id;
        $[3] = router;
        $[4] = type;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    const activeHandler = t1;
    let t2;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
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
        $[6] = t2;
    } else {
        t2 = $[6];
    }
    const lable = t2;
    const [Trulabel, Falselabel] = lable[feild];
    const t3 = `cursor-pointer px-2 py-1 text-xs text-white rounded-xl whitespace-nowrap ${value === true ? "bg-green-500" : "bg-red-500"}`;
    const t4 = value ? Trulabel : Falselabel;
    let t5;
    if ($[7] !== activeHandler || $[8] !== t3 || $[9] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
            className: "px-4 py-3",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                onClick: activeHandler,
                className: t3,
                children: t4
            }, void 0, false, {
                fileName: "[project]/src/app/components/admin components/Status.jsx",
                lineNumber: 67,
                columnNumber: 36
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/components/admin components/Status.jsx",
            lineNumber: 67,
            columnNumber: 10
        }, this);
        $[7] = activeHandler;
        $[8] = t3;
        $[9] = t4;
        $[10] = t5;
    } else {
        t5 = $[10];
    }
    return t5;
}
_s(Status, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = Status;
function _StatusActiveHandlerAnonymous(error) {
    console.log(error?.response, "user error");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notify"])(error?.response?.data?.masg || "Not updated", false);
    console.log(error);
}
var _c;
__turbopack_context__.k.register(_c, "Status");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$admin__components$2f$Status$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/admin components/Status.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/package.js [app-client] (ecmascript) <export default as Package>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/tag.js [app-client] (ecmascript) <export default as Tag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$badge$2d$indian$2d$rupee$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BadgeIndianRupee$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/badge-indian-rupee.js [app-client] (ecmascript) <export default as BadgeIndianRupee>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/palette.js [app-client] (ecmascript) <export default as Palette>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layers.js [app-client] (ecmascript) <export default as Layers3>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function ProductDetails() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(84);
    if ($[0] !== "8d6dbdc311494d3711691af6c5f7631be516fb5b472716608b681b8f481c1a45") {
        for(let $i = 0; $i < 84; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "8d6dbdc311494d3711691af6c5f7631be516fb5b472716608b681b8f481c1a45";
    }
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedImage, setSelectedImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
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
                        setData(formdata);
                        setSelectedImage(`http://localhost:5000/product/${formdata?.thumbnail}`);
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
    const t2 = data?.name;
    let t3;
    if ($[4] !== selectedImage || $[5] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-gray-100 rounded-3xl border border-gray-200 overflow-hidden flex items-center justify-center h-[450px] shadow-sm",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: selectedImage,
                alt: t2,
                className: "w-full h-full object-contain transition-all duration-300 hover:scale-105"
            }, void 0, false, {
                fileName: "[project]/src/app/(admin)/admin/product/view/[id]/page.jsx",
                lineNumber: 50,
                columnNumber: 143
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/(admin)/admin/product/view/[id]/page.jsx",
            lineNumber: 50,
            columnNumber: 10
        }, this);
        $[4] = selectedImage;
        $[5] = t2;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    let t4;
    if ($[7] !== data?.thumbnail || $[8] !== selectedImage) {
        t4 = data?.thumbnail && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            onClick: {
                "ProductDetails[<div>.onClick]": ()=>setSelectedImage(`http://localhost:5000/product/${data?.thumbnail}`)
            }["ProductDetails[<div>.onClick]"],
            className: `min-w-[90px] h-[90px] rounded-2xl border-2 cursor-pointer overflow-hidden bg-white transition-all ${selectedImage === `http://localhost:5000/product/${data?.thumbnail}` ? "border-black" : "border-gray-200"}`,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: `http://localhost:5000/product/${data?.thumbnail}`,
                alt: "thumbnail",
                className: "w-full h-full object-cover"
            }, void 0, false, {
                fileName: "[project]/src/app/(admin)/admin/product/view/[id]/page.jsx",
                lineNumber: 61,
                columnNumber: 262
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/(admin)/admin/product/view/[id]/page.jsx",
            lineNumber: 59,
            columnNumber: 29
        }, this);
        $[7] = data?.thumbnail;
        $[8] = selectedImage;
        $[9] = t4;
    } else {
        t4 = $[9];
    }
    let t5;
    if ($[10] !== data?.images || $[11] !== selectedImage) {
        t5 = data?.images?.map({
            "ProductDetails[(anonymous)()]": (img, index)=>{
                const imageUrl = `http://localhost:5000/product/${img}`;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    onClick: {
                        "ProductDetails[(anonymous)() > <div>.onClick]": ()=>setSelectedImage(imageUrl)
                    }["ProductDetails[(anonymous)() > <div>.onClick]"],
                    className: `min-w-[90px] h-[90px] rounded-2xl border-2 cursor-pointer overflow-hidden bg-white transition-all ${selectedImage === imageUrl ? "border-black" : "border-gray-200"}`,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: imageUrl,
                        alt: `product-${index}`,
                        className: "w-full h-full object-cover hover:scale-105 transition-all"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(admin)/admin/product/view/[id]/page.jsx",
                        lineNumber: 75,
                        columnNumber: 240
                    }, this)
                }, index, false, {
                    fileName: "[project]/src/app/(admin)/admin/product/view/[id]/page.jsx",
                    lineNumber: 73,
                    columnNumber: 16
                }, this);
            }
        }["ProductDetails[(anonymous)()]"]);
        $[10] = data?.images;
        $[11] = selectedImage;
        $[12] = t5;
    } else {
        t5 = $[12];
    }
    let t6;
    if ($[13] !== t4 || $[14] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex gap-4 mt-5 overflow-x-auto pb-2",
            children: [
                t4,
                t5
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(admin)/admin/product/view/[id]/page.jsx",
            lineNumber: 86,
            columnNumber: 10
        }, this);
        $[13] = t4;
        $[14] = t5;
        $[15] = t6;
    } else {
        t6 = $[15];
    }
    let t7;
    if ($[16] !== t3 || $[17] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t3,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(admin)/admin/product/view/[id]/page.jsx",
            lineNumber: 95,
            columnNumber: 10
        }, this);
        $[16] = t3;
        $[17] = t6;
        $[18] = t7;
    } else {
        t7 = $[18];
    }
    const t8 = data?.name;
    let t9;
    if ($[19] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "text-3xl md:text-4xl font-bold text-gray-900 leading-tight",
            children: t8
        }, void 0, false, {
            fileName: "[project]/src/app/(admin)/admin/product/view/[id]/page.jsx",
            lineNumber: 105,
            columnNumber: 10
        }, this);
        $[19] = t8;
        $[20] = t9;
    } else {
        t9 = $[20];
    }
    let t10;
    if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"], {
            size: 18,
            className: "text-gray-400"
        }, void 0, false, {
            fileName: "[project]/src/app/(admin)/admin/product/view/[id]/page.jsx",
            lineNumber: 113,
            columnNumber: 11
        }, this);
        $[21] = t10;
    } else {
        t10 = $[21];
    }
    const t11 = data?._id;
    let t12;
    if ($[22] !== t11) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 mt-3",
            children: [
                t10,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-gray-500",
                    children: [
                        "Product ID : ",
                        t11
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(admin)/admin/product/view/[id]/page.jsx",
                    lineNumber: 121,
                    columnNumber: 62
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(admin)/admin/product/view/[id]/page.jsx",
            lineNumber: 121,
            columnNumber: 11
        }, this);
        $[22] = t11;
        $[23] = t12;
    } else {
        t12 = $[23];
    }
    let t13;
    if ($[24] !== t12 || $[25] !== t9) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t9,
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(admin)/admin/product/view/[id]/page.jsx",
            lineNumber: 129,
            columnNumber: 11
        }, this);
        $[24] = t12;
        $[25] = t9;
        $[26] = t13;
    } else {
        t13 = $[26];
    }
    let t14;
    if ($[27] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$badge$2d$indian$2d$rupee$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BadgeIndianRupee$3e$__["BadgeIndianRupee"], {
            className: "text-green-600",
            size: 28
        }, void 0, false, {
            fileName: "[project]/src/app/(admin)/admin/product/view/[id]/page.jsx",
            lineNumber: 138,
            columnNumber: 11
        }, this);
        $[27] = t14;
    } else {
        t14 = $[27];
    }
    const t15 = data?.final_price;
    let t16;
    if ($[28] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2",
            children: [
                t14,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-3xl font-bold text-green-600",
                    children: [
                        "₹",
                        t15
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(admin)/admin/product/view/[id]/page.jsx",
                    lineNumber: 146,
                    columnNumber: 57
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(admin)/admin/product/view/[id]/page.jsx",
            lineNumber: 146,
            columnNumber: 11
        }, this);
        $[28] = t15;
        $[29] = t16;
    } else {
        t16 = $[29];
    }
    const t17 = data?.original_price;
    let t18;
    if ($[30] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "line-through text-gray-400 text-lg",
            children: [
                "₹",
                t17
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(admin)/admin/product/view/[id]/page.jsx",
            lineNumber: 155,
            columnNumber: 11
        }, this);
        $[30] = t17;
        $[31] = t18;
    } else {
        t18 = $[31];
    }
    const t19 = data?.discount_percentage;
    let t20;
    if ($[32] !== t19) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold",
            children: [
                t19,
                "% OFF"
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(admin)/admin/product/view/[id]/page.jsx",
            lineNumber: 164,
            columnNumber: 11
        }, this);
        $[32] = t19;
        $[33] = t20;
    } else {
        t20 = $[33];
    }
    let t21;
    if ($[34] !== t16 || $[35] !== t18 || $[36] !== t20) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-gradient-to-r from-gray-50 to-gray-100 p-5 rounded-2xl border",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-4 flex-wrap",
                children: [
                    t16,
                    t18,
                    t20
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(admin)/admin/product/view/[id]/page.jsx",
                lineNumber: 172,
                columnNumber: 93
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/(admin)/admin/product/view/[id]/page.jsx",
            lineNumber: 172,
            columnNumber: 11
        }, this);
        $[34] = t16;
        $[35] = t18;
        $[36] = t20;
        $[37] = t21;
    } else {
        t21 = $[37];
    }
    let t22;
    if ($[38] === Symbol.for("react.memo_cache_sentinel")) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 mb-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers3$3e$__["Layers3"], {
                    size: 18,
                    className: "text-indigo-500"
                }, void 0, false, {
                    fileName: "[project]/src/app/(admin)/admin/product/view/[id]/page.jsx",
                    lineNumber: 182,
                    columnNumber: 57
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "font-semibold text-gray-700",
                    children: "Category"
                }, void 0, false, {
                    fileName: "[project]/src/app/(admin)/admin/product/view/[id]/page.jsx",
                    lineNumber: 182,
                    columnNumber: 106
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(admin)/admin/product/view/[id]/page.jsx",
            lineNumber: 182,
            columnNumber: 11
        }, this);
        $[38] = t22;
    } else {
        t22 = $[38];
    }
    const t23 = data?.categoryId?.name;
    let t24;
    if ($[39] !== t23) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-indigo-50 rounded-2xl p-4 border border-indigo-100",
            children: [
                t22,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-indigo-700 font-medium",
                    children: t23
                }, void 0, false, {
                    fileName: "[project]/src/app/(admin)/admin/product/view/[id]/page.jsx",
                    lineNumber: 190,
                    columnNumber: 87
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(admin)/admin/product/view/[id]/page.jsx",
            lineNumber: 190,
            columnNumber: 11
        }, this);
        $[39] = t23;
        $[40] = t24;
    } else {
        t24 = $[40];
    }
    let t25;
    if ($[41] === Symbol.for("react.memo_cache_sentinel")) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 mb-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__["Tag"], {
                    size: 18,
                    className: "text-purple-500"
                }, void 0, false, {
                    fileName: "[project]/src/app/(admin)/admin/product/view/[id]/page.jsx",
                    lineNumber: 198,
                    columnNumber: 57
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "font-semibold text-gray-700",
                    children: "Brand"
                }, void 0, false, {
                    fileName: "[project]/src/app/(admin)/admin/product/view/[id]/page.jsx",
                    lineNumber: 198,
                    columnNumber: 102
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(admin)/admin/product/view/[id]/page.jsx",
            lineNumber: 198,
            columnNumber: 11
        }, this);
        $[41] = t25;
    } else {
        t25 = $[41];
    }
    const t26 = data?.brandId?.name;
    let t27;
    if ($[42] !== t26) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-purple-50 rounded-2xl p-4 border border-purple-100",
            children: [
                t25,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-purple-700 font-medium",
                    children: t26
                }, void 0, false, {
                    fileName: "[project]/src/app/(admin)/admin/product/view/[id]/page.jsx",
                    lineNumber: 206,
                    columnNumber: 87
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(admin)/admin/product/view/[id]/page.jsx",
            lineNumber: 206,
            columnNumber: 11
        }, this);
        $[42] = t26;
        $[43] = t27;
    } else {
        t27 = $[43];
    }
    let t28;
    if ($[44] !== t24 || $[45] !== t27) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
            children: [
                t24,
                t27
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(admin)/admin/product/view/[id]/page.jsx",
            lineNumber: 214,
            columnNumber: 11
        }, this);
        $[44] = t24;
        $[45] = t27;
        $[46] = t28;
    } else {
        t28 = $[46];
    }
    let t29;
    if ($[47] === Symbol.for("react.memo_cache_sentinel")) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 mb-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__["Palette"], {
                    size: 18,
                    className: "text-gray-600"
                }, void 0, false, {
                    fileName: "[project]/src/app/(admin)/admin/product/view/[id]/page.jsx",
                    lineNumber: 223,
                    columnNumber: 57
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "font-semibold text-gray-800",
                    children: "Available Colors"
                }, void 0, false, {
                    fileName: "[project]/src/app/(admin)/admin/product/view/[id]/page.jsx",
                    lineNumber: 223,
                    columnNumber: 104
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(admin)/admin/product/view/[id]/page.jsx",
            lineNumber: 223,
            columnNumber: 11
        }, this);
        $[47] = t29;
    } else {
        t29 = $[47];
    }
    let t30;
    if ($[48] !== data?.colorId) {
        t30 = data?.colorId?.map(_ProductDetailsAnonymous);
        $[48] = data?.colorId;
        $[49] = t30;
    } else {
        t30 = $[49];
    }
    let t31;
    if ($[50] !== t30) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-gray-50 border rounded-2xl p-5",
            children: [
                t29,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-3 flex-wrap",
                    children: t30
                }, void 0, false, {
                    fileName: "[project]/src/app/(admin)/admin/product/view/[id]/page.jsx",
                    lineNumber: 238,
                    columnNumber: 67
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(admin)/admin/product/view/[id]/page.jsx",
            lineNumber: 238,
            columnNumber: 11
        }, this);
        $[50] = t30;
        $[51] = t31;
    } else {
        t31 = $[51];
    }
    const t32 = data?.status;
    const t33 = data?._id;
    let t34;
    if ($[52] !== t32 || $[53] !== t33) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$admin__components$2f$Status$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            value: t32,
            id: t33,
            feild: "status",
            type: "product"
        }, void 0, false, {
            fileName: "[project]/src/app/(admin)/admin/product/view/[id]/page.jsx",
            lineNumber: 248,
            columnNumber: 11
        }, this);
        $[52] = t32;
        $[53] = t33;
        $[54] = t34;
    } else {
        t34 = $[54];
    }
    const t35 = data?.stock;
    const t36 = data?._id;
    let t37;
    if ($[55] !== t35 || $[56] !== t36) {
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$admin__components$2f$Status$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            value: t35,
            type: "product",
            id: t36,
            feild: "stock"
        }, void 0, false, {
            fileName: "[project]/src/app/(admin)/admin/product/view/[id]/page.jsx",
            lineNumber: 259,
            columnNumber: 11
        }, this);
        $[55] = t35;
        $[56] = t36;
        $[57] = t37;
    } else {
        t37 = $[57];
    }
    let t38;
    if ($[58] !== t34 || $[59] !== t37) {
        t38 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-wrap gap-3",
            children: [
                t34,
                t37
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(admin)/admin/product/view/[id]/page.jsx",
            lineNumber: 268,
            columnNumber: 11
        }, this);
        $[58] = t34;
        $[59] = t37;
        $[60] = t38;
    } else {
        t38 = $[60];
    }
    let t39;
    let t40;
    if ($[61] === Symbol.for("react.memo_cache_sentinel")) {
        t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-lg font-semibold text-gray-800 mb-3",
            children: "Short Description"
        }, void 0, false, {
            fileName: "[project]/src/app/(admin)/admin/product/view/[id]/page.jsx",
            lineNumber: 278,
            columnNumber: 11
        }, this);
        t40 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-14 h-1 bg-black rounded-full mb-4"
        }, void 0, false, {
            fileName: "[project]/src/app/(admin)/admin/product/view/[id]/page.jsx",
            lineNumber: 279,
            columnNumber: 11
        }, this);
        $[61] = t39;
        $[62] = t40;
    } else {
        t39 = $[61];
        t40 = $[62];
    }
    const t41 = data?.short_description;
    let t42;
    if ($[63] !== t41) {
        t42 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white border rounded-2xl p-6 shadow-sm",
            children: [
                t39,
                t40,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-600 leading-relaxed text-[15px]",
                    children: t41
                }, void 0, false, {
                    fileName: "[project]/src/app/(admin)/admin/product/view/[id]/page.jsx",
                    lineNumber: 289,
                    columnNumber: 80
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(admin)/admin/product/view/[id]/page.jsx",
            lineNumber: 289,
            columnNumber: 11
        }, this);
        $[63] = t41;
        $[64] = t42;
    } else {
        t42 = $[64];
    }
    let t43;
    let t44;
    if ($[65] === Symbol.for("react.memo_cache_sentinel")) {
        t43 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-lg font-semibold text-gray-800 mb-3",
            children: "Long Description"
        }, void 0, false, {
            fileName: "[project]/src/app/(admin)/admin/product/view/[id]/page.jsx",
            lineNumber: 298,
            columnNumber: 11
        }, this);
        t44 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-14 h-1 bg-black rounded-full mb-4"
        }, void 0, false, {
            fileName: "[project]/src/app/(admin)/admin/product/view/[id]/page.jsx",
            lineNumber: 299,
            columnNumber: 11
        }, this);
        $[65] = t43;
        $[66] = t44;
    } else {
        t43 = $[65];
        t44 = $[66];
    }
    const t45 = data?.long_description;
    let t46;
    if ($[67] !== t45) {
        t46 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white border rounded-2xl p-6 shadow-sm",
            children: [
                t43,
                t44,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-600 leading-8 text-[15px] whitespace-pre-line",
                    children: t45
                }, void 0, false, {
                    fileName: "[project]/src/app/(admin)/admin/product/view/[id]/page.jsx",
                    lineNumber: 309,
                    columnNumber: 80
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(admin)/admin/product/view/[id]/page.jsx",
            lineNumber: 309,
            columnNumber: 11
        }, this);
        $[67] = t45;
        $[68] = t46;
    } else {
        t46 = $[68];
    }
    let t47;
    if ($[69] === Symbol.for("react.memo_cache_sentinel")) {
        t47 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-gray-500 text-sm mb-1",
            children: "Slug"
        }, void 0, false, {
            fileName: "[project]/src/app/(admin)/admin/product/view/[id]/page.jsx",
            lineNumber: 317,
            columnNumber: 11
        }, this);
        $[69] = t47;
    } else {
        t47 = $[69];
    }
    const t48 = data?.slug;
    let t49;
    if ($[70] !== t48) {
        t49 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-gray-50 border rounded-2xl p-4",
            children: [
                t47,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-800 font-medium break-all",
                    children: t48
                }, void 0, false, {
                    fileName: "[project]/src/app/(admin)/admin/product/view/[id]/page.jsx",
                    lineNumber: 325,
                    columnNumber: 67
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(admin)/admin/product/view/[id]/page.jsx",
            lineNumber: 325,
            columnNumber: 11
        }, this);
        $[70] = t48;
        $[71] = t49;
    } else {
        t49 = $[71];
    }
    let t50;
    if ($[72] !== t13 || $[73] !== t21 || $[74] !== t28 || $[75] !== t31 || $[76] !== t38 || $[77] !== t42 || $[78] !== t46 || $[79] !== t49) {
        t50 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col gap-6",
            children: [
                t13,
                t21,
                t28,
                t31,
                t38,
                t42,
                t46,
                t49
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(admin)/admin/product/view/[id]/page.jsx",
            lineNumber: 333,
            columnNumber: 11
        }, this);
        $[72] = t13;
        $[73] = t21;
        $[74] = t28;
        $[75] = t31;
        $[76] = t38;
        $[77] = t42;
        $[78] = t46;
        $[79] = t49;
        $[80] = t50;
    } else {
        t50 = $[80];
    }
    let t51;
    if ($[81] !== t50 || $[82] !== t7) {
        t51 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-gray-100 p-4 md:p-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 lg:grid-cols-2 gap-10 p-6 md:p-10",
                    children: [
                        t7,
                        t50
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(admin)/admin/product/view/[id]/page.jsx",
                    lineNumber: 348,
                    columnNumber: 146
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/(admin)/admin/product/view/[id]/page.jsx",
                lineNumber: 348,
                columnNumber: 64
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/(admin)/admin/product/view/[id]/page.jsx",
            lineNumber: 348,
            columnNumber: 11
        }, this);
        $[81] = t50;
        $[82] = t7;
        $[83] = t51;
    } else {
        t51 = $[83];
    }
    return t51;
}
_s(ProductDetails, "NsrU/DYM8h2w/qs0XVTH/X3/+8g=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"]
    ];
});
_c = ProductDetails;
function _ProductDetailsAnonymous(color) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        title: color?.name,
        className: "w-10 h-10 rounded-full border-4 border-white shadow-md",
        style: {
            backgroundColor: color?.colorCode
        }
    }, color?._id, false, {
        fileName: "[project]/src/app/(admin)/admin/product/view/[id]/page.jsx",
        lineNumber: 358,
        columnNumber: 10
    }, this);
}
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

//# sourceMappingURL=src_a88a3aab._.js.map