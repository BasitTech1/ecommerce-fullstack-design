import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShopContext'
import SectionProductInfo from './SectionProductInfo'




const Section2 = () => {
  const { products, searchItem } = useContext(ShopContext)
  const [displayProduct, setDisplayProduct] = useState([])
  const [displayProduct2, setDisplayProduct2] = useState([])

  const filteredDealsProducts1 = displayProduct.filter(products =>
    products.name.toLowerCase().includes(searchItem.toLowerCase())
  )

  const filteredDealsProducts2 = displayProduct2.filter(products =>
    products.name.toLowerCase().includes(searchItem.toLowerCase())
  )


  useEffect(() => {
    setDisplayProduct(products.slice(6, 14))
  }, [])

  useEffect(() => {
    setDisplayProduct2(products.slice(12, 20))
  }, [])

  return (
    <div className='mt-3 px-6 md:mt-5 md:px-10 lg:mt-10 lg:px-18 w-full flex flex-col gap-4'>
      <div className='bg-white flex flex-col lg:flex lg:flex-row items-start gap-2 rounded border border-gray-300'>
        <div>
          <div className='relative w-full'>
            <img className='w-100 md:w-3xl md:h-60 lg:h-auto object-cover lg:w-75 rounded-tl rounded-bl' src={assets.SideBanner1} alt="" />
            <div className='absolute top-8 left-4'>
              <p className='text-4xl md:font-semibold mt-10 sm:mt-0 leading-9 lg:text-[20px] lg:leading-5 lg:font-medium'>Home and <br /> Outdoor</p>
              <button className='mt-6 lg:mt-4 bg-white p-3 lg:p-2 font-medium rounded sm:cursor-pointer text-xl lg:text-sm hover:text-gray-400'>Source Now</button>
            </div>
          </div>
        </div>

        {/* Rendering Products  */}
        <div className='grid grid-cols-2 gap-3 sm:grid sm:grid-cols-4 sm:gap-6 w-[100%]'>
          {
            filteredDealsProducts1.map((item, index) => (
              <SectionProductInfo
                key={index}
                id={item.id}
                image={item.image}
                name={item.name}
                price={item.price} />
            ))
          }
        </div>
      </div>
      <div className='bg-white flex flex-col lg:flex lg:flex-row items-start gap-2 rounded border border-gray-300'>
        <div>
          <div className='relative w-full'>
            <img className='w-100 md:w-3xl md:h-60 lg:h-auto object-cover lg:w-75 rounded-tl rounded-bl' src={assets.SideBanner2} alt="" />
            <div className='absolute top-8 left-4'>
              <p className='text-4xl md:font-semibold mt-10 sm:mt-0 leading-9 lg:text-[20px] lg:leading-5 lg:font-medium'>Consumer <br /> electronics and <br />gadets</p>
              <button className='mt-6 lg:mt-4 bg-white p-3 lg:p-2 font-medium rounded sm:cursor-pointer text-xl lg:text-sm hover:text-gray-400'>Source Now</button>
            </div>
          </div>
        </div>

        <div className='grid grid-cols-2 gap-3 sm:grid sm:grid-cols-4 sm:gap-6 w-[100%]'>
          {
            filteredDealsProducts2.map((item, index) => (
              <SectionProductInfo
                key={index}
                id={item.id}
                image={item.image}
                name={item.name}
                price={item.price} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Section2
