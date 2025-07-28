export interface PageTemplateProps {
  children: React.ReactNode;
  variant?: 'default' | 'compact';
}

export interface SubComponentProps {
  children: React.ReactNode;
}

export interface PageTemplateContextValue {
  variant: 'default' | 'compact';
  contextTestCount: Number;
  handleCountPlus: () => void;
  handleCountMinus: () => void;
}
