import { getProduct } from "@/api_call/api";
import Dealsofthedayproduct from "./Dealsofthedayproduct";

export default async function ProductCard() {
  const product_res = await getProduct({is_hot:true,status:true})
  const product = product_res?.data
  // console.log(product_res,"is hot response")
  return (
    <div>
<div className="py-4 px-6 md:px-10 items-center bg-[#01A49E] rounded-t-xl font-semibold text-white text-lg md:text-xl">
        DEALS OF THE DAY
      </div>
    <Dealsofthedayproduct product = {product}/>
    </div>
    
  );
}
