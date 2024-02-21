import React from 'react'
import { Navbar } from '../../components/Navbar'
import { Container } from '../../components/Container'
import { BsChevronDown } from "react-icons/bs";
import { Samples } from '../../components/Samples'


const Landing = () => {
  return (
    <div className='flex flex-col w-full min-h-screen justify-center'>
      <div id='background' className='absolute opacity-35 w-full h-full -z-10'></div>
      <Container id="hero">
        <div className='relative flex flex-col h-full w-full items-center gap-24'>
          <Navbar />
          <div className='flex flex-col gap-12 h-full'>
            <h1 className='text-hero capitalize font-cardo tracking-tighter'>Your Brand Identity <strong className='text-navy-700 font-normal'>Begins Here.</strong></h1>
            <p className='text-md capitalize'>Captivating Stories, Captivating Audiences.</p>
          </div>
          <button className='inline-flex text-base self-start gap-2 items-center'><div className='border border-black-100 rounded-full p-1 flex justify-center items-center'><BsChevronDown/></div>Scroll Down</button>
        </div>
        <div id="heroBrochure" className='-z-20 absolute -bottom-[18rem] -right-[32rem] -rotate-[19deg] flex items-center justify-center w-full h-full'/>
      </Container>
      
      <Samples />
    </div>
    
  )
}

export {Landing}