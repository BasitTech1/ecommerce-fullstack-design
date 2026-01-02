import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import CategoryItemDetail from './CategoryItemDetail'
import { assets } from '../assets/assets'
import { useParams } from 'react-router-dom'



const ProductLeftBar = () => {

    const { products } = useContext(ShopContext)
    const [filterProducts, setFilterProducts] = useState([])

    const { categoryId } = useParams()

    const getCategoryDisplayName = (id) => {
        const categoryNames = {
            'automobiles': 'Automobiles',
            'clothes': 'Clothes and Wear',
            'home': 'Home Interiors',
            'tech': 'Computer and Tech',
            'tools': 'Tools and Equipment',
            'sports': 'Sports and Outdoor',
            'animals': 'Animal and Pets',
            'machinery': 'Machinery Tools',
            'more': 'More Category',
            'mobile': 'Mobile Accessory'
        }
        return categoryNames[id] || 'Products'
    }

    useEffect(() => {
        if (categoryId && products.length > 0) {
            const filtered = products.filter(products =>
                products.category === categoryId ||
                products.categoryId === categoryId ||
                products.categoryName?.toLowerCase().includes(categoryId.toLocaleLowerCase)
            )
            setFilterProducts(filtered)
        }
        else {
            setFilterProducts(products.slice(0, 6))
        }
    }, [categoryId, products])

    return (
        <div className='flex flex-col w-[78%] items-center justify-between'>
            <div className='flex items-center justify-between w-[100%] bg-white p-3 border border-gray-300 rounded'>
                <p className='text-sm text-gray-600'>{filterProducts.length} items in<span className='text-[15px] text-gray-800 font-medium'> {getCategoryDisplayName(categoryId)}</span></p>
                <div className='flex items-center justify-between gap-6'>
                    <div className='flex items-center gap-1 cursor-pointer'>
                        <input type="checkbox" />
                        <p className='text-gray-600 font-medium'>Verified only</p>
                    </div>
                    <select className='border p-1 border-gray-400 text-sm font-medium text-gray-600 cursor-pointer'>
                        <option>Featured</option>
                    </select>
                    <div className='flex items-center gap-2 border border-gray-300 p-1 cursor-pointer'>
                        <img className='w-5' src={assets.GridIcon1} alt="" />
                        <img className='w-5.5' src={assets.GridIcon2} alt="" />
                    </div>
                </div>
            </div>
            <div className='w-full mb-5'>
                {
                    filterProducts.length > 0 ? (
                        filterProducts.map((item, index) => (
                            <CategoryItemDetail
                                key={index}
                                item={item._id}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                                description={item.description}
                                name={item.name}
                                icon1={item.icon1}
                                icon2={item.icon2}
                                icon3={item.icon3}
                                order={item.order}
                                status={item.status}
                            />
                        ))
                    ) :
                        <p className="text-center py-10 text-gray-500">No products found in this category</p>
                }
            </div>
            <div className='flex items-center gap-4 mt-2 ml-235'>
                <select className='bg-white p-2 cursor-pointer'>
                    <option>Show 10</option>
                </select>
                <ul className='flex items-center gap-4 bg-white p-2 cursor-pointer'>
                    <img className='rotate-90' src={assets.arrowIcon} alt="" />
                    <li className='text-gray-500 font-medium'>1</li>
                    <li>2</li>
                    <li>3</li>
                    <img className='rotate-270' src={assets.arrowIcon} alt="" />
                </ul>
            </div>
        </div>
    )
}

export default ProductLeftBar
