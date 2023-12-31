import React from 'react'
import Image1 from '@/../../public/assets/img/image1.jpg'
import Link from 'next/link'
import { BsFacebook } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import { BsFillSendFill } from 'react-icons/bs'
import Image from 'next/image'
const Footer = () => {
    return (
        <div className='bg-bgPrimary'>
            <div className='container px-4 md:px-0'>
                <div className='flex py-4  items-center justify-start md:space-x-8 space-y-4  flex-wrap flex-col md:flex-row md:flex-nowrap'>
                    <div className='basis-1/12'>
                        <Image src={Image1.src} width={0} height={0} sizes='100vw' alt="image" className='aspect-square  object-cover   rounded-xl' />

                    </div>
                    <div className='flex flex-col basis-8/12 space-y-4'>
                        <h1 className='text-2xl md:text-3xl text-blackText font-semibold'>Bringing smiles back to health</h1>
                        <p className='text-lg md:text-xl text-linkdefault'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum saepe explicabo nulla dignissimos sunt, veniam ex deserunt beatae itaque vel.</p>

                    </div>
                    <button className='bg-primary text-white text-sm md:text-lg px-6 py-3 rounded-lg duration-300 hover:bg-white hover:text-primary border border-primary'>Book A Consultation</button>

                </div>
            </div>
            <div className='bg-footer text-white'>
                <div className="container px-4 md:px-0">
                    <div className='flex flex-col md:flex-row space-y-16 md:space-y-0   justify-between py-8 border-b border-white '>
                        <div className='flex flex-col basis-2/5'>
                            <Link className=' text-3xl font-bold ' href="/">We<span className='text-primary'>Care</span></Link>
                            <p className='text-2xl py-4 font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit.  esse delectus adipisci libero odit laudantium</p>
                            <div className='relative flex items-center justify-center'>
                                <BsFillSendFill className='absolute right-5 z-20 text-linkdefault ' size="20px" />
                                <input type="text" name="" id="" className='p-4 rounded-xl w-full focus:outline-none text-blackText' placeholder='Email Address' />

                            </div>
                            <ul className='flex space-x-4 py-8'>
                                <li><BsFacebook size={"30px"} /></li>
                                <li><BsLinkedin size={"30px"} /></li>
                                <li><BsInstagram size={"30px"} /></li>
                                <li><BsTwitter size={"30px"} /></li>

                            </ul>

                        </div>

                        <div className='flex flex-col md:flex-row  basis-3/4 space-y-8 md:space-y-0  justify-center md:space-x-16'>
                            <div className='flex flex-col'>
                                <h3 className=' text-3xl font-semibold ' href="/">Explore</h3>
                                <ul className='flex flex-col'>
                                    <li className='text-2xl py-4 font-light'>About  Company</li>
                                    <li className='text-2xl py-4 font-light'>Meet the Team</li>
                                    <li className='text-2xl py-4 font-light'>News & Medias</li>
                                    <li className='text-2xl py-4 font-light'>Our Projects</li>
                                    <li className='text-2xl py-4 font-light'>Contact</li>
                                </ul>
                            </div>
                            <div className='flex flex-col'>
                                <h3 className=' text-3xl font-semibold' href="/">Contact</h3>
                                <ul className='flex flex-col'>
                                    <li className='text-2xl py-4 font-light'>66 Read Street, 600 New York USA</li>
                                    <li className='text-2xl py-4 font-light'>needhelp@company.com</li>
                                    <li className='text-2xl py-4 font-light'>+90 123 456 78 90</li>
                                </ul>
                            </div>

                        </div>


                    </div>

                    <div className='flex justify-center  items-center py-8 text-xl '>
                        Site Map | Gizlilik Politikası Terms of service | Çerez Politikası | KVKK

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer