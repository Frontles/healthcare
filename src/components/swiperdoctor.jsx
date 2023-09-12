
import { Pagination, EffectCoverflow } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import Image1 from '@/../../public/assets/img/image1.jpg'
import Image2 from '@/../../public/assets/img/image2.jpg'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/thumbs';
import 'swiper/css/effect-coverflow';
import 'swiper/css/mousewheel';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import 'swiper/css/grid';
import Image from 'next/image';


const photos = [
    Image1.src,
    Image2.src,
    Image1.src,
    Image2.src,
    Image2.src,
    Image2.src,
    Image2.src,
    Image2.src,
];

export default function SwiperDoctor() {
    return (

        <>
            <Swiper

                effect={'coverflow'}
                modules={[Pagination]}
                loop={true}
                spaceBetween={20}
                breakpoints={{
                    320: {
                        slidesPerView: 1
                    },
                    766: {
                        slidesPerView: 2
                    },
                    1285: {
                        slidesPerView: 3
                    },
                }}


                pagination={{
                    horizontalClass: "doctor-slider-pagination",
                    bulletActiveClass: "swiper-pagination-bullet-active !w-4 !h-4 duration-500 text-center",
                    clickable: true,
                }}
                grabCursor={true}
                coverflowEffect={{
                    rotate: 0,
                    slideShadows: true,
                }}
                className="coverflow"
            >
                {photos.map((p, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <div className="relative  rounded-xl shadow group  duration-500 mb-10 ">
                                <div className=' bg-black  hidden group-hover:block opacity-30 w-full h-full absolute rounded-xl '>
                                </div>

                                <Image width={0} height={0} sizes='100vw' alt="image" className="rounded-xl " src={p} />



                                <div className=" hidden absolute group-hover:block duration-500 bottom-4 left-4">
                                    <a href="#" >
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">Dr. Indira Kendly</h5>
                                    </a>
                                    <p className="mb-3 font-normal text-white">Psychology Doctor</p>
                                    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-blackText bg-white rounded-lg focus:ring-4 focus:outline-none">
                                        See Profile

                                    </a>
                                </div>

                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper >
        </>
    );
}
