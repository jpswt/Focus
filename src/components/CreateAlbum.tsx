// 'use server';

// import cloudinary from 'cloudinary';

// export const createAlbum = async (image: Results, albumName: string) => {
// 	const album = await cloudinary.v2.api.create_folder(albumName);

// 	let parts = image.public_id.split('/');
// 	if (parts.length > 1) {
// 		parts = parts.slice(1);
// 	}
// 	const imageID = parts.join('/');
// 	console.log('parts', parts);
// 	await cloudinary.v2.uploader.rename(image.public_id, `${album}/${imageID}`);
// };

'use server';

import { Results } from '@/app/gallery/page';
import cloudinary from 'cloudinary';

export async function createAlbum(image: Results, album: string) {
	await cloudinary.v2.api.create_folder(album);

	let parts = image.public_id.split('/');
	if (parts.length > 1) {
		parts = parts.slice(1);
	}
	const publicId = parts.join('/');

	await cloudinary.v2.uploader.rename(image.public_id, `${album}/${publicId}`);
	console.log(image, album);
}
