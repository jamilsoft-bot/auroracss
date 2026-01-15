import type { HTMLAttributes } from 'react';
import { cn } from '../utils/cn';

export type SkeletonProps = HTMLAttributes<HTMLDivElement> & {
  height?: string | number;
};

export const Skeleton = ({ className, height = '1rem', style, ...props }: SkeletonProps) => (
  <div
    className={cn('aurora-skeleton', className)}
    style={{ height, ...style }}
    aria-hidden="true"
    {...props}
  />
);
