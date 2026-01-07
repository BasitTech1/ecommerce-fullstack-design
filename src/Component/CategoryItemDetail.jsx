import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom'
import { RiHeartLine, RiStarFill, RiStarHalfFill } from '@remixicon/react'

const CategoryItemDetail = ({ id, image, name, price, description, order, status }) => {
    const { currency, gridView,setGridView } = useContext(ShopContext)
    return (
        <div className='w-full'>
            <div className={`${gridView ? 'flex flex-col w-[100%] lg:gap-2' : ''} flex items-start justify-start bg-white mb-4 mt-1 sm:mt-4 rounded border border-gray-300 p-2 sm:p-4 gap-2 sm:gap-4 w-full`}>
                <div className='flex items-center justify-start w-[80%] lg:w-[20%]'>
                    <img className='w-[100%] md:w-50 lg:w-40 hover:scale-110 transition-all' src={image} alt="" />
                </div>
                <div className='flex flex-col gap-2 lg:w-[75%]'>
                    <p className='text-[16px] font-medium text-gray-600'>{name}</p>
                    <p className='text-[15px] sm:text-[20px] font-medium text-gray-800 leading-3'>{currency}{price}</p>
                    <div className={`${gridView ? 'flex flex-col items-start justify-start lg:flex-row lg:gap-2' : ''} flex items-center gap-2 sm:gap-4`}>
                        <div className='flex items-center gap-1'>
                            <RiStarFill className='w-3 sm:w-4 text-yellow-500' />
                            <RiStarFill className='w-3 sm:w-4 text-yellow-500' />
                            <RiStarFill className='w-3 sm:w-4 text-yellow-500' />
                            <RiStarFill className='w-3 sm:w-4 text-yellow-500' />
                            <RiStarHalfFill className='w-3 sm:w-4 text-yellow-500' />
                            <p className='text-[12px] sm:text-[14px] font-medium text-yellow-500'>7.5</p>
                        </div>
                        <p className='text-[10px] sm:text-[15px] font-medium text-gray-400'>{order} Orders</p>
                        <p className='text-[10px] sm:text-[16px] font-medium text-green-400'>{status}</p>
                    </div>
                    <p className='text-[8px] sm:text-[15px] text-gray-400 leading-3 sm:leading-4'>{description}</p>
                    <div className='text-[8px] sm:text-[16px] text-blue-500 font-medium cursor-pointer'>View details</div>
                </div>
                <p className='bg-gray-100 p-1 sm:p-2 rounded-[6px] shadow'><RiHeartLine className='w-4 sm:w-6 text-blue-500 cursor-pointer' /></p>
            </div>
        </div>
    )
}

export default CategoryItemDetail
