# Payment Tracker — Design System

**Payment Tracker** (внутреннее название: *Agency Payment Tracker*) is a Russian-language web app for marketing agencies to track client payments. Owners add clients (monthly or one-time billing), and the system auto-generates upcoming payments, alerts on due dates via Telegram, and marks overdue balances automatically.

It's a tool-for-work, not a marketing surface — dense tables, calendar views, small number-heavy cards, and muted colors. The visual language is shadcn/ui with a blue-600 primary and slate neutrals on a slate-50 app background.

## Sources consulted

- **Codebase:** `payment-dashboard/` (mounted locally) — Next.js 14 App Router, Tailwind 3, shadcn-style primitives, Recharts, date-fns with Russian locale.
- **Primary references read:**
  - `src/app/layout.tsx`, `src/app/globals.css`, `tailwind.config.ts` — CSS-var theme and font setup (Inter, subsets: latin + cyrillic).
  - `src/app/(dashboard)/{dashboard,clients}/page.tsx` — core screens.
  - `src/app/(dashboard)/layout.tsx`, `src/components/layout/{Sidebar,MobileNav}.tsx` — app shell.
  - `src/components/ui/{Button,Card,ConfirmDialog,DropdownMenu,DatePicker}.tsx` — primitives.
  - `src/components/dashboard/*` — DashboardStats, PaymentRow, PaymentsList, PaymentCalendar, RevenueChart, DashboardPaymentTabs, OnboardingBanner.
  - `src/components/clients/ClientsTable.tsx` — list/table pattern.
  - `src/components/auth/LoginButton.tsx`, `src/app/(auth)/login/page.tsx` — unauthenticated state.
  - `src/lib/utils.ts` — money/date formatters + status-label dictionaries.
  - `CLAUDE.md` — product context, Prisma enums, roles, plans.
- **No Figma, no brand book, no slide decks attached** — system is derived purely from code.

## Product surfaces

Single product, one web app with two tiers of users:

1. **Owner (директор)** — full access: dashboard, clients, team, analytics, subscription, settings.
2. **Employee (сотрудник)** — restricted access: only assigned clients + own salary page.

There is also an admin surface (`/admin/*`) which reuses the same visual system.

## Index

- `README.md` — this file.
- `colors_and_type.css` — CSS variables for color + typography tokens.
- `fonts/` — font stack references (Inter is loaded from Google Fonts via `next/font`).
- `assets/` — logo mark, app icon, Google logo SVG.
- `preview/` — design-system card HTML files (rendered in the Design System tab).
- `ui_kits/payment-tracker/` — JSX components + `index.html` recreating core screens.
- `SKILL.md` — agent skill manifest.

## CONTENT FUNDAMENTALS

The entire product is in **Russian** — this is non-negotiable. Even technical strings that an English-speaking dev might leave in English (status labels, button copy, empty states) are translated.

**Tone** — plain, practical, slightly warm but never cute. No exclamation marks in UI copy except on rare success states ("Всё в порядке!"). No marketing language, no jargon. Users are agency owners who want to know what they're owed and when.

**Address** — implicit/neutral. The app rarely addresses the user directly; when it does, it uses neutral imperatives ("Добавьте первого клиента", "Укажите имя, сумму и дату"). No "вы"/"ты" tension — instruction verbs skip the pronoun.

**Case** — sentence case everywhere. Page titles, buttons, nav items: "Дашборд", "Добавить клиента", "Мои выплаты", "Показать ещё". Never ALL CAPS, never Title Case.

**Casing of status words** — capitalized like regular Russian nouns: "Активный", "Приостановлен", "Завершён", "Оплачено", "Просрочено", "Ожидается", "Списан".

