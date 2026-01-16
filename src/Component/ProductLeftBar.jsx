import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import CategoryItemDetail from './CategoryItemDetail'
import { assets } from '../assets/assets'
import { useParams } from 'react-router-dom'



const ProductLeftBar = () => {

    const { products, gridView, setGridView } = useContext(ShopContext)
    const [filterProducts, setFilterProducts] = useState([])
    const [itemPerPage, setItemPerPage] = useState(5)
    const [currentPage, setCurrentPage] = useState(1)

    const toggleView = () => {
        setGridView(!gridView)
        console.log(toggleView)
    }

    const totalPages = Math.ceil(filterProducts.length / itemPerPage)
    const startIndex = (currentPage - 1) * itemPerPage
    const endIndex = startIndex + itemPerPage
    const currentProducts = filterProducts.slice(startIndex, endIndex)

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page)
        }
    }

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
        <div className='flex flex-col w-[92%] md:w-[70%] lg:w-[78%] items-center justify-between ml-4 sm:ml-0 mt-2 md:mt-[-4px] lg:mt-[-30px]'>
            <div className='flex items-center justify-between w-[100%] bg-white p-3 border border-gray-300 rounded'>
                <p className='text-[10px] sm:text-sm text-gray-600'>{filterProducts.length} items in<span className='text-[10px] sm:text-[15px] text-gray-800 font-medium'> {getCategoryDisplayName(categoryId)}</span></p>
                <div className='flex items-center justify-between gap-2 sm:gap-6'>
                    <div className='flex items-center gap-1 cursor-pointer'>
                        <input type="checkbox" />
                        <p className='text-gray-600 font-medium sm:text-[16px] text-[8px]'>Verified only</p>
                    </div>
                    <select className='border p-0.5 sm:p-1 border-gray-400 text-[8px] sm:text-sm font-medium text-gray-600 cursor-pointer'>
                        <option>Featured</option>
                    </select>
                    <div className='flex items-center gap-1 sm:gap-2 border border-gray-300 p-1 cursor-pointer'>
                        <img onClick={() => setGridView(true)} className='w-2 sm:w-5' src={assets.GridIcon1} alt="" />
                        <img onClick={() => setGridView(false)} className='w-2 sm:w-5.5' src={assets.GridIcon2} alt="" />
                    </div>
                </div>
            </div>
            <div className={`w-full mb-2 sm:mb-5 ${gridView ? 'grid grid-cols-2 gap-4' : 'flex flex-col'}`}>
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
            <div className='flex items-center gap-4 mt-2 lg:ml-235'>
                <select
                    value={itemPerPage}
                    onChange={(e) => {
                        setItemPerPage(Number(e.target.value))
                        setCurrentPage(1)
                    }}
                    className='bg-white p-2 cursor-pointer outline-none'>
                    <option value={5}>Show 5</option>
                    <option value={10}>Show 10</option>
                    <option value={15}>Show 15</option>
                    <option value={20}>Show 20</option>
                </select>
                <ul className='flex items-center gap-4 bg-white p-2 cursor-pointer'>
                    <img
                        onClick={() => handlePageChange(currentPage - 1)}
                        className='rotate-90' src={assets.arrowIcon} alt="" />
                    {[...Array(totalPages)].map((_, i) => (
                        <li
                            key={i}
                            onClick={() => handlePageChange(i + 1)}
                            className={`${currentPage === i + 1 ? 'text-gray-500 font-medium' : ''}`}
                        >
                            {i + 1}
                        </li>
                    ))}
                    <img
                        onClick={() => handlePageChange(currentPage + 1)}
                        className='rotate-270' src={assets.arrowIcon} alt="" />
                </ul>
            </div>
        </div>
    )
}

export default ProductLeftBar
