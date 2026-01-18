import type { ReactNode } from 'react';
import { useId } from 'react';
import { cn } from '../utils/cn';

export type ModalProps = {
  open: boolean;
  title?: string;
  description?: ReactNode;
  footer?: ReactNode;
  onClose: () => void;
  children: ReactNode;
  className?: string;
  closeLabel?: string;
  closeOnBackdrop?: boolean;
  ariaLabel?: string;
};

export const Modal = ({
  open,
  title,
  description,
  footer,
  onClose,
  children,
  className,
  closeLabel = 'Close modal',
  closeOnBackdrop = true,
  ariaLabel = 'Dialog',
}: ModalProps) => {
  if (!open) return null;
  const baseId = useId();
  const titleId = title ? `${baseId}-title` : undefined;
  const descriptionId = description ? `${baseId}-description` : undefined;
  return (
    <div
      className="aurora-modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      aria-describedby={descriptionId}
      aria-label={title ? undefined : ariaLabel}
      data-state="open"
      onClick={closeOnBackdrop ? (event) => (event.currentTarget === event.target ? onClose() : null) : undefined}
    >
      <div className={cn('aurora-modal', className)}>
        <div className="aurora-modal-header">
          {title ? <h3 className="aurora-modal-title" id={titleId}>{title}</h3> : <span />}
          <button className="aurora-btn ghost sm" onClick={onClose} aria-label={closeLabel}>
            Close
          </button>
        </div>
        {description ? (
          <div className="aurora-modal-description" id={descriptionId}>
            {description}
          </div>
        ) : null}
        <div className="aurora-modal-body">{children}</div>
        {footer ? <div className="aurora-modal-footer">{footer}</div> : null}
      </div>
    </div>
  );
};
