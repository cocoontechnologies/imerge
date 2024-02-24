import React from 'react'

const Container = ( {children, id}:{children:React.ReactNode, id:string} ) => {
  return (
    <section 
      id={id} 
      className='box-border relative flex w-full h-screen min-h-screen max-h-[110vh] justify-center pb-8 px-4 overflow-clip
                 tablet:px-16 laptop:flex-col laptop:items-center'>
      { children }
    </section>
  )
}

export {Container}