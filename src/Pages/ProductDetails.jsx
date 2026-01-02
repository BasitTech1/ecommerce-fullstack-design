import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShopContext'
import { RiStarFill, RiStarHalfFill } from '@remixicon/react'
import RelatedProducts from '../Component/RelatedProducts'

const ProductDetails = () => {

    const { productId } = useParams()
    const { products, currency, addToCart } = useContext(ShopContext)
    const [productData, setProductData] = useState(null)
    const [image, setImage] = useState('')
    const [size, setSize] = useState('')


    const fetchProductData = () => {
        if (products && productId) {
            const foundProduct = products.find(item => item.id === productId)
            if (foundProduct) {
                setProductData(foundProduct)
                setImage(foundProduct.image[0] || '')
            }
            else {
                setProductData(null)
            }
        }
    }

    useEffect(() => {
        fetchProductData()
    }, [productId, products])

    const getCategoryName = (category) => {
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
        return categoryMap[category] || 'Products'
    }

    const categoryName = productData ? getCategoryName(productData.category) : "Products"

    return (
        <div className='w-full'>
            <div className='flex items-center ml-5 mb-0 sm:ml-14 sm:mb-4 gap-2 text-[12px] sm:text-[13px] font-medium text-gray-400'>
                <Link className='cursor-pointer' to={'/'}>Home</Link>
                <img className='rotate-270 w-2' src={assets.arrowIcon} alt="" />
                <Link className='cursor-pointer' to={`/category/${productData?.category || 'products'}`}>{categoryName}</Link>
            </div>

            {productData ? (
                <div className='flex flex-col sm:flex sm:flex-row items-start gap-4 p-3 sm:gap-16 sm:p-6 w-full'>
                    <div className='flex flex-col items-center sm:flex sm:flex-row sm:items-start justify-center gap-8 sm:gap-20 p-3 sm:p-6 w-full bg-white border border-gray-300'>
                        {/* product image  */}
                        <div className='ml-3 sm:ml-7 flex flex-col gap-3'>
                            <div className='w-full border border-gray-300'>
                                <img className='w-100 h-90 object-center object-cover p-2 sm:p-4' src={image} alt="" />
                            </div>
                            <div>
                                {productData.image && productData.image.length > 0 && (
                                    <div className="flex gap-4 overflow-x-auto">
                                        {productData.image.map((img, index) => (
                                            <img
                                                onClick={() => setImage(img)}
                                                key={index}
                                                src={img}
                                                alt={`${productData.name} ${index + 1}`}
                                                className="w-20 object-cover object-center cursor-pointer border p-2 border-gray-300"
                                            />
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* product info  */}
                        <div className='flex flex-col gap-2'>
                            <h1 className='text-2xl font-semibold text-gray-800'>{productData.name}</h1>
                            <div className='flex items-center gap-1'>
                                <RiStarFill className='text-amber-500 w-5' />
                                <RiStarFill className='text-amber-500 w-5' />
                                <RiStarFill className='text-amber-500 w-5' />
                                <RiStarFill className='text-amber-500 w-5' />
                                <RiStarHalfFill className='text-amber-500 w-5' />
                                <p className='text-amber-500 font-medium text-[20px]'>9.3</p>
                                <p className='flex ml-4 gap-2 text-[16px]'>
                                    <img src={assets.CartIcon} alt="" />
                                    <span className='text-[14px] font-medium text-gray-500'>{productData.order}</span>
                                </p>
                            </div>
                            <div className='flex flex-col gap-4'>
                                <p className='bg-red-200 w-25 font-medium text-red-600 p-1 text-4xl'>{currency}{productData.price}</p>
                                <div className='flex flex-col gap-3'>
                                    <div className='flex gap-34 border-b-2 border-gray-300'>
                                        <p className='text-gray-500'>Price:</p>
                                        <p className='text-gray-500 font-medium'>Negotiable</p>
                                    </div>
                                    <div className='flex flex-col gap-2'>
                                        <div className='flex gap-35'>
                                            <p className='text-gray-500'>Type:</p>
                                            <p className='text-gray-500 font-medium'>Classic shoes</p>
                                        </div>
                                        <div className='flex gap-29'>
                                            <p className='text-gray-500'>Material:</p>
                                            <p className='text-gray-500 font-medium'>Plastic material</p>
                                        </div>
                                    </div>
                                    <div className='flex gap-25 border-b-2 border-gray-300'>
                                        <p className='text-gray-500'>Protection:</p>
                                        <p className='text-gray-500 font-medium'>Refund Policy</p>
                                    </div>
                                    <div className='flex flex-col gap-2'>
                                        <div className='flex gap-32'>
                                            <p className='text-gray-500'>Design:</p>
                                            <p className='text-gray-500 font-medium'>Modern</p>
                                        </div>
                                        <div className='flex gap-28'>
                                            <p className='text-gray-500'>Warrenty</p>
                                            <p className='text-gray-500 font-medium'>2 Year full</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* seller profile  */}
                        <div className='flex flex-col gap-2 border p-3 w-80 sm:w-60'>
                            <p className='text-xl leading-5 font-medium'>Supplier <br /> Guanjoi Trading LLC</p>
                            <div className='flex flex-col gap-3'>
                                <div className='flex items-center gap-3'>
                                    <img className='w-5' src={assets.GbFlag} alt="" />
                                    <p className='text-[17px] font-medium text-gray-400'>Great Britain</p>
                                </div>
                                <div className='flex items-center gap-4'>
                                    <img className='w-4' src={assets.Verify} alt="" />
                                    <p className='text-[17px] font-medium text-gray-400'>Verified Seller</p>
                                </div>
                                <div className='flex items-center gap-4'>
                                    <img className='w-4' src={assets.World} alt="" />
                                    <p className='text-[17px] font-medium text-gray-400'>Worldwide shipping</p>
                                </div>
                            </div>
                            <div className='flex flex-col gap-4'>
                                <button className='bg-blue-500 p-2 text-white text-[16px] cursor-pointer'>Send inquiry</button>
                                <button className='border p-2 text-blue-400 cursor-pointer text-[16px]'>Seller's Profile</button>
                            </div>
                            <div>
                                <div className=''>
                                    <div className='flex items-center gap-4 mt-4 ml-14 sm:ml-4'>
                                        {
                                            productData.sizes.map((item, index) => (
                                                <button onClick={() => setSize(item)}
                                                    key={index}
                                                    className={`border px-2 py-0.5 cursor-pointer ${item === size ? 'border-blue-500' : ''}`}>{item}</button>
                                            ))
                                        }
                                    </div>
                                    <button onClick={() => addToCart(productData.id, size)} className='ml-20 sm:ml-10 mt-4 bg-black text-white px-4 py-1 text-[15px] cursor-pointer hover:bg-gray-800 transition-all'>ADD TO CART</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <p>Loading product...</p>
            )}

            {/* description and review */}
            <div className='flex flex-col gap-1 p-4 ml-6 mr-6 border border-gray-300 bg-white'>
                <div className='flex gap-6 border-b-2 border-gray-300'>
                    <p className='text-[12px] sm:text-[16px] text-blue-500 font-medium border-b-2 cursor-pointer'>Description</p>
                    <p className='text-[12px] sm:text-[16px] text-gray-400 font-medium cursor-pointer'>Reviews</p>
                    <p className='text-[12px] sm:text-[16px] text-gray-400 font-medium cursor-pointer'>Shipping</p>
                    <p className='text-[12px] sm:text-[16px] text-gray-400 font-medium cursor-pointer'>About seller</p>
                </div>
                <div>
                    <p className='text-[12px] sm:text-[15px] text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, optio alias? Rem numquam eaque aspernatur, nesciunt sit ratione expedita sint nemo.</p>
                    <p className='text-[12px] sm:text-[15px] text-gray-500'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos voluptates voluptatem nihil distinctio magnam. Dolores dolorum vero tenetur consequuntur eligendi quisquam fugit ratione itaque obcaecati rem accusamus alias sunt consectetur voluptas minima quod voluptatibus reprehenderit sapiente ducimus atque ullam, recusandae earum quae! Obcaecati minus est, adipisci eum in vero aliquam repellat vitae esse excepturi hic?</p>
                </div>
                <div className='flex items-center gap-6 sm:gap-12 border border-gray-300 w-60'>
                    <p className='bg-gray-300 w-30 p-1'>Model</p>
                    <p className='text-[12px] font-medium'>#878613</p>
                </div>
                <div className='flex items-center gap-6 sm:gap-12 border border-gray-300 w-60'>
                    <p className='bg-gray-300 w-30 p-1'>Style</p>
                    <p className='text-[12px] font-medium'>Classic Style</p>
                </div>
                <div className='flex items-center gap-6 sm:gap-12 border border-gray-300 w-60'>
                    <p className='bg-gray-300 w-30 p-1'>Certificate</p>
                    <p className='text-[12px] font-medium'>IS0-65456</p>
                </div>
                <div className='flex items-center gap-6 sm:gap-12 border border-gray-300 w-60'>
                    <p className='bg-gray-300 w-30 p-1'>Size</p>
                    <p className='text-[12px] font-medium'>30mm*40mm</p>
                </div>
                <li className='ml-4 mt-6 text-gray-400'>Some great feature name here</li>
                <li className='ml-4 text-gray-400'>Lorem ipsum dolor sit amet consectetur.</li>
                <li className='ml-4 text-gray-400'>Some great feature name here</li>
                <li className='ml-4 text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            </div>

            {/* Display Product  */}
            <div className='sm:flex w-full'>
                {productData && productData.category && (
                    <RelatedProducts
                        category={productData.category}
                    />
                )}
            </div>

            {/* slider  */}

            <div className='flex items-center w-full justify-center mb-2 sm:mb-6'>
                <div className='flex items-center justify-between bg-blue-500 w-[100%] m-3 p-2 sm:m-6 sm:p-4'>
                    <div>
                        <h2 className='text-[16px] sm:text-2xl text-white font-semibold'>Super discount on more than 100 USD</h2>
                        <p className='text-[10px] sm:text-[14px] text-gray-300'>Have you ever finally just write dummy info</p>
                    </div>
                    <button className='bg-yellow-500 p-1 sm:p-1.5 rounded text-[12px] sm:text-[15px] font-medium cursor-pointer'>Shop Now</button>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails
