import { client } from "@/utils/helper"

function normalizeProductResponse(payload) {
    const data = payload?.data;
    if (Array.isArray(data)) return payload;
    if (Array.isArray(data?.product)) {
        return {
            ...payload,
            data: data.product,
            total: data.total,
            limit: data.limit,
            pages: data.pages,
            imageBaseUrl: data.imageBaseUrl,
        };
    }
    return {
        ...payload,
        data: [],
        total: 0,
        limit: 0,
        pages: 0,
    };
}

async function  getCategories(query={}) {
    const filter = new URLSearchParams()
    if(query.id) filter.append("id",query.id);
    if(query.status) filter.append("status",query.status);
    if(query.is_home) filter.append("is_home",query.is_home);
    if(query.is_top) filter.append("is_top",query.is_top);  
    if(query.is_popular) filter.append("is_popular",query.is_popular);
    if(query.limit) filter.append("limit",query.limit);

    try {
        const query = filter.toString();

        const response = await client.get(
          query ? `category?${query}` : "category"
        );
    // console.log(response.data)
    return response?.data
        
    } catch (error) {
        console.log(error)
        return { success: false, data: [] }
    }
    
}


async function  getBrand(query={}){
    const filter = new URLSearchParams()
    if(query.id) filter.append("id",query.id);
    if(query.status) filter.append("status",query.status);
    if(query.is_home) filter.append("is_home",query.is_home);
    if(query.is_top) filter.append("is_top",query.is_top);  
    if(query.limit) filter.append("limit",query.limit);
    try {

        const query = filter.toString();

        const response = await client.get(
          query ? `brand?${query}` : "brand"
        );
    return response?.data
        
    } catch (error) {
        console.log(error)
        return { success: false, data: [] }
    }
    
}


// get product
async function  getProduct(query={}){
    const filter = new URLSearchParams()
    if(query.id) filter.append("id",query.id);
    if(query.status) filter.append("status",query.status);
    if(query.is_home) filter.append("is_home",query.is_home);
    if(query.is_top) filter.append("is_top",query.is_top);  
    if(query.is_hot) filter.append("is_hot",query.is_hot);  
    if(query.limit) filter.append("limit",query.limit);
    if(query.page) filter.append("page",query.page);
    if(query.category_slug) filter.append("category_slug",query.category_slug);
    if(query.min_price) filter.append("min_price",query.min_price);
    if(query.max_price) filter.append("max_price",query.max_price);
    if(query.sort) filter.append("sort",query.sort);
    if(query.search) filter.append("search",query.search);

    // brand_slug is an array — append each value separately
    if(query.brand_slug && query.brand_slug.length > 0){
        query.brand_slug.forEach(slug => filter.append("brand_slug", slug));
    }

    // color_slug is an array — append each value separately
    if(query.color_slug && query.color_slug.length > 0){
        query.color_slug.forEach(slug => filter.append("color_slug", slug));
    }

    
    try {
        const query = filter.toString();

        const response = await client.get(
          query ? `product?${query}` : "product"
        );
    return normalizeProductResponse(response?.data)
        
    } catch (error) {
        console.log(error)
        return normalizeProductResponse()
    }
    
}

async function  getColor(query={}){
    const filter = new URLSearchParams()
    if(query.status) filter.append("status",query.status);
    try {
        const query = filter.toString();

        const response = await client.get(
          query ? `color?${query}` : "color"
        );
    return response?.data
        
    } catch (error) {
        console.log(error)
        return { success: false, data: [] }
    }
    
}

async function  getSelectData(type){
    try {
    const response =  await client.get(type)
    // console.log(response.data)
    return response.data
        
    } catch (error) {
        console.log(error)
        return { success: false, data: [] }
    }
    
}


async function  getAllOrders(){
    try {
    const response =  await client.get("order")
    return response?.data 
        
    } catch (error) {
        console.log(error)
        return { success: false, data: [] }
    }
    
}
async function getDashboardData(){
    try {
    const response = await client.get("dashboard")
    return response?.data
        
    } catch (error) {
        console.log(error)
        try {
            const [ordersRes, productsRes] = await Promise.all([
                getAllOrders(),
                getProduct({ limit: 1000 }),
            ]);
            const orders = ordersRes?.data?.orders || [];
            const products = productsRes?.data || [];
            const totalRevenue = orders.reduce((sum, order) => sum + Number(order?.totalAmount || 0), 0);
            const statusMap = orders.reduce((acc, order) => {
                const status = order?.orderStatus || "placed";
                acc[status] = (acc[status] || 0) + 1;
                return acc;
            }, {});
            const paymentMap = orders.reduce((acc, order) => {
                const payment = order?.paymentMethod || "unknown";
                acc[payment] = (acc[payment] || 0) + 1;
                return acc;
            }, {});
            const revenueMap = orders.slice(0, 20).reduce((acc, order) => {
                const date = new Date(order?.createdAt).toISOString().slice(0, 10);
                acc[date] = (acc[date] || 0) + Number(order?.totalAmount || 0);
                return acc;
            }, {});

            return {
                success: true,
                data: {
                    stats: {
                        totalRevenue,
                        averageOrderValue: orders.length ? totalRevenue / orders.length : 0,
                        totalOrders: orders.length,
                        totalProducts: products.length,
                        activeProducts: products.filter((product) => product?.status && product?.stock).length,
                        totalCustomers: new Set(orders.map((order) => order?.user?._id || order?.user?.email).filter(Boolean)).size,
                        totalCategories: 0,
                        totalBrands: 0,
                        paidOrdersCount: orders.filter((order) => order?.paymentStatus === "paid").length,
                        pendingPaymentCount: orders.filter((order) => order?.paymentStatus === "pending").length,
                        deliveredOrdersCount: orders.filter((order) => order?.orderStatus === "delivered").length,
                    },
                    recentOrders: orders.slice(0, 8),
                    charts: {
                        revenueByDay: Object.entries(revenueMap).map(([date, revenue]) => ({ _id: date, revenue })),
                        statusBreakdown: Object.entries(statusMap).map(([_id, count]) => ({ _id, count })),
                        paymentBreakdown: Object.entries(paymentMap).map(([_id, count]) => ({ _id, count })),
                    },
                },
            };
        } catch (fallbackError) {
            console.log(fallbackError)
            return { success: false, data: null }
        }
    }
    
}
async function  getSingleOrder(id){
    try {
    const response =  await client.get(`order/${id}`)
    return response?.data
        
    } catch (error) {
        console.log(error)
        return { success: false, data: null }
    }
    
}

export{getCategories,getBrand,getColor,getSelectData,getProduct,getAllOrders,getDashboardData,getSingleOrder}

