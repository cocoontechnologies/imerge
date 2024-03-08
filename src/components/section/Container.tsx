import React from 'react'
import { twMerge } from 'tailwind-merge'

const Container = ( {children, id, className}:{children:React.ReactNode, id:string, className?:string} ) => {
  return (
    <section 
      id={id} 
      className={twMerge('relative flex w-full justify-center pb-8 px-6 overflow-clip md:px-16 lg:flex-col lg:items-center scroll-mt-40', className )}>
        { children }
    </section>
  )
}

export {Container}