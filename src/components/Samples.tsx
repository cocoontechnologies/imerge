// import React from 'react'
"use client";
import { ParallaxScroll } from "./ui/ParallaxScroll";

const Samples = () => {
    const sampleImages = [
        "samples/sample_1.png",
        "samples/sample_2.png",
        "samples/sample_3.png",
        "samples/sample_4.png",
        "samples/sample_5.png",
        "samples/sample_6.png",
        "samples/sample_7.png",
        "samples/sample_8.png",
        "samples/sample_9.png",
    ];

    return (
        <div>
            <div className='flex flex-col justify-center items-center gap-6 font-cardo'>
                <div className='text-sm'>01 - Samples</div>
                <div className='text-2xl text-center leading-none'>See what we can <br /> do for you</div>
            </div>

            <ParallaxScroll images={sampleImages} />;
        </div>
    )
}

export { Samples }