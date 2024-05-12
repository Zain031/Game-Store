'use client'
import Navbar from "@/components/Navbar"
import { useEffect, useState } from "react"
import { Products, Wishlist } from '@/interface/index'
import { TiDeleteOutline } from "react-icons/ti";
import { revalidatePath } from "next/cache";
import { ObjectId } from "mongodb";
import { useRouter } from "next/navigation"
import Swal from "sweetalert2";



export default function WishlistPage() {
    const [wishlist, setWishlist] = useState<Wishlist[]>([])
    const router = useRouter()


    async function handleDelete(id: ObjectId) {
        const response = await fetch(process.env.NEXT_PUBLIC_BASE_URL + "/api/wishlist/" + id, {
            method: 'DELETE',
            headers: {
                "Content-type": 'application/json'
            },
            cache: 'no-cache'
        })

        console.log(response);

        let result = await response.json()
        console.log(result);
        Swal.fire({
            icon: "success",
            title: "Success",
            text: "Success delete from Wishlist"
        })

        // revalidatePath("/wishlist", 'page')
        // router.refresh()
        fetchDataWishlist()
    }

    async function fetchDataWishlist() {

        const response = await fetch(process.env.NEXT_PUBLIC_BASE_URL +"/api/wishlist", {
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
            }
        })
        const result = await response.json()
        console.log(result.data);
        setWishlist(result.data)
    }
    useEffect(() => {

        fetchDataWishlist()
    }, [])

    return (
        <>
            <Navbar />
            <section className="px-32 py-8  rounded-md  shadow-2xl shadow-blue-600 mx-20 mb-20">
                <div className="text-center mb-8 mt-20 ">
                    <h2 className="text-xl font-bold text-gray-700 sm:text-3xl">
                        Wishlist
                    </h2>
                </div>

                <div className="overflow-x-auto">
                    <table className="table">
                        <thead className="bg-blue-300 rounded-sm">
                            <tr>
                                <th className="text-black">No</th>
                                <th className="text-black"></th>
                                <th className="text-black">Name</th>
                                <th className="text-black">Price</th>
                                <th className="text-black">Tag</th>
                                <th className="text-black">Description</th>
                                <th className="text-black">Delete</th>

                            </tr>
                        </thead>
                        <tbody>
                            {wishlist?.map((item, index) => {
                                return (
                                    <>
                                        <tr className="border-b-2 border-blue-200">
                                            <td className="text-black">{++index}</td>
                                            <td className="text-black "><div className="p-1 bg-blue-200 "><img style={{ width: 1500 }} src={item.productDetail.thumbnail} alt="" /></div></td>
                                            <td className="text-black"><p className="font-bold text-slate-600">{item.productDetail.name}</p></td>
                                            <td className="text-black"><p className="bg-green-600 text-white px-2 py-1 rounded-sm">{item.productDetail.price}</p></td>
                                            <td className="text-black"><p className="bg-red-500 text-white px-2 py-1 rounded-sm">{item.productDetail.tag}</p></td>
                                            <td className="text-black"> <p className="text-justify">{item.productDetail.description}</p></td>
                                            <td className="text-black"><button onClick={() => { handleDelete(item._id) }}> <p className="hover:scale-150 hover:text-red-600"><TiDeleteOutline size={30} /></p></button></td>
                                        </tr>
                                    </>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </section>


        </>
    )

}