import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '../utils/cn';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  intent?: 'primary' | 'secondary' | 'ghost' | 'outline' | 'success' | 'danger';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  loading?: boolean;
  icon?: ReactNode;
  iconPosition?: 'start' | 'end';
  iconOnly?: boolean;
};

export const Button = ({
  intent = 'primary',
  size = 'md',
  loading = false,
  icon,
  iconPosition = 'start',
  iconOnly = false,
  className,
  disabled,
  children,
  ...props
}: ButtonProps) => {
  const isIconOnly = iconOnly || (!children && !!icon);
  const isLoading = Boolean(loading);
  const resolvedDisabled = disabled || isLoading;
  return (
    <button
      className={cn(
        'aurora-btn',
        intent !== 'primary' ? intent : undefined,
        size !== 'md' ? size : undefined,
        isIconOnly ? 'icon-only' : undefined,
        className,
      )}
      data-state={isLoading ? 'loading' : undefined}
      aria-busy={isLoading || undefined}
      disabled={resolvedDisabled}
      {...props}
    >
      {icon && iconPosition === 'start' ? <span className="aurora-btn-icon">{icon}</span> : null}
      {children ? <span className="aurora-btn-label">{children}</span> : null}
      {icon && iconPosition === 'end' ? <span className="aurora-btn-icon">{icon}</span> : null}
      {isLoading ? <span className="aurora-btn-spinner" aria-hidden="true" /> : null}
    </button>
  );
};
