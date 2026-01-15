import type { ReactNode } from 'react';
import { cn } from '../utils/cn';

export type DrawerProps = {
  open: boolean;
  title?: string;
  onClose: () => void;
  children: ReactNode;
  className?: string;
};

export const Drawer = ({ open, title, onClose, children, className }: DrawerProps) => {
  if (!open) return null;
  return (
    <div className="aurora-modal-backdrop" role="dialog" aria-modal="true" aria-label={title}>
      <div
        className={cn('aurora-modal', className)}
        style={{ marginLeft: 'auto', height: '100%', borderRadius: '0', width: 'min(420px, 90vw)' }}
      >
        <div className="u-flex u-space-between u-gap-2" style={{ marginBottom: '1rem' }}>
          {title ? <h3>{title}</h3> : <span />}
          <button className="aurora-btn ghost sm" onClick={onClose} aria-label="Close drawer">
            Close
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};
