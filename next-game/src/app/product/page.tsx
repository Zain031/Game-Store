import React from 'react'
import { VscArrowCircleUp } from "react-icons/vsc";
import Navbar from "../../components/Navbar"
import Carousel from "../../components/Carousell"
import { Products } from '../../interface'
import Button from "../../components/ButtonCard"
import Link from 'next/link';
import Footer from "../../components/Footer"
import ButtonCard from '../../components/ButtonCard';

async function getData(): Promise<Products[]> {
    const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL + '/api/products', {
        cache: "no-store"
    })
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}
async function Page() {
    const data = await getData()
    // console.log(data);
    return (
        <>
            <div id='up'>
                <Navbar />
                <Carousel />
            </div>

            <div className='grid grid-cols-5 gap-6 rounded-md mx-32 mt-20 pl-10 mb-20'>
                {data.map((item, index) => {
                    return (
                        <div key={index} className=' px-2 py-1 ' >
                            <div className="bg-white border px-1  hover:shadow-2xl  hover:scale-110 hover:duration-150 hover:brightness-125 brightness-90   hover:delay-50 hover:shadow-blue-600 hover:outline-blue-600 shadow-md border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
                                <div className='group '>

                                    <ButtonCard id={item._id} />


                                    <Link href={`/product/${item.slug}`}>
                                        <button className="invisible w-28   group-hover:visible hover:brightness-105 transition transform  translate-y-8 ease-in-out  group-hover:translate-y-0
                                          absolute  text-white bg-blue-700 hover:bg-blue-600 mt-28 ml-12 px-3 py-2  rounded-md font-light">
                                            See Detail
                                        </button>
                                    </Link>

                                    <a href="#">
                                        <img
                                            className='rounded-md'
                                            src={item.thumbnail}
                                        />
                                    </a>
                                </div>
                                <p className='text-center text-slate-950 font-light '>{item.name}</p>
                            </div>
                        </div>)
                })}
            </div>


            <div className='flex justify-end pb-10 pr-10'>
                <div className='hover:scale-105 hover:text-slate-600'><a href="#up">  <VscArrowCircleUp size={70} /></a></div>
            </div>
            <Footer />
        </>

    )
}

export default Page