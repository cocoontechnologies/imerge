import React from 'react'

const Container = ( {children, id}:{children:React.ReactNode, id:string} ) => {
  return (
    <section 
      id={id} 
      className='relative flex w-full justify-center pb-8 px-4 overflow-clip
                 md:px-16 lg:flex-col lg:items-center'>
        { children }
    </section>
  )
}

export {Container}