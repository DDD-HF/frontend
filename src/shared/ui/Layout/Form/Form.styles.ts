import styled, { keyframes, css } from 'styled-components';

export const flash = keyframes`
  0% { background-color: rgba(255, 193, 7, 0.2); }
  50% { background-color: rgba(255, 193, 7, 0.5); }
  100% { background-color: rgba(255, 193, 7, 0.2); }
`;

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  padding: 24px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

export const FormRowWrapper = styled.div<{ $gap: number }>`
  display: flex;
  gap: ${({ $gap }) => $gap}px;
  align-items: flex-start;
`;

export const FormFieldWrapper = styled.div<{ $isFlashing: boolean }>`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 8px;
  padding: 8px;
  border-radius: 4px;
  transition: background-color 0.3s ease;
  
  ${({ $isFlashing }) =>
    $isFlashing &&
    css`
      animation: ${flash} 0.5s ease-in-out;
    `}
`;

export const Label = styled.label<{ $required: boolean }>`
  font-size: 14px;
  font-weight: 500;
  color: #374151;
  
  ${({ $required }) =>
    $required &&
    css`
      &::after {
        content: ' *';
        color: #ef4444;
      }
    `}
`;

export const ErrorMessage = styled.span`
  font-size: 12px;
  color: #ef4444;
`;

export const SummitButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  padding: 8px;
`;

export const SubmitButton = styled.button<{ $disabled: boolean }>`
  padding: 12px 24px;
  background-color: ${({ $disabled }) => $disabled ? '#9ca3af' : '#3b82f6'};
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 500;
  cursor: ${({ $disabled }) => $disabled ? 'not-allowed' : 'pointer'};
  transition: background-color 0.2s;
  
  &:hover {
    background-color: ${({ $disabled }) => $disabled ? '#9ca3af' : '#2563eb'};
  }
`;