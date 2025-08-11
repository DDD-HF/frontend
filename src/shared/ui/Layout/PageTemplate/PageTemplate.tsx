import { createContext, useContext, useState } from 'react';
import { PageTemplateWrapper, HeaderWrapper, ContentWrapper, FooterWrapper } from './PageTemplate.styles';
import type { PageTemplateProps, SubComponentProps, PageTemplateContextValue } from './PageTemplate.types';

// ========================= Context =========================

const PageTemplateContext = createContext<PageTemplateContextValue | undefined>(undefined);

export const usePageTemplate = () => {
  const context = useContext(PageTemplateContext);
  if (!context) {
    throw new Error('PageTemplate 안에서 사용하세요.');
  }
  return context;
};

// ========================= Context =========================

const PageTemplate = ({ children, variant = 'default' }: PageTemplateProps) => {
  const [contextTestCount, setContextTestCount] = useState(0);

  const handleCountPlus = () => {
    setContextTestCount(contextTestCount + 1);
  };

  const handleCountMinus = () => {
    setContextTestCount(contextTestCount - 1);
  };

  const contextValue = {
    variant,
    contextTestCount,
    handleCountPlus,
    handleCountMinus,
  };

  return (
    <PageTemplateContext.Provider value={contextValue}>
      <PageTemplateWrapper>{children}</PageTemplateWrapper>
    </PageTemplateContext.Provider>
  );
};

const Header = ({ children }: SubComponentProps) => {
  const { variant } = usePageTemplate();
  return <HeaderWrapper $variant={variant}>{children}</HeaderWrapper>;
};

const Content = ({ children }: SubComponentProps) => {
  const { variant } = usePageTemplate();
  return <ContentWrapper $variant={variant}>{children}</ContentWrapper>;
};

const Footer = ({ children }: SubComponentProps) => {
  const { variant } = usePageTemplate();
  return <FooterWrapper $variant={variant}>{children}</FooterWrapper>;
};

PageTemplate.Header = Header;
PageTemplate.Content = Content;
PageTemplate.Footer = Footer;

export default PageTemplate;
