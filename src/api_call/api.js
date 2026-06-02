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
    if(query.limit) filter.append("limit",query.limit);

    try {
        const query = filter.toString();

        const response = await client.get(
          query ? `/category?${query}` : "category"
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
          query ? `/brand?${query}` : "brand"
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
    if(query.page) filter.append("pages",query.page);
    if(query.category_slug) filter.append("category_slug",query.category_slug);
    if(query.min_price) filter.append("min_price",query.min_price);
    if(query.max_price) filter.append("max_price",query.max_price);
    if(query.sort) filter.append("sort",query.sort);

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
          query ? `/product?${query}` : "product"
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
          query ? `/color?${query}` : "color"
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
async function  getSingleOrder(id){
    try {
    const response =  await client.get(`order/${id}`)
    return response?.data
        
    } catch (error) {
        console.log(error)
        return { success: false, data: null }
    }
    
}

export{getCategories,getBrand,getColor,getSelectData,getProduct,getAllOrders,getSingleOrder}

