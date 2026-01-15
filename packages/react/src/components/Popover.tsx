import type { ReactNode } from 'react';
import { cn } from '../utils/cn';

export type PopoverProps = {
  open: boolean;
  content: ReactNode;
  children: ReactNode;
  className?: string;
};

export const Popover = ({ open, content, children, className }: PopoverProps) => (
  <span className={cn('aurora-popover', className)}>
    {children}
    {open ? <span className="aurora-popover-panel" role="dialog">{content}</span> : null}
  </span>
);
