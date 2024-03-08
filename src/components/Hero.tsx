import { Navbar } from './Navbar'
import { Container } from './section/Container'
import { BsChevronDown } from "react-icons/bs"

const Hero = () => {
  return (
    <Container id="hero" className='mb-12'>
      <Navbar />
        <div className='flex flex-col h-screen w-full items-center pt-24'>
          <div className='flex flex-col gap-2 w-full h-full laptop:gap-12 laptop:mt-28 laptop:font-normal'>
            <h1 
              className='capitalize font-cardo text-md tracking-tighter leading-tight font-bold
                        tablet:text-2xl tablet:font-normal
                        laptop:text-3xl
                        desktop:text-hero-l
                        hd:text-hero'>
              Your Brand Identity
                <strong 
                  className='text-navy-700 block text-lg whitespace-nowrap
                            tablet:text-2xl tablet:font-normal 
                            laptop:text-3xl
                            desktop:text-hero-l
                            hd:text-hero'>
                  Begins Here.
                </strong>
            </h1>
            <p className='capitalize text-xs tablet:text-sm laptop:text-base desktop:text-md'>Captivating Stories, Captivating Audiences.</p>
          </div>
          <a href="#samples" className='inline-flex text-base gap-2 items-center laptop:self-start laptop:mb-10 scroll-m-'><div className='border border-black-100 rounded-full p-1 flex justify-center items-center'><BsChevronDown/></div><p className='hidden laptop:inline'>Scroll Down</p></a>
        </div>
        <div 
          id="heroBrochure" 
          className="-z-20 absolute -rotate-[19deg] flex items-center justify-center w-full h-full -bottom-[12rem] -right-4 scale-150
          sm:-bottom-[20rem] 
          tablet:scale-110
          laptop:scale-100 laptop:-bottom-[16rem] laptop:-right-[24rem]
          desktop:scale-[1.2] desktop:-bottom-[24rem] desktop:-right-[28rem]"/>
      <div className="absolute -bottom-2 w-full h-12 bg-gradient-to-t from-white-100 to-white-100/0"/>
    </Container>
  )
}

export { Hero }