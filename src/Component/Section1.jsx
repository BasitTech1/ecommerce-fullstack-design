import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import AnalogClock from './AnalogClock'
import ProductIntro from './ProductIntro'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css';


const Section1 = () => {

    const { products, searchItem } = useContext(ShopContext)
    const [dealsProducts, setDealsProducts] = useState([])

    useEffect(() => {
        setDealsProducts(products.slice(4, 9))
    }, [])

    const filteredDealsProducts = dealsProducts.filter(products =>
        products.name.toLowerCase().includes(searchItem.toLowerCase())
    )

    return (
        <div className='mt-2 px-5 md:mt-4 lg:mt-10 w-full md:px-10 lg:px-18'>
            <div className='sm:flex items-center justify-start gap-45 bg-white rounded border border-gray-300 h-60 lg:h-60 md:h-40 w-[100%]'>
                <div className='flex gap-0 sm:flex sm:flex-col items-start ml-2 w-20 md:ml-3 lg:ml-6 md:w-5 lg:w-30 mt-3 sm:mt-0'>
                    <div className='flex flex-col md:w-full'>
                        <h4 className='font-semibold text-[15px] md:text-[22px] lg:text-[18px] w-40 sm:w-30'>Deals and offers</h4>
                        <p className='text-[12px] md:text-[16px] lg:text-sm mt-[-4px] mb-5 text-gray-500'>Hygiene equipments</p>
                    </div>
                    <AnalogClock />
                </div>

                {/* Mobile silder  */}
                <div className='flex sm:hidden items-center justify-center gap-1 px-2 cursor-pointer w-full h-full mt-[-50px]'>
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={50}
                        slidesPerView={3}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                        pagination={{ clickable: true }}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false
                        }}
                        className='w-full px-4'
                    >
                        {
                            dealsProducts.map((item, index) => (
                                <SwiperSlide key={index} className='w-full h-[50]'>
                                    <ProductIntro id={item.id} image={item.image} name={item.name} price={item.price} />
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>

                <div className='hidden sm:flex sm:items-center md:justify-end lg:justify-center gap-0 ml-0 lg:ml-0 md:ml-[-20px] md:gap-12 lg:gap-18 cursor-pointer w-full h-full'>
                    {
                        filteredDealsProducts.map((item, index) => (
                            <ProductIntro key={index} id={item.id} image={item.image} name={item.name} price={item.price} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Section1