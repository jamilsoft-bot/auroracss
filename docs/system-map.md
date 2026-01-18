# Aurora System Map

## Packages & responsibilities

- **@aurora/tokens**: Token source of truth in `tokens.json`, plus `tokens.css` with CSS variables and theme overrides. Build outputs a JS module in `dist/` for consumers.
- **@aurora/core**: Core CSS for resets, base styles, components, utilities, and overrides. Distributed as a single compiled CSS file.
- **@aurora/utils**: Utility class add-ons (layout, spacing, sizing, typography helpers).
- **@aurora/react**: React component wrappers that map directly to core CSS classes.
- **@aurora/docs**: Documentation and Storybook placeholders.
- **@aurora/demo**: Static demo templates for marketing, admin, and auth pages.

## Tokens model (current + gaps)

**Current tokens:**
- Color: brand scales, neutrals, semantic intents, semantic surfaces, border tones.
- Typography: font families, sizes, line heights, weights.
- Spacing: 0–32 scale.
- Radii: xs–2xl + pill.
- Shadows: sm–xl + focus ring.
- Border widths: hairline–thick.
- Motion: fast/medium/slow + easing.
- State: focus ring + disabled opacity.
- Z-index: base, dropdown, overlay, modal, toast.
- Breakpoints: sm–2xl.

**Missing/next to add:**
- Semantic typography tokens (body/heading scale + letter-spacing).
- Component-level tokens (button/input/overlay)
- High-contrast theme overrides.
- Expanded motion system (spring, emphasis easing).

## CSS layering strategy

Aurora core CSS uses `@layer` ordering:
1. **reset**: box sizing, base element resets.
2. **base**: body defaults, containers, basic layout helpers.
3. **components**: component class styles (buttons, inputs, cards, modals, etc.).
4. **utilities**: low-level helper utilities.
5. **overrides**: reserved for consumer overrides.

## Theming approach

- CSS variables in `tokens.css` are the primary theme mechanism.
- Theme switching via `[data-theme='light']` / `[data-theme='dark']`.
- Brand variants via `[data-brand='ember']` and `[data-brand='forest']`.
- Current gaps: high-contrast theme support and per-component theme channels.

## State variants approach

- Native pseudo-classes: `:hover`, `:active`, `:focus-visible`, `:disabled`.
- Attribute-driven states: `aria-disabled="true"` and `data-state="loading|error|success|open|closed"`.
- Invalid states use `.is-invalid` on inputs or `data-state="error"` on fields.

## Component inventory

**Core CSS**
- Buttons, inputs, cards, badges, alerts, modals, tabs, tables, spinners, skeletons, avatars, breadcrumbs, navbar, sidebar, tooltip, popover, accordion, toasts.

**React**
- Alert, Avatar, Badge, Breadcrumb, Button, Card, Checkbox, Drawer, Input, Modal, Navbar, Pagination, Popover, Radio, Select, Sidebar, Skeleton, Spinner, Switch, Table, Tabs, Toast, Tooltip, Accordion, TextField.

## Build pipeline summary

- **Tokens**: `tokens.json` -> `tokens.css` + `dist/index.js` via a small Node build script.
- **Core**: `src/aurora.css` -> `dist/aurora.css` via copy script.
- **Utils**: CSS utilities shipped directly from `src/utilities.css`.
- **React**: TypeScript build via `tsc`.
- **Docs/Demo**: Placeholder build scripts for future content generation.
