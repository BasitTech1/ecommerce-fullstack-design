import React from 'react'
import Product24 from '../assets/Product24.png'
import Product25 from '../assets/Product25.png'
import Product26 from '../assets/Product26.png'
import Product27 from '../assets/Product27.png'
import { assets } from '../assets/assets'


const extraProduct = [
    {
        _id: "p24",
        name: "Source from Industry Hubs",
        image: [Product24],
        icon: [assets.SearchIcon]
    },
    {
        _id: "p25",
        name: "Customize Your Products",
        image: [Product25],
        icon: [assets.MarketIcon]
    },
    {
        _id: "p26",
        name: "Fast, reliable shipping by ocean or air",
        image: [Product26],
        icon: [assets.MsgIcon]
    },
    {
        _id: "p27",
        name: "Product monitoring and inspection",
        image: [Product27],
        icon: assets.AlertIcon
    },
]

const ExtraSection = () => {
    return (
        <div>
            <div className='mt-4 px-6 md:mt-10 lg:mt-16 md:px-10 lg:px-17'>
                <h2 className='mb-2 sm:mb-8 text-[15px] sm:text-xl font-medium'>Our Extra Service</h2>
                <div className='grid grid-cols-2 gap-4 sm:flex sm:flex-row items-center justify-between relative'>
                    {
                        extraProduct.map((item) => (
                            <div key={item._id}>
                                <img className='w-full bg-amber-400' src={item.image} alt="" />
                                <span className='absolute w-7 lg:w-10 ml-30 md:ml-32 md:top-15 lg:top-24 lg:ml-56 rounded-full bg-gray-300 p-2 lg:p-3 cursor-pointer hover:bg-gray-200 transition-all object-center'><img src={item.icon} alt="" /></span>
                                <p className='bg-white p-3 sm:p-4 text-[12px] lg:text-[16px] font-medium text-gray-500'>{item.name}</p>
                            </div>
                        ))
                    }
                </div>
            </div>

            <h4 className='mt-4 px-6 text-[15px] md:mt-8 lg:mt-10 md:px-10 lg:px-16 sm:text-xl font-medium'>Suppliers by region</h4>
            <div className='grid grid-cols-2 mt-4 px-6 gap-4 sm:grid sm:grid-cols-5 lg:mt-10 md:px-10 lg:px-17 sm:gap-3'>
                <div className='flex items-center gap-2'>
                    <img className='w-10' src={assets.ArabFlag} alt="" />
                    <div>
                        <h4 className='lg:text-[16px] md:text-[11px] font-medium text-gray-600'>Arabic Emirates</h4>
                        <p className='text-[14px] mt-[-6px] font-medium text-gray-400'>shopname.ae</p>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <img className='w-10' src={assets.AusFlag} alt="" />
                    <div>
                        <h4 className='lg:text-[16px] md:text-[11px] font-medium text-gray-600'>Australia</h4>
                        <p className='text-[14px] mt-[-6px] font-medium text-gray-400'>shopname.ae</p>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <img className='w-10' src={assets.UsFlag} alt="" />
                    <div>
                        <h4 className='lg:text-[16px] md:text-[11px] font-medium text-gray-600'>United States</h4>
                        <p className='text-[14px] mt-[-6px] font-medium text-gray-400'>shopname.ae</p>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <img className='w-10' src={assets.RuFlag} alt="" />
                    <div>
                        <h4 className='lg:text-[16px] md:text-[11px] font-medium text-gray-600'>Russia</h4>
                        <p className='text-[14px] mt-[-6px] font-medium text-gray-400'>shopname.ae</p>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <img className='w-10' src={assets.ItFlag} alt="" />
                    <div>
                        <h4 className='lg:text-[16px] md:text-[11px] font-medium text-gray-600'>Italy</h4>
                        <p className='text-[14px] mt-[-6px] font-medium text-gray-400'>shopname.ae</p>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <img className='w-10' src={assets.DkFlag} alt="" />
                    <div>
                        <h4 className='lg:text-[16px] md:text-[11px] font-medium text-gray-600'>Denmark</h4>
                        <p className='text-[14px] mt-[-6px] font-medium text-gray-400'>shopname.ae</p>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <img className='w-10' src={assets.FrFlag} alt="" />
                    <div>
                        <h4 className='lg:text-[16px] md:text-[11px] font-medium text-gray-600'>France</h4>
                        <p className='text-[14px] mt-[-6px] font-medium text-gray-400'>shopname.ae</p>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <img className='w-10' src={assets.ArabFlag} alt="" />
                    <div>
                        <h4 className='lg:text-[16px] md:text-[11px] font-medium text-gray-600'>Arabic Emirates</h4>
                        <p className='text-[14px] mt-[-6px] font-medium text-gray-400'>shopname.ae</p>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <img className='w-10' src={assets.CnFlag} alt="" />
                    <div>
                        <h4 className='lg:text-[16px] md:text-[11px] font-medium text-gray-600'>China</h4>
                        <p className='text-[14px] mt-[-6px] font-medium text-gray-400'>shopname.ae</p>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <img className='w-10' src={assets.GbFlag} alt="" />
                    <div>
                        <h4 className='lg:text-[16px] md:text-[11px] font-medium text-gray-600'>Great Britain</h4>
                        <p className='text-[14px] mt-[-6px] font-medium text-gray-400'>shopname.ae</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExtraSection
