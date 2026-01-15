import type { ImgHTMLAttributes } from 'react';
import { cn } from '../utils/cn';

export type AvatarProps = ImgHTMLAttributes<HTMLImageElement> & {
  size?: 'sm' | 'md' | 'lg';
};

export const Avatar = ({ size = 'md', className, alt = '', ...props }: AvatarProps) => (
  <img
    className={cn('aurora-avatar', size, className)}
    alt={alt}
    {...props}
  />
);
