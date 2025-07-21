import { useState } from 'react';
import styled from 'styled-components';
import { SearchBar } from '../../../widgets/memberSearchForm/ui';

const PageWrapper = styled.div`
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 600px;
  margin: 0 auto;
`;

const ResultText = styled.p`
  font-size: 16px;
  color: #333;
`;

const SearchPage = () => {
  const [result, setResult] = useState('');

  const handleSearch = (keyword: string) => {
    setResult(`"${keyword}"로 검색`);
  };

  return (
    <PageWrapper>
      <h2>SearchBar 테스트 페이지</h2>
      <SearchBar
        placeholder='검색어를 입력해 주세요'
        inputSize='large'
        regex={/^[a-zA-Z0-9가-힣\s]*$/}
        onSearch={handleSearch}
        buttonLabel='검색하기'
        disabled={false}
      />
      {result && <ResultText>{result}</ResultText>}
    </PageWrapper>
  );
};

export default SearchPage;
