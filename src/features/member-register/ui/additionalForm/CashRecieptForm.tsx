import Form from '@/shared/ui/Layout/Form/Form';

const CashRecieptForm = () => {
  const ISSUANCE_METHOD_OPTIONS = [
    { value: '자동', label: '자동' },
    { value: '수동', label: '수동' },
  ];

  return (
    <Form.Row gap={24}>
      <Form.Field name='issuanceMethod' label='' required>
        <Form.Dropdown name='issuanceMethod' options={ISSUANCE_METHOD_OPTIONS} placeholder='발급방식' />
      </Form.Field>
      <Form.Field name='cashReceiptInformation' label='' required>
        <Form.TextInput name='cashReceiptInformation' placeholder='현금영수증 정보' validationMessage='올바른 카드번호 형식으로 입력해주세요' />
      </Form.Field>
    </Form.Row>
  );
};

export default CashRecieptForm;
