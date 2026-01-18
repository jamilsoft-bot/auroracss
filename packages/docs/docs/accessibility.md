# Accessibility

Aurora targets WCAG AA compliance with:
- Visible focus rings and `:focus-visible` defaults.
- ARIA roles on complex components and semantic labels on inputs.
- Keyboard-friendly triggers and tab order.
- Reduced-motion support via `prefers-reduced-motion`.
- High-contrast defaults that work in light/dark themes.

## State system

Aurora state styling can be applied via:
- Native states: `:hover`, `:active`, `:focus-visible`, `:disabled`.
- `aria-disabled="true"` for non-form controls.
- `data-state="loading|error|success|open|closed"` for UI feedback.
