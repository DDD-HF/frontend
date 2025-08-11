import { ReactNode } from 'react';

export interface TabContextType {
  activeTab: string;
  setActiveTab: (id: string) => void;
}

export interface TabsProps {
  children: ReactNode;
  defaultTab: string;
}

export interface TabListProps {
  children: ReactNode;
}

export interface TabProps {
  id: string;
  children: ReactNode;
  disabled?: boolean;
}

export interface TabPanelProps {
  id: string;
  children: ReactNode;
}
