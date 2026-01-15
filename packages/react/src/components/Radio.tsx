import type { InputHTMLAttributes } from 'react';
import { cn } from '../utils/cn';

export type RadioProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

export const Radio = ({ className, label, ...props }: RadioProps) => (
  <label className={cn('u-flex u-gap-2', className)}>
    <input type="radio" {...props} />
    <span>{label}</span>
  </label>
);
