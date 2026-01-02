import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom'

const SectionProductInfo = ({ id, image, name, price }) => {
    const { currency } = useContext(ShopContext)
    return (
        <div className='w-full'>
            <Link className='flex items-start mt-4 px-2 sm:px-4 justify-between gap-1 sm:gap-2' to={`/product/${id}`}>
                <div>
                    <p className='text-[12px] sm:text-[16px] font-semibold text-gray-800'>{name}</p>
                    <p className='text-[10px] sm:text-[13px] font-medium text-gray-400 leading-3'>From <br />USD {price}</p>
                </div>
                <div>
                    <img className='w-15 sm:w-20 hover:scale-110 transition-all' src={image} alt="" />
                </div>
            </Link>
        </div>
    )
}

export default SectionProductInfo
