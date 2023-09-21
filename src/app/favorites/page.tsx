import Image from '@/components/ui/CloudImage';

import cloudinary from 'cloudinary';
import FavoritesImages from './favorites-images';

export type Results = {
	public_id: string;
	tags: string[];
};

const GalleryPage = async () => {
	const result = (await cloudinary.v2.search
		.expression('resource_type:image AND tags=favorite')
		.with_field('tags')
		.sort_by('created_at', 'desc')
		.max_results(10)
		.execute()) as { resources: Results[] };

	console.log(result);

	return (
		<section className="p-5">
			<div>
				<h1 className="text-xl ">Favorite Photos</h1>
			</div>
			<FavoritesImages initResource={result.resources} />
		</section>
	);
};
export default GalleryPage;
