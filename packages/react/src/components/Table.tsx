import type { TableHTMLAttributes } from 'react';
import { cn } from '../utils/cn';

export type TableProps = TableHTMLAttributes<HTMLTableElement>;

export const Table = ({ className, ...props }: TableProps) => (
  <table className={cn('aurora-table', className)} {...props} />
);
