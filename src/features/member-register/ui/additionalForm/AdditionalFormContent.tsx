import { Form } from '@/shared/ui';
import TaxInvoiceForm from './TaxInvoiceForm';
import CashRecieptForm from './CashRecieptForm';
import { useAdditionalForm } from '../../lib/hooks/useAdditionalForm';
import { useForm } from '@/shared/ui/Layout/Form/Form.context';
import { useMemberRegisterStore } from '@/widgets/MemberInfoRegisterForms/model/useMemberRegisterStore';
import { useEffect } from 'react';

interface AdditionalFormContentProps {
  additionalTypeOptions: { value: string; label: string }[];
  onGoBack?: any;
}

const AdditionalFormContent = ({ additionalTypeOptions, onGoBack }: AdditionalFormContentProps) => {
  const { additionalType } = useAdditionalForm();
  const { activeTab, additionalInfo } = useMemberRegisterStore();
  const { setValues } = useForm();

  const { values } = useForm();
  const { setAdditionalInfo } = useMemberRegisterStore();

  const saveValuesBeforeGoBack = () => {
    console.log(values);
    setAdditionalInfo(values);
    onGoBack();
  };

  useEffect(() => {
    if (activeTab === 'additional' && additionalInfo.formData && Object.keys(additionalInfo.formData).length > 0) {
      setValues(additionalInfo.formData);
    }
  }, [activeTab]);

  return (
    <>
      <Form.Row gap={24}>
        <Form.Field name='additionalType' label='대표증빙유형' required>
          <Form.Dropdown name='additionalType' options={additionalTypeOptions} placeholder='결제수단을 선택하세요' />
        </Form.Field>
        <Form.Field></Form.Field>
      </Form.Row>

      {additionalType === 'CASHRECEIPT' && <CashRecieptForm />}
      {additionalType === 'TAXINVOICE' && <TaxInvoiceForm />}

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

export default AdditionalFormContent;
