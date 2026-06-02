import { getProduct } from "@/api_call/api";
import Dealsofthedayproduct from "./Dealsofthedayproduct";

export default async function ProductCard() {
  const product_res = await getProduct({is_hot:true,status:true})
  const product = product_res?.data || []

  return (
    <section className="mx-auto mt-4 max-w-7xl px-4 md:px-0">
      <div className="rounded-md bg-white shadow-sm">
        <div className="rounded-t-md bg-[#01A49E] px-4 py-4 text-lg font-semibold text-white md:px-6 md:text-xl">
        DEALS OF THE DAY
      </div>
        <Dealsofthedayproduct product={product}/>
      </div>
    </section>
    
  );
}
