import { PageTemplate } from '@/shared/ui';
import MEmberInformation from '@/widgets/memberInformation/ui/MemberInFormation';
import { useParams } from 'react-router-dom';

const MemberDetailPage = () => {
  const { memberId } = useParams();

  return (
    <PageTemplate>
      <PageTemplate.Header>
        <h1>{memberId}번 멤버 디테일 페이지</h1>
      </PageTemplate.Header>
      <PageTemplate.Content>
        <MEmberInformation />
      </PageTemplate.Content>
    </PageTemplate>
  );
};

export default MemberDetailPage;
