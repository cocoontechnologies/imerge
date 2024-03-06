import { imergeData } from "../assets/imergeData"
import { Container } from "./section/Container"
import { Swiper, SwiperSlide } from "swiper/react"
import { FreeMode, Pagination } from "swiper/modules"
import { Heading } from "./section/Heading";
import { ParallaxScroll } from "./ui/ParallaxScroll";
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'

const Samples = () => {
    const samples = imergeData.samples;
    const sampleImages = Object.values(samples);

    return (
        <Container id="samples" className="flex-col tablet:px-0 gap-10 laptop:pb-0">
            <Heading title="01 - Samples" firstLine="See what we can" secondLine="do for you" />
            <ParallaxScroll />
            <div className="block laptop:hidden h-[900px]">
                <Swiper
                    breakpoints={{
                        360: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        480: {
                            slidesPerView: 2,
                            spaceBetween: 15,
                        }
                    }}
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
                        <SwiperSlide key={index} className="rounded-md bg-[#ffff] p-4 pb-2 shadow mb-10 h-[70vh] overflow-clip">
                            <img 
                                src={image} 
                                className="h-full aspect-[9/16] object-cover object-left-top !m-0 !p-0 border border-[#111111]"
                                alt="sample"
                            />
                            <p className="text-xs font-cardo pt-1">{(index + 1).toString().padStart(2, '0')}</p>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </Container>
    )
}

export { Samples }