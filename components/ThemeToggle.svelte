<!-- Canonical source; copied into consuming repositories by scripts/sync.mjs. -->
<script lang="ts">
	import { onMount } from 'svelte';

	let isDark = $state(false);

	onMount(() => {
		isDark = document.documentElement.classList.contains('dark');
	});

	function toggle() {
		isDark = !isDark;
		document.documentElement.classList.toggle('dark', isDark);
		localStorage.setItem('theme', isDark ? 'dark' : 'light');
	}
</script>

<button
	type="button"
	onclick={toggle}
	aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
	title={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
	class="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-sm transition-colors hover:bg-gray-100 hover:text-black dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700 dark:hover:text-white"
>
	<span aria-hidden="true" class="text-lg leading-none">{isDark ? '☀' : '☾'}</span>
</button>
