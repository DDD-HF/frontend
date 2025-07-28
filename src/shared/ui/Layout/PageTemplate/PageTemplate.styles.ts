import styled, { css } from 'styled-components';

export const PageTemplateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
`;

export const HeaderWrapper = styled.header<{ $variant: 'default' | 'compact' }>`
  width: 100%;
  flex-shrink: 0;

  ${({ $variant }) =>
    $variant === 'compact'
      ? css`
          padding: 0.5rem;
          min-height: 48px;
        `
      : css`
          padding: 1rem;
          min-height: 64px;
        `}
`;

export const ContentWrapper = styled.main<{ $variant: 'default' | 'compact' }>`
  flex: 1;
  width: 100%;
  padding: ${({ $variant }) => ($variant === 'compact' ? '1rem' : '2rem')};
`;

export const FooterWrapper = styled.footer<{ $variant: 'default' | 'compact' }>`
  width: 100%;
  flex-shrink: 0;
  padding: ${({ $variant }) => ($variant === 'compact' ? '0.5rem' : '1rem')};
`;
