import React from 'react'

const Container = ( {children, id}:{children:React.ReactNode, id:string} ) => {
  return (
    <section id={id} className='relative flex w-full justify-center px-16 pb-8 overflow-clip'>
        { children }
    </section>
  )
}

export {Container}