import type { ReactNode } from 'react';
import { cn } from '../utils/cn';

export type Tab = { id: string; label: string; content: ReactNode };

export type TabsProps = {
  tabs: Tab[];
  activeId: string;
  onChange: (id: string) => void;
  className?: string;
};

export const Tabs = ({ tabs, activeId, onChange, className }: TabsProps) => (
  <div className={cn('aurora-tabs-wrapper', className)}>
    <div role="tablist" className="aurora-tabs">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          role="tab"
          className="aurora-tab"
          aria-selected={tab.id === activeId}
          onClick={() => onChange(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
    <div role="tabpanel" style={{ padding: '1rem 0' }}>
      {tabs.find((tab) => tab.id === activeId)?.content}
    </div>
  </div>
);
