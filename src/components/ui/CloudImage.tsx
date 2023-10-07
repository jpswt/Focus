'use client';
import { CldImage } from 'next-cloudinary';
import { setFavorites } from '@/app/gallery/favorites';
import { useState, useTransition } from 'react';
import { Results } from '@/app/gallery/page';
import { useRouter } from 'next/navigation';
import { createAlbum } from '../CreateAlbum';
import Modal from '../Modal';
import FavoriteBtn from './FavoriteBtn';
import AddBtn from './AddBtn';
import EditBtn from './EditBtn';
import Link from 'next/link';

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
					<FavoriteBtn
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
					<FavoriteBtn
						stx={'h-6 w-6 hover:text-accent'}
						stroke="currentColor"
						fill="none"
					/>
				</div>
			)}

			<CldImage
				width="450"
				height="350"
				src={source ? source : '0'}
				sizes="100vw"
				alt="Description of my image"
				style={{ marginBottom: '1rem' }}
			/>
			{/* <DropMenu /> */}
			<div className="absolute right-2 top-10">
				<AddBtn handleToggle={handleToggle} />
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
			<Link href={`/modify?id=${image.public_id}`}>
				<EditBtn />
			</Link>
		</div>
	);
};
export default Image;
