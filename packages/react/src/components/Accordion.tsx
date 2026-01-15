import type { ReactNode } from 'react';
import { cn } from '../utils/cn';

export type AccordionItem = {
  id: string;
  title: string;
  content: ReactNode;
};

export type AccordionProps = {
  items: AccordionItem[];
  openIds: string[];
  onToggle: (id: string) => void;
  className?: string;
};

export const Accordion = ({ items, openIds, onToggle, className }: AccordionProps) => (
  <div className={cn('aurora-accordion', className)}>
    {items.map((item) => {
      const isOpen = openIds.includes(item.id);
      return (
        <div key={item.id} className="aurora-accordion-item">
          <button
            className="aurora-accordion-trigger"
            aria-expanded={isOpen}
            onClick={() => onToggle(item.id)}
          >
            {item.title}
          </button>
          {isOpen ? <div className="aurora-accordion-panel">{item.content}</div> : null}
        </div>
      );
    })}
  </div>
);
