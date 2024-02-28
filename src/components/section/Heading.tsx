const Heading = ( {title, firstLine, secondLine}:{title:string, firstLine:string, secondLine:string}) => {
  return (
    <div className='flex flex-col justify-center items-center box-border gap-4 tablet:gap-8'>
        <div className='text-xs tablet:text-sm tracking-tighter font-arsenal'>{ title }</div>
        <div className='text-md text-center tablet:text-xl laptop:text-3xl font-cardo'>{ firstLine } <br/> { secondLine }</div>
    </div>
  )
}
export { Heading }