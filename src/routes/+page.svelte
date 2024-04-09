<script lang="ts">
	import type { PageServerData } from './$types';
	import BlogCard from '$lib/components/blog-card.svelte';

	export let data: PageServerData;
</script>

<div class="space-y-6">
	{#if data}
		{#each data.posts as { attributes }}
			<BlogCard post={attributes} />
		{/each}
	{/if}
</div>

<svelte:head>
	<title>nitish's blog</title>
	<meta name="description" content="stories and shitposts" />
</svelte:head>
