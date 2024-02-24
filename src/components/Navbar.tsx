import MenuButton from './MenuButton'

const Navbar = () => {
  return (
    <div 
        className="fixed overflow-hidden z-10 flex flex-col max-h-14 h-full w-full top-0 left-0 p-4 gap-6 justify-start text-black-100 font-arsenal text-base font-normal
                   laptop:inline-flex laptop:w-[838px] laptop:flex-row laptop:min-h-[72px] laptop:px-8 laptop:py-4 laptop:mt-8 laptop:gap-12 laptop:justify-center laptop:items-center laptop:rounded-full laptop:shadow-md laptop:bg-white-100 laptop:static">
        <MenuButton/>
        <a className="hidden tablet:block font-raleway font-bold text-md" href="#">iMerge</a>
        <a href="#">Home</a>
        <a href="#">Samples</a>
        <a href="#">Services</a>
        <a href="#">Mission & Vision</a>
        <a href="#">Contact</a>
    </div>
  )
}

export {Navbar}