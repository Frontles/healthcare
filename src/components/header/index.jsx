import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <>
            <nav className="flex px-4 justify-between items-center py-8 container">
                <Link className=' text-3xl font-bold ' href="/">We<span className='text-primary'>Care</span></Link>
                <div className=' hidden md:flex md:space-x-8 items-center justify-center'>
                    <div className='  md:space-x-8 lg:space-x-16 font-semibold text-linkdefault text-xl'>
                        <Link className="text-primary" href="/home">Home</Link>
                        <Link href="/services">Services</Link>
                        <Link href="/About">About</Link>
                        <Link href="/Reviews">Reviews</Link>
                        <Link href="/Blog">Blog</Link>
                    </div>
                    <Link href="#" className='border text-primary border-primary font-semibold text-xl px-4 py-2 rounded-lg hover:text-white hover:bg-primary duration-500'>Let&apos;s talk</Link>
                </div>

            </nav>
        </>
    )
}

export default Header