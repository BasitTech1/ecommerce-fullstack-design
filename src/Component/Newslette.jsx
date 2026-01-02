import React from 'react'
import { assets } from '../assets/assets'

const Newslette = () => {
    return (
        <div className='flex items-center justify-center flex-col mt-16 bg-green-50 gap-3.5 p-4'>
            <h2 className='text-[15px] sm:text-xl font-medium'>Subscribe on our newsletter</h2>
            <p className='mt-[-15px] sm:mt-[-10px] text-[10px] sm:text-sm text-gray-600'>Get daily news on upcoming offers from many suppliers all over the world</p>
            <form className='flex gap-1.5'>
                <input className='border border-gray-300 p-1 outline-none' type="email" placeholder='email'/>
                <button className='bg-[rgba(18,127,255,1)] text-[12px] font-medium text-white cursor-pointer hover:bg-[#1281ffe2] transition-all p-1'>Subscribe</button>
            </form>
        </div>
    )
}

export default Newslette
