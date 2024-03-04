import { useTransform } from "framer-motion";
import { useRef, useLayoutEffect } from "react";
import { useMotionValue, motion } from "framer-motion";
import { cn } from "../../utils/cn";
import { imergeData } from "../../assets/imergeData";

const ParallaxScroll = () => {
    const gridRef = useRef<any>(null);
    const scrollProgress = useMotionValue(0);

    const translateFirst = useTransform(scrollProgress, [0, 1], [0, -100]);
    const translateSecond = useTransform(scrollProgress, [0, 1], [0, 100]);
    const translateThird = useTransform(scrollProgress, [0, 1], [0, -100]);


    useLayoutEffect(() => {
        const windowHeight = window.innerHeight;
        const documentHeight = document.body.scrollHeight;
        
        const handleScroll = () => {
            if (window.scrollY > 500) {
                const scrollValue = window.scrollY / (documentHeight - windowHeight);
                scrollProgress.set(scrollValue);
            }
        };

        handleScroll();
        
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollProgress]);

    const samples = imergeData.samples;

    const sampleImages = Object.values(samples);

    const third = Math.ceil(sampleImages.length / 3);

    const firstPart = sampleImages.slice(0, third);
    const secondPart = sampleImages.slice(third, 2 * third);
    const thirdPart = sampleImages.slice(2 * third);

    return (
        <div className={cn("hidden laptop:block h-[40rem] items-start w-full")}>
            <div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start  max-w-5xl mx-auto gap-10 py-40"
                ref={gridRef}
            >
                <div className="grid gap-10">
                    {firstPart.map((el, idx) => (
                        <motion.div style={{ y: translateFirst }} key={"grid-1" + idx} className="gap-x-4 rounded-md bg-[#ffff] p-4 pb-2 shadow">
                            <img
                                src={el}
                                className="h-100 w-full object-cover object-left-top gap-10 !m-0 !p-0 border border-[#111111]"
                                alt="sample"
                            />
                            <p className="text-xs font-cardo pt-1">{(idx + 1).toString().padStart(2, '0')}</p>
                        </motion.div>
                    ))}
                </div>
                <div className="grid gap-10">
                    {secondPart.map((el, idx) => (
                        <motion.div style={{ y: translateSecond }} key={"grid-2" + idx} className="gap-x-4 rounded-md bg-[#ffff] p-4 pb-2 shadow">
                            <img
                                src={el}
                                className="h-100 w-full object-cover object-left-top gap-10 !m-0 !p-0 border border-[#111111]"
                                alt="sample"
                            />
                            <p className="text-xs font-cardo pt-1">{(idx + third + 1).toString().padStart(2, '0')}</p>
                        </motion.div>
                    ))}
                </div>
                <div className="grid gap-10">
                    {thirdPart.map((el, idx) => (
                        <motion.div style={{ y: translateThird }} key={"grid-3" + idx} className="gap-x-4 rounded-md bg-[#ffff] p-4 pb-2 shadow">
                            <img
                                src={el}
                                className="h-100 w-full object-cover object-left-top gap-10 !m-0 !p-0 border border-[#111111]"
                                alt="sample"
                            />
                            <p className="text-xs font-cardo pt-1">{(idx + 2 * third + 1).toString().padStart(2, '0')}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export { ParallaxScroll };
