import { twMerge } from "tailwind-merge"

const Card = ( { className, serviceName, description }:{ className?:string, serviceName:string, description:string } ) => {
  return (
    <div className={twMerge('flex flex-col border h-full border-[#e1e1e1] rounded-lg shadow-[0_10px_12px_-15px_rgba(0,0,0,0.3)] tracking-[-0.075em] bg-[#fff] p-5 gap-2 laptop:gap-6 laptop:p-12', className)}>
        <h3 className='text-base laptop:text-lg font-cardo font-bold'>{ serviceName }</h3>
        <p className='text-xs laptop:text-md text-black-100/75 font-arsenal tracking-tight'>{ description }</p>
    </div>
  )
}

export { Card }