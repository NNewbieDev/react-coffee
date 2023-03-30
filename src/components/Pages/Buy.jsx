import React from 'react'
import { products } from '../../data/info'
import { useStateContext } from '../../contexts/ContextProvider'
const Buy = () => {
    const { formatMoney, setCart } = useStateContext()
    return (
        <div className='min-h-screen bg-yellow-900 w-3/4 mx-auto'>
            <div className="flex gap-3 flex-wrap px-14 py-16">
                {products.map((item, index) => (
                    <div className="flex flex-col items-center bg-orange-200 px-5 py-3 text-yellow-900 rounded-lg " key={index}>
                        <div className="font-semibold">{item.name}</div>
                        <div className="my-2">
                            <img src={item.image} alt="" />
                        </div>
                        <div className="mb-2 font-semibold">{formatMoney(item.price)}</div>
                        <div className="bg-yellow-900 text-orange-200 px-3 py-2 rounded-lg hover:cursor-pointer hover:opacity-80" onClick={() => {
                            setCart(prev => [...prev, item]);
                        }}
                        > Đặt hàng</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Buy