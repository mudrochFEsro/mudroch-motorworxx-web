<script lang="ts">
	import Landing from '$lib/components/Landing.svelte';
	import { content } from './content';

	const includeIcons = [
		'<rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/><path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01"/>',
		'<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
		'<circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/>',
		'<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>'
	];
</script>

<Landing pageKey="diagnostika" {content} {includeIcons} />
