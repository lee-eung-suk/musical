import { ReactNode } from 'react';

export interface TimelineItem {
  period: string;
  title: string;
  icon: ReactNode;
  tasks: string[];
  colorTheme: 'blue' | 'green' | 'yellow' | 'purple';
}

export interface BudgetItem {
  name: string;
  value: number;
  color: string;
}

export interface Vendor {
  type: string;
  name: string;
  item: string;
  colorClass: string;
}

export interface ChecklistCategory {
  id: string;
  title: string;
  icon: ReactNode;
  items: string[];
  colorTheme: 'blue' | 'pink' | 'indigo' | 'orange';
}

export type TabType = 'timeline' | 'budget' | 'checklists';