# MUDROCH MOTORWORXX - Kontext projektu

## Prehľad
Automotive servis web s aggressive/bold GSAP animáciami v Awwwards štýle.

## Technológie
- **SvelteKit** + Svelte 5 (runes: $state, $effect)
- **GSAP 3** + ScrollTrigger
- **Lenis** - smooth scrolling (len desktop)
- **TypeScript**
- **i18n** - SK/EN/DE

---

## Implementované funkcie

### GSAP Animácie
- **Hero:** Logo fade-in, CTA button animácia
- **Services:** Section title reveal, card stagger animácie
- **About:** Paragraph a value card animácie
- **Gallery:** Grid items stagger reveal
- **Contact:** Cards a CTA box animácie
- **Footer:** Subtle fade-in

### Custom Cursor
- 5-spoke wheel dizajn (28px)
- Rotácia podľa horizontálneho pohybu myši
- Scale efekt pri hover na interaktívne elementy
- **Len desktop** - touch zariadenia majú štandardný kurzor

### Smooth Scrolling
- Lenis smooth scroll
- **Len desktop** - vypnuté na mobile/touch

### Mobile Menu
- Slide-in z pravej strany
- Logo hore (200px, vycentrované)
- Overlay s fade animáciou
- ESC key support

### Optimalizácie
- iOS Safari fixes (-webkit-fill-available, -webkit-overflow-scrolling)
- Touch device detection (multiple methods)
- Prefers-reduced-motion support
- GPU acceleration (transform, will-change)

---

## Štruktúra súborov

```
src/lib/
├── animations/
│   ├── gsap.ts          # GSAP setup, utilities, animation presets
│   └── particles.ts     # Particle system (momentálne nepoužívané)
├── components/
│   ├── Hero.svelte
│   ├── Services.svelte
│   ├── About.svelte
│   ├── Gallery.svelte
│   ├── Contact.svelte
│   ├── Footer.svelte
│   ├── Navigation.svelte
│   ├── CustomCursor.svelte
│   ├── SmoothScroll.svelte
│   └── LanguageSwitcher.svelte
├── styles/
│   ├── global.css
│   └── variables.css
└── i18n/
    └── index.ts
```

---

## TODO / Nasledujúce kroky

### Po reštarte Claude Code
1. **GSAP MCP Server** je pridaný - po reštarte budú dostupné nástroje:
   - `gsap-master` MCP server s AI animation creator, optimizer, debugger

### Možné vylepšenia
- [ ] Optimalizovať GSAP animácie cez MCP server
- [ ] Pridať reálne obrázky do galérie
- [ ] Particles efekt v Hero (momentálne vypnutý)
- [ ] 3D tilt efekt na kartách (len desktop)

---

## Dôležité poznámky

### Cursor fix
Problém bol že kurzor zmizol po reload/mouse leave. Opravené pridaním:
- `mouseenter` event na document
- `$state(null)` pre cursor/wheel elementy
- Null checks pred GSAP animáciami

### Mobile menu logo
- Používa `/logo.svg` (nie logo_2.svg)
- Veľkosť 200px, vycentrované
- V `.mobile-menu-header` s border-bottom

### Touch detection
```typescript
const checkTouch = () => {
  return (
    'ontouchstart' in window ||
    navigator.maxTouchPoints > 0 ||
    window.matchMedia('(hover: none)').matches ||
    window.matchMedia('(pointer: coarse)').matches
  );
};
```

---

## Príkazy

```bash
# Dev server
pnpm run dev

# Build
pnpm run build

# Preview production build
pnpm run preview
```

---

## MCP Servers

### Pridané
- `gsap-master` - GSAP animation expert (bruzethegreat-gsap-master-mcp-server)

### Dostupné (už načítané)
- `image-optimizer` - optimalizácia obrázkov
- `lighthouse` - performance audity
