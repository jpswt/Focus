import UploadBtn from './upload-btn';

const GalleryPage = () => {
	return (
		<section className="p-5">
			<div className="flex justify-between">
				<h1 className="text-xl ">My Photos</h1>
				<UploadBtn />
			</div>
		</section>
	);
};
export default GalleryPage;
