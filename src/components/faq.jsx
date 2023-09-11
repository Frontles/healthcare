import React from 'react'
import { BsArrowUpRight } from 'react-icons/bs';
import Image1 from '@/../../public/assets/img/image2.jpg'
import { Accordion } from '@mantine/core';
import Image from 'next/image';

const Faq = () => {
    return (
        <section className=' pb-10 px-4'>

            <div className='container flex flex-col md:flex-row gap-4' >


                <div className='basis-2/5 flex flex-col w-full'>

                    <Accordion variant="separated" radius="md" defaultValue="1">
                        <Accordion.Item value="1" className='p-4'>
                            <Accordion.Control className='text-lg md:text-2xl font-semibold'>What services do you offer  ?</Accordion.Control>
                            <Accordion.Panel className='text-sm md:text-xl text-linkdefault border-t duration-500 '>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae neque aliquam veritatis nulla ipsam dolores similique eum voluptates doloribus atque.
                            </Accordion.Panel>
                        </Accordion.Item>

                        <Accordion.Item value="2" className='p-4'>
                            <Accordion.Control className='text-lg md:text-2xl font-semibold'>How Can I book  an appointment ?</Accordion.Control>
                            <Accordion.Panel className='text-sm md:text-xl text-linkdefault border-t duration-500 '>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae neque aliquam veritatis nulla ipsam dolores similique eum voluptates doloribus atque.
                            </Accordion.Panel>
                        </Accordion.Item>

                        <Accordion.Item value="3" className='p-4'>
                            <Accordion.Control className='text-lg md:text-2xl font-semibold'>What insurance plans do you accept? </Accordion.Control>
                            <Accordion.Panel className='text-sm md:text-xl text-linkdefault border-t duration-500 '>

                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae neque aliquam veritatis nulla ipsam dolores similique eum voluptates doloribus atque.
                            </Accordion.Panel>
                        </Accordion.Item>
                        <Accordion.Item value="4" className='p-4'>
                            <Accordion.Control className='text-lg md:text-2xl font-semibold'>How do I access my medical records ? </Accordion.Control>
                            <Accordion.Panel className='text-sm md:text-xl text-linkdefault border-t duration-500 '>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae neque aliquam veritatis nulla ipsam dolores similique eum voluptates doloribus atque.
                            </Accordion.Panel>
                        </Accordion.Item>
                    </Accordion>



                </div>

                <div className='basis-3/5 flex space-y-4 w-full h-full gap-4'>
                    <div className='relative '>

                        <div className=' bg-black opacity-30 w-full h-full absolute rounded-3xl'>
                        </div>

                        <Image width={0} height={0} sizes='100vw' alt="image" src={Image1.src} className='w-full h-full object-cover  rounded-3xl ' />
                    </div>
                    <div className=' grid-rows-2 flex flex-col gap-4'>

                        <div className="row-span-1">
                            <div className=' relative   items-start'>
                                <div className=' bg-black opacity-30 w-full h-full absolute rounded-3xl'>
                                </div>
                                <Image width={0} height={0} sizes='100vw' alt="image" src={Image1.src} className=' w-full h-full object-cover  rounded-3xl ' />
                            </div>
                        </div>

                        <div className="row-span-1">
                            <div className=' relative   items-start'>
                                <div className=' bg-black opacity-30 w-full h-full absolute rounded-3xl'>
                                </div>
                                <Image width={0} height={0} sizes='100vw' alt="image" src={Image1.src} className=' w-full h-full object-cover  rounded-3xl ' />
                            </div>
                        </div>

                    </div>



                </div>

            </div >
        </section >
    )
}

export default Faq