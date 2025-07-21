import styled, { css } from 'styled-components';

const variantStyles = {
  submit: css`
    background-color: #28a745;
  `,
  primary: css`
    background-color: #007bff;

    &:hover:enabled {
      background-color: #0056b3;
    }
  `,
  secondary: css`
    background-color: #6c757d;
  `,
  cancel: css`
    background-color: #dc3545;
  `,
};

const StyledButton = styled.button<{
  $varient: 'submit' | 'primary' | 'secondary' | 'cancel';
  disabled?: boolean;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  border: none;
  height: 36px;
  padding: 0 16px;
  border-radius: 5px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

  ${props => variantStyles[props.$varient]}

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const ButtonWrapper = styled.div`
  gap: 5px;
  /* position: relative; */
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  text-overflow: hidden;
  overflow: hidden;
`;

export interface ButtonProps {
  varient?: 'submit' | 'primary' | 'secondary' | 'cancel';
  children?: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
}

const Button = ({ varient = 'submit', children, disabled, onClick }: ButtonProps) => {
  return (
    <StyledButton $varient={varient} disabled={disabled} onClick={onClick}>
      <ButtonWrapper>
        {/* {icon && (
          <IconWrapper>
          <IconComp name={icon} />
           </IconWrapper>
        )} */}
        {children}
      </ButtonWrapper>
    </StyledButton>
  );
};

export default Button;
