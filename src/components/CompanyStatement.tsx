const CompanyStatement = ( { title, description }:{ title:string, description:string } ) => {
  return (
    <div 
      className="grid border-black-100/30 gap-2 pb-4 border-b
        tablet:pb-8
        laptop:pb-0 laptop:pt-4 laptop:grid-cols-2 laptop:border-t laptop:border-b-0">
      <span className="capitalize font-cardo text-base tablet:text-lg">Our <strong className="font-normal text-navy-700">{ title }</strong></span>
      <p className="font-arsenal tracking-tight text-justify text-xs tablet:text-md ">{ description }</p>
    </div>
  )
}

export { CompanyStatement }