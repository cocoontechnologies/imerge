import { Container } from "./section/Container"
import { Heading } from "./section/Heading"
import { imergeData } from "../assets/imergeData"
import { Card } from "./Card"
const Services = () => {
  return (
    <Container id="services">
      <div className="flex flex-col gap-6 tablet:gap-12 laptop:gap-16">
        <Heading title="02 - Services" firstLine="Services to" secondLine="elevate you"/>
        <div className="h-full grid grid-cols-1 items-center justify-center align gap-4 tablet:grid-cols-2 tablet:gap-6 laptop:gap-8 desktop:px-32">
          { imergeData.services.map((service, index) => <Card key={index} serviceName={service.serviceName} description={service.description} className={`${index === 0 ? 'tablet:justify-self-center tablet:col-span-2 tablet:w-full' : ''}`}/>)}
        </div>
      </div>
    </Container>
  )
}

export { Services }