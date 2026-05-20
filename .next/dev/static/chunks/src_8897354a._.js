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
"[project]/src/app/(admin)/admin/product/add/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Page
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$select$2f$dist$2f$react$2d$select$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-select/dist/react-select.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/helper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api_call$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/api_call/api.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$primereact$2f$editor$2f$editor$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/primereact/editor/editor.esm.js [app-client] (ecmascript)");
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
function Page() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(120);
    if ($[0] !== "c741f750e50bd3718a83767b2329c676c3c097c16d69db265ca9d0747d7b3692") {
        for(let $i = 0; $i < 120; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "c741f750e50bd3718a83767b2329c676c3c097c16d69db265ca9d0747d7b3692";
    }
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const nameRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const slugRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const originalPriceRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const discount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const short_discription = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [loader, setLoader] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [categoryList, setCategoryList] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = [];
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const [brandList, setBrandList] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t1);
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = [];
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    const [colorList, setColorList] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t2);
    const [selectedCategory, setSelectedCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedBrand, setSelectedBrand] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = [];
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    const [selectedColors, setSelectedColors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t3);
    const [fileName, setFileName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [preview, setPreview] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = [];
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    const [images, setImages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t4);
    const [originalPrice, setOriginalPrice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [discountPercent, setDiscountPercent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [finalPrice, setFinalPrice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [text, setText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        const createSlug = function createSlug(text_0) {
            return text_0.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-");
        };
        t5 = function getSlug() {
            const value = nameRef.current.value;
            slugRef.current.value = createSlug(value);
        };
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    const getSlug = t5;
    let t6;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = function getOriginalPrice() {
            setOriginalPrice(originalPriceRef?.current?.value || "");
        };
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    const getOriginalPrice = t6;
    let t7;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = function getDiscount() {
            setDiscountPercent(discount?.current?.value || "");
        };
        $[8] = t7;
    } else {
        t7 = $[8];
    }
    const getDiscount = t7;
    let t8;
    let t9;
    if ($[9] !== discountPercent || $[10] !== originalPrice) {
        t8 = ({
            "Page[useEffect()]": ()=>{
                if (originalPrice && discountPercent) {
                    const price = parseFloat(originalPrice);
                    const disc = parseFloat(discountPercent);
                    if (disc < 0 || disc > 100) {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notify"])("Discount percent must be between 0 and 100", false);
                        return;
                    }
                    const final = price - disc / 100 * price;
                    setFinalPrice(final.toFixed(2));
                } else {
                    if (originalPrice) {
                        setFinalPrice(originalPrice);
                    } else {
                        setFinalPrice("");
                    }
                }
            }
        })["Page[useEffect()]"];
        t9 = [
            originalPrice,
            discountPercent
        ];
        $[9] = discountPercent;
        $[10] = originalPrice;
        $[11] = t8;
        $[12] = t9;
    } else {
        t8 = $[11];
        t9 = $[12];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t8, t9);
    let t10;
    let t11;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = ({
            "Page[useEffect()]": ()=>{
                const fetchData = {
                    "Page[useEffect() > fetchData]": async ()=>{
                        ;
                        try {
                            const categoryRes = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api_call$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSelectData"])("category");
                            setCategoryList(categoryRes.data);
                            const brandRes = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api_call$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSelectData"])("brand");
                            setBrandList(brandRes.data);
                            const colorRes = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api_call$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSelectData"])("color");
                            setColorList(colorRes.data);
                        } catch (t12) {
                            const error = t12;
                            console.log(error);
                        }
                    }
                }["Page[useEffect() > fetchData]"];
                fetchData();
            }
        })["Page[useEffect()]"];
        t11 = [];
        $[13] = t10;
        $[14] = t11;
    } else {
        t10 = $[13];
        t11 = $[14];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t10, t11);
    let t12;
    if ($[15] !== discountPercent || $[16] !== finalPrice || $[17] !== images || $[18] !== originalPrice || $[19] !== router || $[20] !== selectedBrand || $[21] !== selectedCategory || $[22] !== selectedColors || $[23] !== text) {
        t12 = ({
            "Page[submitHandler]": (e)=>{
                e.preventDefault();
                if (!selectedCategory) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notify"])("Please select a category", false);
                    return;
                }
                if (!selectedBrand) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notify"])("Please select a brand", false);
                    return;
                }
                const payload = new FormData();
                if (e.target.thumbnail.files[0]) {
                    payload.append("thumbnail", e.target.thumbnail.files[0]);
                }
                for (const file of images){
                    payload.append("images", file);
                }
                payload.append("name", nameRef?.current?.value || "");
                payload.append("slug", slugRef?.current?.value || "");
                payload.append("short_description", short_discription?.current?.value || "");
                payload.append("long_description", text || "");
                payload.append("categoryId", selectedCategory);
                payload.append("brandId", selectedBrand);
                payload.append("colorId", JSON.stringify(selectedColors));
                payload.append("original_price", originalPrice);
                payload.append("discount_percentage", discountPercent);
                payload.append("final_price", finalPrice);
                setLoader(true);
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["client"].post("/product/create", payload).then({
                    "Page[submitHandler > (anonymous)()]": (response)=>{
                        if (response.data.success) {
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notify"])(response.data.masg || "Product created", true);
                            router.push("/admin/product");
                        } else {
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notify"])(response.data.masg || "Something went wrong", false);
                        }
                    }
                }["Page[submitHandler > (anonymous)()]"]).catch(_PageSubmitHandlerAnonymous).finally({
                    "Page[submitHandler > (anonymous)()]": ()=>{
                        setLoader(false);
                    }
                }["Page[submitHandler > (anonymous)()]"]);
            }
        })["Page[submitHandler]"];
        $[15] = discountPercent;
        $[16] = finalPrice;
        $[17] = images;
        $[18] = originalPrice;
        $[19] = router;
        $[20] = selectedBrand;
        $[21] = selectedCategory;
        $[22] = selectedColors;
        $[23] = text;
        $[24] = t12;
    } else {
        t12 = $[24];
    }
    const submitHandler = t12;
    let t13;
    if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = ({
            "Page[handleThumbnailChange]": (e_0)=>{
                const file_0 = e_0.target.files[0];
                if (file_0) {
                    setFileName(file_0.name);
                    setPreview(URL.createObjectURL(file_0));
                }
            }
        })["Page[handleThumbnailChange]"];
        $[25] = t13;
    } else {
        t13 = $[25];
    }
    const handleThumbnailChange = t13;
    let t14;
    if ($[26] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xs font-medium uppercase tracking-widest text-gray-400 mb-1",
                    children: "Products"
                }, void 0, false, {
                    fileName: "[project]/src/app/(admin)/admin/product/add/page.jsx",
                    lineNumber: 253,
                    columnNumber: 33
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-2xl font-semibold text-gray-800",
                    children: "Add Product"
                }, void 0, false, {
                    fileName: "[project]/src/app/(admin)/admin/product/add/page.jsx",
                    lineNumber: 253,
                    columnNumber: 125
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-gray-400 mt-1",
                    children: "Fill in the details to create a new product."
                }, void 0, false, {
                    fileName: "[project]/src/app/(admin)/admin/product/add/page.jsx",
                    lineNumber: 253,
                    columnNumber: 194
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(admin)/admin/product/add/page.jsx",
            lineNumber: 253,
            columnNumber: 11
        }, this);
        $[26] = t14;
    } else {
        t14 = $[26];
    }
    let t15;
    if ($[27] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 space-y-1.5",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                    className: "text-sm font-medium text-gray-600",
                    children: "Product Name"
                }, void 0, false, {
                    fileName: "[project]/src/app/(admin)/admin/product/add/page.jsx",
                    lineNumber: 260,
                    columnNumber: 47
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    onChange: getSlug,
                    type: "text",
                    ref: nameRef,
                    placeholder: "e.g. Nike Air Max",
                    className: "w-full px-3 py-2.5 rounded-lg border border-gray-200 bg-white text-sm text-gray-800 placeholder-gray-400 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-100 hover:border-gray-300"
                }, void 0, false, {
                    fileName: "[project]/src/app/(admin)/admin/product/add/page.jsx",
                    lineNumber: 260,
                    columnNumber: 120
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(admin)/admin/product/add/page.jsx",
            lineNumber: 260,
            columnNumber: 11
        }, this);
        $[27] = t15;
    } else {
        t15 = $[27];
    }
    let t16;
    if ($[28] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col sm:flex-row gap-5 sm:gap-10",
            children: [
                t15,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 space-y-1.5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "text-sm font-medium text-gray-600",
                            children: "Slug"
                        }, void 0, false, {
                            fileName: "[project]/src/app/(admin)/admin/product/add/page.jsx",
                            lineNumber: 267,
                            columnNumber: 111
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            ref: slugRef,
                            placeholder: "e.g. nike-air-max",
                            className: "w-full px-3 py-2.5 rounded-lg border border-gray-200 bg-gray-50 text-sm text-gray-500 placeholder-gray-400 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-100",
                            readOnly: true
                        }, void 0, false, {
                            fileName: "[project]/src/app/(admin)/admin/product/add/page.jsx",
                            lineNumber: 267,
                            columnNumber: 176
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-gray-400",
                            children: "Auto-generated from name"
                        }, void 0, false, {
                            fileName: "[project]/src/app/(admin)/admin/product/add/page.jsx",
                            lineNumber: 267,
                            columnNumber: 461
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(admin)/admin/product/add/page.jsx",
                    lineNumber: 267,
                    columnNumber: 75
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(admin)/admin/product/add/page.jsx",
            lineNumber: 267,
            columnNumber: 11
        }, this);
        $[28] = t16;
    } else {
        t16 = $[28];
    }
    let t17;
    if ($[29] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "text-sm font-medium text-gray-600",
            children: [
                "Category ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-red-500",
                    children: "*"
                }, void 0, false, {
                    fileName: "[project]/src/app/(admin)/admin/product/add/page.jsx",
                    lineNumber: 274,
                    columnNumber: 73
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(admin)/admin/product/add/page.jsx",
            lineNumber: 274,
            columnNumber: 11
        }, this);
        $[29] = t17;
    } else {
        t17 = $[29];
    }
    let t18;
    if ($[30] !== categoryList) {
        t18 = categoryList.map(_PageCategoryListMap);
        $[30] = categoryList;
        $[31] = t18;
    } else {
        t18 = $[31];
    }
    let t19;
    if ($[32] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = ({
            "Page[<Select>.onChange]": (option)=>setSelectedCategory(option?.value || null)
        })["Page[<Select>.onChange]"];
        $[32] = t19;
    } else {
        t19 = $[32];
    }
    let t20;
    if ($[33] !== categoryList || $[34] !== selectedCategory) {
        t20 = selectedCategory ? {
            value: selectedCategory,
            label: categoryList.find({
                "Page[categoryList.find()]": (c)=>c._id === selectedCategory
            }["Page[categoryList.find()]"])?.name
        } : null;
        $[33] = categoryList;
        $[34] = selectedCategory;
        $[35] = t20;
    } else {
        t20 = $[35];
    }
    let t21;
    if ($[36] !== t18 || $[37] !== t20) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 space-y-1.5",
            children: [
                t17,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$select$2f$dist$2f$react$2d$select$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
                    options: t18,
                    onChange: t19,
                    value: t20,
                    isClearable: true,
                    placeholder: "Select a category...",
                    styles: selectStyles
                }, void 0, false, {
                    fileName: "[project]/src/app/(admin)/admin/product/add/page.jsx",
                    lineNumber: 312,
                    columnNumber: 52
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(admin)/admin/product/add/page.jsx",
            lineNumber: 312,
            columnNumber: 11
        }, this);
        $[36] = t18;
        $[37] = t20;
        $[38] = t21;
    } else {
        t21 = $[38];
    }
    let t22;
    if ($[39] === Symbol.for("react.memo_cache_sentinel")) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "text-sm font-medium text-gray-600",
            children: [
                "Brand ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-red-500",
                    children: "*"
                }, void 0, false, {
                    fileName: "[project]/src/app/(admin)/admin/product/add/page.jsx",
                    lineNumber: 321,
                    columnNumber: 70
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(admin)/admin/product/add/page.jsx",
            lineNumber: 321,
            columnNumber: 11
        }, this);
        $[39] = t22;
    } else {
        t22 = $[39];
    }
    let t23;
    if ($[40] !== brandList) {
        t23 = brandList.map(_PageBrandListMap);
        $[40] = brandList;
        $[41] = t23;
    } else {
        t23 = $[41];
    }
    let t24;
    if ($[42] === Symbol.for("react.memo_cache_sentinel")) {
        t24 = ({
            "Page[<Select>.onChange]": (option_0)=>setSelectedBrand(option_0?.value || null)
        })["Page[<Select>.onChange]"];
        $[42] = t24;
    } else {
        t24 = $[42];
    }
    let t25;
    if ($[43] !== brandList || $[44] !== selectedBrand) {
        t25 = selectedBrand ? {
            value: selectedBrand,
            label: brandList.find({
                "Page[brandList.find()]": (b_0)=>b_0._id === selectedBrand
            }["Page[brandList.find()]"])?.name
        } : null;
        $[43] = brandList;
        $[44] = selectedBrand;
        $[45] = t25;
    } else {
        t25 = $[45];
    }
    let t26;
    if ($[46] !== t23 || $[47] !== t25) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 space-y-1.5",
            children: [
                t22,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$select$2f$dist$2f$react$2d$select$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
                    options: t23,
                    onChange: t24,
                    value: t25,
                    isClearable: true,
                    placeholder: "Select a brand...",
                    styles: selectStyles
                }, void 0, false, {
                    fileName: "[project]/src/app/(admin)/admin/product/add/page.jsx",
                    lineNumber: 359,
                    columnNumber: 52
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(admin)/admin/product/add/page.jsx",
            lineNumber: 359,
            columnNumber: 11
        }, this);
        $[46] = t23;
        $[47] = t25;
        $[48] = t26;
    } else {
        t26 = $[48];
    }
    let t27;
    if ($[49] === Symbol.for("react.memo_cache_sentinel")) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "text-sm font-medium text-gray-600",
            children: "Colors"
        }, void 0, false, {
            fileName: "[project]/src/app/(admin)/admin/product/add/page.jsx",
            lineNumber: 368,
            columnNumber: 11
        }, this);
        $[49] = t27;
    } else {
        t27 = $[49];
    }
    let t28;
    if ($[50] !== colorList) {
        t28 = colorList.map(_PageColorListMap);
        $[50] = colorList;
        $[51] = t28;
    } else {
        t28 = $[51];
    }
    let t29;
    if ($[52] === Symbol.for("react.memo_cache_sentinel")) {
        t29 = ({
            "Page[<Select>.onChange]": (options)=>{
                const ids = options.map(_PageSelectOnChangeOptionsMap);
                setSelectedColors(ids);
            }
        })["Page[<Select>.onChange]"];
        $[52] = t29;
    } else {
        t29 = $[52];
    }
    let t30;
    if ($[53] !== colorList || $[54] !== selectedColors) {
        let t31;
        if ($[56] !== colorList) {
            t31 = ({
                "Page[selectedColors.map()]": (id)=>({
                        value: id,
                        label: colorList.find({
                            "Page[selectedColors.map() > colorList.find()]": (c_0)=>c_0._id === id
                        }["Page[selectedColors.map() > colorList.find()]"])?.name
                    })
            })["Page[selectedColors.map()]"];
            $[56] = colorList;
            $[57] = t31;
        } else {
            t31 = $[57];
        }
        t30 = selectedColors.map(t31);
        $[53] = colorList;
        $[54] = selectedColors;
        $[55] = t30;
    } else {
        t30 = $[55];
    }
    let t31;
    if ($[58] !== t28 || $[59] !== t30) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 space-y-1.5",
            children: [
                t27,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$select$2f$dist$2f$react$2d$select$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
                    options: t28,
                    isMulti: true,
                    onChange: t29,
                    value: t30,
                    placeholder: "Select colors...",
                    styles: multiSelectStyles
                }, void 0, false, {
                    fileName: "[project]/src/app/(admin)/admin/product/add/page.jsx",
                    lineNumber: 419,
                    columnNumber: 52
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(admin)/admin/product/add/page.jsx",
            lineNumber: 419,
            columnNumber: 11
        }, this);
        $[58] = t28;
        $[59] = t30;
        $[60] = t31;
    } else {
        t31 = $[60];
    }
    let t32;
    if ($[61] !== t21 || $[62] !== t26 || $[63] !== t31) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-4",
            children: [
                t16,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col sm:flex-row gap-5 sm:gap-10",
                    children: [
                        t21,
                        t26,
                        t31
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(admin)/admin/product/add/page.jsx",
                    lineNumber: 428,
                    columnNumber: 43
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(admin)/admin/product/add/page.jsx",
            lineNumber: 428,
            columnNumber: 11
        }, this);
        $[61] = t21;
        $[62] = t26;
        $[63] = t31;
        $[64] = t32;
    } else {
        t32 = $[64];
    }
    let t33;
    if ($[65] === Symbol.for("react.memo_cache_sentinel")) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 space-y-1.5",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                    className: "text-sm font-medium text-gray-600",
                    children: "Original Price"
                }, void 0, false, {
                    fileName: "[project]/src/app/(admin)/admin/product/add/page.jsx",
                    lineNumber: 438,
                    columnNumber: 47
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "number",
                    placeholder: "0.00",
                    onChange: getOriginalPrice,
                    ref: originalPriceRef,
                    min: "0",
                    step: "0.01",
                    className: "w-full px-3 py-2.5 rounded-lg border border-gray-200 bg-white text-sm text-gray-800 placeholder-gray-400 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
                }, void 0, false, {
                    fileName: "[project]/src/app/(admin)/admin/product/add/page.jsx",
                    lineNumber: 438,
                    columnNumber: 122
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(admin)/admin/product/add/page.jsx",
            lineNumber: 438,
            columnNumber: 11
        }, this);
        $[65] = t33;
    } else {
        t33 = $[65];
    }
    let t34;
    if ($[66] === Symbol.for("react.memo_cache_sentinel")) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 space-y-1.5",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                    className: "text-sm font-medium text-gray-600",
                    children: "Discount %"
                }, void 0, false, {
                    fileName: "[project]/src/app/(admin)/admin/product/add/page.jsx",
                    lineNumber: 445,
                    columnNumber: 47
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "number",
                    placeholder: "0",
                    min: "0",
                    max: "100",
                    ref: discount,
                    onChange: getDiscount,
                    className: "w-full px-3 py-2.5 rounded-lg border border-gray-200 bg-white text-sm text-gray-800 placeholder-gray-400 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
                }, void 0, false, {
                    fileName: "[project]/src/app/(admin)/admin/product/add/page.jsx",
                    lineNumber: 445,
                    columnNumber: 118
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(admin)/admin/product/add/page.jsx",
            lineNumber: 445,
            columnNumber: 11
        }, this);
        $[66] = t34;
    } else {
        t34 = $[66];
    }
    let t35;
    if ($[67] === Symbol.for("react.memo_cache_sentinel")) {
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "text-sm font-medium text-gray-600",
            children: "Final Price"
        }, void 0, false, {
            fileName: "[project]/src/app/(admin)/admin/product/add/page.jsx",
            lineNumber: 452,
            columnNumber: 11
        }, this);
        $[67] = t35;
    } else {
        t35 = $[67];
    }
    let t36;
    if ($[68] !== finalPrice) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "number",
            placeholder: "0.00",
            value: finalPrice,
            readOnly: true,
            className: "w-full px-3 py-2.5 rounded-lg border border-gray-200 bg-gray-50 text-sm text-gray-600"
        }, void 0, false, {
            fileName: "[project]/src/app/(admin)/admin/product/add/page.jsx",
            lineNumber: 459,
            columnNumber: 11
        }, this);
        $[68] = finalPrice;
        $[69] = t36;
    } else {
        t36 = $[69];
    }
    let t37;
    if ($[70] === Symbol.for("react.memo_cache_sentinel")) {
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-gray-400",
            children: "Shown to customers"
        }, void 0, false, {
            fileName: "[project]/src/app/(admin)/admin/product/add/page.jsx",
            lineNumber: 467,
            columnNumber: 11
        }, this);
        $[70] = t37;
    } else {
        t37 = $[70];
    }
    let t38;
    if ($[71] !== t36) {
        t38 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-4 mt-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col sm:flex-row gap-5",
                children: [
                    t33,
                    t34,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 space-y-1.5",
                        children: [
                            t35,
                            t36,
                            t37
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(admin)/admin/product/add/page.jsx",
                        lineNumber: 474,
                        columnNumber: 102
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(admin)/admin/product/add/page.jsx",
                lineNumber: 474,
                columnNumber: 43
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/(admin)/admin/product/add/page.jsx",
            lineNumber: 474,
            columnNumber: 11
        }, this);
        $[71] = t36;
        $[72] = t38;
    } else {
        t38 = $[72];
    }
    let t39;
    if ($[73] === Symbol.for("react.memo_cache_sentinel")) {
        t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-1.5",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                    className: "text-sm font-medium text-gray-600",
                    children: "Short Description"
                }, void 0, false, {
                    fileName: "[project]/src/app/(admin)/admin/product/add/page.jsx",
                    lineNumber: 482,
                    columnNumber: 40
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                    rows: 2,
                    ref: short_discription,
                    placeholder: "Brief summary shown in listings...",
                    className: "w-full px-3 py-2.5 rounded-lg border border-gray-200 bg-white text-sm text-gray-800 placeholder-gray-400 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-100 resize-none"
                }, void 0, false, {
                    fileName: "[project]/src/app/(admin)/admin/product/add/page.jsx",
                    lineNumber: 482,
                    columnNumber: 118
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(admin)/admin/product/add/page.jsx",
            lineNumber: 482,
            columnNumber: 11
        }, this);
        $[73] = t39;
    } else {
        t39 = $[73];
    }
    let t40;
    if ($[74] === Symbol.for("react.memo_cache_sentinel")) {
        t40 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "text-sm font-medium text-gray-600",
            children: "Long Description"
        }, void 0, false, {
            fileName: "[project]/src/app/(admin)/admin/product/add/page.jsx",
            lineNumber: 489,
            columnNumber: 11
        }, this);
        $[74] = t40;
    } else {
        t40 = $[74];
    }
    let t41;
    let t42;
    if ($[75] === Symbol.for("react.memo_cache_sentinel")) {
        t41 = ({
            "Page[<Editor>.onTextChange]": (e_1)=>setText(e_1.htmlValue)
        })["Page[<Editor>.onTextChange]"];
        t42 = {
            height: "320px"
        };
        $[75] = t41;
        $[76] = t42;
    } else {
        t41 = $[75];
        t42 = $[76];
    }
    let t43;
    if ($[77] !== text) {
        t43 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-4 mt-4",
            children: [
                t39,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-1.5",
                    children: [
                        t40,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$primereact$2f$editor$2f$editor$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"], {
                            value: text,
                            onTextChange: t41,
                            style: t42
                        }, void 0, false, {
                            fileName: "[project]/src/app/(admin)/admin/product/add/page.jsx",
                            lineNumber: 511,
                            columnNumber: 82
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(admin)/admin/product/add/page.jsx",
                    lineNumber: 511,
                    columnNumber: 48
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(admin)/admin/product/add/page.jsx",
            lineNumber: 511,
            columnNumber: 11
        }, this);
        $[77] = text;
        $[78] = t43;
    } else {
        t43 = $[78];
    }
    let t44;
    if ($[79] === Symbol.for("react.memo_cache_sentinel")) {
        t44 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "text-sm font-medium text-gray-600",
            children: "Thumbnail"
        }, void 0, false, {
            fileName: "[project]/src/app/(admin)/admin/product/add/page.jsx",
            lineNumber: 519,
            columnNumber: 11
        }, this);
        $[79] = t44;
    } else {
        t44 = $[79];
    }
    let t45;
    if ($[80] === Symbol.for("react.memo_cache_sentinel")) {
        t45 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            className: "w-5 h-5 text-gray-400 group-hover:text-orange-400",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            strokeWidth: 1.5,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
            }, void 0, false, {
                fileName: "[project]/src/app/(admin)/admin/product/add/page.jsx",
                lineNumber: 526,
                columnNumber: 185
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/(admin)/admin/product/add/page.jsx",
            lineNumber: 526,
            columnNumber: 11
        }, this);
        $[80] = t45;
    } else {
        t45 = $[80];
    }
    const t46 = fileName || "Click to upload thumbnail";
    let t47;
    if ($[81] !== t46) {
        t47 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-sm font-medium text-gray-500 group-hover:text-orange-500",
            children: t46
        }, void 0, false, {
            fileName: "[project]/src/app/(admin)/admin/product/add/page.jsx",
            lineNumber: 534,
            columnNumber: 11
        }, this);
        $[81] = t46;
        $[82] = t47;
    } else {
        t47 = $[82];
    }
    let t48;
    let t49;
    if ($[83] === Symbol.for("react.memo_cache_sentinel")) {
        t48 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-xs text-gray-400",
            children: "PNG, JPG, WEBP up to 5MB"
        }, void 0, false, {
            fileName: "[project]/src/app/(admin)/admin/product/add/page.jsx",
            lineNumber: 543,
            columnNumber: 11
        }, this);
        t49 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "file",
            name: "thumbnail",
            className: "hidden",
            onChange: handleThumbnailChange
        }, void 0, false, {
            fileName: "[project]/src/app/(admin)/admin/product/add/page.jsx",
            lineNumber: 544,
            columnNumber: 11
        }, this);
        $[83] = t48;
        $[84] = t49;
    } else {
        t48 = $[83];
        t49 = $[84];
    }
    let t50;
    if ($[85] !== t47) {
        t50 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "group w-full h-32 flex flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-gray-300 bg-gray-50 cursor-pointer hover:border-orange-400 hover:bg-orange-50 transition-all duration-200",
            children: [
                t45,
                t47,
                t48,
                t49
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(admin)/admin/product/add/page.jsx",
            lineNumber: 553,
            columnNumber: 11
        }, this);
        $[85] = t47;
        $[86] = t50;
    } else {
        t50 = $[86];
    }
    let t51;
    if ($[87] !== fileName || $[88] !== preview) {
        t51 = preview && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-3 mt-2 px-3 py-2.5 rounded-lg bg-gray-50",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: preview,
                    alt: "preview",
                    className: "w-10 h-10 rounded-md object-cover"
                }, void 0, false, {
                    fileName: "[project]/src/app/(admin)/admin/product/add/page.jsx",
                    lineNumber: 561,
                    columnNumber: 102
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-sm text-gray-600 truncate",
                    children: fileName
                }, void 0, false, {
                    fileName: "[project]/src/app/(admin)/admin/product/add/page.jsx",
                    lineNumber: 561,
                    columnNumber: 183
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(admin)/admin/product/add/page.jsx",
            lineNumber: 561,
            columnNumber: 22
        }, this);
        $[87] = fileName;
        $[88] = preview;
        $[89] = t51;
    } else {
        t51 = $[89];
    }
    let t52;
    if ($[90] !== t50 || $[91] !== t51) {
        t52 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 space-y-1.5",
            children: [
                t44,
                t50,
                t51
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(admin)/admin/product/add/page.jsx",
            lineNumber: 570,
            columnNumber: 11
        }, this);
        $[90] = t50;
        $[91] = t51;
        $[92] = t52;
    } else {
        t52 = $[92];
    }
    let t53;
    if ($[93] === Symbol.for("react.memo_cache_sentinel")) {
        t53 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "text-sm font-medium text-gray-600",
            children: "Gallery Images"
        }, void 0, false, {
            fileName: "[project]/src/app/(admin)/admin/product/add/page.jsx",
            lineNumber: 579,
            columnNumber: 11
        }, this);
        $[93] = t53;
    } else {
        t53 = $[93];
    }
    let t54;
    let t55;
    let t56;
    if ($[94] === Symbol.for("react.memo_cache_sentinel")) {
        t54 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            className: "w-5 h-5 text-gray-400 group-hover:text-orange-400",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            strokeWidth: 1.5,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3 9.75h18M3 6.75A2.25 2.25 0 015.25 4.5h13.5A2.25 2.25 0 0121 6.75v10.5A2.25 2.25 0 0118.75 19.5H5.25A2.25 2.25 0 013 17.25V6.75z"
            }, void 0, false, {
                fileName: "[project]/src/app/(admin)/admin/product/add/page.jsx",
                lineNumber: 588,
                columnNumber: 185
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/(admin)/admin/product/add/page.jsx",
            lineNumber: 588,
            columnNumber: 11
        }, this);
        t55 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-sm font-medium text-gray-500 group-hover:text-orange-500",
            children: "Click to upload images"
        }, void 0, false, {
            fileName: "[project]/src/app/(admin)/admin/product/add/page.jsx",
            lineNumber: 589,
            columnNumber: 11
        }, this);
        t56 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-xs text-gray-400",
            children: "Multiple allowed · up to 5MB each"
        }, void 0, false, {
            fileName: "[project]/src/app/(admin)/admin/product/add/page.jsx",
            lineNumber: 590,
            columnNumber: 11
        }, this);
        $[94] = t54;
        $[95] = t55;
        $[96] = t56;
    } else {
        t54 = $[94];
        t55 = $[95];
        t56 = $[96];
    }
    let t57;
    if ($[97] === Symbol.for("react.memo_cache_sentinel")) {
        t57 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "group w-full h-32 flex flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-gray-300 bg-gray-50 cursor-pointer hover:border-orange-400 hover:bg-orange-50 transition-all duration-200",
            children: [
                t54,
                t55,
                t56,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "file",
                    accept: "image/*",
                    multiple: true,
                    onChange: {
                        "Page[<input>.onChange]": (e_2)=>setImages(e_2.target.files ? Array.from(e_2.target.files) : [])
                    }["Page[<input>.onChange]"],
                    className: "hidden"
                }, void 0, false, {
                    fileName: "[project]/src/app/(admin)/admin/product/add/page.jsx",
                    lineNumber: 601,
                    columnNumber: 256
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(admin)/admin/product/add/page.jsx",
            lineNumber: 601,
            columnNumber: 11
        }, this);
        $[97] = t57;
    } else {
        t57 = $[97];
    }
    let t58;
    if ($[98] !== images.length) {
        t58 = images.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-2 text-sm text-gray-600",
            children: [
                images.length,
                " file(s) selected"
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(admin)/admin/product/add/page.jsx",
            lineNumber: 610,
            columnNumber: 32
        }, this);
        $[98] = images.length;
        $[99] = t58;
    } else {
        t58 = $[99];
    }
    let t59;
    if ($[100] !== t58) {
        t59 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 space-y-1.5",
            children: [
                t53,
                t57,
                t58
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(admin)/admin/product/add/page.jsx",
            lineNumber: 618,
            columnNumber: 11
        }, this);
        $[100] = t58;
        $[101] = t59;
    } else {
        t59 = $[101];
    }
    let t60;
    if ($[102] !== t52 || $[103] !== t59) {
        t60 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-4 mt-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col sm:flex-row gap-5",
                children: [
                    t52,
                    t59
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(admin)/admin/product/add/page.jsx",
                lineNumber: 626,
                columnNumber: 43
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/(admin)/admin/product/add/page.jsx",
            lineNumber: 626,
            columnNumber: 11
        }, this);
        $[102] = t52;
        $[103] = t59;
        $[104] = t60;
    } else {
        t60 = $[104];
    }
    let t61;
    if ($[105] !== router) {
        t61 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: {
                "Page[<button>.onClick]": ()=>router.back()
            }["Page[<button>.onClick]"],
            className: "px-5 py-2.5 rounded-lg border border-gray-200 bg-white text-sm text-gray-600 hover:bg-gray-50 hover:border-gray-300 active:scale-95 transition-all duration-150",
            children: "Cancel"
        }, void 0, false, {
            fileName: "[project]/src/app/(admin)/admin/product/add/page.jsx",
            lineNumber: 635,
            columnNumber: 11
        }, this);
        $[105] = router;
        $[106] = t61;
    } else {
        t61 = $[106];
    }
    const t62 = loader ? "Saving..." : "Save Product";
    let t63;
    if ($[107] !== loader || $[108] !== t62) {
        t63 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "submit",
            className: "px-5 py-2.5 rounded-lg bg-orange-500 text-sm font-medium text-white hover:bg-orange-600 active:scale-95 transition-all duration-150 shadow-sm",
            disabled: loader,
            children: t62
        }, void 0, false, {
            fileName: "[project]/src/app/(admin)/admin/product/add/page.jsx",
            lineNumber: 646,
            columnNumber: 11
        }, this);
        $[107] = loader;
        $[108] = t62;
        $[109] = t63;
    } else {
        t63 = $[109];
    }
    let t64;
    if ($[110] !== t61 || $[111] !== t63) {
        t64 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-end gap-3 pt-1",
            children: [
                t61,
                t63
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(admin)/admin/product/add/page.jsx",
            lineNumber: 655,
            columnNumber: 11
        }, this);
        $[110] = t61;
        $[111] = t63;
        $[112] = t64;
    } else {
        t64 = $[112];
    }
    let t65;
    if ($[113] !== submitHandler || $[114] !== t32 || $[115] !== t38 || $[116] !== t43 || $[117] !== t60 || $[118] !== t64) {
        t65 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-gray-50 flex justify-center items-start p-4 md:p-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full bg-white rounded-2xl border border-gray-200 p-5 md:p-8",
                children: [
                    t14,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: submitHandler,
                        className: "space-y-8",
                        children: [
                            t32,
                            t38,
                            t43,
                            t60,
                            t64
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(admin)/admin/product/add/page.jsx",
                        lineNumber: 664,
                        columnNumber: 179
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(admin)/admin/product/add/page.jsx",
                lineNumber: 664,
                columnNumber: 95
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/(admin)/admin/product/add/page.jsx",
            lineNumber: 664,
            columnNumber: 11
        }, this);
        $[113] = submitHandler;
        $[114] = t32;
        $[115] = t38;
        $[116] = t43;
        $[117] = t60;
        $[118] = t64;
        $[119] = t65;
    } else {
        t65 = $[119];
    }
    return t65;
}
_s(Page, "jfKFMph4B45b9UkzEIpyxxOYC8U=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = Page;
// Reusable styles for react-select (single)
function _PageSelectOnChangeOptionsMap(opt) {
    return opt.value;
}
function _PageColorListMap(col) {
    return {
        value: col._id,
        label: col.name
    };
}
function _PageBrandListMap(b) {
    return {
        value: b._id,
        label: b.name
    };
}
function _PageCategoryListMap(cat) {
    return {
        value: cat._id,
        label: cat.name
    };
}
function _PageSubmitHandlerAnonymous(error_0) {
    const message = error_0?.response?.data?.masg || "Internal server error";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notify"])(message, false);
    console.log(error_0);
}
const selectStyles = {
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
};
// Styles for multi-select (colors)
const multiSelectStyles = {
    ...selectStyles,
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
        })
};
var _c;
__turbopack_context__.k.register(_c, "Page");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_8897354a._.js.map