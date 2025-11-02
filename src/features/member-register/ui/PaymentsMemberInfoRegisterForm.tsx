import { Form } from '@/shared/ui';
import { useMemberRegisterStore } from '@/widgets/MemberInfoRegisterForms/model/useMemberRegisterStore';
import PaymentFormContent from './paymentsForm/PaymentFormContent';

const PaymentsMemberInfoRegisterForm = () => {
  const { paymentInfo, setPaymentInfo, setActiveTab, markTabCompleted } = useMemberRegisterStore();

  const handleSubmit = (values: Record<string, unknown>) => {
    console.log('결제수단 정보:', values);

    setPaymentInfo(values);
    markTabCompleted('payment');
    setActiveTab('additional');
  };

  const handleGoBack = () => {
    setActiveTab('basic');
  };

  const paymentTypeOptions = [
    { value: 'CMS', label: 'CMS' },
    { value: '카드', label: '카드' },
  ];

  return (
    <Form
      onSubmit={handleSubmit}
      initialValues={{
        ...paymentInfo.formData,
        paymentType: paymentInfo.paymentType || 'CMS',
      }}
    >
      <PaymentFormContent paymentTypeOptions={paymentTypeOptions} onGoBack={handleGoBack} />
    </Form>
  );
};

export default PaymentsMemberInfoRegisterForm;
