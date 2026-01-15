import type { InputHTMLAttributes } from 'react';
import { cn } from '../utils/cn';

export type SwitchProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

export const Switch = ({ className, label, ...props }: SwitchProps) => (
  <label className={cn('u-flex u-gap-2', className)}>
    <input type="checkbox" role="switch" {...props} />
    <span>{label}</span>
  </label>
);
