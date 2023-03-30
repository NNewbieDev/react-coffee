import React from 'react'
import { info } from '../../data/info'

const More = () => {
    return (
        <div className='w-full h-96 bg-yellow-900 dark:bg-grey-600 flex '>
            <div className="basis-1/2 flex justify-center items-center">
                <div className="flex flex-col justify-center items-center h-72 w-72 rounded-full bg-orange-200 drop-shadow-xl">
                    <img src="images/icon.png" alt="" className='h-36 w-36' />
                    <div className='text-yellow-900 font-bold text-xl'>BLACK ENERGY</div>
                </div>
            </div>
            <div className="text-orange-200 basis-1/2 lg:h-1/2 h-3/4 my-auto flex flex-col lg:flex-row gap-2">
                {
                    info.map((item, index) => (
                        <div className="text-center font-bold lg:odd:self-start lg:even:self-end drop-shadow-xl" key={index}>
                            <div className="text-lg">{item.title}</div>
                            <div className="text-5xl pt-2">{item.amount}</div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default More