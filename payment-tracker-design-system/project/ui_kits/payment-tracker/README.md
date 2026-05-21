# Payment Tracker — UI Kit

Interactive recreation of the Payment Tracker web app. Single-page React prototype demonstrating the core product screens and interactions.

## Screens
- **Login** — Google OAuth entry point (`LoginScreen.jsx`)
- **Платежи (Payments)** — dashboard with stat cards, upcoming/overdue tabs, payment rows with inline mark-as-paid (`PaymentsPage.jsx`)
- **Клиенты (Clients)** — searchable/filterable client list with avatar rows + add-client modal (`ClientsPage.jsx`)
- **Статистика (Stats)** — revenue bar chart + top clients breakdown (`StatsPage.jsx`)
- **Настройки (Settings)** — subscription status + notification toggles + export (`SettingsPage.jsx`)

## Interactions
- Navigate between pages via sidebar
- Mark a pending/overdue payment as paid (opens confirm dialog → toast)
- Add a new client (modal form → toast + prepends to list)
- Search and filter clients
- Log out (returns to login screen)

## Files
- `kit.css` — all tokens + component classes (Tailwind-equivalent, hand-rolled for portability)
- `shared.jsx` — icons, seed data, formatters (`formatRub`, `freqLabel`, monogram)
- `Primitives.jsx` — Button / Input / Select / Badge / Avatar / Card / Tabs / Dialog / Toast
- `Sidebar.jsx` — left nav + user row
- `LoginScreen.jsx`, `PaymentsPage.jsx`, `ClientsPage.jsx`, `StatsPage.jsx`, `SettingsPage.jsx`
- `index.html` — mounts `<App>`, wires pages together

## Notes on fidelity
Components are visual recreations of the `payment-dashboard` codebase shadcn/Tailwind UI. Implementations are simplified (no Radix primitives, no real auth, no Supabase) but visual output — tokens, radii, typography, colors, status semantics — matches the source.
