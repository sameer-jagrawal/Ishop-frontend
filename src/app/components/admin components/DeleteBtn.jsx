'use client'
import React from 'react'
import {  Trash2, } from "lucide-react";
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Swal from "sweetalert2";
import { deleteRequest } from '@/utils/helper';

export default function DeleteBtn({type,id}) {
    console.log(type,"user delete address ")
    const router = useRouter()
    function deleteHandler(){
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then( async (result) => {
        if (result.isConfirmed){
            await deleteRequest(type,id).then(
            (response)=>{
              if(response.data.success){
                router.refresh()
              }
            }
          ).catch(
            (error)=>{
              console.log(error)
            }
          )
          Swal.fire({
            title: "Deleted!",
            text: `${type} has been deleted.`,
            icon: "success"
          });
        } 
      })
       
        
    }
  return (
    <button onClick={deleteHandler} className="p-2 rounded-lg hover:bg-red-50 text-red-600 hover:text-red-800 transition">
    <Trash2 size={18} />
  </button>
  )
}