**Punctuation** — typographic em-dashes in Russian style (" — "), middle-dots between compact metadata ("15 фев · январь 2026"), no Oxford commas (Russian doesn't use them). Currency formatted `1 234 567 ₽` via `Intl.NumberFormat("ru-RU")`.

**Numerals with units** — space between number and unit, shortened where natural: "3 дн.", "через 5 дн.", "5 дн. просрочено", "30 дней" (long form in headers). Money in rubles, never fractions shown by default.

**No emoji.** None anywhere in the product. Icons are all line-style SVG.

**Exemplars**

- Nav labels: `Платежи`, `Клиенты`, `Команда`, `Статистика`, `Подписка`, `Поддержка`, `Настройки`, `Мои выплаты`.
- Stat labels: `Всего клиентов`, `Ожидается (30 дн.)`, `Просрочено`.
- Empty state headline: `Добавьте первого клиента`; body: `Укажите имя, сумму и дату первого платежа — система начнёт автоматически отслеживать задолженности`.
- Success empty state: `Всё в порядке!` / `Нет просроченных и предстоящих платежей`.
- Login CTA: `Войти через Google`; subtitle: `Контролируйте оплаты клиентов вашего агентства`.
- Calendar legend: `оплачен`, `ожидает`, `просрочен` (past-tense adjectival form, lowercase).

## VISUAL FOUNDATIONS

**Palette** — a near-monochrome slate scale (`slate-50` → `slate-900` as the neutral spine) paired with a single chromatic accent: **blue-600** (`#2563eb`, `hsl(221.2 83.2% 53.3%)`) for primary actions, active nav, today-indicators, and data bars. Semantic colors: **red-500/600** for overdue/destructive, **yellow-400/500** for pending/upcoming, **green-500/600** for paid/success. Each semantic color is always used as a trio — a saturated swatch for dots and emphasis, a `*-50` tint as a card/badge background, and a `*-100/200` for borders. No gradients anywhere. No purples, no teal.

**Type** — Inter, subsets latin + cyrillic, loaded via `next/font/google`. Weights used: 400 (body), 500 (medium — labels, metadata), 600 (semibold — headings, buttons), 700 (bold — stat values). Page titles are `text-2xl font-bold text-slate-900`. Stat values are `text-2xl font-bold`. Subheads are `text-sm font-semibold text-slate-700`. Body is `text-sm text-slate-600` or `text-slate-500`. Metadata is `text-xs text-slate-500` or `text-slate-400`. Line-height is Tailwind defaults; `leading-snug` used on tight client-name rows.

**Spacing** — Tailwind 4px scale. Page padding `p-4 lg:p-8`. Section gaps `space-y-6`. Card padding `p-4` (compact) or `p-5` (standard). Grid gutters `gap-4`. Tight inline gaps (icon+label) `gap-2` / `gap-3`. Min tap target `min-h-[44px]` on all interactive elements — enforced in buttons, tabs, nav links.

**Backgrounds** — `bg-slate-50` on the app canvas (behind main + login), `bg-white` on the sidebar and on every card. No images, no illustrations, no patterns, no textures. Onboarding empty-states use a `border-2 border-dashed border-slate-200 rounded-2xl bg-white` frame with a centered `w-16 h-16 bg-blue-50 rounded-full` icon puck.

**Corner radii** — `--radius: 0.5rem` (8px) token, but used by component as: small controls `rounded-lg` (8px), cards `rounded-xl` (12px), login card / dashed empty state `rounded-2xl` (16px), avatars `rounded-full`, pill badges `rounded-full` or `rounded` (4px) for compact inline badges.

**Borders** — `border-slate-200` everywhere. Card interior dividers use `divide-y divide-slate-100` (one step lighter, so the card edge reads stronger than the row split). Semantic accent borders on colored cards use `*-100` (e.g. `border-blue-100` on the `bg-blue-50` stat card). Payment rows use `border-l-4 border-l-red-400` / `border-l-yellow-300` as a status accent.

**Shadows** — minimal. Cards default to flat (border only). `shadow-sm` on the RevenueChart card. `shadow-lg` on the login card. `shadow-xl` on the confirm dialog. No colored shadows. No inner shadows.

**Hover states** — for nav links and ghost buttons: lighten background to `bg-slate-50` and darken text to `text-slate-900`. For primary buttons: `bg-blue-600 → bg-blue-700`. For destructive: `bg-red-600 → bg-red-700`. For clickable list rows: `hover:bg-slate-50`. For dropdown-style icons: `text-slate-500 → text-slate-900`. Transitions are `transition-colors` — no scale/translate.

**Press / active states** — handled primarily by the hover-darker-shade pattern; there are no shrink/scale animations. Disabled state is `opacity-60 cursor-not-allowed`. Loading state on buttons replaces children with `"..."` (see `Button.tsx`).

**Focus states** — `focus:outline-none focus:ring-2 focus:ring-blue-500` on inputs and selects. The selected-day cell in the calendar uses `ring-2 ring-offset-1 ring-blue-400`.

**Animation** — almost none. `transition-colors` on hover swaps. `animate-pulse` on skeleton loaders (bg-slate-100 blocks). `animate-spin` on the Google-login loader. No bounces, no entrance animations, no page transitions. Calendar month-switch is instant.

**Transparency and blur** — the modal overlay is `bg-black/40`, no backdrop-blur. The sidebar / mobile-nav are fully opaque. No glassmorphism anywhere.

**Protection gradients / capsules** — not used. Status emphasis is always the `bg-{color}-50 text-{color}-700 border-{color}-200` capsule pattern, solid fills only.

**Layout rules** — fixed elements: `<aside>` sidebar (`w-64`, desktop only), `<nav>` mobile bottom bar (`lg:hidden`, `fixed bottom-0`), main content scrolls inside `overflow-y-auto`. Main content max-width is implicit (no cap) but padded with `p-4 lg:p-8`. Grids: `grid-cols-1 sm:grid-cols-3` (stats), `grid-cols-1 lg:grid-cols-2` (chart + calendar), `grid-cols-7` (calendar).

**Imagery colour vibe** — N/A, no photography. User avatars fall back to `bg-blue-100 text-blue-700` initial monograms.

**Card anatomy** — `rounded-xl border border-slate-200 bg-white`. Interior padding `p-4`/`p-5`. Header row is `text-sm font-semibold text-slate-700` + optional right-aligned metadata. Row separators inside a card: `divide-y divide-slate-100`. No box-shadow by default — borders carry the edge.

**Data-viz palette** — bars: `#2563eb` (blue-600). Calendar dots: green-500 (paid), yellow-400 (pending), red-500 (overdue). Axis ticks: `#94a3b8` (slate-400). Tooltip border: `#e2e8f0` (slate-200). Bar corner-radius `[4,4,0,0]`.

## ICONOGRAPHY

Two icon sources present in the codebase:

1. **Inline SVG** hand-rolled in Tailwind-style: `w-5 h-5`/`w-6 h-6`, `fill="none"`, `stroke="currentColor"`, `strokeLinecap="round"`, `strokeLinejoin="round"`, `strokeWidth={2}`, `viewBox="0 0 24 24"`. These are Heroicons outline at 24×24 with 2px stroke — the codebase has them as hand-inlined paths in `Sidebar.tsx`, `MobileNav.tsx`, `OnboardingBanner.tsx`, and many form/action contexts.
2. **`lucide-react`** (dep in `package.json`, v0.460.0) — used across the app in places not inspected but confirmed by dependency.

**Recommendation for design agents** — use **Lucide** icons (same stroke weight / outline style as the existing inline SVGs). When making static HTML mocks, link Lucide from CDN and apply `stroke-width: 2` to match. Iconography in this design system uses Lucide via CDN for consistency.

**Never use emoji.** None appear anywhere in the product.

**Unicode glyphs as icons** — only the middle-dot `·` is used as a separator. No arrows, no stars, no checkmarks via Unicode.

**Key graphic marks**

- **Google "G" logo** — multi-colored SVG on the login button (only place where non-monochrome brand marks appear).
- **Avatars** — circular, `rounded-full`, `w-9 h-9` in sidebar, `w-10 h-10` in client list. Fallback: first letter of name/email in `bg-blue-100 text-blue-700 font-medium`.
- **Status dots** — `w-2 h-2 rounded-full bg-{color}-{400|500}`. Used in payment rows, calendar, tabs.

Icon sizing conventions: `w-4 h-4` (inline with sm text, in buttons), `w-5 h-5` (sidebar nav, field prefix), `w-6 h-6` (mobile nav), `w-8 h-8` (large feature markers in empty states — centered in a `w-16 h-16` puck).

---

## Index

Root of this design system:

- `README.md` — this file. Product context, content + visual foundations, iconography.
- `SKILL.md` — agent skill entry point. Read this if you're an agent loading the system as a skill.
- `colors_and_type.css` — CSS variables for the full color palette, type scale, fonts, shadows, radii. Drop into any HTML artifact with `<link rel="stylesheet" href="colors_and_type.css">`.
- `fonts/` — Inter webfonts (latin + cyrillic), 400/500/600/700.
- `assets/` — brand marks (Google "G" SVG), Lucide icon notes. Logos are drawn inline (no standalone wordmark file exists in the source product).

Previews (cards shown in the Design System tab):

- `preview/` — one HTML card per token / component variant (type, colors, spacing, buttons, badges, payment row, client row, tabs, sidebar, calendar, chart, dialog, login, empty state, iconography, logo).

UI kits:

- `ui_kits/payment-tracker/` — interactive React recreation of the full web app. Entry: `index.html`. Pages: login, payments dashboard, clients list, statistics, settings. See the kit's own `README.md` for a component map.

