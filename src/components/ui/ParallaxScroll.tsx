"use client";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
// import Image from "next/image";
import { cn } from "../../utils/cn";

export const ParallaxScroll = ({
    images,
    className,
}: {
    images: string[];
    className?: string;
}) => {
    const gridRef = useRef<any>(null);
    const { scrollYProgress } = useScroll({
        container: gridRef, // remove this if your container is not fixed height
        offset: ["start start", "end start"], // remove this if your container is not fixed height
    });

    const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
    const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

    const third = Math.ceil(images.length / 3);

    const firstPart = images.slice(0, third);
    const secondPart = images.slice(third, 2 * third);
    const thirdPart = images.slice(2 * third);

    return (
        <div
            className={cn("h-[40rem] items-start overflow-y-auto w-full", className)}
            ref={gridRef}
        >
            <div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start  max-w-5xl mx-auto gap-10 py-40"
                ref={gridRef}
            >
                <div className="grid gap-10">
                    {firstPart.map((el, idx) => (
                        <motion.div style={{ y: translateFirst }} key={"grid-1" + idx} 
                            className="gap-x-4 rounded-md bg-[#ffff] p-4 pb-2 shadow"
                        >
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
                        <motion.div style={{ y: translateSecond }} key={"grid-2" + idx} 
                            className="gap-x-4 rounded-md bg-[#ffff] p-4 pb-2 shadow"
                        >
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
                        <motion.div style={{ y: translateThird }} key={"grid-3" + idx} 
                            className="gap-x-4 rounded-md bg-[#ffff] p-4 pb-2 shadow"
                        >
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