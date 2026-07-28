<script lang="ts">
	import '../app.css';
	import SiteShell from '$lib/site-kit/SiteShell.svelte';
	let { children } = $props();
</script>

<SiteShell projectName="New Project" sourceHref="https://github.com/jorisperrenet">
	{@render children()}
</SiteShell>
