<script lang="ts">
	import Landing from '$lib/components/Landing.svelte';
	import { content } from './content';

	const includeIcons = [
		'<path d="M3 12h18M3 12l5-5m-5 5l5 5m10-5l5-5m-5 5l5 5"/><circle cx="12" cy="12" r="2"/>',
		'<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/><path d="M12 2v4m0 12v4M2 12h4m12 0h4"/>',
		'<rect x="3" y="8" width="18" height="8" rx="2"/><path d="M7 4v4m10-4v4M7 16v4m10-4v4"/>',
		'<path d="M12 2v20M5 8h14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2z"/><path d="M8 12h.01M16 12h.01"/>'
	];
</script>

<Landing pageKey="vyfuk" {content} {includeIcons} />
