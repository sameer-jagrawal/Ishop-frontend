import { client } from "@/utils/helper"
async function  getCategories(query={}) {
    const filter = new URLSearchParams()
    if(query.id) filter.append("id",query.id);
    if(query.status) filter.append("status",query.status);
    if(query.is_home) filter.append("is_home",query.is_home);
    if(query.is_top) filter.append("is_top",query.is_top);  
    if(query.limit) filter.append("limit",query.limit);

    try {
    const response =  await client.get(`category?${filter.toString()}`)
    // console.log(response.data)
    return response?.data
        
    } catch (error) {
        console.log(error)
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
    const response =  await client.get(`brand?${filter.toString()}`)
    return response?.data
        
    } catch (error) {
        console.log(error)
    }
    
}


// get product
async function  getProduct(query={}){
    const filter = new URLSearchParams()
    if(query.id) filter.append("id",query.id);
    if(query.status) filter.append("status",query.status);
    if(query.is_home) filter.append("is_home",query.is_home);
    if(query.is_top) filter.append("is_top",query.is_top);  
    if(query.limit) filter.append("limit",query.limit);
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
    const response =  await client.get(`product?${filter.toString()}`)
    return response?.data
        
    } catch (error) {
        console.log(error)
    }
    
}

async function  getColor(query={}){
    const filter = new URLSearchParams()
    if(query.status) filter.append("status",query.status);
    try {
    const response =  await client.get(`color?${filter.toString()}`)
    return response?.data
        
    } catch (error) {
        console.log(error)
    }
    
}

async function  getSelectData(type){
    try {
    const response =  await client.get(type)
    // console.log(response.data)
    return response.data
        
    } catch (error) {
        console.log(error)
    }
    
}


async function  getAllOrders(){
    try {
    const response =  await client.get("order")
    return response?.data
        
    } catch (error) {
        console.log(error)
    }
    
}
async function  getSingleOrder(id){
    try {
    const response =  await client.get(`order/${id}`)
    return response?.data
        
    } catch (error) {
        console.log(error)
    }
    
}

export{getCategories,getBrand,getColor,getSelectData,getProduct,getAllOrders,getSingleOrder}

