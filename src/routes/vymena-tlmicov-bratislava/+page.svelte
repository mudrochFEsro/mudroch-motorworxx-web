<script lang="ts">
	import Landing from '$lib/components/Landing.svelte';
	import { content } from './content';

	const includeIcons = [
		'<circle cx="12" cy="12" r="3"/><path d="M12 2v4m0 12v4M2 12h4m12 0h4"/><path d="m4.93 4.93 2.83 2.83m8.48 8.48 2.83 2.83M4.93 19.07l2.83-2.83m8.48-8.48 2.83-2.83"/>',
		'<path d="M2 12h20M12 2v20"/><circle cx="12" cy="12" r="4"/>',
		'<circle cx="12" cy="12" r="10"/><path d="M8 12h8M12 8v8"/>',
		'<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>'
	];
</script>

<Landing pageKey="tlmice" {content} {includeIcons} />
