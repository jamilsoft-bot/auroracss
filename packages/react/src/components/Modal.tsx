import type { ReactNode } from 'react';
import { cn } from '../utils/cn';

export type ModalProps = {
  open: boolean;
  title?: string;
  onClose: () => void;
  children: ReactNode;
  className?: string;
};

export const Modal = ({ open, title, onClose, children, className }: ModalProps) => {
  if (!open) return null;
  return (
    <div className="aurora-modal-backdrop" role="dialog" aria-modal="true" aria-label={title}>
      <div className={cn('aurora-modal', className)}>
        <div className="u-flex u-space-between u-gap-2" style={{ marginBottom: '1rem' }}>
          {title ? <h3>{title}</h3> : <span />}
          <button className="aurora-btn ghost sm" onClick={onClose} aria-label="Close modal">
            Close
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};
