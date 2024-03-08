import { IoClose } from "react-icons/io5";
import { useState, useEffect } from 'react';

const NavbarMenu = ({ onClose }: { onClose: () => void }) => {
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsOpen(true);
		}, 100);

		return () => clearTimeout(timer);
	}, []);

	const closeNavbarMenu = () => {
		setIsOpen(false);
		setTimeout(() => {
			onClose();
		}, 1000);
	};

	return (
		<div className={`block laptop:hidden fixed top-0 left-0 w-full h-full transform transition-transform duration-1000 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
			<div className='w-full h-full absolute bg-gradient-to-b from-navy-700 from-70% to-navy-300 opacity-90 -z-10'></div>
			<div id='background' className='absolute opacity-30 w-full h-full -z-10'></div>

			<div className="flex flex-col gap-10 w-full pl-4 pr-2.5 pt-2 tablet:pl-10 text-white-100 text-lg">
				<div className="flex justify-end">
					<IoClose onClick={closeNavbarMenu} className="transform hover:rotate-180 transition duration-500 delay-2000 ease-in-out" />
				</div>

				<div className="flex flex-col gap-6">
					<a href="#hero" onClick={closeNavbarMenu} className='transform hover:translate-x-5 duration-1000 ease-in-out'>Home</a>
					<a href="#samples" onClick={closeNavbarMenu} className="transform hover:translate-x-5 duration-1000 ease-in-out">Samples</a>
					<a href="#services" onClick={closeNavbarMenu} className="transform hover:translate-x-5 duration-1000 ease-in-out">Services</a>
					<a href="#mission-vision" onClick={closeNavbarMenu} className="transform hover:translate-x-5 duration-1000 ease-in-out">Mission & Vision</a>
					<a href="#contact" onClick={closeNavbarMenu} className="transform hover:translate-x-5 duration-1000 ease-in-out">Contact</a>
				</div>
			</div>
		</div>
	)
}

export { NavbarMenu }
