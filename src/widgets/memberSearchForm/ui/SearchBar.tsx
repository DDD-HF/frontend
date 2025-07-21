import { useState } from 'react';
import styled from 'styled-components';
import { InputText } from '../../../shared/ui/Input';
import { Button } from '../../../shared/ui/Button';

const SearchBarWrapper = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

export interface SearchBarProps {
  placeholder?: string;
  inputSize?: 'small' | 'medium' | 'large';
  onSearch: (keyword: string) => void;
  disabled?: boolean;
  regex?: RegExp;
  buttonLabel?: string;
}

const SearchBar = ({ placeholder = '검색어를 입력하세요', inputSize = 'medium', onSearch, disabled = false, regex, buttonLabel = '검색' }: SearchBarProps) => {
  const [inputValue, setInputValue] = useState('');
  const [isInputValid, setIsInputValid] = useState(true);

  const handleInputChange = (value: string) => {
    setInputValue(value);
  };

  const handleValidChange = (isValid: boolean) => {
    setIsInputValid(isValid);
  };

  const handleSearchClick = () => {
    if (isInputValid && inputValue.trim()) {
      onSearch(inputValue);
    }
  };

  const isButtonDisabled = disabled || inputValue.trim() === '' || !isInputValid;

  return (
    <SearchBarWrapper>
      <InputText
        inputSize={inputSize}
        placeholder={placeholder}
        value={inputValue}
        onChange={handleInputChange}
        onValidChange={handleValidChange}
        regex={regex}
        disabled={disabled}
      />
      <Button varient='primary' onClick={handleSearchClick} disabled={isButtonDisabled}>
        {buttonLabel}
      </Button>
    </SearchBarWrapper>
  );
};

export default SearchBar;
