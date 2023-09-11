import React from 'react'
import Card from './Card'

const Category = () => {
    return (
        <div className='container my-20 space-y-4'>
            <div className='grid md:grid-cols-2  gap-x-4 gap-y-8 max-w-fit m-auto'>

                <Card title="Cardiology" />
                <Card title="Pediatrician" />
                <Card title="Gynecology" />
                <Card title="Psychology" />



            </div>
            <div className='flex items-center justify-center space-x-4'>
                <div className='bg-linkdefault w-4 h-4 rounded-full cursor-pointer duration-500'></div>
                <div className='bg-primary w-6 h-6 rounded-full cursor-pointer duration-500  '></div>
                <div className='bg-linkdefault w-4 h-4 rounded-full cursor-pointer duration-500  '></div>


            </div>
        </div>
    )
}

export default Category