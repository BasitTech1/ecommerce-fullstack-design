import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShopContext'
import SectionProductInfo from './SectionProductInfo'




const Section2 = () => {
  const { products } = useContext(ShopContext)
  const [displayProduct, setDisplayProduct] = useState([])
  const [displayProduct2, setDisplayProduct2] = useState([])


  useEffect(() => {
    setDisplayProduct(products.slice(6, 14))
  }, [])

  useEffect(() => {
    setDisplayProduct2(products.slice(12, 20))
  }, [])

  return (
    <div className='mt-4 px-6 sm:mt-10 sm:px-18 w-full flex flex-col gap-4'>
      <div className='bg-white flex flex-col sm:flex sm:flex-row items-start gap-2 rounded border border-gray-300'>
        <div>
          <div className='relative'>
            <img className='w-100 sm:w-75 rounded-tl rounded-bl' src={assets.SideBanner1} alt="" />
            <div className='absolute top-8 left-4'>
              <p className='text-4xl mt-10 sm:mt-0 leading-9 sm:text-[20px] sm:leading-5 font-medium'>Home and <br /> Outdoor</p>
              <button className='mt-6 sm:mt-4 bg-white p-3 sm:p-2 font-medium rounded sm:cursor-pointer text-xl sm:text-sm hover:text-gray-400'>Source Now</button>
            </div>
          </div>
        </div>

        {/* Rendering Products  */}
        <div className='grid grid-cols-2 gap-3 sm:grid sm:grid-cols-4 sm:gap-6 w-[100%]'>
          {
            displayProduct.map((item, index) => (
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
      <div className='bg-white flex flex-col sm:flex sm:flex-row items-start gap-2 rounded border border-gray-300'>
        <div>
          <div className='relative'>
            <img className='w-100 sm:w-75 rounded-tl rounded-bl' src={assets.SideBanner2} alt="" />
            <div className='absolute top-8 left-4'>
              <p className='text-[30px] leading-8 sm:text-[20px] sm:leading-5 font-medium'>Consumer <br /> electronics and <br />gadets</p>
              <button className='mt-6 sm:mt-4 bg-white p-3 sm:p-2 font-medium rounded sm:cursor-pointer text-xl sm:text-sm hover:text-gray-400'>Source Now</button>
            </div>
          </div>
        </div>

        <div className='grid grid-cols-2 gap-3 sm:grid sm:grid-cols-4 sm:gap-6 w-[100%]'>
          {
            displayProduct2.map((item, index) => (
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
