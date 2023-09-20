'use client';

import Button from '@/components/Button';
import { CldUploadButton } from 'next-cloudinary';
import { useState } from 'react';

const UploadBtn = () => {
	const [image, setImage] = useState('');
	return (
		<Button stx="flex gap-2 items-center ">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				strokeWidth={2}
				stroke="currentColor"
				className="h-6 w-6"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15m0-3l-3-3m0 0l-3 3m3-3V15"
				/>
			</svg>

			<CldUploadButton
				uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_PRESET}
				onUpload={(result: any) => {
					console.log(result.info.public_id);
					setImage(result?.info?.public_id);
				}}
			/>
		</Button>
	);
};
export default UploadBtn;
