import Image from '@/components/ui/CloudImage';
import UploadBtn from '../../../components/ui/UploadBtn';
import cloudinary from 'cloudinary';
import Reload from '@/components/ui/Reload';
import AlbumImages from './album-images';

export type Results = {
	public_id: string;
	tags: string[];
};

const AlbumGalleryPage = async ({
	params: { albumName },
}: {
	params: { albumName: string };
}) => {
	const result = (await cloudinary.v2.search
		.expression(`resource_type:image AND folder=${albumName}`)
		.with_field('tags')
		.sort_by('created_at', 'desc')
		.max_results(10)
		.execute()) as { resources: Results[] };

	console.log(result);

	return (
		<section className="p-5">
			<Reload />
			<div className="flex justify-between">
				<h1 className="text-xl ">My Photos</h1>
				<UploadBtn />
			</div>
			<AlbumImages initResource={result.resources} />
			{/* <div className=" mx-auto mt-10 flex w-full columns-1 flex-col items-center md:block md:columns-2 lg:columns-3 ">
				{result.resources.map((image) => (
					<Image
						source={image.public_id}
						key={image.public_id}
						publicId={image.public_id}
						image={image}
						alt=""
					/>
				))}
			</div> */}
		</section>
	);
};
export default AlbumGalleryPage;
