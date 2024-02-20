import React from 'react'

const Navbar = () => {
  return (
    <div className="z-10 inline-flex justify-center items-center w-[838px] h-[72px] px-8 py-4 mt-8 gap-[50px] rounded-full shadow-md bg-white-100 text-black-100 font-arsenal text-base font-normal">
        <a className="font-raleway font-bold text-md" href="#">iMerge</a>
        <a href="#">Home</a>
        <a href="#">Samples</a>
        <a href="#">Services</a>
        <a href="#">Mission & Vision</a>
        <a href="#">Contact</a>
    </div>
  )
}

export {Navbar}