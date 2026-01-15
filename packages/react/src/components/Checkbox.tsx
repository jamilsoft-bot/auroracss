import type { InputHTMLAttributes } from 'react';
import { cn } from '../utils/cn';

export type CheckboxProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

export const Checkbox = ({ className, label, ...props }: CheckboxProps) => (
  <label className={cn('u-flex u-gap-2', className)}>
    <input type="checkbox" {...props} />
    <span>{label}</span>
  </label>
);
