'use server';

import cloudinary from 'cloudinary';

export const setFavorites = async (publicId: string, isFavorite: boolean) => {
	if (isFavorite) {
		cloudinary.v2.uploader.add_tag('favorite', [publicId]);
	} else {
		cloudinary.v2.uploader.remove_tag('favorite', [publicId]);
	}
};
