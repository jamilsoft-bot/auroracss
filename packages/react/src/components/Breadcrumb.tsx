import type { HTMLAttributes } from 'react';
import { cn } from '../utils/cn';

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

export type BreadcrumbProps = HTMLAttributes<HTMLElement> & {
  items: BreadcrumbItem[];
};

export const Breadcrumb = ({ items, className, ...props }: BreadcrumbProps) => (
  <nav className={cn('aurora-breadcrumb', className)} aria-label="Breadcrumb" {...props}>
    <ol>
      {items.map((item, index) => (
        <li key={`${item.label}-${index}`}>
          {item.href ? <a href={item.href}>{item.label}</a> : <span aria-current="page">{item.label}</span>}
        </li>
      ))}
    </ol>
  </nav>
);
