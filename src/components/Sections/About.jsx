import React from 'react'

const About = () => {
    return (
        <div className='lg:h-96 h-auto py-6 lg:py-0 w-3/4 mb-1 mx-auto bg-yellow-600/30 flex lg:flex-row flex-col items-center rounded-lg '>
            <div className='basis-1/2 flex justify-center lg:mb-0 mb-3'>
                <div className=" rounded-full bg-yellow-600 h-72 w-72 flex justify-center items-center">
                    <img src="images/about.png" alt="" className='h-64 drop-shadow-xl rounded-full' />
                </div>
            </div>
            <div className="text-yellow-900 dark:text-orange-200 font-medium max-w-md text-xl basis-1/2 text-justify lg:text-left ">
                <p>Được thành lập vào năm 2010</p>
                <p className='py-3'>Bởi ông Robert J.Smith</p>
                <p>Black Energy được ông thực hiện với niềm đam mê với hương vị đậm đà của cà phê Việt và ông muốn lan tỏa hương vị này ra khắp thế giới để thỏa mãn những người yêu thích cà phê như ông.</p>
            </div>
        </div>
    )
}

export default About