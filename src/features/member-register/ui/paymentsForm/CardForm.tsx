import { Form } from '@/shared/ui';

const CardForm = () => {

    const CARD_COMPANY_OPTIONS = [
        { value: '삼성카드', label: '삼성카드' },
        { value: '신한카드', label: '신한카드' },
        { value: '현대카드', label: '현대카드' },
        { value: 'KB국민카드', label: 'KB국민카드' },
        { value: '하나카드', label: '하나카드' },
        { value: 'NH농협카드', label: 'NH농협카드' },
        { value: '우리카드', label: '우리카드' },
        { value: '롯데카드', label: '롯데카드' }
    ]

    return (
        <Form.Row gap={24}>
            <Form.Field name="bank" label="카드사" required>
                <Form.Dropdown
                    name="bank"
                    options={CARD_COMPANY_OPTIONS}
                    placeholder="카드사를 선택하세요"
                />
            </Form.Field>
            <Form.Field name="cardNumber" label="카드번호" required>
                <Form.TextInput
                    name="cardNumber"
                    placeholder="카드번호를 입력하세요 (0000-0000-0000-0000)"
                    validation={/^(\d{4}-\d{4}-\d{4}-\d{4}|\d{16})$/}
                    validationMessage="올바른 카드번호 형식으로 입력해주세요"
                />
            </Form.Field>
        </Form.Row>
    );
};

export default CardForm;