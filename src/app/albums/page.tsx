import Image from '@/components/ui/CloudImage';
import cloudinary from 'cloudinary';
import Reload from '@/components/ui/Reload';
import FolderCard from '@/components/ui/FolderCard';

export type Results = {
	public_id: string;
	tags: string[];
};

const AlbumsPage = async () => {
	const folders = await cloudinary.v2.api.root_folders();
	console.log(folders);

	const content = await cloudinary.v2.api.resources();

	console.log('content', content.resources);

	return (
		<section className=" min-h-full  p-5">
			<Reload />
			<div className="flex justify-between">
				<h1 className="text-xl ">My Albums</h1>
			</div>
			<div className="mt-10 grid grid-cols-[repeat(1,minmax(300px,400px))] items-center justify-center gap-6 md:grid-cols-[repeat(2,minmax(200px,300px))] lg:grid-cols-[repeat(3,minmax(200px,300px))]  ">
				{folders.folders.map((folder: any) => (
					<FolderCard folder={folder} key={folder.path} />
				))}
			</div>
		</section>
	);
};
export default AlbumsPage;
