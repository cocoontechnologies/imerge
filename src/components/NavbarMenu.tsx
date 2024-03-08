import { IoClose } from "react-icons/io5";

const NavbarMenu = ({ onClose }: { onClose: () => void }) => {
	const closeNavbarMenu = () => {
		onClose();
	}

	return (
		<div className="block laptop:hidden fixed top-0 left-0 w-full h-full"> 
			<div className='w-full h-full absolute bg-gradient-to-b from-navy-700 from-70% to-navy-300 opacity-90 -z-10'></div>
			<div id='background' className='absolute opacity-30 w-full h-full -z-10'></div>

			<div className="flex flex-col gap-10 w-full pl-4 pr-2.5 pt-2 tablet:pl-10 text-white-100 text-lg">
				<div className="flex justify-end"><IoClose onClick={onClose} /></div>
				<div className="flex flex-col gap-6">
					<a href="#hero" onClick={closeNavbarMenu} className="hover:font-semibold hover:pl-6">Home</a>
					<a href="#samples" onClick={closeNavbarMenu} className="hover:font-semibold hover:pl-6">Samples</a>
					<a href="#services" onClick={closeNavbarMenu} className="hover:font-semibold hover:pl-6">Services</a>
					<a href="#mission-vision" onClick={closeNavbarMenu} className="hover:font-semibold hover:pl-6">Mission & Vision</a>
					<a href="#contact" onClick={closeNavbarMenu} className="hover:font-semibold hover:pl-6">Contact</a>
				</div>
			</div>
		</div>
	)
}

export { NavbarMenu }
