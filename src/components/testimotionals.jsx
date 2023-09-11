import React from 'react'
import SwiperTestiMotionals from './swipertestimotionals'

const Testimotionals = () => {
    return (
        <div className='container my-20 space-y-4 flex flex-col items-center justify-center px-4 md:px-0'>
            <p className='text-primary px-4 py-2 rounded-lg font-medium max-w-fit' style={{ backgroundColor: "#E6F4FD" }}>Testimotionals</p>
            <h2 className=' text-4xl md:text-6xl text-blackText  pb-6'>Lets See What Our Patenties Says</h2>
            <p className='text-xl md:text-3xl text-linkdefault pb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur non porro quidem rem eius, assumenda cupiditate perspiciatis! Veritatis, quos officia!</p>

            <div className='flex overflow-auto w-full'>

                <SwiperTestiMotionals />





            </div>

        </div>
    )
}

export default Testimotionals