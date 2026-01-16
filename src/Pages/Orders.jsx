import React, { useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext'

const Orders = () => {

    const { currency } = useContext(ShopContext)
    const [orderData, setOrderData] = useState([])

    return (
        <div className='flex flex-col ml-18'>
            <h1 className='text-xl sm:text-3xl font-light mb-2 sm:mb-5 text-gray-600'>My <span className='font-medium text-blue-600'>Orders</span> </h1>
            <div>
                {
                    orderData.map((item, index) => (
                        <div key={index}>
                            <img src={item.image[0]} alt="" />
                            <div>
                                <p>{item.name}</p>
                                <div>
                                    <p>{currency}{item.price}</p>
                                    <p>Quantity: {item.quantity}</p>
                                    <p>Size: {item.size}</p>
                                </div>
                                <p>Date: <span>{new Date(item.date).toDateString()}</span></p>
                                <p>Payment: <span>{item.paymentMethod}</span></p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Orders
