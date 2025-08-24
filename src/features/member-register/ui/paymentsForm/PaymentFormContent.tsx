import { Form } from '@/shared/ui';
import {usePaymentForm} from "@/features/member-register/lib/hooks/usePaymentForm.ts";
import CMSForm from './CmsForm';
import CardForm from './CardForm';

interface PaymentFormContentProps {
    paymentTypeOptions: { value: string; label: string }[];
}

const PaymentFormContent = ({ paymentTypeOptions }: PaymentFormContentProps) => {

    const { paymentType } = usePaymentForm();

    return (
        <>
            <Form.Row>
                <Form.Field name="paymentType" label="결제수단 타입" required>
                    <Form.Dropdown
                        name="paymentType"
                        options={paymentTypeOptions}
                        placeholder="결제수단을 선택하세요"
                    />
                </Form.Field>
            </Form.Row>

            {paymentType === 'CMS' && <CMSForm />}
            {paymentType === '카드' && <CardForm />}

            <Form.Submit>결제수단 등록</Form.Submit>
        </>
    );
};

export default PaymentFormContent;