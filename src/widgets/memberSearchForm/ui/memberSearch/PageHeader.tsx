import { usePageTemplate } from '@/shared/ui';

const PageHeader = () => {
  const { contextTestCount } = usePageTemplate();

  return (
    <div>
      <h2>회원 목록</h2>
      <p>{`${contextTestCount}`}</p>
    </div>
  );
};

export default PageHeader;
