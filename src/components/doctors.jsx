import React from 'react'
import SwiperDoctor from './swiperdoctor'

const Doctors = () => {
    return (
        <div className='container my-20 space-y-4 flex flex-col items-center justify-center'>
            <p className='text-primary px-4 py-2 rounded-lg font-medium max-w-fit' style={{ backgroundColor: "#E6F4FD" }}>Doctors</p>
            <h2 className=' text-3xl md:text-6xl text-blackText  pb-6'>Our Specialist Doctors</h2>

            <div className='flex overflow-auto w-full'>

                <SwiperDoctor />





            </div>

        </div>
    )
}

export default Doctors