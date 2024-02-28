// import React from 'react'
"use client";
import { Container } from "./section/Container";
import { Heading } from "./section/Heading";
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
      <Container id="samples">
        <div>
          <Heading title="01 - Samples" firstLine="See what we can" secondLine="do for you" />
        <ParallaxScroll images={sampleImages} />
        </div>
      </Container>
    )
}

export { Samples }