import type { ButtonHTMLAttributes } from 'react';
import { cn } from '../utils/cn';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  intent?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
};

export const Button = ({
  intent = 'primary',
  size = 'md',
  className,
  ...props
}: ButtonProps) => (
  <button
    className={cn('aurora-btn', intent !== 'primary' ? intent : undefined, size !== 'md' ? size : undefined, className)}
    {...props}
  />
);
