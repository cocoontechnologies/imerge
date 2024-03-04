import { Container } from "./Container"
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'

import { FreeMode, Pagination } from "swiper/modules"
import { imergeData } from "../assets/imergeData"


const Samples = () => {
    const samples = imergeData.samples;

    const sampleImages = Object.values(samples);

    return (
        <Container id="samples" className="flex-col md:px-0 gap-10">
            <div className='flex flex-col justify-center items-center gap-6 font-cardo'>
                <div className='text-sm'>01 - Samples</div>
                <div className='text-2xl text-center leading-none'>See what we can <br /> do for you</div>
            </div>

            <div className="block laptop:hidden h-[900px]">
                <Swiper
                    // breakpoints={{
                    //     480: {
                    //         slidesPerView: 1,
                    //         spaceBetween: 1,
                    //     },
                    //     768: {
                    //         slidesPerView: 2,
                    //         spaceBetween: 15,
                    //     }
                    // }}
                    
                    spaceBetween={15}
                    slidesPerView={2}
                    loop
                    centeredSlides={true}
                    freeMode={false}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[FreeMode, Pagination]}
                    className="w-[100%]"
                >
                    {sampleImages.map((image, index) => (
                        <SwiperSlide key={index} className="rounded-md bg-[#ffff] p-4 pb-2 shadow mb-10 max-h-[70vh] overflow-clip">
                            {/* <div className="rounded-md bg-[#ffff] p-4 pb-2 shadow mb-10 w-fit h-[500px] w-[360px] overflow-clip"> */}
                                <img 
                                    src={image} 
                                    className="h-full object-cover object-left-top !m-0 !p-0 border border-[#111111]"
                                    alt="sample"
                                />
                                <p className="text-xs font-cardo pt-1">{(index + 1).toString().padStart(2, '0')}</p>
                            {/* </div> */}
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </Container>
    )
}

export { Samples }