import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/shared/ui';
import { ROUTES } from '@/shared/config';
import { usePageTemplate } from '@/shared/ui';
import { createMemberDetailRoute } from '@/shared/config';
import axios from 'axios';

const PageContent = () => {
  // const { handleCountPlus, handleCountMinus } = usePageTemplate();
  const navigate = useNavigate();

  const [members, setMembers] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // 👇 프록시를 통한 API 호출 (/api/v1/members)
  const fetchMembers = async () => {
    try {
      setLoading(true);
      const response = await axios.get('/api/v1/members');
      setMembers(response.data);
    } catch (err: any) {
      setError(err.message || '회원 정보를 불러오지 못했습니다.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMembers();
  }, []);

  const navigateMemberDetail = (memberId: number) => {
    return;
    navigate(createMemberDetailRoute(memberId));
  };

  if (loading) return <p>로딩 중...</p>;
  if (error) return <p style={{ color: 'red' }}>오류: {error}</p>;

  return (
    <div style={{ padding: '20px' }}>
      <Button onClick={() => navigate(ROUTES.MEMBER.REGISTER)}>회원등록</Button>

      {members.length > 0 ? (
        <table
          style={{
            width: '100%',
            borderCollapse: 'collapse',
            marginTop: '16px',
            textAlign: 'left',
          }}
        >
          <thead>
            <tr style={{ backgroundColor: '#f5f5f5' }}>
              <th style={{ border: '1px solid #ccc', padding: '8px' }}>회원 ID</th>
              <th style={{ border: '1px solid #ccc', padding: '8px' }}>이름</th>
              <th style={{ border: '1px solid #ccc', padding: '8px' }}>회원번호</th>
              <th style={{ border: '1px solid #ccc', padding: '8px' }}>이메일</th>
              <th style={{ border: '1px solid #ccc', padding: '8px' }}>주소</th>
              <th style={{ border: '1px solid #ccc', padding: '8px' }}>연락처</th>
              <th style={{ border: '1px solid #ccc', padding: '8px' }}>등록일</th>
              <th style={{ border: '1px solid #ccc', padding: '8px' }}>메모</th>
            </tr>
          </thead>
          <tbody>
            {members.map((data: any) => {
              const m = data.member;
              return (
                <tr key={m.memberId} onClick={() => navigateMemberDetail(m.memberId)} style={{ cursor: 'pointer' }}>
                  <td style={{ border: '1px solid #ccc', padding: '8px' }}>{m.memberId}</td>
                  <td style={{ border: '1px solid #ccc', padding: '8px' }}>{m.name}</td>
                  <td style={{ border: '1px solid #ccc', padding: '8px' }}>{m.memberNumber}</td>
                  <td style={{ border: '1px solid #ccc', padding: '8px' }}>{m.email}</td>
                  <td style={{ border: '1px solid #ccc', padding: '8px' }}>
                    {m.zipCode} {m.address} {m.detailedAddress}
                  </td>
                  <td style={{ border: '1px solid #ccc', padding: '8px' }}>
                    {m.mobileNumber} / {m.landlineNumber}
                  </td>
                  <td style={{ border: '1px solid #ccc', padding: '8px' }}>{m.registrationDate}</td>
                  <td style={{ border: '1px solid #ccc', padding: '8px' }}>{m.memo}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <p>회원 정보가 없습니다.</p>
      )}

      {/* <div style={{ marginTop: '16px' }}>
        <Button onClick={handleCountPlus}>+</Button>
        <Button onClick={handleCountMinus}>-</Button>
      </div> */}
    </div>
  );
};

export default PageContent;
