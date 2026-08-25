<script lang="ts">
	import Landing from '$lib/components/Landing.svelte';
	import { content } from './content';

	const includeIcons = [
		'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/><path d="M12 3v2M12 19v2M3 12h2M19 12h2"/>',
		'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="2"/>',
		'<path d="M12 2v6m0 0a4 4 0 1 0 4 4"/><path d="M12 8a4 4 0 0 1 4 4"/>',
		'<rect x="2" y="6" width="20" height="12" rx="2"/><path d="M6 10h.01M10 10h.01M14 10h.01M18 10h.01M6 14h12"/>'
	];
</script>

<Landing pageKey="brzdy" {content} {includeIcons} />
