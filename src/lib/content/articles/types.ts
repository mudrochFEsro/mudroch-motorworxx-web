import type { Lang } from '$lib/i18n';

export type ArticleSection = { h2: string; prose: string };

export type ArticleContent = {
	metaTitle: string;
	metaDescription: string;
	h1: string;
	excerpt: string;
	answer: string;
	publishedISO: string;
	updatedISO: string;
	sections: ArticleSection[];
	faq?: { q: string; a: string }[];
	relatedServiceKey: string;
	relatedLabel: string;
	relatedCta: string;
	breadcrumbBlog: string;
};

export type ArticleContentMap = Record<Lang, ArticleContent>;
