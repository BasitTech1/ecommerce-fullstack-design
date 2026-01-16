import React, { useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'

const Placeorder = () => {

    const [method, setMethod] = useState('cod')
    const { delivery_fee, currency, getCartAmount } = useContext(ShopContext)

    return (
        <form className='flex flex-col lg:flex-row gap-10 sm:gap-30 mb-3 sm:mb-6 pl-6 sm:pl-17'>
            <div className='flex flex-col gap-3'>
                <h1 className='text-xl sm:text-3xl font-light mb-2 sm:mb-5 text-gray-600'>Delivery <span className='font-medium text-blue-600'>Information</span></h1>
                <div className='flex gap-4'>
                    <input className='border w-40 sm:w-80 border-blue-400 outline-none px-2 py-1' type="text" placeholder='First Name' />
                    <input className='border w-40 sm:w-80 border-blue-400 outline-none px-2 py-1' type="text" placeholder='Last Name' />
                </div>
                <input className='border w-[92%] md:w-[94%] lg:w-[100%] border-blue-400 outline-none px-2 py-1' type="email" placeholder='email address' />
                <input className='border w-[92%] md:w-[94%] lg:w-[100%] border-blue-400 outline-none px-2 py-1' type="text" placeholder='street' />
                <div className='flex gap-4'>
                    <input className='border w-40 sm:w-80 border-blue-400 outline-none px-2 py-1' type="text" placeholder='City' />
                    <input className='border w-40 sm:w-80 border-blue-400 outline-none px-2 py-1' type="text" placeholder='State' />
                </div>
                <div className='flex gap-4'>
                    <input className='border w-40 sm:w-80 border-blue-400 outline-none px-2 py-1' type="Number" placeholder='ZipCode' />
                    <input className='border w-40 sm:w-80 border-blue-400 outline-none px-2 py-1' type="text" placeholder='Country' />
                </div>
                <input className='border w-[92%] md:w-[94%] lg:w-[100%] border-blue-400 outline-none px-2 py-1' type="Number" placeholder='Phone' />
            </div>
            <div className='flex flex-col w-full'>
                <div className={`flex flex-col gap-1 bg-white w-[92%] md:w-[94%] lg:w-[80%] sm:mr-0 mt-[-20px] md:mt-[-100px] lg:mt-16 p-3 sm:p-2 sm:mb-2 border border-gray-300 h-38`}>
                    <div className='flex items-center gap-45 md:gap-20 lg:gap-95'>
                        <p className='font-medium text-gray-400'>Subtotal:</p>
                        <p className='font-medium text-gray-400'>{currency}{getCartAmount()}.00</p>
                    </div>
                    <div className='flex items-center gap-37 md:gap-20 lg:gap-87 border-b-2 border-gray-300 pb-2'>
                        <p className='font-medium text-gray-400'>Shipping Fee:</p>
                        <p className='font-medium text-gray-400'>{currency} {delivery_fee}</p>
                    </div>
                    <div className='flex gap-50 md:gap-24 lg:gap-100'>
                        <b>Total:</b>
                        <b>{currency}{getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee}.00</b>
                    </div>
                    <Link to={'/orders'} className='flex item-center justify-center bg-blue-500 p-1 text-white font-medium cursor-pointer hover:bg-blue-400 transition-all'>CHEKCOUT</Link>
                </div>

                <div className='mt-4 sm:mt-0'>
                    <h1 className='text-xl sm:text-2xl font-light mb-2 sm:mb-3 text-gray-600'>Payment <span className='font-medium text-blue-600'>Method</span></h1>
                    <div className='flex items-center pr-8 sm:pr-0 gap-2 sm:gap-5 w-full cursor-pointer'>
                        <div onClick={() => setMethod('stripe')} className='flex items-center justify-between border border-gray-400 p-2 w-33'>
                            <p className={`min-w-3 h-3 sm:min-w-3.5 sm:h-3.5 border rounded-full ${method === 'stripe' ? 'bg-green-400' : ''}`}></p>
                            <img className='w-12 sm:w-18' src={assets.stripeIcon} alt="" />
                        </div>
                        <div onClick={() => setMethod('easypasia')} className='flex items-center justify-between border border-gray-400 py-2.5 sm:py-3 px-2 w-33 cursor-pointer'>
                            <p className={`min-w-3 h-3 sm:min-w-3.5 sm:h-3.5 border rounded-full ${method === 'easypasia' ? 'bg-green-400' : ''}`}></p>
                            <img className='w-16 sm:w-22' src={assets.easypasiaIcon} alt="" />
                        </div>
                        <div onClick={() => setMethod('cod')} className='flex items-center justify-between border border-gray-400 py-3 px-2 w-50'>
                            <p className={`min-w-3 h-3 sm:min-w-3.5 sm:h-3.5 border rounded-full ${method === 'cod' ? 'bg-green-400' : ''}`}></p>
                            <p className='text-[10px] sm:text-[15px] font-medium text-gray-500'>CASH ON DELIVERY</p>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Placeorder
