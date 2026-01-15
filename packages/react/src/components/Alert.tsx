import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '../utils/cn';

export type AlertProps = HTMLAttributes<HTMLDivElement> & {
  intent?: 'info' | 'success' | 'warning' | 'danger';
  title?: string;
  children: ReactNode;
};

export const Alert = ({ intent = 'info', title, className, children, ...props }: AlertProps) => (
  <div className={cn('aurora-alert', intent !== 'info' ? intent : undefined, className)} role="status" {...props}>
    {title ? <strong style={{ display: 'block', marginBottom: '0.25rem' }}>{title}</strong> : null}
    <div>{children}</div>
  </div>
);
