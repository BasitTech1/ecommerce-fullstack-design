import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
import { RiCloseCircleLine, RiHeadphoneLine, RiHeartLine, RiShieldCrossFill } from '@remixicon/react'

const Navbar = () => {

    const { getCartCount, searchItem, setSearchItem } = useContext(ShopContext)
    const [openMenu, setOpenMenu] = useState(false)

    const menuToggle =()=>{
        setOpenMenu(!openMenu)
    }


    return (
        <div className='flex flex-col py-3 md:p-4 lg:py-6 w-full gap-4'>
            <div className='flex items-center justify-between'>

                {/* mobile menu  */}
                <div className='flex items-center gap-4 lg:gap-0 ml-5 sm:ml-0 z-10 relative'>
                    <img onClick={setOpenMenu} className='transition-all flex lg:hidden md:hidden cursor-pointer' src={assets.MenuIcon} alt="" />
                    <Link to={'/'}><img className='ml-0 w-25 md:w-30 lg:ml-14 md:ml-4 lg:w-40' src={assets.Logo} alt="" /></Link>

                    <div className={`${openMenu ? 'flex' : 'hidden'} md:hidden transition-all flex-col absolute sm:hidden left-0 top-0 bg-white p-4 shadow-2xl w-50 h-[100vh] fixed`}>
                        <RiCloseCircleLine onClick={menuToggle} className='ml-35 w-8 text-gray-500' />
                        <div className='flex items-center gap-4 mb-4 border-b-2 border-gray-300 pb-2'>
                            <img className='bg-gray-200 p-2 rounded-full' src={assets.ProfileIcon} alt="" />
                            <p className='text-[14px] text-gray-400 leading-4'>Sign In | Register</p>
                        </div>
                        <ul>
                            <div className='flex flex-col items-start gap-2 border-b-2 border-gray-300 pb-2'>
                                <li className='flex items-center gap-4'>
                                    <img className='w-5.5' src={assets.Home_icon} alt="" />
                                    <p className='text-gray-500 text-[18px]'>Home</p>
                                </li>
                                <li className='flex items-center gap-4'>
                                    <RiHeartLine className='w-5 text-gray-500' />
                                    <p className='text-gray-500 text-[18px]'>Favorities</p>
                                </li>
                                <li className='flex items-center gap-4'>
                                    <img className='w-[17px] ml-0.5' src={assets.Order_icon} alt="" />
                                    <p className='text-gray-500 text-[18px]'>My Orders</p>
                                </li>
                            </div>
                            <div className='flex flex-col mt-5 gap-2 border-b-2 border-gray-300 pb-2'>
                                <li className='flex items-center gap-4'>
                                    <img className='w-[20px]' src={assets.World} alt="" />
                                    <p className='text-gray-500 text-[18px]'>English | USD</p>
                                </li>
                                <li className='flex items-center gap-4'>
                                    <RiHeadphoneLine className='w-[20px] text-gray-500' />
                                    <p className='text-gray-500 text-[18px]'>Contact Us</p>
                                </li>
                                <li className='flex items-center gap-4'>
                                    <img className='w-[19px]' src={assets.About_icon} alt="" />
                                    <p className='text-gray-500 text-[18px]'>About</p>
                                </li>
                            </div>
                            <div className='flex flex-col mt-2 gap-2 ml-4'>
                                <li className='text-[15px] font-semibold text-gray-400'>User Agreement</li>
                                <li className='text-[15px] font-semibold text-gray-400'>Partnership</li>
                                <li className='text-[15px] font-semibold text-gray-400'>Privacy Policy</li>
                            </div>
                        </ul>
                    </div>
                </div>

                <div className='hidden lg:flex md:flex '>
                    <div className='flex md:w-70 lg:w-130 items-center border-2 lg:px-1 md:p-0 border-[rgba(18,127,255,1)]'>
                        <input value={searchItem} onChange={(e) => setSearchItem(e.target.value)} className='md:w-40 md:p-1 lg:p-0 lg:w-100 outline-none' type="search" placeholder='Search' />
                        <div className='flex items-center justify-center sm:w-50 gap-3 border-l-2 border-[rgba(18,127,255,1)]'>
                            <p className='flex items-center md:gap-1 md:text-[14px] lg:text-[16px] lg:gap-2 cursor-pointer'>All categories
                                <img src={assets.arrowIcon} alt="" />
                            </p>
                        </div>
                    </div>
                    <button className='bg-[rgba(18,127,255,1)] text-white lg:py-1 lg:mr-[-76px] lg:px-3 md:px-1 cursor-pointer hover:bg-[#0666d4] md:text-[12px] lg:text-[16px]'>Search</button>
                </div>
                <div className='gap-2 mr-0 md:w-44 lg:w-75 flex items-center md:gap-3 lg:gap-4 md:mr-4 lg:mr-8'>
                    <button className='flex flex-col md:w-6 lg:w-8 sm:w-12 items-center justify-center gap-1 lg:gap-1.5 cursor-pointer'>
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
                    <Link to={'/cart'} className='flex flex-col w-12 items-center justify-center mr-4 sm:mr-0 sm:gap-1 mt-1 cursor-pointer relative'>
                        <img className='w-6' src={assets.CartIcon} alt="" />
                        <p className='text-[10px] font-medium text-gray-500'>My Cart</p>
                        <p className='text-[8px] absolute right-[-5px] bottom-[26px] bg-blue-600 text-center leading-4 rounded-full w-4 font-medium text-white'>{getCartCount()}</p>
                    </Link>
                </div>
            </div>

            <div className='hidden md:flex lg:flex items-center justify-between md:py-1 lg:py-2 border-t-1 border-b-1 border-gray-300 font-medium text-gray-600 md:h-full lg:w-full'>
                <ul className='flex items-center justify-center md:gap-4 lg:gap-10 md:ml-0 lg:ml-14 md:w-[80%] lg:w-[50%]'>
                    <li className='flex items-center md:gap-2 lg:gap-2 cursor-pointer hover:text-gray-700 md:w-25 lg:w-40'>
                        <img src={assets.MenuIcon} alt="" />
                        <p className='md:text-[12px] lg:text-[15px]'>All Category</p>
                    </li>
                    <li className='hover:text-gray-800 cursor-pointer md:text-[12px] lg:text-[16px] md:w-15 lg:w-30'>Hot Offers</li>
                    <li className='hover:text-gray-800 cursor-pointer md:text-[12px] lg:text-[16px] md:w-15 lg:w-30'>Gift boxes</li>
                    <li className='hover:text-gray-800 cursor-pointer md:text-[12px] lg:text-[16px] md:w-15 lg:w-30'>Projects</li>
                    <li className='hover:text-gray-800 cursor-pointer md:text-[12px] lg:text-[16px] md:w-15 lg:w-30'>Menu item</li>
                    <li className='hover:text-gray-800 flex items-center gap-1 cursor-pointer md:text-[12px] lg:text-[16px] md:w-20 lg:w-30'>
                        <p>Help</p>
                        <img src={assets.arrowIcon} alt="" />
                    </li>
                </ul>

                <div className='flex items-center md:gap-2 lg:gap-7 md:mr-4 lg:mr-24'>
                    <button className='flex items-center gap-1 cursor-pointer hover:text-gray-800 md:w-20 lg:w-30'>
                        <p className='md:text-[10px] lg:text-[16px]'>English, USD</p>
                        <img src={assets.arrowIcon} alt="" />
                    </button>
                    <button className='flex items-center gap-1 cursor-pointer hover:text-gray-800 md:w-20 lg:w-30'>
                        <p className='md:text-[11px] lg:text-[16px]'>Ship To</p>
                        <img className='md:w-4 lg:w-5' src={assets.AeFlag} alt="" />
                        <img src={assets.arrowIcon} alt="" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Navbar
