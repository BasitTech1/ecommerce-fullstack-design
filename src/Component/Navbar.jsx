import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'

const Navbar = () => {

    const {getCartCount} = useContext(ShopContext)


    return (
        <div className='flex flex-col py-3 sm:py-6 w-full gap-4'>
            <div className='flex items-center justify-between'>
                <Link to={'/'}><img className='ml-4 w-25 sm:ml-14 sm:w-40' src={assets.Logo} alt="" /></Link>
                <div className='hidden sm:flex'>
                    <div className='flex w-130 items-center border-2 px-1 border-[rgba(18,127,255,1)]'>
                        <input className='w-100' type="search" placeholder='Search' />
                        <div className='flex items-center justify-center w-50 gap-3 border-l-2 border-[rgba(18,127,255,1)]'>
                            <p className='flex items-center gap-2 cursor-pointer'>All categories
                                <img src={assets.arrowIcon} alt="" />
                            </p>
                        </div>
                    </div>
                    <button className='bg-[rgba(18,127,255,1)] text-white py-1 mr-[-76px] px-3 cursor-pointer hover:bg-[#0666d4]'>Search</button>
                </div>
                <div className='w-30 gap-2 mr-0 sm:w-75 flex items-center sm:gap-4 sm:mr-8'>
                    <button className='flex flex-col w-8 sm:w-12 items-center justify-center gap-1 sm:gap-1.5 cursor-pointer'>
                        <img className='w-6' src={assets.ProfileIcon} alt="" />
                        <p className='text-[10px] font-medium text-gray-500'>Profile</p>
                    </button>
                    <button className='hidden sm:flex flex-col w-12 items-center justify-center gap-1 cursor-pointer'>
                        <img className='w-6' src={assets.MessageIcon} alt="" />
                        <p className='text-[10px] font-medium text-gray-500'>Message</p>
                    </button>
                    <button className='hidden sm:flex flex-col w-12 items-center justify-center gap-2 cursor-pointer'>
                        <img className='w-6' src={assets.HeartIcon} alt="" />
                        <p className='text-[10px] font-medium text-gray-500'>Orders</p>
                    </button>
                    <Link to={'/cart'} className='flex flex-col w-12 items-center justify-center sm:gap-1 mt-1 cursor-pointer relative'>
                        <img className='w-6' src={assets.CartIcon} alt="" />
                        <p className='text-[10px] font-medium text-gray-500'>My Cart</p>
                        <p className='text-[8px] absolute right-[-5px] bottom-[26px] bg-blue-600 text-center leading-4 rounded-full w-4 font-medium text-white'>{getCartCount()}</p>
                    </Link>
                </div>
            </div>

            <div className='hidden sm:flex items-center justify-between py-2 border-t-1 border-b-1 border-gray-300 font-medium text-gray-600'>
                <ul className='flex items-center justify-center gap-10 ml-14'>
                    <li className='flex items-center gap-2 cursor-pointer hover:text-gray-700'>
                        <img src={assets.MenuIcon} alt="" />
                        <p>All Category</p>
                    </li>
                    <li className='hover:text-gray-800 cursor-pointer'>Hot Offers</li>
                    <li className='hover:text-gray-800 cursor-pointer'>Gift boxes</li>
                    <li className='hover:text-gray-800 cursor-pointer'>Projects</li>
                    <li className='hover:text-gray-800 cursor-pointer'>Menu item</li>
                    <li className='hover:text-gray-800 flex items-center gap-1 cursor-pointer'>
                        <p>Help</p>
                        <img src={assets.arrowIcon} alt="" />
                    </li>
                </ul>

                <div className='flex items-center gap-7 mr-24'>
                    <button className='flex items-center gap-1 cursor-pointer hover:text-gray-800'>
                        <p>English, USD</p>
                        <img src={assets.arrowIcon} alt="" />
                    </button>
                    <button className='flex items-center gap-1 cursor-pointer hover:text-gray-800'>
                        <p>Ship To</p>
                        <img className='w-5' src={assets.AeFlag} alt="" />
                        <img src={assets.arrowIcon} alt="" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Navbar
