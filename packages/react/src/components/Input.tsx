import type { InputHTMLAttributes } from 'react';
import { cn } from '../utils/cn';

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  invalid?: boolean;
  size?: 'sm' | 'md' | 'lg';
};

export const Input = ({ className, invalid, size = 'md', ...props }: InputProps) => (
  <input
    className={cn('aurora-input', invalid ? 'is-invalid' : undefined, size !== 'md' ? size : undefined, className)}
    aria-invalid={invalid || undefined}
    data-state={invalid ? 'error' : undefined}
    {...props}
  />
);
