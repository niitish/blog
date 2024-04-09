type PostAttributes = {
	title: string;
	slug: string;
	date: string;
	excerpt: string;
	cover: string;
	tags: string[];
};

type MDFile = {
	attributes: PostAttributes;
	markdown: string;
};

export const allPosts = () => {
	const posts: Record<string, MDFile> = import.meta.glob('../posts/*.md', { eager: true });

	const sortedPosts = Object.keys(posts)
		.reduce((acc, path) => {
			const post = posts[path];
			acc.push({
				attributes: post.attributes,
				markdown: post.markdown
			});
			return acc;
		}, [] as MDFile[])
		.sort((a, b) => {
			return new Date(b.attributes.date).getTime() - new Date(a.attributes.date).getTime();
		});

	return sortedPosts;
};

export const getSinglePost = (slug: string) => {
	const post = allPosts().find((post) => post.attributes.slug === slug);
	return post;
};
