<!-- Canonical source; copied into consuming repositories by scripts/sync.mjs. -->
<script lang="ts">
	import ThemeToggle from './ThemeToggle.svelte';
	import type { SiteSection } from './types';

	let {
		active = 'project',
		projectName = '',
		projectHref = ''
	}: { active?: SiteSection; projectName?: string; projectHref?: string } = $props();

	const links: Array<{ href: string; label: string; section: SiteSection }> = [
		{ href: 'https://jorisperrenet.com/', label: 'Home', section: 'home' },
		{ href: 'https://jorisperrenet.com/about', label: 'About', section: 'about' },
		{ href: 'https://jorisperrenet.com/blog/', label: 'Blog', section: 'blog' }
	];
</script>

<header class="sticky top-0 z-50 w-full border-b border-gray-200 bg-[#fcfeff]/90 text-gray-900 shadow-sm shadow-gray-950/5 backdrop-blur-md dark:border-gray-800 dark:bg-gray-800/90 dark:text-gray-100">
	<div class="relative mx-auto flex min-h-11 w-full max-w-screen-2xl items-center px-3 sm:px-4">
		<div class="min-w-0 flex-1">
			{#if projectName}
				<a href={projectHref || undefined} class="block truncate text-xs font-semibold text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 sm:text-sm">
					<span class="hidden sm:inline">Joris Perrenet / </span>{projectName}
				</a>
			{/if}
		</div>
		<nav aria-label="Main navigation" class="shrink-0">
			<ul class="m-0 flex items-center gap-0.5 p-0">
				{#each links as link}
					<li>
						<a
							href={link.href}
							rel="external"
							aria-current={active === link.section ? 'page' : undefined}
							class="block border-b-2 px-2 py-2 text-xs font-bold uppercase tracking-wider transition-colors sm:px-3 sm:text-sm {active === link.section
								? 'border-blue-500 text-black dark:border-blue-400 dark:text-white'
								: 'border-transparent text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white'}"
						>{link.label}</a>
					</li>
				{/each}
			</ul>
		</nav>
		<div class="flex flex-1 justify-end pl-2"><ThemeToggle /></div>
	</div>
</header>
