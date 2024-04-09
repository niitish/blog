import { allPosts } from '$lib/utils/files';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const posts = allPosts();

	return { posts };
};
