import { useEffect, useState } from 'react';
import { useForm } from '@/shared/ui/Layout/Form/Form.context';

export const usePaymentForm = () => {
    const [paymentType, setPaymentType] = useState<string>('CMS');
    const { values } = useForm();

    useEffect(() => {
        if (values.paymentType && values.paymentType !== paymentType) {
            setPaymentType(values.paymentType as string);
        }
    }, [values.paymentType, paymentType]);

    return {
        paymentType,
        setPaymentType
    };
};