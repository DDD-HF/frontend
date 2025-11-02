import Form from '@/shared/ui/Layout/Form/Form';

const TaxInvoiceForm = () => {
  const MEMBER_TYPE = [
    { value: '개인', label: '개인' },
    { value: '법인', label: '법인' },
    { value: '외국인', label: '외국인' },
  ];

  const TAX_TYPE = [
    { value: '과세', label: '과세' },
    { value: '면세', label: '면세' },
  ];

  const ISSUANCE_TYPE = [
    { value: '영수', label: '영수' },
    { value: '청구', label: '청구' },
  ];

  const ISSUANCE_METHOD = [
    { value: '자동', label: '자동' },
    { value: '수동', label: '수동' },
  ];
  return (
    <>
      <Form.Row gap={24}>
        {/* 회원 유형 */}
        <Form.Field name='memberType' required>
          <Form.Dropdown name='memberType' options={MEMBER_TYPE} placeholder='회원유형' />
        </Form.Field>
        {/* 면세 유형 */}
        <Form.Field name='taxType' required>
          <Form.Dropdown name='taxType' options={TAX_TYPE} placeholder='과세유형' />
        </Form.Field>
      </Form.Row>

      <Form.Row gap={24}>
        {/* 등록번호 */}
        <Form.Field name='registrationNumber'>
          <Form.TextInput name='registrationNumber' placeholder='등록번호(개인 - 주민등록번호, 사업자 - 사업자등록번호)' />
        </Form.Field>

        {/* 총 사업자 번호 */}
        {/* <Form.Field>
          <Form.TextInput name='registrationNumber' />
        </Form.Field> */}

        {/* 상호 */}
        <Form.Field name='tradeName' required>
          <Form.TextInput name='tradeName' placeholder='상호(최대 50자리)' />
        </Form.Field>
      </Form.Row>

      <Form.Row gap={24}>
        {/* 대표자명 */}
        <Form.Field name='representativeName'>
          <Form.TextInput name='representativeName' placeholder='대표자명(최대 15자리)' />
        </Form.Field>

        {/* 품목명 */}
        <Form.Field name='itemName' required>
          <Form.TextInput name='itemName' placeholder='품목명' />
        </Form.Field>
      </Form.Row>

      <Form.Row gap={24}>
        {/* 발급유형 */}
        <Form.Field name='issuanceType'>
          <Form.Dropdown name='issuanceType' options={ISSUANCE_TYPE} placeholder='발급유형' />
        </Form.Field>

        {/* 발급방식 */}
        <Form.Field name='issuanceMethod' required>
          <Form.Dropdown name='issuanceMethod' options={ISSUANCE_METHOD} placeholder='발급방식' />
        </Form.Field>
      </Form.Row>
    </>
  );
};

export default TaxInvoiceForm;
