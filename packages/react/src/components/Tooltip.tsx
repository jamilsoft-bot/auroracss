import type { ReactNode } from 'react';

export type TooltipProps = {
  content: ReactNode;
  children: ReactNode;
};

export const Tooltip = ({ content, children }: TooltipProps) => (
  <span className="aurora-tooltip" role="tooltip" aria-label={typeof content === 'string' ? content : undefined}>
    {children}
    <span className="aurora-tooltip-content">{content}</span>
  </span>
);
