import { useEffect, useState, useRef } from 'react';
import { useForm } from '@/shared/ui/Layout/Form/Form.context';
import { useMemberRegisterStore } from '@/widgets/MemberInfoRegisterForms/model/useMemberRegisterStore';

export const usePaymentForm = () => {
  const { values, setValues } = useForm();
  const { paymentInfo, changePaymentType } = useMemberRegisterStore();
  const [paymentType, setPaymentType] = useState<string>(paymentInfo.paymentType || 'CMS');
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (values.paymentType && values.paymentType !== paymentType) {
      setPaymentType(values.paymentType as string);
    }
  }, [values.paymentType]);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }

    changePaymentType(paymentType);
    setValues({ paymentType: paymentType });
  }, [paymentType, changePaymentType, setValues]);

  return {
    paymentType,
    setPaymentType,
  };
};
