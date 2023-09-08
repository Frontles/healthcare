import Layout from './layout'
import { BsArrowUpRight } from 'react-icons/bs';

export default function Home() {

    return (

        <Layout>
            <div className='container  flex bg-bgPrimary  '>
                <div className='basis-1/2 flex flex-col'>
                    <p className='text-primary px-4 py-2 rounded-lg font-medium max-w-fit' style={{ backgroundColor: "#E6F4FD" }}>STAY STRONG, LIVE LONG</p>
                    <h1 className='font-semibold text-8xl text-blackText leading-tight'>Bringing <span className='text-primary'>Smiles</span> Back to Health.</h1>
                    <p className=' text-linkdefault px-4 py-2 rounded-lg text-2xl max-w-fit leading-relaxed' >Connecting you with the best healthcare professionals and resources using technology and innovation</p>
                    <div className=' flex  space-x-4'>
                        <button className='bg-primary text-white text-lg px-6 py-3 rounded-lg'>Book A Meeting</button>
                        <button className='text-primary border border-primary rounded-full p-4'><BsArrowUpRight fontSize={"20px"} /></button>

                    </div>



                </div>
                <div className='bg-red-400 basis-1/2'>
                    sag
                </div>
            </div>
        </Layout>
    )
}
