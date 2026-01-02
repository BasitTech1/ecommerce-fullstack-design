import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import AnalogClock from './AnalogClock'
import ProductIntro from './ProductIntro'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css';


const Section1 = () => {

    const { products } = useContext(ShopContext)
    const [dealsProducts, setDealsProducts] = useState([])

    useEffect(() => {
        setDealsProducts(products.slice(4, 9))
    }, [])

    return (
        <div className='mt-[-120px] px-6 sm:mt-10 w-full sm:px-18'>
            <div className='sm:flex items-center justify-start gap-45 bg-white rounded border border-gray-300 h-60 w-[100%]'>
                <div className='flex gap-2 sm:gap-0 sm:flex sm:flex-col items-start ml-2 w-20 sm:ml-6 sm:w-30 mt-3 sm:mt-0'>
                    <div className='flex flex-col'>
                        <h4 className='font-semibold text-xl sm:text-[18px] w-50 sm:w-30'>Deals and offers</h4>
                        <p className='text-sm mt-[-4px] mb-5 text-gray-500'>Hygiene equipments</p>
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

                <div className='hidden sm:flex items-center justify-center gap-18 cursor-pointer w-full h-full'>
                    {
                        dealsProducts.map((item, index) => (
                            <ProductIntro key={index} id={item.id} image={item.image} name={item.name} price={item.price} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Section1