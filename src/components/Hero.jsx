import React from 'react'
import { BsArrowUpRight } from 'react-icons/bs';
import Image1 from '@/../../public/assets/img/image1.jpg'
import Image from 'next/image';

const Hero = () => {
    return (

        <section className='bg-bgPrimary pb-10'>
            <div className='container flex '>
                <div className='basis-4/5 flex flex-col gap-5 justify-evenly'>
                    <p className='text-primary px-4 py-2 rounded-lg font-medium max-w-fit' style={{ backgroundColor: "#E6F4FD" }}>STAY STRONG, LIVE LONG</p>
                    <h1 className='font-semibold text-8xl text-blackText leading-tight'>Bringing <span className='text-primary'>Smiles</span><br /> Back to Health.</h1>
                    <p className=' text-linkdefault px-4 py-2 rounded-lg text-2xl max-w-fit leading-relaxed' >Connecting you with the best healthcare professionals <br /> and resources using technology and innovation</p>
                    <div className=' flex  gap-4'>
                        <button className='bg-primary text-white text-lg px-6 py-3 rounded-lg'>Book A Meeting</button>
                        <button className='text-primary border border-primary rounded-full p-4'><BsArrowUpRight fontSize={"20px"} /></button>
                    </div>
                    <div className='flex'>
                        <p className='text-primary text-5xl border-r pr-8 pl-1 font-bold'>100K+</p>
                        <p className='text-linkdefault text-2xl max-w-xs px-8 text-center '>Serving patient both Online and Offline</p>
                    </div>


                </div>
                <div className='basis-3/5 flex flex-col space-y-4 '>
                    <div className=' relative aspect-video items-start'>

                        <div className=' bg-black opacity-30 w-full h-full absolute rounded-3xl'>
                        </div>

                        <Image width={0} height={0} sizes='100vw' alt="image" src={Image1.src} className=' w-full h-full object-cover aspect-video rounded-3xl ' />
                        <p className='absolute top-4 left-4 shadow-lg px-4 py-2 bg-white rounded-lg text-linkdefault'>Feature</p>
                        <h3 className='absolute bottom-4 left-4 px-4 py-2  rounded-lg text-white font-medium tracking-wide text-4xl'>Telehealth <br /> consultation</h3>
                        <p className='absolute bottom-4 right-4  p-4 bg-transparent rounded-full text-white border-2 border-white'><BsArrowUpRight fontSize={"30px"} /></p>


                    </div>
                    <div className=' grid-cols-2  flex items-center space-x-4'>
                        <div className="col-span-1">
                            <div className=' relative aspect-square  items-start'>
                                <Image width={0} height={0} sizes='100vw' alt="image" src={Image1.src} className=' w-full h-full object-cover aspect-video rounded-3xl ' />
                            </div>


                        </div>

                        <div className='col-span-1 '>
                            <div className=' relative aspect-square  items-start'>
                                <Image width={0} height={0} sizes='100vw' alt="image" src={Image1.src} className=' w-full h-full object-cover aspect-video rounded-3xl  ' />
                                <p className='absolute bottom-4 right-4  p-4 bg-transparent rounded-full text-white border-2 border-white'><BsArrowUpRight fontSize={"30px"} /></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero