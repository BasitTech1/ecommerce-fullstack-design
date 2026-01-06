import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom'

const SectionProductInfo = ({ id, image, name, price }) => {
    const { currency } = useContext(ShopContext)
    return (
        <div className='w-full'>
            <Link className='flex items-start justify-center mt-3 mb-2 md:mt-2 px-2 md:px-3 lg:px-4 lg:justify-between gap-1 lg:gap-2' to={`/product/${id}`}>
                <div>
                    <p className='text-[12px] md:text-[13px] lg:text-[16px] font-semibold text-gray-800'>{name}</p>
                    <p className='text-[10px] md:text-[9px] lg:text-[13px] font-medium text-gray-400 leading-3'>From <br />USD {price}</p>
                </div>
                <div>
                    <img className='w-16 md:w-17 lg:w-20 hover:scale-110 transition-all' src={image} alt="" />
                </div>
            </Link>
        </div>
    )
}

export default SectionProductInfo
