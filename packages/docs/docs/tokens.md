# Tokens

Aurora tokens live in `@aurora/tokens/tokens.json` and are surfaced via `tokens.css` for CSS variables. Semantic aliases keep components stable while enabling brand swaps.

## Token groups

- **Color**: brand scales, neutrals, semantic intents, and semantic surfaces.
- **Typography**: font families, sizes, line heights, weights.
- **Spacing**: 0–32 scale for layout and component rhythm.
- **Radii**: xs–2xl plus pill.
- **Shadow**: sm–xl plus focus ring.
- **Border widths**: hairline, thin, medium, thick.
- **Motion**: fast/medium/slow durations and easing.
- **State**: disabled opacity and focus ring definition.
- **Z-index**: dropdown, overlay, modal, toast.
- **Breakpoints**: sm–2xl.

## CSS variable conventions

- `--aurora-color-*` for color primitives and semantic surfaces.
- `--aurora-space-*` for spacing.
- `--aurora-radius-*` for radii.
- `--aurora-shadow-*` and `--aurora-focus-ring` for elevation and focus.
- `--aurora-breakpoint-*` for responsive layout.
