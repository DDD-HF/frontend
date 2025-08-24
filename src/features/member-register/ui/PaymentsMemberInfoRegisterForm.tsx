import { Form } from '@/shared/ui';
import PaymentFormContent from './paymentsForm/PaymentFormContent';

const PaymentsMemberInfoRegisterForm = () => {
    const handleSubmit = (values: Record<string, unknown>) => {
        console.log('결제수단 정보:', values);
    };

    const paymentTypeOptions = [
        { value: 'CMS', label: 'CMS' },
        { value: '카드', label: '카드' }
    ];

    return (
        <Form
            onSubmit={handleSubmit}
            initialValues={{
                paymentType: 'CMS',
                bank: '',
                accountNumber: '',
                cardNumber: '',
                accountHolderName: '',
                birthDateOrBusinessNumber: '',
                consentInfo: ''
            }}
        >
            <PaymentFormContent paymentTypeOptions={paymentTypeOptions} />
        </Form>
    );
};

export default PaymentsMemberInfoRegisterForm;