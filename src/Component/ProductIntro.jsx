import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom'

const ProductIntro = ({ id, image, name, price }) => {
    const { currency } = useContext(ShopContext)
    return (
        <div className='w-full'>
            <Link className='flex flex-col items-center w-30 sm:w-35 border-l border-gray-400 gap-0 sm:gap-2' to={`/product/${id}`}>
                <div>
                    <img className='w-20 sm:w-25 hover:scale-110 transition-all' src={image[0]} alt="" />
                </div>
                <p className='text-[13px] sm:text-[15px] font-medium text-gray-900'>{name}</p>
                <p className='bg-red-200 text-[12px] sm:text-[16px] px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-red-800 font-semibold'>-{price}</p>
            </Link>
        </div>
    )
}

export default ProductIntro
