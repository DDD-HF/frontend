import { useForm } from '@/shared/ui/Layout/Form/Form.context';
import { useMemberRegisterStore } from '@/widgets/MemberInfoRegisterForms/model/useMemberRegisterStore';
import { useState, useEffect, useRef } from 'react';

export const useAdditionalForm = () => {
  const { values, setValues } = useForm();
  const { additionalInfo, changeAdditionalType } = useMemberRegisterStore();
  const [additionalType, setAdditionalType] = useState<string>(additionalInfo.additionalType || 'CASHRECEIPT');
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (values.additionalType && values.additionalType !== additionalType) {
      setAdditionalType(values.additionalType as string);
    }
  }, [values.additionalType]);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }

    changeAdditionalType(additionalType);
    setValues({ additionalType: additionalType });
  }, [additionalType, changeAdditionalType, setValues]);

  return {
    additionalType,
    setAdditionalType,
  };
};
