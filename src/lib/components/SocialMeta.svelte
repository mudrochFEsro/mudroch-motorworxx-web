<script lang="ts">
	import { currentLang } from '$lib/i18n';
	import { SITE_URL } from '$lib/seo/business';

	let { title, description, url, type = 'website' } = $props();

	const ogLocale = $derived(
		$currentLang === 'sk' ? 'sk_SK' :
		$currentLang === 'de' ? 'de_DE' :
		$currentLang === 'hr' ? 'hr_HR' :
		'en_GB'
	);
</script>

<svelte:head>
	<!-- Open Graph -->
	<meta property="og:type" content={type} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={url} />
	<meta property="og:site_name" content="MUDROCH MOTORWORXX" />
	<meta property="og:image" content={`${SITE_URL}/og-image.png`} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:locale" content={ogLocale} />
	<meta property="og:locale:alternate" content="sk_SK" />
	<meta property="og:locale:alternate" content="en_GB" />
	<meta property="og:locale:alternate" content="de_DE" />
	<meta property="og:locale:alternate" content="hr_HR" />

	<!-- Twitter Cards -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={`${SITE_URL}/og-image.png`} />
</svelte:head>
