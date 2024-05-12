import Navbar from "@/components/Navbar"
import { Products } from '../../../interface'
import Link from "next/link"
import { IoArrowBackCircleOutline } from "react-icons/io5";


const fetchData = async (slug: string): Promise<Products> => {
    "use server"

    const response = await fetch(process.env.NEXT_PUBLIC_BASE_URL + "/api/products/" + slug, {
        method: "GET",

    })
    const result = await response.json()
    return result.data as Products
}
async function getData({ params }: { params: { slug: string } }) {


    const slug = params.slug
    const data = await fetchData(slug)

    return (<>
        <Navbar />
        <div key={data.slug} className="flex w-full h-screen  items-center justify-center">
            <div className=" mt-12 flex max-w-[90rem] flex-row rounded-xl  bg-white bg-clip-border text-gray-700 shadow-md hover:shadow-2xl hover:shadow-blue-700">
                <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                    <img
                        src={data.thumbnail}
                        alt="image"
                        className="h-full w-full object-cover hover:scale-110 hover:cursor-zoom-in hover:duration-150 "
                    />
                </div>
                <div className="p-6">
                    <h6 className="mb-4 block font-sans  font-bold uppercase leading-relaxed tracking-normal text-blue-700 text-5xl  antialiased">
                        {data.name}
                    </h6>
                    <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">

                    </h4>
                    <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                        {data.description}
                    </p>
                    <h6 className="mb-4 block font-sans  font-bold uppercase leading-relaxed tracking-normal text-slate-600 text-4xl  antialiased">
                        Rp.  {data.price}
                    </h6>
                    <h6 className="mb-4 px-3 rounded-md shadow-2xl py-1 font-sans  font-semilight uppercase leading-relaxed tracking-normal bg-red-600 text-white inline-block text-4xl  antialiased">
                        {data.tag}
                    </h6>
                    <Link href="/product" className="flex justify-end  mt-16  hover:text-slate-900">
                        <IoArrowBackCircleOutline size={60} />
                    </Link>
                </div>
            </div>
        </div>

    </>
    )
}

export default getData