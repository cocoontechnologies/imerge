import { Container } from './section/Container'
import { Heading } from './section/Heading'
import { imergeData } from '../assets/imergeData'
import { CompanyStatement } from './CompanyStatement'

const MissionVision = () => {
  return (
    <Container id="mission-vision">
      <div className='flex flex-col gap-6 tablet:gap-12 laptop:gap-16'>
       <Heading title='03 - Mission & Vision' firstLine='The heart of' secondLine='what we do' />
        <div className='flex flex-col gap-8 laptop:gap-16 laptop:px-36'>
         <CompanyStatement title="Mission" description={imergeData.companyStatement.mission} />
         <CompanyStatement title="Vision" description={imergeData.companyStatement.vision} />
        </div>
      </div>
    </Container>
  )
}

export { MissionVision }