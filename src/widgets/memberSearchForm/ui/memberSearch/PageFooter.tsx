import { usePageTemplate } from '../../../../shared/ui';
import { Button } from '../../../../shared/ui/Button';

const PageFooter = () => {
  const { handleCountPlus, handleCountMinus } = usePageTemplate();

  return (
    <>
      <Button onClick={handleCountPlus}>+</Button>
      <Button onClick={handleCountMinus}>-</Button>
    </>
  );
};

export default PageFooter;
