import type { InputHTMLAttributes } from 'react';
import { cn } from '../utils/cn';

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  invalid?: boolean;
};

export const Input = ({ className, invalid, ...props }: InputProps) => (
  <input
    className={cn('aurora-input', invalid ? 'is-invalid' : undefined, className)}
    aria-invalid={invalid || undefined}
    {...props}
  />
);
