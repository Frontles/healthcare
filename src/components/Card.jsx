import React from 'react'
import { BsArrowUpRight } from 'react-icons/bs';

const Card = ({ title }) => {
    return (
        <section className='flex bg-bgPrimary items-center p-6 rounded-xl group hover:bg-white hover:shadow-lg duration-500 hover:cursor-pointer'>
            <div className=' col-span-3  items-center justify-center space-y-2  '>
                <h4 className=' text-blackText text-3xl font-bold '>
                    {title}
                </h4>
                <p className=' text-linkdefault max-w-lg'>Connecting you with the best  healthcare professionals and resources    using technology and innovation</p>

            </div>
            <button className='text-primary border border-primary rounded-full group-hover:text-white group-hover:bg-primary p-4 duration-500'><BsArrowUpRight fontSize={"20px"} /></button>

        </section>
    )
}

export default Card