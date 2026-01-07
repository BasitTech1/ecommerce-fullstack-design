import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import RecommendProductDetails from './RcommendProductDetail'



const RecommedSection = () => {

    const { products, searchItem } = useContext(ShopContext)
    const [recommedProduct, SetRcommedProduct] = useState([])

    const filteredDealsProducts = recommedProduct.filter(products =>
        products.name.toLowerCase().includes(searchItem.toLowerCase())
    )

    useEffect(() => {
        SetRcommedProduct(products.slice(14, 24))
    }, [])


    return (
        <div className='mt-4 px-6 md:mt-10 lg:mt-14 md:px-8 lg:px-18 w-full'>
            <h2 className='mb-2 lg:mb-8 text-[15px] sm:text-2xl font-medium'>Recommended Items</h2>
            <div className='grid grid-cols-2 gap-3 md:grid md:grid-cols-3 lg:grid lg:grid-cols-5 items-center justify-center md:gap-8 lg:gap-4'>
                {
                    filteredDealsProducts.map((item, index) => (
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
