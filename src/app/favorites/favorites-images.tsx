'use client';

import Image from '@/components/ui/CloudImage';
import { Results } from './page';
import { useEffect, useState } from 'react';

const FavoritesImages = ({ initResource }: { initResource: Results[] }) => {
	const [resources, setResources] = useState(initResource);

	const handleRemoveFavorite = (resourceData: Results) => {
		setResources((currResources) =>
			currResources.filter(
				(resource) => resource.public_id !== resourceData.public_id
			)
		);
	};

	useEffect(() => {
		setResources(initResource);
	}, [initResource]);

	return (
		<div className=" mx-auto mt-10 flex w-full flex-1 columns-1 flex-col items-center md:block md:columns-2 lg:columns-3 ">
			{resources.map((image) => (
				<Image
					source={image.public_id}
					publicId={image.public_id}
					key={image.public_id}
					image={image}
					removeFavorite={handleRemoveFavorite}
					alt=""
				/>
			))}
		</div>
	);
};
export default FavoritesImages;
