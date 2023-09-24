'use client';
import { CldImage } from 'next-cloudinary';
import Favorite from './Favorite';
import { setFavorites } from '@/app/gallery/favorites';
import { useState, useTransition } from 'react';
import { Results } from '@/app/gallery/page';
import { useRouter } from 'next/navigation';
import DropMenu from './DropMenu';
import Modal from './Modal';

type Props = {
	source: string;
	publicId: string;
	image: Results;

	removeFavorite?: (resourceData: Results) => void;
};

const Image = ({ source, publicId, image, removeFavorite }: Props) => {
	const router = useRouter();
	const [transition, setTransition] = useTransition();

	const [isFavorite, setIsFavorite] = useState(image.tags.includes('favorite'));
	console.log(isFavorite);

	return (
		<div className="relative">
			{isFavorite ? (
				<div
					className="absolute right-2 top-1 cursor-pointer"
					onClick={() => {
						setIsFavorite(false);
						removeFavorite?.(image);
						setTransition(() => {
							setFavorites(publicId, false);
						});
					}}
				>
					<Favorite stx={'h-8 w-8'} stroke="red" fill="red" />
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
					<Favorite stx={'h-8 w-8'} stroke="red" fill="none" />
				</div>
			)}

			<CldImage
				width="400"
				height="300"
				src={source ? source : '0'}
				sizes="100vw"
				alt="Description of my image"
				style={{ marginBottom: '1rem`' }}
			/>
			{/* <DropMenu /> */}
			<Modal image={image} />
		</div>
	);
};
export default Image;
