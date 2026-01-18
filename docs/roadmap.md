# Aurora Roadmap (PR-Sized Batches)

## Batch 1: Foundation upgrades (tokens + state system)

**Adds**
- Expanded token scales (spacing, radii, shadows, borders, breakpoints).
- Semantic surface tokens and state tokens (focus ring, disabled opacity).
- Core state system for hover/active/focus-visible/disabled/data-state.
- Reduced-motion defaults.

**Packages touched**
- `@aurora/tokens`
- `@aurora/core`
- `@aurora/docs`

**New classes/tokens/APIs**
- Tokens: `--aurora-focus-ring`, `--aurora-disabled-opacity`, `--aurora-color-*-surface`, breakpoint vars.
- State selectors: `data-state="loading|error|success|open|closed"`.

**Acceptance checklist**
- `pnpm build` passes.
- Tokens CSS variables exist for new surfaces and state.
- Reduced-motion behavior verified.
- Docs updated with tokens + accessibility guidance.

## Batch 2: High-impact components (Button, TextField, Modal)

**Adds**
- Button variants, sizes, icon-only, and loading state.
- TextField wrapper with label/description/error.
- Modal structure with header/body/footer and a11y labeling.
- Docs examples + demo updates.

**Packages touched**
- `@aurora/core`
- `@aurora/react`
- `@aurora/docs`
- `@aurora/demo`

**New classes/tokens/APIs**
- Classes: `.aurora-field*`, `.aurora-btn-icon`, `.aurora-btn-spinner`, `.aurora-modal-*`.
- React: `Button` new props, `TextField` component, `Modal` new props.

**Acceptance checklist**
- `pnpm build` passes.
- Demo pages show updated button/input/modal patterns.
- Docs updated with component usage.

## Batch 3: Forms & validation suite

**Adds**
- Select/checkbox/radio/switch enhancements.
- Validation summary + field group layouts.
- Inline status indicators and helper text utilities.

**Packages touched**
- `@aurora/core`, `@aurora/react`, `@aurora/docs`, `@aurora/demo`.

**Acceptance checklist**
- Components documented with validation states.
- Visual QA for form layouts.

## Batch 4: Overlay & navigation primitives

**Adds**
- Menu/dropdown, dialog variants, tooltip/popover refinements.
- Accessible focus management and keyboard interactions.

**Packages touched**
- `@aurora/core`, `@aurora/react`, `@aurora/docs`, `@aurora/demo`.

**Acceptance checklist**
- Keyboard navigation verified.
- ARIA patterns documented.

## Batch 5: Utilities + theming expansion

**Adds**
- Expanded utility classes (spacing, flex/grid, typography).
- High-contrast theme and density settings.

**Packages touched**
- `@aurora/utils`, `@aurora/tokens`, `@aurora/docs`.

**Acceptance checklist**
- Utilities documented with examples.
- Theme previews in demo pages.
