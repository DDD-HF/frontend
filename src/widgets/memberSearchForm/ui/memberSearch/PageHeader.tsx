import { usePageTemplate } from '../../../../shared/ui';

const PageHeader = () => {
  const { contextTestCount } = usePageTemplate();

  return (
    <div>
      <p>{`${contextTestCount}`}</p>
    </div>
  );
};

export default PageHeader;
