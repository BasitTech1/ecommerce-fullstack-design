import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
    return (
        <div className='flex flex-col bg-white py-2'>
            <div className='grid grid-cols-2 sm:flex sm:flex-row items-center justify-between gap-14 sm:gap-0 bg-white p-6 sm:p-10'>
                <div className='flex flex-col gap-4'>
                    <img className='w-30 lg:w-40' src={assets.Logo} alt="" />
                    <p className='text-[12px] lg:text-[14px] leading-3 sm:leading-4 text-gray-400'>Best information about the company <br /> gives here but now qualtiy product</p>
                    <div className='flex items-start gap-2.5'>
                        <img className='w-5 lg:w-10 cursor-pointer' src={assets.FbICon} alt="" />
                        <img className='w-5 lg:w-10 cursor-pointer' src={assets.TwitterIcon} alt="" />
                        <img className='w-5 lg:w-10 cursor-pointer' src={assets.LinkedinIcon} alt="" />
                        <img className='w-5 lg:w-10 cursor-pointer' src={assets.InstaIcon} alt="" />
                        <img className='w-5 lg:w-10 cursor-pointer' src={assets.YoutubeIcon} alt="" />
                    </div>
                </div>
                <div>
                    <p className='text-[16px] lg:text-[20px] font-medium text-gray-900'>About</p>
                    <ul className='text-[13px] lg:text-[16px] text-gray-400'>
                        <li className='cursor-pointer hover:text-gray-500 transition-all'>About Us</li>
                        <li className='cursor-pointer hover:text-gray-500 transition-all'>Find store</li>
                        <li className='cursor-pointer hover:text-gray-500 transition-all'>Categories</li>
                        <li className='cursor-pointer hover:text-gray-500 transition-all'>Blogs</li>
                    </ul>
                </div>
                <div>
                    <p className='text-[16px] lg:text-[20px] font-medium text-gray-900'>Partnership</p>
                    <ul className='text-[13px] lg:text-[16px] text-gray-400'>
                        <li className='cursor-pointer hover:text-gray-500 transition-all'>About Us</li>
                        <li className='cursor-pointer hover:text-gray-500 transition-all'>Find store</li>
                        <li className='cursor-pointer hover:text-gray-500 transition-all'>Categories</li>
                        <li className='cursor-pointer hover:text-gray-500 transition-all'>Blogs</li>
                    </ul>
                </div>
                <div>
                    <p className='text-[16px] lg:text-[20px] font-medium text-gray-900'>Information</p>
                    <ul className='text-[13px] lg:text-[16px] text-gray-400'>
                        <li className='cursor-pointer hover:text-gray-500 transition-all'>Help Center</li>
                        <li className='cursor-pointer hover:text-gray-500 transition-all'>Money Refund</li>
                        <li className='cursor-pointer hover:text-gray-500 transition-all'>Shipping</li>
                        <li className='cursor-pointer hover:text-gray-500 transition-all'>Contact Us</li>
                    </ul>
                </div>
                <div>
                    <p className='text-[16px] lg:text-[20px] font-medium text-gray-900'>For Users</p>
                    <ul className='text-[13px] lg:text-[16px] text-gray-400'>
                        <li className='cursor-pointer hover:text-gray-500 transition-all'>Login</li>
                        <li className='cursor-pointer hover:text-gray-500 transition-all'>Register</li>
                        <li className='cursor-pointer hover:text-gray-500 transition-all'>Settings</li>
                        <li className='cursor-pointer hover:text-gray-500 transition-all'>My Orders</li>
                    </ul>
                </div>
                <div className='flex flex-col gap-1'>
                    <p className='text-[16px] lg:text-[20px] font-medium text-gray-900'>Get App</p>
                    <img className='cursor-pointer w-25 lg:w-30' src={assets.googlePlayIcon} alt="" />
                    <img className='cursor-pointer w-25 lg:w-30' src={assets.AppStoreIcon} alt="" />
                </div>
            </div>

            <div className='flex items-start justify-between px-4 sm:px-10 bg-gray-50 py-1 sm:py-5'>
                <p className='text-[12px] lg:text-[15px] text-gray-600 font-medium'>@2024 Ecommerce.</p>
                <div className='text-[12px] lg:text-[15px] text-gray-600 font-medium flex items-center justify-center gap-0.5'>
                    <img className='w-3 lg:w-5' src={assets.UsFlag} alt="" />
                    <p>English</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
