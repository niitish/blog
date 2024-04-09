<script lang="ts">
	import { onMount } from 'svelte';

	let progress = 0;

	onMount(() => {
		const calculateReadingProgress = () => {
			const scrollPosition = window.scrollY;
			const windowHeight = window.innerHeight;
			const body = document.body.offsetHeight;

			const totalDocHeight = Math.abs(body - windowHeight);
			const readingProgress = (scrollPosition / totalDocHeight) * 100;

			progress = readingProgress;
		};

		window.addEventListener('scroll', calculateReadingProgress);

		return () => {
			window.removeEventListener('scroll', calculateReadingProgress);
		};
	});
</script>

<div class="fixed w-full top-0 left-0">
	<div class="h-[5px] bg-red-500 dark:bg-blue-500" style={`width: ${progress}%;`}></div>
</div>
