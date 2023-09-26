'use client';

import { Results } from '@/app/gallery/page';
import { useState } from 'react';
import { createAlbum } from '../CreateAlbum';
import DropDown from '../DropDown';

const Modal = ({ image }: { image: Results }) => {
	const [album, setAlbum] = useState('');

	const [folderList, setFolderList] = useState('');

	return (
		<div className="absolute right-2 top-10">
			<button
				className="bg-none p-0 hover:text-accent"
				onClick={() => {
					if (document) {
						(
							document.getElementById('my_modal_1') as HTMLFormElement
						).showModal();
					}
					console.log(image);
				}}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					className="h-8 w-8"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
					/>
				</svg>
			</button>
			<dialog id="my_modal_1" className="modal">
				<div className="modal-box">
					{/* <form method="dialog"> */}
					{/* if there is a button in form, it will close the modal */}
					<form method="dialog">
						<button className="btn btn-circle btn-ghost btn-sm absolute right-2 top-2">
							✕
						</button>
					</form>

					<h3 className="mb-0 text-lg font-bold">Add to Album</h3>
					<p className="pb-4 pt-2">Add image to the album you choose!</p>
					<label htmlFor="name" className="block">
						Album Name:
					</label>
					<input
						className="mb-6 block w-[65%] py-1"
						type="text"
						name="album"
						onChange={(e) => setAlbum(e.currentTarget.value)}
						value={album}
					/>
					{/* <GetFolders /> */}
					<div className="modal-action text-right">
						<button
							className="btn btn-primary"
							type="submit"
							onClick={async () => {
								await createAlbum(image, album);
								setAlbum('');
							}}
						>
							Add to Album
						</button>
					</div>
				</div>
			</dialog>
		</div>
	);
};
export default Modal;
