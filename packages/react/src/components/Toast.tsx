import type { HTMLAttributes } from 'react';
import { cn } from '../utils/cn';

export type ToastProps = HTMLAttributes<HTMLDivElement> & {
  intent?: 'info' | 'success' | 'warning' | 'danger';
};

export const Toast = ({ intent = 'info', className, ...props }: ToastProps) => (
  <div className={cn('aurora-card', 'aurora-toast', className)} role="status" data-intent={intent} {...props} />
);
