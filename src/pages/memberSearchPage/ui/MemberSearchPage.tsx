import { PageTemplate } from "../../../shared/ui";
import {
  MemberPageFooter,
  MemberPageHeader,
} from "../../../widgets/memberSearchForm/ui";

const MemberSearchPage = () => {
  return (
    <PageTemplate>
      <PageTemplate.Header>
        <MemberPageHeader />
      </PageTemplate.Header>
      <PageTemplate.Content>
        <p>content</p>
      </PageTemplate.Content>
      <PageTemplate.Footer>
        <MemberPageFooter />
      </PageTemplate.Footer>
    </PageTemplate>
  );
};

export default MemberSearchPage;
