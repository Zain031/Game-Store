
'use client'
import { ObjectId } from 'mongodb'
import React from 'react'
import Swal from "sweetalert2"

function ButtonCard({id} : {id: ObjectId}) {
        const handleAddWishlist = async () => {
    
    
            const response = await fetch( process.env.NEXT_PUBLIC_BASE_URL + "/api/wishlist",{
                method: "POST",
                headers: {
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify(id)
            })
            const result = await response.json()
    
            if(!response.ok){
                console.log("Error", "<<<<");
                return Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: result.error
                })
            }
    

            Swal.fire({
                icon: "success",
                title: "Success",
                text: "Success Add To Wishlist"
            })
        }
    

    return (
        <div>
            <button onClick={handleAddWishlist} className="invisible  group-hover:visible hover:brightness-105 transition transform  translate-y-8 ease-in-out  group-hover:translate-y-0
      absolute  text-white bg-blue-700 hover:bg-blue-600 mt-10 ml-12 px-3 py-2 rounded-md font-light">
                Add Wishlist
            </button>
            

        </div>
    )
}

export default ButtonCard