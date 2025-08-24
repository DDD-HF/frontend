import { PageTemplate } from '@/shared/ui';
import {MemberInfoRegisterForms} from "@/widgets/MemberInfoRegisterForms";

const MemberRegisterPage = () => {
  return (
    <PageTemplate>
      <PageTemplate.Header>
        <h1>회원등록</h1>
      </PageTemplate.Header>
      <PageTemplate.Content>
          <MemberInfoRegisterForms/>
      </PageTemplate.Content>
    </PageTemplate>
  );
};

export default MemberRegisterPage;
