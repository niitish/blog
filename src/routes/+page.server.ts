import { allPosts } from '$lib/utils/files';
import type { PageServerLoad } from './$types';

export const prerender = true;

export const load: PageServerLoad = async () => {
	const posts = allPosts();

	return { posts };
};
