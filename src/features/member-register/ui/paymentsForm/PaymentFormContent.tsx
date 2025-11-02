import { Form } from '@/shared/ui';
import { usePaymentForm } from '@/features/member-register/lib/hooks/usePaymentForm';
import CMSForm from './CmsForm';
import CardForm from './CardForm';
import { useForm } from '@/shared/ui/Layout/Form/Form.context';
import { useMemberRegisterStore } from '@/widgets/MemberInfoRegisterForms/model/useMemberRegisterStore';
import { useEffect } from 'react';

interface PaymentFormContentProps {
  paymentTypeOptions: { value: string; label: string }[];
  onGoBack?: () => void;
}

const PaymentFormContent = ({ paymentTypeOptions, onGoBack }: PaymentFormContentProps) => {
  const { paymentType } = usePaymentForm();
  const { values, setValues } = useForm();
  const { setPaymentInfo, paymentInfo, activeTab } = useMemberRegisterStore();

  useEffect(() => {
    if (activeTab === 'payment' && paymentInfo.formData && Object.keys(paymentInfo.formData).length > 0) {
      setValues(paymentInfo.formData);
    }
  }, [activeTab]);

  const saveValuesBeforeGoBack = () => {
    console.log('저장되는 값:', values);
    setPaymentInfo(values);
    onGoBack?.();
  };

  return (
    <>
      <Form.Row>
        <Form.Field name='paymentType' label='결제수단 타입' required>
          <Form.Dropdown name='paymentType' options={paymentTypeOptions} placeholder='결제수단을 선택하세요' />
        </Form.Field>
      </Form.Row>

      {paymentType === 'CMS' && <CMSForm />}
      {paymentType === '카드' && <CardForm />}

      <Form.Actions>
        {onGoBack && (
          <Form.SubButton onClick={saveValuesBeforeGoBack} variant='secondary'>
            이전
          </Form.SubButton>
        )}
        <Form.Submit>다음</Form.Submit>
      </Form.Actions>
    </>
  );
};

export default PaymentFormContent;
