import React from 'react'
import ProductSiderBar from '../Component/ProductSiderBar'
import ProductLeftBar from '../Component/ProductLeftBar'
import Newslette from '../Component/Newslette'
import { Link, useParams } from 'react-router-dom'
import { assets } from '../assets/assets'

const ProductList = () => {

  const { categoryId } = useParams()
  const getCategoryName = (id) => {
    const categoryMap = {
      'automobiles': 'Automobiles',
      'clothes': 'Clothes and wear',
      'home': 'Home interiors',
      'tech': 'Computer and Tech',
      'tools': 'Tools, equipments',
      'sports': 'Sports and Outdoor',
      'animals': 'Animal and Pets',
      'machinery': 'Machinery Tools',
      'more': 'More Category'
    }
    return categoryMap[id] || 'Products'
  }

  const categoryName = getCategoryName(categoryId)


  return (
    <div className='flex flex-col'>
      <div className='flex items-center ml-4 mb-2 md:ml-10 lg:ml-14 sm:mb-4 gap-2 text-[13px] font-medium text-gray-400'>
        <Link className='cursor-pointer' to={'/'}>Home</Link>
        <img className='rotate-270 w-2' src={assets.arrowIcon} alt="" />
        <Link className='cursor-pointer' to={`/category/${categoryId || 'products'}`}>{categoryName}</Link>
      </div>
      <div className='flex items-start lg:gap-8 md:gap-18 w-full'>
        <ProductSiderBar />
        <ProductLeftBar categoryId={categoryId} />
      </div>
      <Newslette />
    </div>
  )
}

export default ProductList
