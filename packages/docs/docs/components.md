# Components

Aurora ships both class-based components (in `@aurora/core`) and React components (in `@aurora/react`). The class names align with React props for parity.

## Button

```html
<button class="aurora-btn">Primary</button>
<button class="aurora-btn secondary">Secondary</button>
<button class="aurora-btn ghost">Ghost</button>
<button class="aurora-btn success">Success</button>
<button class="aurora-btn danger">Danger</button>
<button class="aurora-btn outline">Outline</button>
<button class="aurora-btn sm">Small</button>
<button class="aurora-btn lg">Large</button>
<button class="aurora-btn icon-only" aria-label="Icon button">
  <span class="aurora-btn-icon">★</span>
</button>
<button class="aurora-btn" data-state="loading">
  <span class="aurora-btn-label">Loading</span>
  <span class="aurora-btn-spinner" aria-hidden="true"></span>
</button>
```

```tsx
import { Button } from '@aurora/react';

<Button intent="primary">Primary</Button>
<Button intent="secondary">Secondary</Button>
<Button intent="ghost">Ghost</Button>
<Button intent="success">Success</Button>
<Button intent="danger">Danger</Button>
<Button intent="outline">Outline</Button>
<Button size="sm">Small</Button>
<Button size="lg">Large</Button>
<Button iconOnly icon={<span>★</span>} aria-label="Icon button" />
<Button loading>Loading</Button>
```

## Input & TextField

```html
<div class="aurora-field">
  <label class="aurora-field-label" for="email">Email</label>
  <input class="aurora-input" id="email" type="email" placeholder="you@aurora.dev" />
  <span class="aurora-field-help">We only use this for account recovery.</span>
</div>

<div class="aurora-field" data-state="error">
  <label class="aurora-field-label" for="email-error">Email</label>
  <input class="aurora-input is-invalid" id="email-error" type="email" />
  <span class="aurora-field-error">Please enter a valid email.</span>
</div>
```

```tsx
import { Input, TextField } from '@aurora/react';

<Input placeholder="Standalone input" />
<TextField
  label="Email"
  placeholder="you@aurora.dev"
  description="We only use this for account recovery."
/>
<TextField label="Email" error="Please enter a valid email." />
```

## Modal / Dialog

```html
<div class="aurora-modal-backdrop" role="dialog" aria-modal="true" data-state="open">
  <div class="aurora-modal">
    <div class="aurora-modal-header">
      <h3 class="aurora-modal-title">New project</h3>
      <button class="aurora-btn ghost sm" aria-label="Close modal">Close</button>
    </div>
    <div class="aurora-modal-description">Name the project and pick a template.</div>
    <div class="aurora-modal-footer">
      <button class="aurora-btn secondary">Cancel</button>
      <button class="aurora-btn">Create</button>
    </div>
  </div>
</div>
```

```tsx
import { Modal } from '@aurora/react';

<Modal
  open
  title="New project"
  description="Name the project and pick a template."
  onClose={() => {}}
  footer={(
    <>
      <button className="aurora-btn secondary">Cancel</button>
      <button className="aurora-btn">Create</button>
    </>
  )}
>
  <p>Modal content goes here.</p>
</Modal>
```
