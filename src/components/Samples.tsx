// import React from 'react'
import { Container } from "./Container"
import { imergeData } from "../assets/imergeData"

const Samples = () => {

    return (
        <Container id="samples">
            <div className='flex flex-col justify-center items-center gap-6 font-cardo'>
                <div className='text-sm'>01 - Samples</div>
                <div className='text-2xl text-center leading-none'>See what we can <br /> do for you</div>
            </div>

            <div className="block laptop:hidden">
                <p>mobile view test</p>
            </div>
        </Container>
    )
}

export { Samples }