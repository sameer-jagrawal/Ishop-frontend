'use client'
import { addToCart, qtyChanges } from "@/redux/features/cartslice";
import { client } from "@/utils/helper";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default  function AddToCartButton({user, product }) {
  const dispatcher = useDispatch()
  const cart = useSelector((store)=>store.cart)
  const cartItem = cart?.items.find((item)=>item._id == product?._id)

  const updateQtyInDb = async (flag) => {
    try {

      await client.put("cart/update-qty", {
        _id: product?._id,
        flag,
      });

    } catch (error) {

      console.log(error);

    }
  }

  
    const handleAddToCart =  async ()=>{
    
      try {
        if(user){
          await client.post("cart/add",{productId:product._id,qty:1})

        }
      } catch (error) {
        console.log(error)
      }
    }
  
  
  return (
    <div>

      {cartItem ? 
      
      <div className="flex items-center w-full h-[40px] rounded-xl border border-[#01A49E] overflow-hidden bg-[#01A49E]/5">

{/* Decrease */}
<button
onClick={()=>{
  
  dispatcher(qtyChanges({_id : product._id, flag : "dec"}));
  updateQtyInDb("dec")

}}
className="w-10 h-full flex items-center justify-center text-[#01A49E] text-lg font-semibold hover:bg-[#01A49E]/10 active:scale-95 transition">
  −
</button>

{/* Value */}
<div className="flex-1 text-center text-sm font-semibold text-[#01A49E] border-x border-[#01A49E]/20">
  {cartItem?.qty || 0}
</div>

{/* Increase */}
<button
onClick={()=>{
  
  dispatcher(qtyChanges({_id : product._id, flag : "inc"}));
  updateQtyInDb("inc")

}}
className="w-10 h-full flex items-center justify-center text-[#01A49E] text-lg font-semibold hover:bg-[#01A49E]/10 active:scale-95 transition">
  +
</button>
</div>: 

<button
    onClick={() =>{
      dispatcher(
        addToCart({
          name: product?.name,
          original_price: product?.original_price,
          final_price: product?.final_price,
          _id: product?._id,
          discount: product?.discount_percentage,
          thumbnail: `http://localhost:5000/product/${product.thumbnail}`,
          stock: product?.stock,
          brand: product?.brandId?.name,
          qty : 1
        })
      );
      handleAddToCart()
    }
    }
      className={`${
        product.stock ? "bg-teal-500" : "bg-red-500"
      } w-full text-white py-2 px-4 rounded-xl text-sm font-medium transition-all duration-300 hover:opacity-90 active:scale-95`}
      disabled={!product.stock}
    >
      {product.stock ? "Add to Cart" : "Unavailable"}
    </button>
}
    
    </div>

  );
}