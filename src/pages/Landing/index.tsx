import { Navbar } from '../../components/Navbar'
import { Container } from '../../components/Container'
import { BsChevronDown } from "react-icons/bs";
import { Samples } from '../../components/Samples'


const Landing = () => {
  return (
    <div className='relative flex flex-col w-full min-h-screen justify-center gap-24'>
      <div id='background' className='absolute opacity-35 w-full h-full -z-10'></div>
        <Container id="hero">
          <Navbar />
          <div className='flex flex-col h-full w-full items-center pt-24'>
            <div className='flex flex-col gap-2 w-full h-full laptop:gap-12 laptop:font-normal'>
              <h1 
                className='capitalize font-cardo text-md tracking-tighter leading-tight font-bold
                          tablet:text-2xl tablet:font-normal
                          laptop:text-3xl
                          desktop:text-hero-l
                          hd:text-hero'>
                Your Brand Identity
                  <strong 
                    className='text-navy-700 block text-xl whitespace-nowrap
                              tablet:text-2xl tablet:font-normal 
                              laptop:text-3xl
                              desktop:text-hero-l
                              hd:text-hero'>
                    Begins Here.
                  </strong>
              </h1>
              <p className='capitalize text-xs tablet:text-base laptop:text-base desktop:text-md'>Captivating Stories, Captivating Audiences.</p>
            </div>
            <button className='inline-flex text-base gap-2 items-center laptop:self-start  '><div className='border border-black-100 rounded-full p-1 flex justify-center items-center'><BsChevronDown/></div><p className='hidden laptop:inline'>Scroll Down</p></button>
          </div>
          <div 
              id="heroBrochure" 
              className="-z-20 absolute -rotate-[19deg] flex items-center justify-center w-full h-full -bottom-[18rem] -right-4 scale-[1.35]
              sm:-bottom-[20rem] 
              tablet:scale-110
              laptop:scale-100 laptop:-bottom-[20rem] laptop:-right-[28rem]
              hd:scale-[1.4] hd:-bottom-[25rem] hd:-right-[32rem]"/>
          <div className="absolute -bottom-2 w-full h-12 bg-gradient-to-t from-white-100 to-white-100/0"/>
        </Container>
      
        <Samples />
    </div>
  )
}

export {Landing}