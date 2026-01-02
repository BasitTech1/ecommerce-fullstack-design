import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import RecommendProductDetails from './RcommendProductDetail'



const RecommedSection = () => {

    const {products} = useContext(ShopContext)
    const [recommedProduct, SetRcommedProduct] = useState([])

    useEffect(()=>{
        SetRcommedProduct(products.slice(14, 24))
    },[])


    return (
        <div className='mt-4 px-6 sm:mt-14 sm:px-18 w-full'>
            <h2 className='mb-2 sm:mb-8 text-[15px] sm:text-2xl font-medium'>Recommended Items</h2>
            <div className='grid grid-cols-2 gap-3 sm:grid sm:grid-cols-5 items-center justify-center sm:gap-4'>
                {
                    recommedProduct.map((item, index)=>(
                        <RecommendProductDetails
                            key={index}
                            id={item.id}
                            image={item.image}
                            price={item.price}
                            name={item.name}
                        />   
                    ))
                }
            </div>
        </div>
    )
}

export default RecommedSection
