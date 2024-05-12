import Link from "next/link"



function Banner(){
    return(
        <>
         <div className="pt-20">
        <img className="ml-10 rounded-lg shadow-md hover:shadow-2xl " src="https://i0.wp.com/www.lapakgaming.com/blog/id-id/wp-content/uploads/2024/03/1448x520-HB-DANA-1.png?fit=1448%2C520&ssl=1&tr=w-1920%2Cq-75" alt="" />
      </div>
      <Link href="/product">   <div className="mt-10  flex justify-center">
        <button  className="bg-blue-800 w-56  text-white px-3 py-2 rounded-sm hover:scale-110 hover:duration-150">ALL PRODUCT</button>
      </div></Link></>
    )
}

export default Banner