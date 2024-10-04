<script lang="ts">
	import SvelteMarkdown from 'svelte-markdown';
	import ReadingProgress from '$lib/components/reading-progress.svelte';
	import type { PageServerData } from './$types';

	export let data: PageServerData;
</script>

<ReadingProgress />

<time datetime={data.post?.attributes.date} class="text-gray-400 text-sm inline-block mb-1">
	{new Date(data.post?.attributes.date).toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	})}
</time>

<article class="prose prose-lg prose-gray dark:prose-invert" id="article">
	<h2 class="blog-title" style:--title="blog-{data.post?.attributes.slug}">
		{data.post?.attributes.title}
	</h2>
	<SvelteMarkdown source={data.post?.markdown} />
</article>

<svelte:head>
	<title>{data.post.attributes.title}</title>
	<meta name="description" content={data.post.attributes.excerpt} />
	<meta property="og:title" content={data.post.attributes.title} />
	<meta property="og:description" content={data.post.attributes.excerpt} />
	<meta property="og:type" content="article" />
	<meta property="og:url" content={data.post.attributes.slug} />
	<meta property="og:image" content={data.post.attributes.cover} />
</svelte:head>
