'use client'
import React  from "react"
import { useRouter } from "next/navigation"
import { client, notify } from "@/utils/helper"
export default function Status({value,id,feild,type}) {

    const router = useRouter()
    function activeHandler(){
        client.put(`${type}/update/${id}`,{feild}).then(
            (response)=>{
              notify(feild  +  response.data.masg, response.data.success)
              if(response.data.success){
                router.refresh()

              }
            }
        ).catch((error) => {
          console.log(error?.response,"user error")
          notify(
              error?.response?.data?.masg || "Not updated",
              false
          );
      
          console.log(error);
      })
    }
    const lable = {
      status : ["Active", "Inactive"],
      is_home : ["Is Home","Not Home"],
      is_top : ["Is Top","Not Top"],
      is_popular : ["Is Popular","Not Popular"],
      is_hot : ["Is Hot","Not Hot"],
      is_best : ["Is Best","Not Best"],
      stock : ["In stock","Not in stock"],
      is_return : ["Can return ","Can't return"],
    }

    const [Trulabel, Falselabel]= lable[feild]
    // console.log(,)

  return (
    <span
      onClick={activeHandler}
      className={`cursor-pointer px-4 py-1.5 text-xs font-semibold rounded-full whitespace-nowrap transition-all duration-300 shadow-sm border ${
        value === true
          ? "bg-green-50 text-green-700 border-green-200 hover:bg-green-100"
          : "bg-red-50 text-red-700 border-red-200 hover:bg-red-100"
      }`}
    >
      {value ? Trulabel : Falselabel}
    </span>
  );
}
