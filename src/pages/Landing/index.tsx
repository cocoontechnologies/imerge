// import React from 'react'
import { Footer } from '../../components/Footer'
import { Hero } from '../../components/Hero'
import { MissionVision } from '../../components/MissionVision'
import { Samples } from '../../components/Samples'
import { Services } from '../../components/Services'


const Landing = () => {
  return (
    <div className='relative flex flex-col w-full min-h-screen justify-center tablet:gap-12  laptop:gap-28'>
      <div id='background' className='absolute opacity-35 w-full h-full -z-10'></div>
        <Hero />
        <Samples />
        <Services />
        <MissionVision />
        <Footer />
    </div>
  )
}

export {Landing}
