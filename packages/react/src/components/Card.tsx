import type { HTMLAttributes } from 'react';
import { cn } from '../utils/cn';

export type CardProps = HTMLAttributes<HTMLDivElement>;

export const Card = ({ className, ...props }: CardProps) => (
  <div className={cn('aurora-card', className)} {...props} />
);
