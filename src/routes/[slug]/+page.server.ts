import { getSinglePost } from '$lib/utils/files';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const post = getSinglePost(params.slug);

	if (!post) error(404, 'Post not found');

	return { post };
};
