'use server';

import cloudinary from 'cloudinary';
import { revalidatePath } from 'next/cache';

export const setFavorites = async (publicId: string, isFavorite: boolean) => {
	if (isFavorite) {
		cloudinary.v2.uploader.add_tag('favorite', [publicId]);
	} else {
		cloudinary.v2.uploader.remove_tag('favorite', [publicId]);
	}
	revalidatePath('/gallery');
};
