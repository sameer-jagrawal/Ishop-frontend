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
    baseURL: ("TURBOPACK compile-time value", "https://ishop-backend-2mld.onrender.com/api/"),
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
"[project]/src/api_call/api.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getAllOrders",
    ()=>getAllOrders,
    "getBrand",
    ()=>getBrand,
    "getCategories",
    ()=>getCategories,
    "getColor",
    ()=>getColor,
    "getProduct",
    ()=>getProduct,
    "getSelectData",
    ()=>getSelectData,
    "getSingleOrder",
    ()=>getSingleOrder
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/helper.js [app-client] (ecmascript)");
;
console.log("env file console", ("TURBOPACK compile-time value", "https://ishop-backend-2mld.onrender.com/api/"));
async function getCategories(query = {}) {
    const filter = new URLSearchParams();
    if (query.id) filter.append("id", query.id);
    if (query.status) filter.append("status", query.status);
    if (query.is_home) filter.append("is_home", query.is_home);
    if (query.is_top) filter.append("is_top", query.is_top);
    if (query.limit) filter.append("limit", query.limit);
    try {
        const query = filter.toString();
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["client"].get(query ? `/category?${query}` : "category");
        // console.log(response.data)
        return response?.data;
    } catch (error) {
        console.log(error);
    }
}
async function getBrand(query = {}) {
    const filter = new URLSearchParams();
    if (query.id) filter.append("id", query.id);
    if (query.status) filter.append("status", query.status);
    if (query.is_home) filter.append("is_home", query.is_home);
    if (query.is_top) filter.append("is_top", query.is_top);
    if (query.limit) filter.append("limit", query.limit);
    try {
        const query = filter.toString();
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["client"].get(query ? `/brand?${query}` : "brand");
        return response?.data;
    } catch (error) {
        console.log(error);
    }
}
// get product
async function getProduct(query = {}) {
    const filter = new URLSearchParams();
    if (query.id) filter.append("id", query.id);
    if (query.status) filter.append("status", query.status);
    if (query.is_home) filter.append("is_home", query.is_home);
    if (query.is_top) filter.append("is_top", query.is_top);
    if (query.limit) filter.append("limit", query.limit);
    if (query.category_slug) filter.append("category_slug", query.category_slug);
    if (query.min_price) filter.append("min_price", query.min_price);
    if (query.max_price) filter.append("max_price", query.max_price);
    if (query.sort) filter.append("sort", query.sort);
    // brand_slug is an array — append each value separately
    if (query.brand_slug && query.brand_slug.length > 0) {
        query.brand_slug.forEach((slug)=>filter.append("brand_slug", slug));
    }
    // color_slug is an array — append each value separately
    if (query.color_slug && query.color_slug.length > 0) {
        query.color_slug.forEach((slug)=>filter.append("color_slug", slug));
    }
    try {
        const query = filter.toString();
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["client"].get(query ? `/product?${query}` : "product");
        return response?.data;
    } catch (error) {
        console.log(error);
    }
}
async function getColor(query = {}) {
    const filter = new URLSearchParams();
    if (query.status) filter.append("status", query.status);
    try {
        const query = filter.toString();
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["client"].get(query ? `/color?${query}` : "color");
        return response?.data;
    } catch (error) {
        console.log(error);
    }
}
async function getSelectData(type) {
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["client"].get(type);
        // console.log(response.data)
        return response.data;
    } catch (error) {
        console.log(error);
    }
}
async function getAllOrders() {
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["client"].get("order");
        return response?.data;
    } catch (error) {
        console.log(error);
    }
}
async function getSingleOrder(id) {
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["client"].get(`order/${id}`);
        return response?.data;
    } catch (error) {
        console.log(error);
    }
}
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/(admin)/admin/brand/addBrand/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>page
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$select$2f$dist$2f$react$2d$select$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-select/dist/react-select.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/helper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api_call$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/api_call/api.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function page() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [loader, setLoader] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const nameRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const slugRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const fileRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [category, setCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [slecategories, setCategoryId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [fileName, setFileName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [preview, setPreview] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    function categorySelect(cat) {
        // console.log(cat)
        const ids = cat.map((data)=>data.value);
        setCategoryId(ids);
    }
    function createSlug(text) {
        return text.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-");
    }
    function getSlug() {
        let value = nameRef.current.value;
        slugRef.current.value = createSlug(value);
    }
    const submitHandler = (e)=>{
        e.preventDefault();
        console.log("SUBMIT CALLED");
        const payload = new FormData();
        payload.append("image", e.target.image.files[0]);
        payload.append("name", nameRef.current.value);
        payload.append("slug", slugRef.current.value);
        payload.append("categoryId", JSON.stringify(slecategories));
        setLoader(true);
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["client"].post("/brand/create", payload).then((response)=>{
            // console.log(req)
            if (response.data.success) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notify"])(response.data.masg, response.data.success);
                nameRef.current.value = "";
                slugRef.current.value = "";
            }
            router.push("/admin/brand");
        }).catch((error)=>{
            const massage = error?.response?.data?.masg || "Internal server error";
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notify"])(massage, false);
            console.log(error);
        }).finally(()=>{
            setLoader(false);
        });
    // e.target.reset();
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "page.useEffect": ()=>{
            const fetchData = {
                "page.useEffect.fetchData": async ()=>{
                    try {
                        const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api_call$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCategories"])();
                        setCategory(data.data);
                    } catch (error) {
                        console.log(error);
                    }
                }
            }["page.useEffect.fetchData"];
            fetchData();
        }
    }["page.useEffect"], []);
    const fetchFilenName = (e)=>{
        const file = e.target.files[0];
        if (file) {
            setFileName(file.name);
            setPreview(URL.createObjectURL(file));
        }
    };
    // console.log(category.data);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-50 flex justify-center items-start p-4 md:p-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-2xl bg-white rounded-2xl border border-gray-200 p-5 md:p-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs font-medium uppercase tracking-widest text-gray-400 mb-1",
                            children: "Brands"
                        }, void 0, false, {
                            fileName: "[project]/src/app/(admin)/admin/brand/addBrand/page.jsx",
                            lineNumber: 80,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl font-semibold text-gray-800",
                            children: "Add Brand"
                        }, void 0, false, {
                            fileName: "[project]/src/app/(admin)/admin/brand/addBrand/page.jsx",
                            lineNumber: 83,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-gray-400 mt-1",
                            children: "Fill in the details to create a new brand."
                        }, void 0, false, {
                            fileName: "[project]/src/app/(admin)/admin/brand/addBrand/page.jsx",
                            lineNumber: 86,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(admin)/admin/brand/addBrand/page.jsx",
                    lineNumber: 79,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: submitHandler,
                    className: "space-y-5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 sm:grid-cols-2 gap-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-1.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-sm font-medium text-gray-600",
                                            children: "Brand Name"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(admin)/admin/brand/addBrand/page.jsx",
                                            lineNumber: 100,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            onChange: getSlug,
                                            type: "text",
                                            ref: nameRef,
                                            placeholder: "e.g. Nike",
                                            className: "w-full px-3 py-2.5 rounded-lg border border-gray-200 bg-white text-sm text-gray-800 placeholder-gray-400 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-100 hover:border-gray-300"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(admin)/admin/brand/addBrand/page.jsx",
                                            lineNumber: 103,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(admin)/admin/brand/addBrand/page.jsx",
                                    lineNumber: 99,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-1.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-sm font-medium text-gray-600",
                                            children: "Slug"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(admin)/admin/brand/addBrand/page.jsx",
                                            lineNumber: 108,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            ref: slugRef,
                                            placeholder: "e.g. nike",
                                            className: "w-full px-3 py-2.5 rounded-lg border border-gray-200 bg-gray-50 text-sm text-gray-500 placeholder-gray-400 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-100 hover:border-gray-300"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(admin)/admin/brand/addBrand/page.jsx",
                                            lineNumber: 111,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-gray-400",
                                            children: "Auto-generated from name"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(admin)/admin/brand/addBrand/page.jsx",
                                            lineNumber: 112,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(admin)/admin/brand/addBrand/page.jsx",
                                    lineNumber: 107,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(admin)/admin/brand/addBrand/page.jsx",
                            lineNumber: 97,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-1.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-sm font-medium text-gray-600",
                                    children: "Categories"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(admin)/admin/brand/addBrand/page.jsx",
                                    lineNumber: 118,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$select$2f$dist$2f$react$2d$select$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
                                    onChange: categorySelect,
                                    isMulti: true,
                                    closeMenuOnSelect: false,
                                    options: category.map((cat)=>({
                                            value: cat._id,
                                            label: cat.name
                                        })),
                                    styles: {
                                        control: (base, state)=>({
                                                ...base,
                                                borderRadius: "8px",
                                                borderColor: state.isFocused ? "#fb923c" : "#e5e7eb",
                                                boxShadow: state.isFocused ? "0 0 0 2px rgba(251,146,60,0.15)" : "none",
                                                backgroundColor: "#fff",
                                                fontSize: "14px",
                                                padding: "1px",
                                                "&:hover": {
                                                    borderColor: "#d1d5db"
                                                }
                                            }),
                                        multiValue: (base)=>({
                                                ...base,
                                                backgroundColor: "#fff7ed",
                                                borderRadius: "6px",
                                                border: "1px solid #fed7aa"
                                            }),
                                        multiValueLabel: (base)=>({
                                                ...base,
                                                color: "#ea580c",
                                                fontSize: "12px",
                                                fontWeight: "500"
                                            }),
                                        multiValueRemove: (base)=>({
                                                ...base,
                                                color: "#fb923c",
                                                borderRadius: "0 6px 6px 0",
                                                "&:hover": {
                                                    backgroundColor: "#fed7aa",
                                                    color: "#c2410c"
                                                }
                                            }),
                                        option: (base, state)=>({
                                                ...base,
                                                fontSize: "14px",
                                                backgroundColor: state.isSelected ? "#fff7ed" : state.isFocused ? "#f9fafb" : "#fff",
                                                color: state.isSelected ? "#ea580c" : "#374151",
                                                "&:active": {
                                                    backgroundColor: "#ffedd5"
                                                }
                                            }),
                                        menu: (base)=>({
                                                ...base,
                                                borderRadius: "10px",
                                                border: "1px solid #e5e7eb",
                                                boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
                                                overflow: "hidden"
                                            })
                                    },
                                    placeholder: "Select categories..."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(admin)/admin/brand/addBrand/page.jsx",
                                    lineNumber: 121,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(admin)/admin/brand/addBrand/page.jsx",
                            lineNumber: 117,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-1.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-sm font-medium text-gray-600",
                                    children: "Brand Image"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(admin)/admin/brand/addBrand/page.jsx",
                                    lineNumber: 179,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "group w-full h-32 flex flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-gray-300 bg-gray-50 cursor-pointer hover:border-orange-400 hover:bg-orange-50 transition-all duration-200",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            className: "w-5 h-5 text-gray-400 group-hover:text-orange-400 transition-colors duration-200",
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            stroke: "currentColor",
                                            strokeWidth: 1.5,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                d: "M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(admin)/admin/brand/addBrand/page.jsx",
                                                lineNumber: 185,
                                                columnNumber: 15
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(admin)/admin/brand/addBrand/page.jsx",
                                            lineNumber: 184,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm font-medium text-gray-500 group-hover:text-orange-500 transition-colors duration-200",
                                            children: fileName || "Click to upload image"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(admin)/admin/brand/addBrand/page.jsx",
                                            lineNumber: 187,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs text-gray-400",
                                            children: "PNG, JPG, WEBP up to 5MB"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(admin)/admin/brand/addBrand/page.jsx",
                                            lineNumber: 190,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "file",
                                            ref: fileRef,
                                            name: "image",
                                            className: "hidden",
                                            onChange: fetchFilenName
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(admin)/admin/brand/addBrand/page.jsx",
                                            lineNumber: 191,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(admin)/admin/brand/addBrand/page.jsx",
                                    lineNumber: 183,
                                    columnNumber: 11
                                }, this),
                                preview && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3 mt-2 px-3 py-2.5 rounded-lg  bg-gray-50",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: preview,
                                            width: 100,
                                            alt: "preview",
                                            className: "w-10 h-10 rounded-md object-cover"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(admin)/admin/brand/addBrand/page.jsx",
                                            lineNumber: 195,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm text-gray-600 truncate",
                                            children: fileName
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(admin)/admin/brand/addBrand/page.jsx",
                                            lineNumber: 196,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(admin)/admin/brand/addBrand/page.jsx",
                                    lineNumber: 194,
                                    columnNumber: 23
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(admin)/admin/brand/addBrand/page.jsx",
                            lineNumber: 178,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-end gap-3 pt-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: "px-5 py-2.5 rounded-lg border border-gray-200 bg-white text-sm text-gray-600 hover:bg-gray-50 hover:border-gray-300 active:scale-95 transition-all duration-150",
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(admin)/admin/brand/addBrand/page.jsx",
                                    lineNumber: 203,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    className: "px-5 py-2.5 rounded-lg bg-orange-500 text-sm font-medium text-white hover:bg-orange-600 active:scale-95 transition-all duration-150 shadow-sm",
                                    children: loader ? "Saving..." : "Save Brand"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(admin)/admin/brand/addBrand/page.jsx",
                                    lineNumber: 206,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(admin)/admin/brand/addBrand/page.jsx",
                            lineNumber: 202,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(admin)/admin/brand/addBrand/page.jsx",
                    lineNumber: 94,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(admin)/admin/brand/addBrand/page.jsx",
            lineNumber: 76,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/(admin)/admin/brand/addBrand/page.jsx",
        lineNumber: 75,
        columnNumber: 10
    }, this);
}
_s(page, "884ZqO/2ZD4PPZoZTSOdcpXdLf0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_2a5d5497._.js.map