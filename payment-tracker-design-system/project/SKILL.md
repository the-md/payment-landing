---
name: payment-tracker-design
description: Use this skill to generate well-branded interfaces and assets for Payment Tracker (an agency-focused Russian-language payment-tracking web app), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. Start by linking `colors_and_type.css` and reusing the class tokens in `ui_kits/payment-tracker/kit.css`. For components, copy JSX out of `ui_kits/payment-tracker/` rather than rebuilding from scratch.

If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand. The source product is a Next.js 14 + Tailwind 3 + shadcn/ui app — prefer those primitives when generating production code.

Key constraints to remember:
- **Language is Russian.** All UI copy, dates, currency (₽), number formatting (`ru-RU`).
- **Primary is blue-600** (`#2563eb`) on a slate-50 app background with slate-200 borders and white cards.
- **Semantic trio**: overdue = red, pending = yellow, paid = green. Status dots (`w-2 h-2`) appear everywhere — always one of these three.
- **Type**: Inter (latin + cyrillic subsets), `-apple-system` fallback. No other families.
- **Icons**: Lucide, outline, stroke-width 2, 24×24. Never emoji. Never decorative Unicode.
- **Radii**: 8px (inputs, buttons, nav items), 12px (cards), 16px (large dialogs). Full for dots and avatars.
- **Shadows**: almost none. Use borders. Dialogs get `shadow-xl`. That's it.
- **No gradients.** No blurs. No textures.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.
