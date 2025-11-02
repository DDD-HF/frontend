import { useNavigate } from 'react-router-dom';
import { Form } from '@/shared/ui';
import { useMemberRegisterStore } from '@/widgets/MemberInfoRegisterForms/model/useMemberRegisterStore';
import { createMemberDetailRoute } from '@/shared/config';
import AdditionalFormContent from './additionalForm/AdditionalFormContent';

const AdditionalMemberInfoRegisterForm = () => {
  const navigate = useNavigate();

  const { additionalInfo, setAdditionalInfo, setActiveTab, basicInfo, paymentInfo, resetAll } = useMemberRegisterStore();

  const handleSubmit = (values: Record<string, any>) => {
    console.log('추가정보 제출:', values);

    setAdditionalInfo(values);

    // 전체 등록 완료
    const allData = {
      basic: basicInfo,
      payment: paymentInfo,
      additional: values,
    };

    console.log('전체 회원 등록 데이터:', allData);

    // :TODO API 호출 로직

    alert('등록이 완료되었습니다!');

    // 등록 완료 후 상태 초기화
    resetAll();
    navigate(createMemberDetailRoute(basicInfo.memberNumber));
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
