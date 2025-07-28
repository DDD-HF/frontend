import { ChangeEvent, useState } from 'react';
import styled, { css } from 'styled-components';

const sizeStyles = {
  small: css`
    width: 150px;
  `,
  medium: css`
    width: 300px;
  `,
  large: css`
    width: 450px;
  `,
};

const StyledInputText = styled.input<
  Pick<InputTextProps, 'size'> & {
    $isInvalid: boolean;
  }
>`
  width: 100%;
  font-size: 1rem;
  padding: 8px 12px;

  border: ${({ $isInvalid }) => ($isInvalid ? '2px solid red' : '2px solid #ddd')};
  border-radius: 4px;
  background-color: ${props => (props.$isInvalid ? '#ffe6e6' : '#fff')};
  outline: none;
  transition: all 0.3s ease;
  ${props => sizeStyles[props.size || 'medium']}

  &:focus {
    border-color: ${props => (props.$isInvalid ? 'red' : '#007bff')};
    background-color: #fff;
  }

  &::placeholder {
    color: #888;
  }

  &:disabled {
    background-color: #f1f1f1;
  }
`;

export interface InputTextProps {
  size?: 'small' | 'medium' | 'large';
  regex?: RegExp;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  onValidChange?: (isValid: boolean) => void;
  max?: number;
  disabled?: boolean;
}

const InputText = ({ size = 'medium', regex, placeholder, value, onChange, onValidChange, max, disabled }: InputTextProps) => {
  const [isInvalid, setIsInvalid] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;

    let isValid = true;

    if (!newValue) {
      isValid = true;
    } else if (regex) {
      isValid = regex.test(newValue);
    }

    setIsInvalid(!isValid);
    onValidChange?.(isValid);
    onChange?.(newValue);
  };

  return (
    <StyledInputText
      disabled={disabled}
      size={size}
      type='text'
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      maxLength={max}
      $isInvalid={isInvalid}
    />
  );
};

export default InputText;
