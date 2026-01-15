import type { HTMLAttributes } from 'react';
import { cn } from '../utils/cn';

export type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  intent?: 'neutral' | 'success' | 'warning' | 'danger';
};

export const Badge = ({ intent = 'neutral', className, ...props }: BadgeProps) => (
  <span className={cn('aurora-badge', intent !== 'neutral' ? intent : undefined, className)} {...props} />
);
