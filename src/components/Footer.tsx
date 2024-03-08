import { Container } from "./section/Container"
import { imergeData } from "../assets/imergeData"
import { MdOutlineMailOutline, MdOutlineSmartphone } from "react-icons/md"
import { FaInstagram } from "react-icons/fa"
import { SlLocationPin } from "react-icons/sl"
import { FaSquareFacebook } from "react-icons/fa6"

const Footer = () => {
  return (
    <Container id="contact" className="bg-[#6895AB] w-full">
        <div id='background' className='absolute opacity-35 w-full h-full -z-1'></div>
        <div className="flex flex-col justify-center items-start laptop:items-center gap-4 w-full pt-6 pb-0 laptop:py-20 font-arsenal text-white-100">
            <div className="flex flex-col laptop:items-center gap-1 w-full">
                <div className="text-sm laptop:text-md">Got a project?</div>
                <div className="">
                    <div className="font-cardo text-[10vw] desktop:text-[11vw] leading-none mb-4 laptop:mb-0">GET IN TOUCH</div>
                    <div className="flex flex-col laptop:flex-row justify-between items-start gap-28 w-full">
                        <div className="flex flex-col justify-end gap-4">
                            <div className="flex flex-col gap-1">
                                <div className="flex items-center gap-2"><MdOutlineMailOutline /> {imergeData.footer.contact.email} </div>
                                <div className="flex items-center gap-2"><MdOutlineSmartphone /> {imergeData.footer.contact.mobile} </div>
                            </div>
                            
                            <hr className="w-10" />

                            <div className="flex flex-col gap-1">
                                <div className="flex items-center gap-2"><FaSquareFacebook /> {imergeData.footer.social.facebook} </div>
                                <div className="flex items-center gap-2"><FaInstagram /> {imergeData.footer.social.instagram} </div>
                            </div>
                            
                            <hr className="w-10" />

                            <div className="flex items-center gap-2"><SlLocationPin /> {imergeData.footer.address} </div>
                        </div>

                        <div>
                            © 2024 iMerge. All rights reserved.
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </Container>
  )
}

export { Footer }