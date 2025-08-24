import styled, { css } from 'styled-components';

export const StyledTextInput = styled.input<{
    $isFlashing: boolean;
    $hasValidationError: boolean;
}>`
    padding: 12px;
    border: 1px solid ${({ $hasValidationError }) => $hasValidationError ? '#ef4444' : '#d1d5db'};
    border-radius: 6px;
    font-size: 14px;
    transition: all 0.3s ease;
    background-color: ${({ $hasValidationError }) => $hasValidationError ? 'rgba(239, 68, 68, 0.1)' : '#fff'};
    
    ${({ $isFlashing }) =>
    $isFlashing &&
    css`
            background-color: rgba(255, 193, 7, 0.2);
            animation: flash 0.5s ease-in-out;
        `}
    
    &:focus {
        outline: none;
        border-color: ${({ $hasValidationError }) => $hasValidationError ? '#ef4444' : '#3b82f6'};
        box-shadow: 0 0 0 3px ${({ $hasValidationError }) =>
    $hasValidationError ? 'rgba(239, 68, 68, 0.1)' : 'rgba(59, 130, 246, 0.1)'};
    }
    
    &:disabled {
        background-color: #f9fafb;
        color: #9ca3af;
        cursor: not-allowed;
    }
`;