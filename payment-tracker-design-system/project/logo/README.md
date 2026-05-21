# Логотип Payment Tracker

Основной файл: `logo.svg` — единственный источник правды для иконки.
Геометрия: 64×64, viewBox `0 0 64 64`. Три столбика + акцентная точка.

## Палитра

| Роль | Hex |
|---|---|
| Столбик 1 (самый светлый, низкий) | `#60a5fa` |
| Столбик 2 (основной, высокий) | `#2563eb` |
| Столбик 3 (тёмный, средний) | `#1e3a8a` |
| Акцентная точка | `#ff6b4a` |

## Где применяется

- Шапка сайта / приложения — рендерить в 28–32 px
- Favicon браузера — 16, 32 px
- Touch-icon iOS — 180×180 (в скруглённом контейнере с фоном `#fff`)
- Социальные превью — в контейнере 512×512, иконка занимает 60% от стороны

## Правила

- **Охранное поле**: минимум высоты среднего столбика со всех сторон
- **Минимальный размер**: 16 px
- **Нельзя**: менять порядок/цвета столбиков, убирать коралловую точку, наклонять, добавлять тени/градиенты/обводки, заливать фон под иконку без необходимости
- **Монохром**: если нужен один цвет — все 4 элемента красятся в `currentColor`, пропорции сохраняются

## Как использовать в коде

### Как React-компонент (рекомендуется)

```tsx
// components/Logo.tsx
export function Logo({ size = 32, className }: { size?: number; className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      width={size}
      height={size}
      className={className}
      role="img"
      aria-label="Payment Tracker"
    >
      <rect x="8"  y="26" width="14" height="20" rx="4" fill="#60a5fa" />
      <rect x="25" y="14" width="14" height="32" rx="4" fill="#2563eb" />
      <rect x="42" y="20" width="14" height="26" rx="4" fill="#1e3a8a" />
      <circle cx="49" cy="26" r="3.5" fill="#ff6b4a" />
    </svg>
  );
}
```

### Как `<img>`

```tsx
<img src="/logo.svg" alt="Payment Tracker" width={32} height={32} />
```

### Favicon (Next.js app router)

Положить `logo.svg` в `app/icon.svg` — Next сам сгенерирует favicon.
Для классического подхода — `public/favicon.svg` + в `<head>`:
`<link rel="icon" href="/favicon.svg" type="image/svg+xml">`
