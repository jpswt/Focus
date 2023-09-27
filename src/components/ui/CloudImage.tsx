'use client';
import { CldImage } from 'next-cloudinary';
import Favorite from './Favorite';
import { setFavorites } from '@/app/gallery/favorites';
import { useState, useTransition } from 'react';
import { Results } from '@/app/gallery/page';
import { useRouter } from 'next/navigation';
import Modal from '../Modal';
import { createAlbum } from '../CreateAlbum';

type Props = {
	source: string;
	publicId: string;
	image: Results;
	alt: String;

	removeFavorite?: (resourceData: Results) => void;
	removeAlbum?: (resourceData: Results) => void;
};

const Image = ({
	source,
	publicId,
	image,
	removeFavorite,
	removeAlbum,
}: Props) => {
	const router = useRouter();
	const [transition, setTransition] = useTransition();
	const [open, setOpen] = useState(false);
	const [album, setAlbum] = useState('');

	const handleToggle = () => setOpen((prevState) => !prevState);

	const [isFavorite, setIsFavorite] = useState(image.tags.includes('favorite'));
	console.log(isFavorite);

	return (
		<div className="relative w-fit ">
			{isFavorite ? (
				<div
					className="absolute right-2 top-1 cursor-pointer "
					onClick={() => {
						setIsFavorite(false);
						removeFavorite?.(image);
						setTransition(() => {
							setFavorites(publicId, false);
						});
					}}
				>
					<Favorite
						stx={'h-6 w-6'}
						stroke="hsl(var(--a))"
						fill="hsl(var(--a))"
					/>
				</div>
			) : (
				<div
					className="absolute right-2 top-1 cursor-pointer"
					onClick={() => {
						setIsFavorite(true);
						setTransition(() => {
							setFavorites(publicId, true);
						});
					}}
				>
					<Favorite
						stx={'h-6 w-6 hover:text-accent'}
						stroke="currentColor"
						fill="none"
					/>
				</div>
			)}

			<CldImage
				width="400"
				height="300"
				src={source ? source : '0'}
				sizes="100vw"
				alt="Description of my image"
				style={{ marginBottom: '1rem' }}
			/>
			{/* <DropMenu /> */}
			<div className="absolute right-2 top-10">
				<button
					className="rounded-md bg-neutral p-1 opacity-90 hover:text-accent"
					onClick={handleToggle}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="h-6 w-6 hover:text-accent"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M12 4.5v15m7.5-7.5h-15"
						/>
					</svg>
				</button>
				<Modal open={open} onClose={() => setOpen(false)}>
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
					<div className="modal-action text-right">
						<button
							className="btn btn-primary"
							type="submit"
							onClick={async () => {
								await createAlbum(image, album);
								setAlbum('');
								setOpen(false);
								removeAlbum?.(image);
							}}
						>
							Add to Album
						</button>
					</div>
				</Modal>
			</div>
			<div className="absolute right-2 top-[76px] rounded-md bg-neutral p-1">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					className="h-6 w-6 hover:text-accent"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
					/>
				</svg>
			</div>
			{/* <Modal image={image} pi={publicId} /> */}
		</div>
	);
};
export default Image;
