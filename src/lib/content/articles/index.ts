import type { ArticleContentMap } from './types';
import { content as rozvody } from './rozvody-kedy-menit';
import { content as brzdy } from './brzdy-priznaky';

export const articles: Record<string, ArticleContentMap> = {
	'article-rozvody': rozvody,
	'article-brzdy': brzdy
};
