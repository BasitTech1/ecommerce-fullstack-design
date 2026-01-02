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
            <h2 className='text-[20px] font-semibold ml-14 mb-4'>My Cart ({getCartCount()})</h2>
            <div className='flex items-center justify-between w-full gap-10 min-h-auto relative'>
                {/* cart item  */}
                <div className='flex flex-col items-start w-[70%]'>
                    {
                        cartData.map((item, index) => {
                            const productData = products.find((product) => product.id === item.id)
                            console.log(productData)
                            return (
                                <div className='flex items-center gap-14 w-full bg-white mb-4 ml-14 p-4 border border-gray-300' key={index}>
                                    <img className='w-25 ml-4' src={productData.image[0]} alt="" />
                                    <div className='flex flex-col items-start gap-1 w-100'>
                                        <p className='text-[16px] font-medium text-gray-600'>{productData.name}</p>
                                        <p className='text-[15px] font-medium text-gray-700'>Size: <span className='text-black'>{item.size}</span></p>
                                        <button onClick={() => updateQuantity(item.id, item.size, 0)} className='border px-2 py-1 text-[14px] text-red-700 cursor-pointer'>Remove</button>
                                    </div>
                                    <div className='ml-30'>
                                        <input onChange={(e) => e.target.value === '' || e.target.value === '0' ? null : updateQuantity(item.id, item.size, Number(e.target.value))} className='border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1 outline-none' type="number" min={1} defaultValue={item.quantity} />
                                        <p className='mt-4 font-semibold text-gray-700'>{currency}{productData.price}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className={`flex flex-col gap-1 bg-white w-[22%] mr-10 p-2 mb-2 border border-gray-300 absolute right-0 top-0`}>
                    <div className='flex items-center gap-36'>
                        <p className='font-medium text-gray-400'>Subtotal:</p>
                        <p className='font-medium text-gray-400'>{currency}{getCartAmount()}.00</p>
                    </div>
                    <div className='flex items-center gap-28 border-b-2 border-gray-300 pb-2'>
                        <p className='font-medium text-gray-400'>Shipping Fee:</p>
                        <p className='font-medium text-gray-400'>{currency} {delivery_fee}</p>
                    </div>
                    <div className='flex gap-41'>
                        <b>Total:</b>
                        <b>{currency}{getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee}.00</b>
                    </div>
                    <button className='bg-blue-500 p-1 text-white font-medium cursor-pointer hover:bg-blue-400 transition-all'>CHEKCOUT</button>
                </div>
            </div>

            <div className='flex items-center gap-10 ml-14 mt-14 mb-4'>
                <div className='flex items-center gap-4'>
                    <img className='w-12 bg-gray-200 p-4 rounded-full' src={assets.secure} alt="" />
                    <div>
                        <h2 className='text-[18px] font-medium text-gray-500'>Secure payment</h2>
                        <p className='text-[15px] mt-[-6px] text-gray-400'>Have you ever finally just</p>
                    </div>
                </div>
                <div className='flex items-center gap-6 ml-14 mt-4 mb-4'>
                    <img className='w-12 object-cover bg-gray-200 p-4 rounded-full' src={assets.Support} alt="" />
                    <div>
                        <h2 className='text-[18px] font-medium text-gray-500'>Customer Support</h2>
                        <p className='text-[15px] mt-[-6px] text-gray-400'>Have you ever finally just</p>
                    </div>
                </div>
                <div className='flex items-center gap-6 ml-14 mt-4 mb-4'>
                    <img className='w-12 object-cover bg-gray-200 p-4 rounded-full' src={assets.Shipping} alt="" />
                    <div>
                        <h2 className='text-[18px] font-medium text-gray-500'>Free Delivery</h2>
                        <p className='text-[15px] mt-[-6px] text-gray-400'>Have you ever finally just</p>
                    </div>
                </div>
            </div>

            {/* slider  */}

            <div className='flex items-center w-full justify-center mb-3'>
                <div className='flex items-center justify-between bg-blue-500 w-[100%] m-6 p-4'>
                    <div>
                        <h2 className='text-2xl text-white font-semibold'>Super discount on more than 100 USD</h2>
                        <p className='text-[14px] text-gray-300'>Have you ever finally just write dummy info</p>
                    </div>
                    <button className='bg-yellow-500 p-1.5 rounded text-[15px] font-medium cursor-pointer'>Shop Now</button>
                </div>
            </div>
        </div>
    )
}

export default Cart
