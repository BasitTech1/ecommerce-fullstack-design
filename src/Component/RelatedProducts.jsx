import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import ProductIntro from './ProductIntro'

const RelatedProducts = ({category}) => {

    const {products} = useContext(ShopContext)
    const [related, setRelated] = useState([])

    useEffect(()=>{
        if (products.length > 0) {
            let productsCopy = products.slice()
            productsCopy = productsCopy.filter((item) => category === item.category)
            
            setRelated(productsCopy.slice(0, 5))
        }
    }, [products])

  return (
    <div className='flex flex-col m-6 bg-white p-6'>
      <div>
        <h2 className='text-[18px] font-medium'>RELATED PRODUCTS</h2>
      </div>
      <div className='flex items-center mt-5'>
        {
            related.map((item, index) =>(
                <ProductIntro
                    key={index}
                    id={item.id}
                    name={item.name}
                    price={item.price}
                    image={item.image}
                />
            ))
        }
      </div>
    </div>
  )
}

export default RelatedProducts
