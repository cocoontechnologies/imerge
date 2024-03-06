import { MenuButton } from './MenuButton'

const Navbar = () => {
  return (
    <div 
        className="fixed overflow-hidden z-10 flex flex-col max-h-14 h-full w-full top-0 left-0 p-4 gap-6 justify-start text-black-100 font-arsenal text-base font-normal
                   laptop:inline-flex laptop:w-[838px] laptop:flex-row laptop:min-h-[72px] laptop:px-8 laptop:py-4 laptop:mt-8 laptop:gap-12 laptop:justify-center laptop:items-center laptop:rounded-full laptop:shadow-md laptop:backdrop-blur-xl laptop:bg-gradient-to-r laptop:from-white-100 laptop:to-white-100/5 laptop:fixed laptop:left-auto">
        <MenuButton/>
        <a className="hidden tablet:block font-raleway font-bold text-md" href="#">iMerge</a>
        <a href="#hero">Home</a>
        <a href="#samples">Samples</a>
        <a href="#services">Services</a>
        <a href="#mission-vision">Mission & Vision</a>
        <a href="#contact">Contact</a>
    </div>
  )
}

export { Navbar }