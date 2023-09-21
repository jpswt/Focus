'use client';

import { useState } from 'react';
import ToggleBtn from './ui/ToggleBtn';
import Favorite from './ui/Favorite';
import Link from 'next/link';

type Props = {
	toggleTheme: () => void;
};

const SideMenu = ({ toggleTheme }: Props) => {
	const [toggleMenu, setToggleMenu] = useState<boolean>(false);

	const handleToggle = () => {
		setToggleMenu(!toggleMenu);
	};
	return (
		<div className="flex-col bg-base-200 md:flex md:min-h-screen">
			<div className="flex items-center justify-between px-6 py-4 md:pb-10 md:pt-4">
				<div className="flex items-center gap-2  ">
					<div
						onClick={toggleTheme}
						className="cursor-pointer hover:opacity-80"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth="1.5"
							stroke="currentColor"
							className="h-10 w-10 text-accent"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
							/>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"
							/>
						</svg>
					</div>

					<h1 className="text-xl">FOCUS</h1>
				</div>
				<div
					onClick={handleToggle}
					className="z-10 block cursor-pointer md:hidden"
				>
					<ToggleBtn toggleMenu={toggleMenu} />
				</div>
			</div>
			<ul className="menu hidden w-72 md:block ">
				<li className="pb-6">
					<Link href="/gallery" legacyBehavior passHref>
						<div className="text-lg">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth="1.5"
								stroke="currentColor"
								className="h-6 w-6"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
								/>
							</svg>
							My Photos
						</div>
					</Link>
				</li>

				<li className="pb-6">
					<Link href="/albums" legacyBehavior passHref>
						<div className="text-lg">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth="1.5"
								stroke="currentColor"
								className="h-6 w-6"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
								/>
							</svg>
							Albums
						</div>
					</Link>
				</li>
				<li>
					<Link href="/favorites" legacyBehavior passHref>
						<div className="text-lg">
							<Favorite stx="h-6 w-6" stroke="currentColor" fill="none" />
							Favorites
						</div>
					</Link>
				</li>
			</ul>
			{/* Mobile */}
			<ul
				className={
					toggleMenu
						? 'top-18 menu fixed left-0 z-10 h-screen w-full items-center bg-base-200 duration-300 ease-in md:hidden '
						: 'top-18 menu fixed left-[-100%] z-10 h-screen bg-base-200 duration-300 ease-in '
				}
			>
				<li className="w-full pb-6">
					<a className="text-lg">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth="1.5"
							stroke="currentColor"
							className="h-6 w-6"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
							/>
						</svg>
						My Photos
					</a>
				</li>
				<li className=" w-full pb-6">
					<a className="text-lg">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth="1.5"
							stroke="currentColor"
							className="h-6 w-6"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
							/>
						</svg>
						Albums
					</a>
				</li>
				<li className="w-full">
					<a className="text-lg">
						<Favorite stx={`h-6 w-6`} stroke="currentColor" fill="none" />
						Favorites
					</a>
				</li>
			</ul>
		</div>
	);
};
export default SideMenu;
