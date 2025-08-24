import { Form } from '@/shared/ui';

const CMSForm = () => {

    const BANK_OPTIONS = [
        { value: '국민은행', label: '국민은행' },
        { value: '신한은행', label: '신한은행' },
        { value: '우리은행', label: '우리은행' },
        { value: 'KB국민은행', label: 'KB국민은행' },
        { value: '하나은행', label: '하나은행' },
        { value: 'NH농협은행', label: 'NH농협은행' },
        { value: '기업은행', label: '기업은행' }
    ]
    return (
        <>
            <Form.Row gap={24}>
                <Form.Field name="bank" label="은행" required>
                    <Form.Dropdown
                        name="bank"
                        options={BANK_OPTIONS}
                        placeholder="은행을 선택하세요"
                    />
                </Form.Field>
                <Form.Field name="accountNumber" label="계좌번호" required>
                    <Form.TextInput
                        name="accountNumber"
                        placeholder="계좌번호를 입력하세요"
                        validation={/^[0-9-]{10,20}$/}
                        validationMessage="올바른 계좌번호 형식으로 입력해주세요"
                    />
                </Form.Field>
            </Form.Row>

            <Form.Row gap={24}>
                <Form.Field name="accountHolderName" label="예금주명" required>
                    <Form.TextInput
                        name="accountHolderName"
                        placeholder="예금주명을 입력하세요"
                        validation={/^[가-힣a-zA-Z\s]{2,20}$/}
                        validationMessage="한글 또는 영문 2~20자로 입력해주세요"
                    />
                </Form.Field>
                <Form.Field name="birthDateOrBusinessNumber" label="생년월일/사업자등록번호" required>
                    <Form.TextInput
                        name="birthDateOrBusinessNumber"
                        placeholder="생년월일(YYYYMMDD) 또는 사업자등록번호"
                        validation={/^(\d{8}|\d{3}-\d{2}-\d{5})$/}
                        validationMessage="생년월일(8자리) 또는 사업자등록번호 형식으로 입력해주세요"
                    />
                </Form.Field>
            </Form.Row>

            <Form.Row>
                <Form.Field name="consentInfo" label="동의정보" required>
                    <Form.TextInput
                        name="consentInfo"
                        placeholder="동의정보를 입력하세요"
                    />
                </Form.Field>
            </Form.Row>
        </>
    );
};

export default CMSForm;