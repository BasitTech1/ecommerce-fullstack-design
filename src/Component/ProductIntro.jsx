import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom'

const ProductIntro = ({ id, image, name, price }) => {
    const { currency } = useContext(ShopContext)
    return (
        <div className='w-full md:flex ml-0 md:ml-[-60px] lg:ml-0'>
            <Link className='flex flex-col items-center w-30 md:w-28 lg:w-35 border-l border-gray-400 gap-0 md:gap-1 lg:gap-2' to={`/product/${id}`}>
                <div>
                    <img className='w-20 md:w-18 lg:w-25 hover:scale-110 transition-all' src={image[0]} alt="" />
                </div>
                <p className='text-[13px] md:text-[12px] lg::text-[15px] font-medium text-gray-900'>{name}</p>
                <p className='bg-red-200 text-[12px] md:text-[14px] lg:text-[16px] px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-red-800 font-semibold'>-{price}</p>
            </Link>
        </div>
    )
}

export default ProductIntro
