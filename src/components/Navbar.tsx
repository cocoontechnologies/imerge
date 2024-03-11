import { useState } from 'react';
import { MenuButton } from './MenuButton';
import { NavbarMenu } from './NavbarMenu';

const Navbar = () => {
	const [openMenu, setopenMenu] = useState(false);
	
	const toggleMenu = () => {
		setopenMenu(!openMenu);
	};

	return (
		<div className="fixed overflow-hidden z-10 flex flex-col max-h-14 h-full w-full top-0 left-0 p-4 gap-6 justify-start text-black-100 font-arsenal text-base font-normal
				laptop:inline-flex laptop:w-[838px] laptop:flex-row laptop:min-h-[72px] laptop:px-8 laptop:py-4 laptop:mt-8 laptop:gap-12 laptop:justify-center laptop:items-center laptop:rounded-full laptop:shadow-md laptop:backdrop-blur-xl laptop:bg-gradient-to-r laptop:from-white-100 laptop:to-white-100/5 laptop:fixed laptop:left-auto">
			
			{!openMenu && <MenuButton onClick={toggleMenu} />} 

			{/* <a className="hidden laptop:block font-raleway font-bold text-md" href="#">iMerge</a> */}
			<a className="hidden laptop:block w-24" href="#"> <img src="/iMergeLogo.webp" alt="iMerge" /> </a>
			<a className="hidden laptop:block transform hover:text-[1.30rem] duration-300" href="#hero">Home</a>
			<a className="hidden laptop:block transform hover:text-[1.30rem] duration-300" href="#samples">Samples</a>
			<a className="hidden laptop:block transform hover:text-[1.30rem] duration-300" href="#services">Services</a>
			<a className="hidden laptop:block transform hover:text-[1.30rem] duration-300" href="#mission-vision">Mission & Vision</a>
			<a className="hidden laptop:block transform hover:text-[1.30rem] duration-300" href="#contact">Contact</a>

			{openMenu && <NavbarMenu onClose={toggleMenu} />}
		</div>
	)
}

export { Navbar }
