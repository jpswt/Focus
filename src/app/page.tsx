'use client';

import { CldUploadButton } from 'next-cloudinary';
import { CldImage } from 'next-cloudinary';
import { useState } from 'react';

// type UploadResult = {
// 	info: {
// 		public_id: string;
// 	};
// 	event: 'success';
// };

export default function Home() {
	const [image, setImage] = useState('');
	console.log(image);

	return (
		<main>
			<CldUploadButton
				uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_PRESET}
				onUpload={(result: any) => {
					console.log(result.info.public_id);
					setImage(result?.info?.public_id);
				}}
			/>
			<CldImage
				width="400"
				height="300"
				src={image ? image : '0'}
				sizes="100vw"
				alt="Description of my image"
			/>
		</main>
	);
}
