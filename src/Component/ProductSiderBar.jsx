import React, { useState } from 'react'
import { assets } from '../assets/assets'

const ProductSiderBar = () => {

  const [showCategory, setShowCategory] = useState(false)
  const [showBrand, setShowBrand] = useState(false)
  const [showFeature, setShowFeature] = useState(false)
  const [showPrice, setShowPrice] = useState(false)
  const [showCondition, setShowCondition] = useState(false)

  const expandCategory = () => {
    setShowCategory(!showCategory)
  }

  const expandBrand = () => {
    setShowBrand(!showBrand)
  }

  const expandFeature = () => {
    setShowFeature(!showFeature)
  }

  const expandPrice = () => {
    setShowPrice(!showPrice)
  }

  const expanCondition = () => {
    setShowCondition(!showCondition)
  }

  return (
    <div className='hidden sm:flex ml-2 sm:flex items-start sm:ml-14 gap-2 justify-start sm:flex-col w-[10%] z-10'>
      <hr className='text-gray-300 sm:w-35 sm:h-0.5' />
      <div>
        <h2 onClick={expandCategory} className='flex items-center gap-3 sm:gap-12 text-[12px] sm:text-[18px] font-medium text-gray-900'>
          Category
          <img className={`cursor-pointer ${showCategory ? 'rotate-180 transition-all' : ''} w-2 sm:w-3`} src={assets.arrowIcon} alt="" />
        </h2>
        <div className={`bg-white sm:bg-gray-100 p-2 sm:p-0 transition-all duration-300 overflow-hidden ${showCategory ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <ul className='flex flex-col gap-2 text-gray-500 sm:text-[15px] cursor-pointer'>
            <li>Mobile accessory</li>
            <li>Electronics</li>
            <li>Smartphones</li>
            <li>Modern Tech</li>
          </ul>
          <button className='text-[rgba(13,110,253,1)] mt-1 sm:mt-3 text-[14px]'>See all</button>
        </div>
      </div>

      <hr className='text-gray-300 sm:w-35 sm:h-0.5' />
      <div className='ml-[-25px] sm:ml-0'>
        <h2 onClick={expandBrand} className='flex items-center gap-1 sm:gap-17 text-[12px] sm:text-[18px] font-medium text-gray-900 cursor-pointer'>
          Brands
          <img className={`${showBrand ? 'rotate-180 transition-all' : ''}`} src={assets.arrowIcon} alt="" />
        </h2>
        <div className={`transition-all duration-300 overflow-hidden ${showBrand ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <ul className='flex flex-col'>
            <li className='flex gap-3 text-gray-500'>
              <input type="checkbox" />
              <p>Samsung</p>
            </li>
            <li className='flex gap-3 text-gray-500'>
              <input type="checkbox" />
              <p>Apple</p>
            </li>
            <li className='flex gap-3 text-gray-500'>
              <input type="checkbox" />
              <p>Huawei</p>
            </li>
            <li className='flex gap-3 text-gray-500'>
              <input type="checkbox" />
              <p>Pocco</p>
            </li>
            <li className='flex gap-3 text-gray-500'>
              <input type="checkbox" />
              <p>Lenovo</p>
            </li>
          </ul>
          <button className='text-[rgba(13,110,253,1)] mt-3'>See all</button>
        </div>
      </div>

      <hr className='text-gray-300 sm:w-35 sm:h-0.5' />
      <div className='ml-[-38px] sm:ml-0'>
        <h2 onClick={expandFeature} className='flex items-center gap-1 sm:gap-14 text-[12px] sm:text-[18px] font-medium text-gray-900 cursor-pointer'>
          Features
          <img className={`transition-all duration-300 overflow-hidden ${showFeature ? 'rotate-180' : ''}`} src={assets.arrowIcon} alt="" />
        </h2>
        <div className={`transition-all duration-300 overflow-hidden ${showFeature ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <ul className='flex flex-col'>
            <li className='flex gap-3 text-gray-500'>
              <input type="checkbox" />
              <p>Metallic</p>
            </li>
            <li className='flex gap-3 text-gray-500'>
              <input type="checkbox" />
              <p>Plastic cover</p>
            </li>
            <li className='flex gap-3 text-gray-500'>
              <input type="checkbox" />
              <p>8GB Ram</p>
            </li>
            <li className='flex gap-3 text-gray-500'>
              <input type="checkbox" />
              <p>Super power</p>
            </li>
            <li className='flex gap-3 text-gray-500'>
              <input type="checkbox" />
              <p>Large Memory</p>
            </li>
          </ul>
          <button className='text-[rgba(13,110,253,1)] mt-3'>See all</button>
        </div>
      </div>

      <hr className='text-gray-300 sm:w-35 sm:h-0.5' />
      <div className='ml-[-28px] sm:ml-0'>
        <h2 onClick={expandPrice} className='flex items-center gap-1 sm:gap-21 text-[12px] sm:text-[18px] font-medium text-gray-900 cursor-pointer'>
          Price
          <img className={`${showPrice ? 'rotate-180' : ''} w-2 sm:w-3`} src={assets.arrowIcon} alt="" />
        </h2>
        <form className={`transition-all duration-300 overflow-hidden grid grid-cols-2 mt-1 ${showPrice ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className='flex flex-col'>
            <label className='text-[16px] text-gray-400 font-medium'>Min</label>
            <input className='border border-gray-400 w-12 p-1' type="number" placeholder='0' />
          </div>
          <div>
            <label className='text-[16px] text-gray-400 font-medium'>Max</label>
            <input className='border border-gray-400 w-16 p-1' type="number" placeholder='1000' />
          </div>
          <button className='w-35 mt-3 p-1 text-[15px] text-blue-500 font-medium cursor-pointer border border-gray-400'>Apply</button>
        </form>
      </div>

      <hr className='text-gray-300 sm:w-35 sm:h-0.5' />
      <div>
        <h2 onClick={expanCondition} className='flex items-center sm:gap-12 gap-1 text-[12px] sm:text-[18px] font-medium text-gray-900 cursor-pointer'>
          Condition
          <img className={`${showCondition ? 'rotate-180' : ''}`} src={assets.arrowIcon} alt="" />
        </h2>
        <div className={`transition-all duration-300 overflow-hidden grid grid-cols-2 mt-1 ${showCondition ? 'w-60 max-h-96 opacity-100' : 'max-h-0 opacity-0 w-60'}`}>
          <ul className='flex flex-col'>
            <li className='flex gap-2 text-gray-500'>
              <input type="checkbox" />
              <p>Any</p>
            </li>
            <li className='flex gap-2 text-gray-500'>
              <input type="checkbox" />
              <p>Refurbished</p>
            </li>
            <li className='flex gap-2 text-gray-500'>
              <input type="checkbox" />
              <p>Brand new</p>
            </li>
            <li className='flex gap-2 text-gray-500'>
              <input type="checkbox" />
              <p>Old item</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ProductSiderBar
