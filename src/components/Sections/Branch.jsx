import React from 'react'
import { branches } from '../../data/info'
import Carousel from 'react-material-ui-carousel'

const Branch = () => {
    return (
        <div className=''>
            <Carousel
                indicators={false}
            >
                {branches.map((item, index) => (
                    <div className="flex text-orange-200 justify-center gap-9" key={index}>
                        <div className="w-72 text-center self-center">
                            <p className="text-3xl font-bold drop-shadow-xl">ĐỊA CHỈ</p>
                            <div className="">
                                {item.address}
                            </div>
                        </div>
                        <img src={item.img} alt="" className='w-96 h-64 rounded-lg drop-shadow-xl' />
                        <div className="w-72 text-center self-center">
                            <p className="text-3xl font-bold drop-shadow-xl">THỜI GIAN</p>
                            <div className="text-xl">
                                {item.time}
                            </div>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    )
}

export default Branch