import React from 'react'
import { Navbar } from '../../components/Navbar'
import { Container } from '../../components/Container'
import { BsChevronDown } from "react-icons/bs";


const Landing = () => {
  return (
    <div className='flex w-full min-h-screen justify-center'>
      <div id='background' className='absolute opacity-35 w-full h-full -z-10'></div>
      <Container id="hero">
        <Navbar />
        <div className='flex flex-col h-full w-full items-center pt-24'>
          <div className='flex flex-col gap-2 w-full h-full lg:gap-12 lg:font-normal'>
            <h1 
              className='capitalize font-cardo text-md tracking-tighter leading-tight font-bold 
                         lg:text-hero'>
                Your Brand Identity <strong className='text-navy-700 block text-xl lg:font-normal lg:text-hero lg:inline'>Begins Here.</strong>
            </h1>
            <p className='capitalize text-xs lg:text-md'>Captivating Stories, Captivating Audiences.</p>
          </div>
          <button className='inline-flex text-base gap-2 items-center lg:self-start '><div className='border border-black-100 rounded-full p-1 flex justify-center items-center'><BsChevronDown/></div><p className='hidden lg:inline'>Scroll Down</p></button>
        </div>
        <div id="heroBrochure" className="-z-20 absolute -rotate-[19deg] flex items-center justify-center w-full h-full -bottom-[12rem] lg:-bottom-[18rem] lg:-right-[32rem]"/>
        <div className="absolute bottom-0 w-full content-[''] h-10 bg-gradient-to-t from-white-100 to-white-100/5"/>
      </Container>
      
    </div>
  )
}

export {Landing}