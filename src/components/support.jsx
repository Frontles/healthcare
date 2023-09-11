import React from 'react'
import Image2 from '@/../../public/assets/img/image2.jpg'
import { FcOnlineSupport } from 'react-icons/fc'
import { FaCertificate } from 'react-icons/fa'
import { TiTick } from 'react-icons/ti'


const Support = () => {
    return (
        <section className='bg-bgPrimary py-20'>
            <div className="container flex justify-between">
                <div className='w-full h-full rounded-xl basis-1/2 relative'>
                    <img src={Image2.src} className='bg-contain rounded-xl' />
                    <div className=' bg-white shadow-lg flex absolute rounded-xl -top-10 left-10 items-center space-x-2 p-4'>

                        <FcOnlineSupport className='text-3xl' />

                        <div className='flex flex-col '>
                            <p className='font-medium text-2xl'>24/7 Support</p>
                            <p className='text-linkdefault'>We are available when you want</p>
                        </div>
                    </div>

                    <div className='flex bg-white shadow-lg absolute rounded-xl bottom-4 right-4 max-w-xs p-4 space-x-3'>

                        <div className='relative'>
                            <FaCertificate className=' text-4xl basis-1/6 text-primary' />
                            <TiTick className=' left-2.5 top-2.5 absolute bg-white rounded-full text-primary' />
                        </div>

                        <div className='flex flex-col basis-5/6 '>
                            <p className='font-medium text-2xl'>24/7 Support</p>
                            <p className='text-linkdefault'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta esse pariatur quibusdam autem.</p>
                        </div>
                    </div>

                </div>
                <div className=' px-8 space-y-4 basis-1/2 tracking-wider'>
                    <p className='text-primary px-4 py-2 rounded-lg font-medium max-w-fit' style={{ backgroundColor: "#E6F4FD" }}>Feature</p>
                    <h2 className='text-6xl font-semibold text-blackText leading-tight'>Lorem, ipsum dolor sit amet consectetur adipisicing.</h2>
                    <p className='text-3xl text-linkdefault leading-normal'> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident nam repellat distinctio quam sequi nesciunt tenetur quas ipsam doloribus pariatur.</p>
                    <button className='bg-primary text-white text-lg px-6 py-3 rounded-lg font-medium'>Read More</button>

                </div>

            </div>
        </section>
    )
}

export default Support