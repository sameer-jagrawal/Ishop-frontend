'use client'
import React, { useState } from "react"
import { useRouter } from "next/navigation"
import { client, notify } from "@/utils/helper"
export default function Status({value,id,feild,type,onChange}) {

    const router = useRouter()
    const [isUpdating, setIsUpdating] = useState(false)
    const isActive = Boolean(value)

    function activeHandler(){
        if (isUpdating || !id || !feild) return

        const previousValue = isActive
        const nextValue = !previousValue

        setIsUpdating(true)
        onChange?.(feild, nextValue)

        client.put(`${type}/update/${id}`,{feild}).then(
            (response)=>{
              notify(feild  +  response.data.masg, response.data.success)
              if(response.data.success){
                const updatedValue = response.data?.data?.[feild]
                if (typeof updatedValue === "boolean") {
                  onChange?.(feild, updatedValue)
                }
                router.refresh()

              }
            }
        ).catch((error) => {
          onChange?.(feild, previousValue)
          console.log(error?.response,"user error")
          notify(
              error?.response?.data?.masg || "Not updated",
              false
          );
      
          console.log(error);
      }).finally(() => {
        setIsUpdating(false)
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
      aria-disabled={isUpdating}
      className={`cursor-pointer px-4 py-1.5 text-xs font-semibold rounded-full whitespace-nowrap transition-all duration-300 shadow-sm border ${
        isUpdating ? "opacity-70" : ""
      } ${
        isActive === true
          ? "bg-green-50 text-green-700 border-green-200 hover:bg-green-100"
          : "bg-red-50 text-red-700 border-red-200 hover:bg-red-100"
      }`}
    >
      {isActive ? Trulabel : Falselabel}
    </span>
  );
}
