
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
    Image1.src,
    Image2.src,
    Image1.src,
    Image2.src
];

const SwiperTestiMotionals = () => {
    return (
        <>
            <Swiper

                effect={'coverflow'}
                modules={[Pagination]}
                loop={true}
                spaceBetween={20}
                slidesPerView={"auto"}

                pagination={{
                    horizontalClass: "doctor-slider-pagination",
                    bulletActiveClass: "swiper-pagination-bullet-active !w-4 !h-4 duration-500 text-center",
                    clickable: true,
                }}

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




                grabCursor={true}
                coverflowEffect={{
                    rotate: 0,
                    slideShadows: true,
                }}

                className="coverflow" >
                {photos.map((p, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <div className="flex flex-col items-center bg-white lg:max-w-prose  rounded-lg shadow md:flex-row hover:bg-gray-100 mb-10">
                                <Image width={0} height={0} sizes='100vw' alt="image" className='object-contain w-auto rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg' src={p} />
                                <div class="flex flex-col justify-between p-4 leading-normal">
                                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>

                                    <h5 class="mb-2  font-medium tracking-tight text-blackText">Aiyana Smith, {index}</h5>
                                </div>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper >
        </>
    )
}

export default SwiperTestiMotionals