'use client';
import { CldImage } from 'next-cloudinary';
import Favorite from './Favorite';
import { setFavorites } from '@/app/gallery/favorites';
import { useState, useTransition } from 'react';
import { Results } from '@/app/gallery/page';

type Props = {
	source: string;
	publicId: string;
	image: Results;
};

const Image = ({ source, publicId, image }: Props) => {
	const [transition, setTransition] = useTransition();

	const [isFavorite, setIsFavorite] = useState(image.tags.includes('favorite'));
	console.log(isFavorite);

	return (
		<div className="relative">
			{isFavorite ? (
				<div
					className="absolute right-1 top-1 cursor-pointer"
					onClick={() => {
						setIsFavorite(false);
						setTransition(() => {
							setFavorites(publicId, false);
						});
					}}
				>
					<Favorite stx={'h-8 w-8'} stroke="red" fill="red" />
				</div>
			) : (
				<div
					className="absolute right-1 top-1 cursor-pointer"
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
			/>
		</div>
	);
};
export default Image;
