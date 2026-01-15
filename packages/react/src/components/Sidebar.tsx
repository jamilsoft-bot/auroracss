import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '../utils/cn';

export type SidebarProps = HTMLAttributes<HTMLElement> & {
  header?: ReactNode;
  footer?: ReactNode;
};

export const Sidebar = ({ header, footer, className, children, ...props }: SidebarProps) => (
  <aside className={cn('aurora-sidebar', className)} {...props}>
    {header ? <div className="aurora-sidebar-header">{header}</div> : null}
    <div className="aurora-sidebar-content">{children}</div>
    {footer ? <div className="aurora-sidebar-footer">{footer}</div> : null}
  </aside>
);
