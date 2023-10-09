'use client';

import Button from '@/components/ui/Button';
import UploadBtn from '@/components/ui/UploadBtn';
import cloudinary from 'cloudinary';
import { CldImage, CldUploadButton } from 'next-cloudinary';
import { useState } from 'react';
import axios from 'axios';

const Modify = ({ searchParams: { id } }: { searchParams: { id: string } }) => {
	console.log(id);

	const [fill, setFill] = useState('');
	const [width, setWidth] = useState();
	const [height, setHeight] = useState();
	const [file, setFile] = useState('');

	console.log(file);

	const handleHeight = (e: any) => {
		const value = e.target.value;
		setHeight(value);
	};
	const handleWidth = (e: any) => {
		const value = e.target.value;
		setWidth(value);
	};

	const onUpload = async (file: any) => {
		await cloudinary.v2.uploader.upload(id);

		// axios
		// 	.post('https://api.cloudinary.com/v1_1/dsodhijhd/image/upload', {
		// 		file,
		// 	})
		// 	.then((res) => {
		// 		console.log(res);
		// 	});
	};

	return (
		<section className="p-5">
			<div className="flex justify-between">
				<h1 className="text-xl ">Modify {id}</h1>
			</div>
			<div
				className="btn btn-primary"
				onClick={() => {
					setFill('ai-fill');
					setFile(id);
				}}
			>
				Fill
			</div>
			<div>
				<input type="text" onChange={handleWidth} placeholder="Enter width" />
			</div>
			<div>
				<input type="text" onChange={handleHeight} placeholder="Enter height" />
			</div>
			<CldImage src={id} alt="something" width="300" height="200" />
			{fill === 'ai-fill' && (
				<div>
					<CldImage
						src={id}
						alt="something"
						width={width || 0}
						height={height || 1}
						crop="pad"
						fillBackground
					/>
					<button
						onClick={() => {
							onUpload(file);
						}}
					>
						Submit
					</button>
				</div>
			)}
		</section>
	);
};
export default Modify;
