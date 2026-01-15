import type { SelectHTMLAttributes } from 'react';
import { cn } from '../utils/cn';

export type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  invalid?: boolean;
};

export const Select = ({ className, invalid, ...props }: SelectProps) => (
  <select
    className={cn('aurora-input', className)}
    aria-invalid={invalid || undefined}
    {...props}
  />
);
