import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '../utils/cn';

export type NavbarProps = HTMLAttributes<HTMLElement> & {
  brand?: ReactNode;
  actions?: ReactNode;
};

export const Navbar = ({ brand, actions, className, children, ...props }: NavbarProps) => (
  <nav className={cn('aurora-navbar', className)} {...props}>
    <div className="aurora-container u-flex u-space-between u-center">
      <div className="u-flex u-gap-2 u-center">{brand}</div>
      <div className="u-flex u-gap-4 u-center">{children}</div>
      <div className="u-flex u-gap-2 u-center">{actions}</div>
    </div>
  </nav>
);
