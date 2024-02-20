import React from 'react'

const Navbar = () => {
  return (
    <div className="w-[838px] h-[72px] px-10 py-5 bg-white-100 rounded-full shadow justify-center items-center gap-[50px] inline-flex absolute">
        <div className="text-black text-[32px] font-bold font-['Raleway'] leading-loose">iMerge</div>
        <div className="text-black-100 text-xs font-normal font-['SeoulNamsan'] leading-tight">Home</div>
        <div className="text-black-100 text-xs font-normal font-['SeoulNamsan'] leading-tight">Samples</div>
        <div className="text-black-100 text-xs font-normal font-['SeoulNamsan'] leading-tight">Services</div>
        <div className="text-black-100 text-xs font-normal font-['SeoulNamsan'] leading-tight">Mission & Vision</div>
        <div className="text-black-100 text-xs font-normal font-['SeoulNamsan'] leading-tight">Contact</div>
    </div>
  )
}

export {Navbar}