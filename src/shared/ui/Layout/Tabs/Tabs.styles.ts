import { styled } from 'styled-components';

export const TabsWrapper = styled.div`
  width: 100%;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
`;

export const TabListWrapper = styled.div`
  display: flex;
  border-bottom: 2px solid #e2e8f0;
  background-color: #f8fafc;
  border-radius: 8px 8px 0 0;
  overflow: hidden;
`;

export const TabButton = styled.button<{ $isActive: boolean }>`
  padding: 12px 24px;
  border: none;
  background-color: ${({ $isActive }) => ($isActive ? '#ffffff' : 'transparent')};
  color: ${({ $isActive }) => ($isActive ? '#1e293b' : '#64748b')};
  font-size: 14px;
  font-weight: ${({ $isActive }) => ($isActive ? '600' : '500')};
  cursor: pointer;
  position: relative;
  transition: all 0.2s ease-in-out;
  border-bottom: 3px solid transparent;

  &:hover {
    background-color: ${({ $isActive }) => ($isActive ? '#ffffff' : '#f1f5f9')};
    color: #1e293b;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #3b82f6;
  }

  ${({ $isActive }) =>
    $isActive &&
    `
    border-bottom-color: #3b82f6;
    box-shadow: 0 2px 4px rgba(59, 130, 246, 0.1);
  `}
`;

export const TabPanelWrapper = styled.div`
  padding: 24px;
  background-color: #ffffff;
  border: 1px solid #e2e8f0;
  border-top: none;
  border-radius: 0 0 8px 8px;
  min-height: 200px;

  animation: fadeIn 0.3s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(8px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
