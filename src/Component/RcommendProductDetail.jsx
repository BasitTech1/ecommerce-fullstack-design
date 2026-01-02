import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom'

const RecommendProductDetail = ({ id, image, name, price }) => {
    const { currency } = useContext(ShopContext)
    return (
        <div className='w-full'>
            <Link className='flex flex-col items-start mt-2 p-2 sm:mt-4 sm:p-5 justify-between w-45 h-50 sm:w-60 sm:h-80 gap-2 bg-white' to={`/product/${id}`}>
                <div>
                    <img className='w-30 sm:w-50 p-1 sm:p-2 hover:scale-110 transition-all' src={image[0]} alt="" />
                </div>
                <div>
                    <p className='text-[12px] sm:text-[15px] font-medium text-gray-400 leading-3'>{currency}{price}</p>
                    <p className='text-[14px] leading-3 sm:leading-none sm:text-[17px] mt-1 font-semibold text-gray-500'>{name}</p>
                </div>
            </Link>
        </div>
    )
}

export default RecommendProductDetail
