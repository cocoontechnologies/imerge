import React from 'react'
import MenuButton from './MenuButton'

const Navbar = () => {
  return (
    <div 
        className="fixed overflow-hidden z-10 flex flex-col max-h-14 h-full w-full top-0 left-0 p-4 gap-6 justify-start text-black-100 font-arsenal text-base font-normal
                   lg:inline-flex lg:w-[838px] lg:flex-row lg:max-h-[72px] lg:px-8 lg:py-4 lg:mt-8 lg:gap-12 lg:justify-center lg:items-center lg:rounded-full lg:shadow-md lg:bg-white-100 lg:static">
        <MenuButton/>
        <a className="hidden md:block font-raleway font-bold text-md" href="#">iMerge</a>
        <a href="#">Home</a>
        <a href="#">Samples</a>
        <a href="#">Services</a>
        <a href="#">Mission & Vision</a>
        <a href="#">Contact</a>
    </div>
  )
}

export {Navbar}