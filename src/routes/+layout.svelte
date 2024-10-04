<script>
	import '../app.css';
	import toggle from '$lib/assets/toggle.svg';
	import { onNavigate } from '$app/navigation';

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>

<svelte:head>
	<script>
		const theme = localStorage.getItem('theme') || 'dark';
		document.documentElement.setAttribute('data-theme', theme);
	</script>
</svelte:head>

<header>
	<h1
		class="text-4xl font-semibold md:text-[2.625rem] leading-normal text-gray-800 dark:text-gray-300"
	>
		<a href="/">nitish's blog</a>
	</h1>
	<p class="text-lg text-gray-400">stories and shitposts</p>
	<nav
		class="mt-8 mb-4 border-y py-3 flex items-center gap-5 border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-400"
	>
		<a href="/">HOME</a>
		<!-- <a href="/about">ABOUT</a> -->
	</nav>
</header>

<slot />

<footer
	class="py-4 mt-16 border-t flex flex-wrap items-center justify-between gap-4 border-gray-300 dark:border-gray-700"
>
	<p class="text-gray-400">
		Copyright © {new Date().getFullYear()} Nitish Kushwaha
	</p>

	<button
		class="border p-1 rounded-3xl relative border-gray-300 dark:border-gray-700"
		on:click={() => {
			const root = document.documentElement;
			const currentTheme = root.getAttribute('data-theme');

			currentTheme === 'dark'
				? root.setAttribute('data-theme', 'light')
				: root.setAttribute('data-theme', 'dark');

			localStorage.setItem('theme', currentTheme === 'dark' ? 'light' : 'dark');
		}}
	>
		<img src={toggle} alt="toggle between dark and light mode" class="h-5" />
		<span
			class="rounded-full block absolute top-1/2 -translate-y-1/2 h-5 w-5 left-1 transition-all bg-neutral-900 dark:bg-neutral-50 dark:left-[28px]"
		/>
	</button>
</footer>
