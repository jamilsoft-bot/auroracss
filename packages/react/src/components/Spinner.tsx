import type { HTMLAttributes } from 'react';
import { cn } from '../utils/cn';

export type SpinnerProps = HTMLAttributes<HTMLDivElement>;

export const Spinner = ({ className, ...props }: SpinnerProps) => (
  <div className={cn('aurora-spinner', className)} role="status" aria-live="polite" {...props} />
);
