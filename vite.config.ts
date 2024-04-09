import { sveltekit } from '@sveltejs/kit/vite';
import { Mode, plugin as mdPlugin } from 'vite-plugin-markdown';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		sveltekit(),
		mdPlugin({
			mode: [Mode.MARKDOWN]
		})
	]
});
