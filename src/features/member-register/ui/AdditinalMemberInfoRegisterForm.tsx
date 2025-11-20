import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Form } from '@/shared/ui';
import { useMemberRegisterStore } from '@/widgets/MemberInfoRegisterForms/model/useMemberRegisterStore';
import { createMemberDetailRoute, ROUTES } from '@/shared/config';
import AdditionalFormContent from './additionalForm/AdditionalFormContent';
import { convertMemberRequestBody } from '../lib/dto/convertMemberRequestBody';

const AdditionalMemberInfoRegisterForm = () => {
  const navigate = useNavigate();

  const { additionalInfo, setAdditionalInfo, setActiveTab, basicInfo, paymentInfo, resetAll } = useMemberRegisterStore();

  const handleSubmit = async (values: Record<string, any>) => {
    setAdditionalInfo(values);

    const allData = {
      basic: basicInfo,
      payment: paymentInfo,
      additional: values,
    };

    console.log('전체 회원 등록 데이터:', allData);

    const requestBody = convertMemberRequestBody(allData);

    console.log('📤 전송할 requestBody:', requestBody);

    try {
      const response = await axios.post('/api/v1/members/registration', requestBody, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log('✅ 등록 성공:', response.data);
      alert('회원 등록이 완료되었습니다!');
      resetAll();
      // navigate(createMemberDetailRoute(allData.basic.memberNumber));
      navigate(ROUTES.MEMBER.LIST);
    } catch (error) {
      console.error('❌ 회원 등록 실패:', error);
      alert('회원 등록 중 오류가 발생했습니다.');
    }
  };

  const handleGoBack = () => {
    setActiveTab('payment');
  };

  const additionalTypeOptions = [
    { value: 'CASHRECEIPT', label: '현금영수증' },
    { value: 'TAXINVOICE', label: '세금계산서' },
  ];

  return (
    <Form
      onSubmit={handleSubmit}
      initialValues={
        Object.keys(additionalInfo.formData || {}).length > 0 ? additionalInfo.formData : { additionalType: additionalInfo.additionalType || 'CASHRECEIPT' }
      }
    >
      <AdditionalFormContent additionalTypeOptions={additionalTypeOptions} onGoBack={handleGoBack} />
    </Form>
  );
};

export default AdditionalMemberInfoRegisterForm;
