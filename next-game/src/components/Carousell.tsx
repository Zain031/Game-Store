import React from 'react'

function Carousell() {
    return (
        <div style={{width:1100}} className='pt-20 ml-60  hover:duration-150 '>

            <div className="carousel w-full rounded-2xl transition hover:duration-150 ">
                <div id="slide1" className="carousel-item relative w-full hover:duration-150">
                    <img src="https://i0.wp.com/www.lapakgaming.com/blog/id-id/wp-content/uploads/2024/04/LGID-hb-newuser.png?fit=1448%2C520&ssl=1&tr=w-1920%2Cq-75" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://i0.wp.com/www.lapakgaming.com/blog/id-id/wp-content/uploads/2024/04/hb-278promo-mlbb.png?fit=1448%2C520&ssl=1&tr=w-1920%2Cq-75" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://i0.wp.com/www.lapakgaming.com/blog/id-id/wp-content/uploads/2024/03/1448x520-HB-DANA-1.png?fit=1448%2C520&ssl=1&tr=w-1920%2Cq-75" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://i0.wp.com/www.lapakgaming.com/blog/id-id/wp-content/uploads/2024/03/LG-hb-Shopee-Ramadhan.png?fit=1448%2C520&ssl=1&tr=w-1920%2Cq-75" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Carousell