'use client';

import { CldUploadButton } from 'next-cloudinary';
import { useState } from 'react';

const GalleryPage = () => {
	const [image, setImage] = useState('');
	return (
		<section className="p-5">
			<div className="flex justify-between">
				<h1 className="text-xl ">My Photos</h1>
				<CldUploadButton
					uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_PRESET}
					onUpload={(result: any) => {
						console.log(result.info.public_id);
						setImage(result?.info?.public_id);
					}}
				/>
			</div>
		</section>
	);
};
export default GalleryPage;
