<script>
	export let post = {
		title: '',
		date: '',
		slug: '',
		excerpt: ''
	};
</script>

<div>
	<time datetime={post.date} class="text-gray-400 text-sm">
		{new Date(post.date).toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		})}
	</time>
	<h2
		class="blog-title text-xl font-semibold md:text-2xl mb-2 text-gray-800 dark:text-gray-300"
		style:--title="blog-{post.slug}"
	>
		<a href={post.slug}>
			{post.title}
		</a>
	</h2>
	{#if post.excerpt}
		<p class="text-gray-600 text-base dark:text-gray-400">{post.excerpt}</p>
	{/if}
</div>
