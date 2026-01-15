import type { HTMLAttributes } from 'react';
import { cn } from '../utils/cn';
import { Button } from './Button';

export type PaginationProps = HTMLAttributes<HTMLDivElement> & {
  page: number;
  totalPages: number;
  onChange: (page: number) => void;
};

export const Pagination = ({ page, totalPages, onChange, className, ...props }: PaginationProps) => (
  <div className={cn('aurora-pagination u-flex u-gap-2 u-center', className)} {...props}>
    <Button size="sm" intent="secondary" onClick={() => onChange(Math.max(1, page - 1))}>
      Prev
    </Button>
    <span className="u-text-muted">Page {page} of {totalPages}</span>
    <Button size="sm" intent="secondary" onClick={() => onChange(Math.min(totalPages, page + 1))}>
      Next
    </Button>
  </div>
);
