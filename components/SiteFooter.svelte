<!-- Canonical source; copied into consuming repositories by scripts/sync.mjs. -->
<script lang="ts">
	let {
		sourceHref = '',
		projectName = ''
	}: { sourceHref?: string; projectName?: string } = $props();
	const year = new Date().getFullYear();
</script>

<footer class="border-t border-gray-200 bg-[#f9fbff] px-4 py-5 text-center text-sm text-gray-500 dark:border-gray-800 dark:bg-[#111827] dark:text-gray-400">
	<p class="m-0">
		© {year} Joris Perrenet
		<span aria-hidden="true"> · </span><a rel="external" class="hover:text-blue-600 hover:underline dark:hover:text-blue-400" href="https://jorisperrenet.com/about">About</a>
		{#if sourceHref}
			<span aria-hidden="true"> · </span><a class="hover:text-blue-600 hover:underline dark:hover:text-blue-400" href={sourceHref}>Source{projectName ? ` for ${projectName}` : ''}</a>
		{/if}
	</p>
</footer>
