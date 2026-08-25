# Multilingual SEO – Phase 5: blog / poradňa Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development. Steps use checkbox (`- [ ]`) syntax.

**Goal:** Add an indexable, multilingual blog/poradňa — a blog index + 2 flagship articles (1 timing belt, 1 brakes) in all 4 languages — with Article/Blog structured data, answer-first intros, and internal links to the matching service page.

**Architecture:** Reuse the register-driven system. Add a `blog` index page + 2 `article` pages to `src/lib/seo/pages.ts` (localized slugs with a `blog/` prefix). EN/DE/HR blog URLs prerender automatically through the existing `[lang=lang]/[...slug]` route + `allPrerenderEntries()`; SK gets physical `blog/` routes. New `<Article>` and `<BlogIndex>` components (mirroring `<Landing>`/`<Home>`), driven by per-article content modules. Article/Blog JSON-LD added to `business.ts`. Sitemap picks up blog URLs automatically (it iterates the register).

**Tech Stack:** SvelteKit 2, Svelte 5 runes, adapter-static, TypeScript, Vitest, pnpm.

**Spec:** `docs/seo/2026-08-25-multilingual-seo-geo-aeo-design.md` (§7.1)

## Global Constraints

- Languages sk/en/de/hr; article copy per-language, native + grammatically correct (DE umlauts/cases, HR dijakritika/cases — no calques).
- **No invented prices** — cost mentions direct to a call (`0944 122 224`).
- "mobilný/mobile/mobiler/mobilni" only in body, never in `<title>`/`<h1>`.
- No oil-change/DPF article topics. Flagship topics: (1) rozvody — "Kedy meniť rozvody a čo hrozí pri pretrhnutí"; (2) brzdy — "Ako spoznať opotrebované brzdy — príznaky".
- Reuse the register/urlFor/hreflangAlternates/SocialMeta/bcp47 infrastructure; do NOT regress Phase 1–4b (SK URLs, hreflang, canonical, inLanguage/speakable, 42 tests).
- Dates are literal ISO strings in content (`Date.now()` is not available in this environment's scripts, and content should be deterministic anyway). Use `2026-08-25` for published/modified.
- pnpm. Preview with `npx serve build`.

---

### Task 1: Register + Article/Blog schema + shared ArticleContent type

**Files:**
- Modify: `src/lib/seo/pages.ts` (add `'blog'` to `PageType`; add blog index + 2 article `PageDef`s)
- Modify: `src/lib/seo/business.ts` (add `articleSchema`, `blogSchema`)
- Modify: `src/lib/seo/business.test.ts` + `src/lib/seo/pages.test.ts`
- Create: `src/lib/content/articles/types.ts`

**Interfaces:**
- `PageType` gains `'blog'`.
- New register entries:
  - blog index: `{ key: 'blog', type: 'blog', priority: 0.7, changefreq: 'weekly', slug: { sk: 'blog', en: 'blog', de: 'blog', hr: 'blog' }, label: { sk: 'Poradňa', en: 'Blog', de: 'Ratgeber', hr: 'Savjeti' } }`
  - article rozvody: `{ key: 'article-rozvody', type: 'article', priority: 0.6, changefreq: 'monthly', slug: { sk: 'blog/kedy-menit-rozvody', en: 'blog/when-to-replace-timing-belt', de: 'blog/wann-zahnriemen-wechseln', hr: 'blog/kada-mijenjati-zupcasti-remen' }, label: {...} }`
  - article brzdy: `{ key: 'article-brzdy', type: 'article', priority: 0.6, changefreq: 'monthly', slug: { sk: 'blog/ako-spoznat-opotrebovane-brzdy', en: 'blog/signs-of-worn-brakes', de: 'blog/verschlissene-bremsen-erkennen', hr: 'blog/prepoznati-istrosene-kocnice' }, label: {...} }`
  (labels = the article's short title per language.)
- `type ArticleContent` (in `src/lib/content/articles/types.ts`):
  ```ts
  import type { Lang } from '$lib/i18n';
  export type ArticleSection = { h2: string; prose: string };
  export type ArticleContent = {
  	metaTitle: string; metaDescription: string;
  	h1: string; excerpt: string; answer: string;
  	publishedISO: string; updatedISO: string;
  	sections: ArticleSection[];
  	faq?: { q: string; a: string }[];
  	relatedServiceKey: string; relatedLabel: string; relatedCta: string;
  	breadcrumbBlog: string;
  };
  export type ArticleContentMap = Record<Lang, ArticleContent>;
  ```
- `articleSchema(opts: { url: string; headline: string; description: string; datePublished: string; dateModified: string; lang: Lang; image?: string })` → `@type: BlogPosting`, `mainEntityOfPage: opts.url`, `headline`, `description`, `datePublished`, `dateModified`, `inLanguage: bcp47(lang)`, `image: opts.image ?? `${SITE_URL}/og-image.png``, `author: { '@id': `${SITE_URL}/#organization` }`, `publisher: { '@id': `${SITE_URL}/#organization` }`.
- `blogSchema(opts: { url: string; lang: Lang; posts: { url: string; name: string }[] })` → `@type: Blog`, `@id: opts.url`, `inLanguage`, `blogPost: posts.map(p => ({ '@type':'BlogPosting', headline:p.name, url:p.url }))`.

- [ ] **Step 1: Write failing tests** — pages.test.ts: blog + 2 article entries exist, slugs unique+ASCII (allow `/` in slug regex now: `/^[a-z0-9/-]+$/`), `urlFor('article-rozvody','en') === '/en/blog/when-to-replace-timing-belt'`, `pageBySlug('en','blog/when-to-replace-timing-belt')?.key === 'article-rozvody'`, `pageBySlug('sk','blog')?.type === 'blog'`. business.test.ts: articleSchema has `@type BlogPosting`, inLanguage, mainEntityOfPage, publisher @id; blogSchema has `@type Blog` + blogPost array.
  NOTE: the existing pages.test.ts "ASCII slug" test uses `/^[a-z0-9-]+$/` — update it to allow `/` for blog slugs: `/^[a-z0-9/-]+$/`.

- [ ] **Step 2: Run → fail.** `pnpm vitest run src/lib/seo/pages.test.ts src/lib/seo/business.test.ts`

- [ ] **Step 3: Implement** — add `'blog'` to PageType; add the 3 entries to PAGES; create types.ts; add the two schema builders to business.ts (reuse `bcp47`, `SITE_URL`).

- [ ] **Step 4: Run → pass.** `pnpm vitest run` (all green).

- [ ] **Step 5: Commit** — `feat(blog): register blog + article pages, Article/Blog schema, ArticleContent type`.

---

### Task 2: ROZVODY article content (4 langs)

**Files:**
- Create: `src/lib/content/articles/rozvody-kedy-menit.ts` (exports `content: ArticleContentMap`)

**Context:** CONTENT task — native copy per language. Topic: "Kedy meniť rozvody a čo hrozí pri pretrhnutí". This is the timing-belt guide. `relatedServiceKey: 'rozvody'`.

- [ ] **Step 1: Write the content module** — for EACH of sk/en/de/hr provide:
  - `metaTitle` (≤~60 chars, includes primary keyword; no "mobil*"), `metaDescription` (~150 chars), `h1`, `excerpt` (1 sentence for the index card), `answer` (2–3 sentence answer-first: when to change the timing belt + why it matters + call `0944 122 224`), `publishedISO: '2026-08-25'`, `updatedISO: '2026-08-25'`.
  - `sections`: 4–6 `{ h2, prose }` covering: interval (km/years), warning signs, belt vs chain, why not to postpone (interference engines), what the job includes (water pump, tensioner, pulleys). Prose may include `<strong>`. Native, keyword-natural, NO prices.
  - `faq`: 2–3 Q/A (e.g. "Ako často meniť rozvody?", "Čo ak praskne remeň?").
  - `relatedServiceKey: 'rozvody'`, `relatedLabel` (localized "Výmena rozvodov Bratislava"), `relatedCta` (localized "Objednať výmenu rozvodov"), `breadcrumbBlog` (localized "Poradňa"/"Blog"/"Ratgeber"/"Savjeti").

- [ ] **Step 2: Verify it type-checks** — `pnpm vitest run` (still green; content is data, no test but must satisfy `ArticleContentMap`). Optionally `pnpm exec svelte-check` if available; otherwise the Task 4 build will type-check usage.

- [ ] **Step 3: Commit** — `feat(blog): rozvody timing-belt article content (4 langs)`.

---

### Task 3: BRZDY article content (4 langs)

**Files:**
- Create: `src/lib/content/articles/brzdy-priznaky.ts` (exports `content: ArticleContentMap`)

**Context:** CONTENT task. Topic: "Ako spoznať opotrebované brzdy — príznaky". `relatedServiceKey: 'brzdy'`. Same structure/rules as Task 2.

- [ ] **Step 1: Write the content module** — sk/en/de/hr, same field set. `answer` = the 2–3 sentence direct answer (top signs of worn brakes + advice to get them checked + call `0944 122 224`). `sections` (4–6): squeaking/grinding, longer stopping distance, vibration when braking, warning light, worn pads/discs thickness, when to replace — NO prices. `faq` 2–3. `relatedServiceKey: 'brzdy'`, localized `relatedLabel`/`relatedCta`/`breadcrumbBlog`.

- [ ] **Step 2: Verify** — `pnpm vitest run` green.

- [ ] **Step 3: Commit** — `feat(blog): brakes symptoms article content (4 langs)`.

---

### Task 4: `<Article>` + `<BlogIndex>` components + routing + nav link

**Files:**
- Create: `src/lib/components/Article.svelte`
- Create: `src/lib/components/BlogIndex.svelte`
- Modify: `src/routes/[lang=lang]/[...slug]/+page.svelte` (dispatch article/blog)
- Create: `src/routes/blog/+page.svelte`, `src/routes/blog/+page.ts` (SK index)
- Create: `src/routes/blog/[slug]/+page.svelte`, `src/routes/blog/[slug]/+page.ts` (SK articles)
- Modify: `src/lib/components/Navigation.svelte` + `src/lib/i18n/{sk,en,de,hr}.json` (add `nav.blog`)
- Reference: `Landing.svelte` (pattern for head/schema/answer-first), `SocialMeta.svelte`, `pages.ts` (urlFor, hreflangAlternates, PAGES), `business.ts` (articleSchema, blogSchema, faqSchema, breadcrumbSchema, webPageSchema, jsonLd)

**Interfaces / behavior:**
- Article content registry: create a small map `src/lib/content/articles/index.ts` exporting `articles: Record<string, ArticleContentMap>` keyed by article key (`'article-rozvody'`, `'article-brzdy'`) importing the two content modules. Both `<Article>`, `<BlogIndex>`, the SK routes, and the `[lang]` renderer import from here (single source, bundler-friendly static imports).
- `<Article pageKey content />`: renders breadcrumb (Poradňa ▸ title), `<h1>`, an answer-first `<p class="landing-answer">` (reuse the class), the `sections` (h2 + prose), optional FAQ (reuse `<Faq>`), and a related-service CTA linking to `urlFor(content[lang].relatedServiceKey, lang)`. Head: title/description/canonical/robots + reciprocal hreflang via `hreflangAlternates(pageKey)` + `<SocialMeta>` + JSON-LD (`articleSchema` + `faqSchema` if faq + `breadcrumbSchema` + `webPageSchema` speakable on `.landing-answer`). All prop-derived values `$derived` (client-nav safe).
- `<BlogIndex />`: `<h1>` (localized "Poradňa"), intro line, a list of article cards (title + excerpt + link) built by iterating `PAGES.filter(p => p.type === 'article')` and reading `articles[key][lang]` for title/excerpt, link = `urlFor(key, lang)`. Head: title/description/canonical + hreflang(‘blog’) + SocialMeta + `blogSchema` JSON-LD (posts from the article list).
- `[lang]/[...slug]/+page.svelte`: import Article + BlogIndex + `articles`; extend the dispatch: `home→Home`, `blog→BlogIndex`, `article→Article pageKey content={articles[data.pageKey][$? ]}` (pass the whole map; the component reads `$currentLang`), else `Landing`.
- SK routes:
  - `src/routes/blog/+page.ts`: `export const prerender = true`. (no load needed; BlogIndex reads currentLang=sk from layout)
  - `src/routes/blog/+page.svelte`: renders `<BlogIndex />`.
  - `src/routes/blog/[slug]/+page.ts`: `prerender=true`; `entries()` returns the SK article slugs WITHOUT the `blog/` prefix (derive from PAGES articles: `slug.sk.replace('blog/','')`); `load({params})` resolves `pageBySlug('sk', 'blog/' + params.slug)`, 404 if not found or not type 'article', returns `{ pageKey }`.
  - `src/routes/blog/[slug]/+page.svelte`: renders `<Article pageKey={data.pageKey} content={articles[data.pageKey]} />`.
- Navigation: add a "Poradňa/Blog" link → `urlFor('blog', $currentLang)` using `$t('nav.blog')`; add `nav.blog` to all 4 i18n JSONs (SK "Poradňa", EN "Blog", DE "Ratgeber", HR "Savjeti").

- [ ] **Step 1:** Create `articles/index.ts` map.
- [ ] **Step 2:** Create `Article.svelte` (mirror Landing's head/schema pattern; use `.landing-answer` for answer-first; related CTA via urlFor).
- [ ] **Step 3:** Create `BlogIndex.svelte` (list from register + articles map; blogSchema).
- [ ] **Step 4:** Extend the `[lang]/[...slug]` renderer dispatch (article/blog).
- [ ] **Step 5:** Create the SK `blog/` + `blog/[slug]/` routes.
- [ ] **Step 6:** Add nav link + `nav.blog` in 4 JSONs.
- [ ] **Step 7: Build + verify** — `pnpm vitest run` (green); `pnpm build`. Confirm prerendered files exist for: `build/blog.html` (or `build/blog/index.html`), `build/blog/kedy-menit-rozvody.html`, `build/en/blog.html`, `build/en/blog/when-to-replace-timing-belt.html`, `build/de/blog/wann-zahnriemen-wechseln.html`, `build/hr/blog/prepoznati-istrosene-kocnice.html`, etc. Grep an EN article for: EN `<title>`, canonical `/en/blog/...`, 5 hreflang, `"@type":"BlogPosting"`, `"inLanguage":"en"`, the answer-first block, and the related-service link (`/en/brake-replacement-bratislava` or timing-belt). Grep `build/sitemap.xml` for the blog + article URLs (all langs). Report evidence.

- [ ] **Step 8: Commit** — `feat(blog): Article + BlogIndex components, routing, nav link`.

---

### Task 5: Verification gate

- [ ] **Step 1:** `pnpm vitest run` — all green.
- [ ] **Step 2:** `pnpm build` — succeeds; blog index + 2 articles prerendered in all 4 langs (10 new pages: 2 index-per-lang? → blog index ×4 + 2 articles ×4 = 12 new URLs). Confirm counts.
- [ ] **Step 3:** Spot-check: articles have BlogPosting JSON-LD + inLanguage + answer-first + related-service internal link + reciprocal hreflang + canonical; blog index lists both articles with locale-correct links; sitemap includes all blog URLs; no invented prices; no "mobil*" in article titles/h1.
- [ ] **Step 4:** Commit any touch-ups.

---

## Self-Review

**Spec coverage (§7.1):** blog index + `<Article>` renderer + 2 flagship articles (rozvody, brzdy) × 4 langs + Article/Blog schema + answer-first + internal links + nav entry. EN/DE/HR auto-prerender via the register + existing `[lang]` route; SK via physical `blog/` routes; sitemap auto-includes (register-driven).

**Placeholder scan:** Infra tasks (1,4) carry concrete interfaces/code; content tasks (2,3) specify structure + topic + per-language requirements + constraints (native copy is the implementer's craft, language-reviewed).

**Type/consistency:** `ArticleContent`/`ArticleContentMap`, `articles` map keyed by `article-*`, `articleSchema`/`blogSchema` signatures, `'blog'` PageType, and `nav.blog` are named identically across tasks. Slug regex updated to allow `/`. Dates are literal ISO strings.

**Deferred (unchanged):** AutoRepair↔Organization entity link, typed LandingContent interface, LanguageSwitcher aria-label i18n.
