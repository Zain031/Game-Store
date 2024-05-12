'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { IoListCircleOutline } from "react-icons/io5";



function Navbar() {
 const [search,setSearch] = useState<string>("")


 useEffect(() => {
  const fetchData = async () => {
      const response = await fetch( process.env.NEXT_PUBLIC_BASE_URL + `/api/products?search=${search}`, {
          method: "GET",
          headers: {
              'Content-type': 'application/json'
          },
      })

      const result = await response.json()
      setSearch(result.data)
  }

  fetchData()

}, [search])



  return (
    <div className='z-10 h-16 w-screen  fixed  flex justify-end bg-white border-b-2 border-slate-200'>
     <div className='font-bold mr-52 pl-56 pt-5 flex gap-2'>
        LAPAX <span className='text-blue-700'> GAMING</span>
      </div>
      <Link href="/"> 
      <div className='hover:text-blue-600 mr-20 mt-5 font-semibold  '> 
        Home
      </div>
      </Link>
      <Link href="/product"> 
      <div className=' font-semibold mr-32 mt-5 hover:text-blue-600'>
        Product
      </div>
      </Link>
      
      <div className='pt-3 mr-10'>
        <input  onChange={(e)=>{setSearch(e.target.value)}} value={search} className='w-96 border-gray-400 border-2 h-10 rounded-full p-2' type="text" placeholder='search game' />
      </div>
     
    
     <Link href="/wishlist">  <div className='py-3 rounded-md  mr-4 flex gap-1 hover:shadow-2xl px-2 hover:cursor-pointer hover:text-blue-500'>
        <div><IoListCircleOutline color='black' size={40} /></div><div className='pt-2'>Wishlist</div>
      </div></Link>
     
      <Link href="/login">
        <div className=' mr-52 mt-3 border-2 border-blue-700 hover:bg-blue-700 rounded-full w-20 h-10 pl-4 pt-2  '>
          <p className='text-blue-700 font-bold hover:text-white '>Login</p>
        </div>
      </Link>


    </div>
  )
}


export default Navbar