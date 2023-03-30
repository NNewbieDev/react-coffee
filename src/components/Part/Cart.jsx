import React from 'react'
import { useStateContext } from '../../contexts/ContextProvider'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMultiply } from '@fortawesome/free-solid-svg-icons'

const Cart = () => {
    const { cart, setCart } = useStateContext()
    return (
        <div className='w-72 h-full fixed top-0 right-0 bg-yellow-600 dark:bg-grey-500 z-20'>
            <div className="h-20 text-xl font-bold flex items-center justify-center bg-yellow-900 dark:bg-grey-900 text-yellow-600">Giỏ hàng</div>
            <div className="">
                {
                    cart.map((item, index) => (
                        <div className="flex  bg-orange-200 w-4/5 mx-auto p-2 m-1 rounded-lg drop-shadow-lg justify-around items-center" key={index}>
                            <div className="">
                                <img src={item.image} alt="" className=' w-12 h-14' />
                            </div>
                            <div className="flex flex-col gap-1 text-yellow-900">
                                <div className="">{item.name}</div>
                                <div className="">{item.price}</div>
                            </div>
                            <div className=" bg-yellow-900 text-orange-200 h-8 w-8 flex justify-center items-center rounded-full"
                                onClick={() => {
                                    cart.splice(index, 1);
                                    setCart([...cart])
                                }}
                            >
                                <FontAwesomeIcon icon={faMultiply} />
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Cart