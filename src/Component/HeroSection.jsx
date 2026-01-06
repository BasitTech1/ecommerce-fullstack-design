import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const HeroSection = () => {

    const [openCategries, setOpenCategories] = useState(false)
    
    const categoryToggle = () => {
        setOpenCategories(!openCategries)
    }

    const categories = [
        { id: 'automobiles', name: 'Automobiles' },
        { id: 'clothes', name: 'Clothes and wear' },
        { id: 'home', name: 'Home interiors' },
        { id: 'tech', name: 'Computer and Tech' },
        { id: 'tools', name: 'Tools, equipments' },
        { id: 'sports', name: 'Sports and Outdoor' },
        { id: 'animals', name: 'Animal and Pets' },
        { id: 'machinery', name: 'Machinery Tools' },
        { id: 'more', name: 'More Category' },
    ]

    return (
        <div className='flex flex-col w-full sm:flex sm:items-center sm:justify-center'>
            <div className='flex flex-col sm:flex sm:flex-row sm:items-center sm:justify-center gap-2 md:gap-4 lg:gap-20 sm:bg-white px-5 rounded-xl sm:border border-gray-300 w-full sm:w-[90%] md:h-[30vh] lg:h-[50vh] relative'>

                {/* mobile button  */}
                <div className='flex items-center justify-between'>
                    <button onClick={categoryToggle} className='flex sm:hidden items-center gap-2 justify-start'>
                        All Categories
                        <img className={`transition-all ${openCategries ? 'rotate-180' : ''} `} src={assets.arrowIcon} alt="" />
                    </button>

                    <ul className={`transition-all ${openCategries ? 'flex' : 'hidden'} absolute top-7 sm:relative sm:top-0 border border-gray-300 sm:border-none shadow-2xl sm:shadow-none sm:flex flex-col w-35 md:w-30 lg:w-35 gap-[2px] text-gray-600 bg-white`}>
                        {
                            categories.map((category) => (
                                <Link
                                    key={category.id}
                                    to={`/category/${category.id}`}
                                    className='cursor-pointer sm:hover:bg-gray-300 py-1 px-2 rounded sm:py-1 lg:px-2 text-[12px] md:text-[11px] lg:text-sm'
                                >
                                    {category.name}
                                </Link>
                            ))
                        }
                    </ul>

                    {/* Mobile Search  */}

                    <div className='flex flex-row-reverse items-center sm:hidden relative'>
                        <img className={`w-4 absolute right-1 cursor-pointer`} src={assets.SearchIcon} alt="" />
                        <input className={`outline-none border border-gray-300 p-0.5 w-45`} type="search" placeholder='search..'/>
                    </div>
                </div>

                <img className='w-full md:w-[55%] lg:w-[60%] h-auto md:h-56 lg:h-80 object-center object-cover' src={assets.Banner1} alt="" />

                <div className='hidden sm:flex flex-col sm:w-50 gap-2'>
                    <div className='flex flex-col bg-[rgba(227,240,255,1)] md:p-2 lg:p-4 rounded gap-3'>
                        <div className='flex gap-1 items-center justify-center'>
                            <img className='md:w-8 lg:w-12' src={assets.ProfileIcon2} alt="" />
                            <p className='md:text-[11px] lg:text-[16px] leading-4 text-gray-600 font-medium'>Hi, user let's get started</p>
                        </div>
                        <button className='bg-[rgba(18,127,255,1)] md:text-[11px] lg:text-[15px] text-gray-50 p-1 rounded'>Join Now</button>
                        <button className='md:text-[11px] lg:text-[15px] bg-white rounded p-1'>Log in</button>
                    </div>
                    <p className='bg-[rgba(243,131,50,1)] md:p-2 lg:p-3 text-white md:text-[11px] lg:text-[16px] rounded'>Get Us $10 off with a new supplier</p>
                    <p className='bg-[rgba(85,189,195,1)] md:p-2 lg:p-3 text-white md:text-[11px] lg:text-[16px] rounded'>Send quotes with supplier preferences</p>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
