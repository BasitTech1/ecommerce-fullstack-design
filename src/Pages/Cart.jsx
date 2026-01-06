import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'

const Cart = () => {

    const { products, delivery_fee, currency, cartItems, updateQuantity, getCartCount, getCartAmount } = useContext(ShopContext)
    const [cartData, setCartData] = useState([])

    useEffect(() => {
        const tempData = []
        for (const items in cartItems) {
            for (const item in cartItems[items]) {
                if (cartItems[items][item] > 0) {
                    tempData.push({
                        id: items,
                        size: item,
                        quantity: cartItems[items][item]
                    })
                }
            }
        }
        setCartData(tempData)
    }, [cartItems])

    return (
        <div className=''>
            <h2 className='text-[14px] md:text-[16px] lg:text-[20px] font-semibold ml-5 md:ml-11 lg:ml-14 mb-4'>My Cart ({getCartCount()})</h2>
            <div className='flex flex-col sm:flex sm:flex-row items-start sm:items-center sm:justify-between w-full gap-10 min-h-auto relative'>
                {/* cart item  */}
                <div className='flex flex-col items-start w-[20%] md:w-[60%] lg:w-[70%]'>
                    {
                        cartData.map((item, index) => {
                            const productData = products.find((product) => product.id === item.id)
                            return (
                                <div className='flex items-center gap-4 md:gap-2 lg:gap-14 w-81 sm:w-full bg-white mb-0 sm:mb-4 ml-5 md:ml-10 lg:ml-14 p-2 lg:p-4 border border-gray-300' key={index}>
                                    <img className='w-18 lg:w-25 lg:ml-4' src={productData.image[0]} alt="" />
                                    <div className='flex flex-col items-start gap-1 w-35 sm:w-100'>
                                        <p className='text-[12px] md:text-[14px] lg:text-[16px] font-medium text-gray-600'>{productData.name}</p>
                                        <p className='text-[12px] lg:text-[15px] font-medium text-gray-700'>Size: <span className='text-black'>{item.size}</span></p>
                                        <button onClick={() => updateQuantity(item.id, item.size, 0)} className='border px-2 py-1 text-[10px] lg:text-[14px] text-red-700 cursor-pointer'>Remove</button>
                                    </div>
                                    <div className='ml-0 sm:ml-30'>
                                        <input onChange={(e) => e.target.value === '' || e.target.value === '0' ? null : updateQuantity(item.id, item.size, Number(e.target.value))} className='border max-w-10 sm:max-w-20 px-1 sm:px-2 py-0.5 sm:py-1 outline-none' type="number" min={1} defaultValue={item.quantity} />
                                        <p className='mt-2 sm:mt-4 font-semibold text-gray-700'>{currency}{productData.price}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className={`flex flex-col gap-1 bg-white w-[90%] md:w-[28%] lg:w-[22%] sm:mr-2 mt-[-20px] sm:mt-0 p-3 sm:p-2 sm:mb-2 border border-gray-300 sm:absolute sm:right-0 sm:top-0 ml-5 sm:ml-0`}>
                    <div className='flex items-center gap-33 md:gap-20 lg:gap-36'>
                        <p className='font-medium text-gray-400'>Subtotal:</p>
                        <p className='font-medium text-gray-400'>{currency}{getCartAmount()}.00</p>
                    </div>
                    <div className='flex items-center gap-25 md:gap-20 lg:gap-36 border-b-2 border-gray-300 pb-2'>
                        <p className='font-medium text-gray-400'>Shipping Fee:</p>
                        <p className='font-medium text-gray-400'>{currency} {delivery_fee}</p>
                    </div>
                    <div className='flex gap-38 md:gap-24 lg:gap-41'>
                        <b>Total:</b>
                        <b>{currency}{getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee}.00</b>
                    </div>
                    <button className='bg-blue-500 p-1 text-white font-medium cursor-pointer hover:bg-blue-400 transition-all'>CHEKCOUT</button>
                </div>
            </div>

            <div className='flex flex-row items-center gap-2 ml-0 mb-0 mt-2 sm:gap-4  sm:w-full sm:mt-14 sm:mb-4 w-full p-4 sm:p-4'>
                <div className='flex items-center gap-1 sm:gap-4'>
                    <img className='w-8 p-2 sm:w-12 bg-gray-200 sm:p-4 rounded-full' src={assets.secure} alt="" />
                    <div>
                        <h2 className='text-[10px] md:text-[15px] lg:text-[18px] font-medium text-gray-500'>Secure payment</h2>
                        <p className='text-[9px] md:text-[12px] lg:text-[15px] mt-[-2px] sm:mt-[-6px] text-gray-400'>Have you ever finally just</p>
                    </div>
                </div>
                <div className='flex items-center gap-1 sm:gap-4 md:ml-4 lg:ml-0 mt-4 mb-4'>
                    <img className='w-8 p-2 sm:w-12 bg-gray-200 sm:p-4 rounded-full' src={assets.Support} alt="" />
                    <div>
                        <h2 className='text-[10px] md:text-[14px] lg:text-[18px] font-medium text-gray-500'>Customer Support</h2>
                        <p className='text-[9px] sm:text-[15px] mt-[-1px] sm:mt-[-6px] text-gray-400'>Have you ever finally just</p>
                    </div>
                </div>
                <div className='flex items-center gap-1 lg:gap-4 md:ml-4 lg:ml-0 mt-4 mb-4'>
                    <img className='w-12 object-cover bg-gray-200 p-4 rounded-full' src={assets.Shipping} alt="" />
                    <div>
                        <h2 className='text-[10px] md:text-[14px] lg:text-[18px] font-medium text-gray-500'>Free Delivery</h2>
                        <p className='text-[9px] sm:text-[15px] mt-[-1px] sm:mt-[-6px] text-gray-400'>Have you ever finally just</p>
                    </div>
                </div>
            </div>

            {/* slider  */}

            <div className='flex items-center w-full justify-center mb-1 sm:mb-3'>
                <div className='flex items-center justify-between bg-blue-500 w-[100%] m-3 p-2 sm:m-6 sm:p-4'>
                    <div>
                        <h2 className='text-[14px] sm:text-2xl text-white font-semibold'>Super discount on more than 100 USD</h2>
                        <p className='text-[12px] sm:text-[14px] text-gray-300'>Have you ever finally just write dummy info</p>
                    </div>
                    <button className='bg-yellow-500 p-1 sm:p-1.5 rounded text-[12px] sm:text-[15px] font-medium cursor-pointer'>Shop Now</button>
                </div>
            </div>
        </div>
    )
}

export default Cart
