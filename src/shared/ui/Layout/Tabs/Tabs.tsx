import { createContext, useContext, useState, ReactNode } from 'react';
import { TabsWrapper, TabListWrapper, TabButton, TabPanelWrapper } from './Tabs.styles';

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

// ========================= Context =========================

const TabsContext = createContext<TabContextType | undefined>(undefined);

export const useTabs = () => {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error('Tabs 안에서 사용하세요');
  }
  return context;
};

// ========================= Context =========================

const Tabs = ({ children, defaultTab }: TabsProps) => {
  const [activeTab, setActiveTab] = useState(defaultTab);

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <TabsWrapper>{children}</TabsWrapper>
    </TabsContext.Provider>
  );
};

const TabList = ({ children }: TabListProps) => <TabListWrapper>{children}</TabListWrapper>;

const Tab = ({ id, children, disabled = false }: TabProps) => {
  const { activeTab, setActiveTab } = useTabs();

  return (
    <TabButton
      $isActive={activeTab === id}
      onClick={() => !disabled && setActiveTab(id)}
      disabled={disabled}
      role='tab'
      aria-selected={activeTab === id}
      aria-controls={`tabpanel-${id}`}
      id={`tab-${id}`}
    >
      {children}
    </TabButton>
  );
};

const TabPanel = ({ id, children }: TabPanelProps) => {
  const { activeTab } = useTabs();

  if (activeTab !== id) return null;

  return (
    <TabPanelWrapper role='tabpanel' aria-labelledby={`tab-${id}`} id={`tabpanel-${id}`}>
      {children}
    </TabPanelWrapper>
  );
};

Tabs.List = TabList;
Tabs.Tab = Tab;
Tabs.Panel = TabPanel;

export default Tabs;
