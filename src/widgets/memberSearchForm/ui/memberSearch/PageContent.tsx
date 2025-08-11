import { usePageTemplate } from '@/shared/ui';
import { Button } from '@/shared/ui';
import { ROUTES } from '@/shared/config';
import { useNavigate } from 'react-router-dom';
import { createMemberDetailRoute } from '@/shared/config';

const PageContent = () => {
  const { handleCountPlus, handleCountMinus } = usePageTemplate();
  const navigate = useNavigate();

  const dummyMember = [
    { memberId: 1, memberName: '윧동훈1' },
    { memberId: 2, memberName: '윤동훈2' },
    { memberId: 3, memberName: '윧동훈3' },
  ];

  const navigateMemberDetail = (memberId: number) => {
    navigate(createMemberDetailRoute(memberId));
  };

  return (
    <>
      <Button onClick={() => navigate(ROUTES.MEMBER.REGISTER)}>회원등록</Button>

      <ul>
        {dummyMember.map((member: any) => {
          return (
            <li key={member.memberId} onClick={() => navigateMemberDetail(member.memberId)}>
              {member.memberName}
            </li>
          );
        })}
      </ul>

      <Button onClick={handleCountPlus}>+</Button>
      <Button onClick={handleCountMinus}>-</Button>
    </>
  );
};

export default PageContent;
