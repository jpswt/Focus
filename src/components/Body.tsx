'use client';

import { Inter } from 'next/font/google';
import SideMenu from './SideMenu';
import { useState } from 'react';

const inter = Inter({ subsets: ['latin'] });

const Body = ({ children }: any) => {
	const [toggleTheme, setToggleTheme] = useState<boolean>(false);

	const handleTheme = () => {
		setToggleTheme(!toggleTheme);
	};
	console.log(toggleTheme);
	return (
		<html lang="en" data-theme={toggleTheme ? 'light' : 'dark'}>
			<body className={inter.className}>
				<div className="flex flex-col md:flex-row  ">
					<SideMenu toggleTheme={handleTheme} />
					<div className="w-full">{children}</div>
				</div>
			</body>
		</html>
	);
};
export default Body;
