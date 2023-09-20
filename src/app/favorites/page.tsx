import Image from '@/components/ui/CloudImage';

import cloudinary from 'cloudinary';

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
			<div className=" mx-auto mt-10 flex w-full columns-1 flex-col items-center md:block md:columns-2 lg:columns-3 ">
				{result.resources.map((image) => (
					<Image
						source={image.public_id}
						key={image.public_id}
						publicId={image.public_id}
						image={image}
					/>
				))}
			</div>
		</section>
	);
};
export default GalleryPage;
