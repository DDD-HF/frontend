import styled, { css } from 'styled-components';

export const StyledRadioWrapper = styled.div<{ $isFlashing: boolean }>`
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
    padding: 8px;
    border-radius: 4px;
    transition: all 0.3s ease;
    
    ${({ $isFlashing }) =>
    $isFlashing &&
    css`
            background-color: rgba(255, 193, 7, 0.2);
            animation: flash 0.5s ease-in-out;
        `}
`;

export const RadioItem = styled.label`
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    font-size: 14px;
    
    input[type="radio"] {
        margin: 0;
    }
    
    &:has(input:disabled) {
        color: #9ca3af;
        cursor: not-allowed;
    }
`;