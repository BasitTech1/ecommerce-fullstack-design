import React from 'react'
import { assets } from '../assets/assets'

const SliderBanner = () => {
    return (
        <div className='flex flex-col items-center justify-center mt-5 md:mt-10 lg:mt-15 w-full'>
            <div className='w-[85%] sm:w-[90%] rounded bg-linear-to-l from-[rgba(44,124,241,10)] to-[rgba(0,209,255,5)] relative'>
                <img className='w-[100%] h-[30vh] sm:h-auto sm:w-full' src={assets.Banner2} alt="" />
            </div>
            <div className='absolute flex items-start justify-between w-[80%]'>
                <div className='flex flex-col gap-4 md:mt-10 mt-0'>
                    <h2 className='text-[10px] md:text-[20px] leading-3 sm:leading-none lg:text-5xl font-semibold'>An Easy way to send <br /> requests to all suppliers</h2>
                    <p className='text-[10px] leading-3 md:text-[15px] lg:text-[20px] sm:leading-4 text-gray-800'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />Illum iusto repudiandae sequi facilis quasi.</p>
                </div>
                <form className='flex flex-col items-start rounded bg-white ml-2 sm:ml-0 p-2 sm:p-4 w-50 md:w-60 lg:w-100 gap-2 md:gap-3 lg:gap-6 pl-4 md:pl-6 lg:pl-12 cursor-pointer'>
                    <h2 className='text-[12px] md:text-[16px] lg:text-[22px] font-medium'>Send quote to suppliers</h2>
                    <input className='outline-none border p-1.5 w-35 text-[10px] md:text-[13px] lg:text-[16px] md:w-45 lg:w-80 border-gray-300 placeholder:text-gray-800' type="text" placeholder='What item you need' />
                    <textarea cols={25} placeholder='Type more details' className='border border-gray-200 p-1 w-35 lg:p-1.5 md:w-45 lg:w-80'></textarea>
                    <div className='flex items-center gap-2'>
                        <p className='border border-gray-300 p-0.5 w-14 sm:w-20 text-[10px] sm:text-sm text-gray-600'>Quantity</p>
                        <select className='border border-gray-300 p-0.5 text-[10px] lg:text-sm text-gray-600'>
                            <option>Pcs</option>
                        </select>
                    </div>
                    <button className='bg-[rgba(44,124,241,1)] p-1.5 lg:p-3 text-[10px] lg:text-sm text-white font-medium cursor-pointer'>Send Inquiry</button>
                </form>
            </div>
        </div>
    )
}

export default SliderBanner
