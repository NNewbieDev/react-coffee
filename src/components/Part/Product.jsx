import React from 'react'
import { products } from '../../data/info'

const Product = () => {
    return (
        <div className='flex justify-center gap-36 py-12'>
            {
                products.map((item, index) => (
                    <div className="flex flex-col items-center text-yellow-900 dark:text-orange-200 font-bold" key={index}>
                        <img src={item.image} alt="" className='drop-shadow-xl' />
                        <p className="text-sm pt-3 drop-shadow-xl">
                            {item.name}
                        </p>
                        <p className='text-3xl pt-1 drop-shadow-xl'>{item.price} đ</p>
                    </div>
                ))
            }
        </div>
    )
}

export default Product