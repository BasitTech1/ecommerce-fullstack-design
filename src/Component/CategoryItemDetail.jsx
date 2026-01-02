import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom'
import { RiHeartLine, RiStarFill, RiStarHalfFill } from '@remixicon/react'

const CategoryItemDetail = ({ id, image, name, price, description, order, status }) => {
    const { currency } = useContext(ShopContext)
    return (
        <div className='w-full'>
            <div className='flex items-start justify-between bg-white mb-4 mt-4 rounded border border-gray-300 p-4 gap-4'>
                <div>
                    <img className='w-30 hover:scale-110 transition-all' src={image} alt="" />
                </div>
                <div className='flex flex-col gap-2'>
                    <p className='text-[16px] font-medium text-gray-600'>{name}</p>
                    <p className='text-[20px] font-medium text-gray-800 leading-3'>{currency}{price}</p>
                    <div className='flex items-center gap-4'>
                        <div className='flex items-center gap-1'>
                            <RiStarFill className='w-4 text-yellow-500' />
                            <RiStarFill className='w-4 text-yellow-500' />
                            <RiStarFill className='w-4 text-yellow-500' />
                            <RiStarFill className='w-4 text-yellow-500' />
                            <RiStarHalfFill className='w-4 text-yellow-500' />
                            <p className='text-[14px] font-medium text-yellow-500'>7.5</p>
                        </div>
                        <p className='text-[15px] font-medium text-gray-400'>{order} Orders</p>
                        <p className='text-[16px] font-medium text-green-400'>{status}</p>
                    </div>
                    <p className='text-[15px] text-gray-400 leading-4'>{description}</p>
                    <Link className='text-[16px] text-blue-500 font-medium' to={`/product/${id}`}>View details</Link>
                </div>
                <p className='bg-gray-100 p-2 rounded-[6px] shadow'><RiHeartLine className='w-6 text-blue-500 cursor-pointer' /></p>
            </div>
        </div>
    )
}

export default CategoryItemDetail
