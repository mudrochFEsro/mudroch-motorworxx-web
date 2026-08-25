<script lang="ts">
	import Landing from '$lib/components/Landing.svelte';
	import { content } from './content';

	const includeIcons = [
		'<path d="M12 2v6m0 0a4 4 0 1 0 4 4"/><path d="M12 8a4 4 0 0 1 4 4"/>',
		'<rect x="2" y="6" width="20" height="12" rx="2"/><path d="M6 10h.01M10 10h.01M14 10h.01M18 10h.01M6 14h12"/>',
		'<path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5M2 12l10 5 10-5"/>',
		'<circle cx="12" cy="12" r="9"/><path d="M12 6v6l4 2"/>'
	];
</script>

<Landing pageKey="area-vrakuna" {content} {includeIcons} />
