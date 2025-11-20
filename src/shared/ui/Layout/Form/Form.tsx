import { useState, useRef, useCallback, useEffect } from 'react';
import type { ReactNode } from 'react';
import { useForm } from './Form.context';
import { FormContext } from './Form.context';
import type { FormProps, FormRowProps, FormFieldProps, FormValue } from './Form.types';
import { useFlashAnimation } from './Form.hooks';
import { FormWrapper, FormRowWrapper, FormFieldWrapper, Label, ErrorMessage, SubmitButton, SummitButtonWrapper } from './Form.styles';

import TextInput from '@/shared/ui/Layout/Form/Input/TextInput/TextInput';
import Dropdown from '@/shared/ui/Layout/Form/Input/Dropdown/Dropdown';
import DatePicker from '@/shared/ui/Layout/Form/Input/DatePicker/DatePicker';
import RadioGroup from '@/shared/ui/Layout/Form/Input/RadioGroup/RadioGroup';

// ========================= Components =========================

const Form = ({ children, onSubmit, initialValues = {} }: FormProps) => {
  const [values, setValues] = useState<Record<string, FormValue>>(initialValues);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [validationErrors, setValidationErrors] = useState<Record<string, boolean>>({});
  const [requiredFields, setRequiredFields] = useState<Set<string>>(new Set());

  const addRequiredField = useCallback((name: string) => {
    setRequiredFields(prev => {
      if (prev.has(name)) return prev;
      const next = new Set(prev);
      next.add(name);
      return next;
    });
  }, []);

  const removeRequiredField = useCallback((name: string) => {
    setRequiredFields(prev => {
      if (!prev.has(name)) return prev;
      const next = new Set(prev);
      next.delete(name);
      return next;
    });
    // 해당 필드의 에러/검증 에러도 정리
    setErrors(prev => {
      const next = { ...prev };
      delete next[name];
      return next;
    });
    setValidationErrors(prev => {
      const next = { ...prev };
      delete next[name];
      return next;
    });
  }, []);

  const setValue = useCallback(
    (name: string, value: FormValue) => {
      setValues(prev => ({ ...prev, [name]: value }));

      if (requiredFields.has(name) && value && String(value).trim() !== '') {
        setErrors(prev => {
          const newErrors = { ...prev };
          delete newErrors[name];
          return newErrors;
        });
      }
    },
    [requiredFields]
  );

  const setValuesAll = useCallback((newValues: Record<string, FormValue>) => {
    setValues(newValues);
  }, []);

  const setError = useCallback((name: string, error: string) => {
    setErrors(prev => ({ ...prev, [name]: error }));
  }, []);

  const clearError = useCallback((name: string) => {
    setErrors(prev => {
      const next = { ...prev };
      delete next[name];
      return next;
    });
  }, []);

  const setValidationError = useCallback((name: string, hasError: boolean) => {
    setValidationErrors(prev => ({ ...prev, [name]: hasError }));
  }, []);

  const getFieldProps = useCallback(
    (name: string) => ({
      value: values[name] ?? '',
      onChange: (value: FormValue) => setValue(name, value),
      error: errors[name],
      hasValidationError: validationErrors[name],
    }),
    [values, errors, validationErrors, setValue]
  );

  const isFormValid = useCallback(() => {
    // 현재 등록된(required) 필드만 검사
    for (const name of requiredFields) {
      const v = values[name];
      if (v === undefined || v === null || (typeof v === 'string' && v.trim() === '')) {
        return false;
      }
    }
    if (Object.keys(errors).length > 0) return false;
    if (Object.values(validationErrors).some(Boolean)) return false;
    return true;
  }, [requiredFields, values, errors, validationErrors]);

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (!isFormValid()) {
        // 필요시 스크롤/강조 등
        return;
      }
      onSubmit?.(values as Record<string, any>);
    },
    [isFormValid, onSubmit, values]
  );

  return (
    <FormContext.Provider
      value={{
        values,
        errors,
        validationErrors,
        setValue,
        setValues: setValuesAll,
        setError,
        clearError,
        setValidationError,
        getFieldProps,
        isFormValid,
        addRequiredField,
        removeRequiredField,
      }}
    >
      <FormWrapper onSubmit={handleSubmit}>{children}</FormWrapper>
    </FormContext.Provider>
  );
};

const FormRow = ({ children, gap = 16 }: FormRowProps) => <FormRowWrapper $gap={gap}>{children}</FormRowWrapper>;

const FormField = ({ name, label, required = false, children }: FormFieldProps) => {
  const { errors, addRequiredField, removeRequiredField } = useForm();
  const { isFlashing, triggerFlash } = useFlashAnimation();
  const prevErrorRef = useRef<string | undefined>(undefined);

  useEffect(() => {
    if (required)
      if (addRequiredField) {
        addRequiredField(name);
      }
    return () => {
      if (required) removeRequiredField(name);
    };
  }, [name, required, addRequiredField, removeRequiredField]);

  useEffect(() => {
    const currentError = errors?.[name];
    if (currentError !== prevErrorRef.current) {
      if (currentError || prevErrorRef.current) {
        // triggerFlash();
      }
      prevErrorRef.current = currentError;
    }
  }, [errors?.[name], triggerFlash]);

  return (
    <FormFieldWrapper $isFlashing={isFlashing}>
      {label && <Label $required={required}>{label}</Label>}
      {children}
      {errors?.[name] && <ErrorMessage>{errors[name]}</ErrorMessage>}
    </FormFieldWrapper>
  );
};

const FormSubmit = ({ children }: { children: ReactNode }) => {
  const { isFormValid } = useForm();
  const formValid = isFormValid();

  return (
    <SummitButtonWrapper>
      <SubmitButton type='submit' $disabled={!formValid}>
        {children}
      </SubmitButton>
    </SummitButtonWrapper>
  );
};

const FormSubButton = ({ children, onClick, variant = 'secondary', disabled = false }: any) => {
  return (
    <SummitButtonWrapper>
      <SubmitButton type='button' onClick={onClick} $disabled={disabled} $variant={variant}>
        {children}
      </SubmitButton>
    </SummitButtonWrapper>
  );
};

const FormActions = ({ children }: { children: ReactNode }) => {
  return <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end', marginTop: '24px' }}>{children}</div>;
};

// ========================= Compound Component =========================

Form.Row = FormRow;
Form.Field = FormField;
Form.TextInput = TextInput;
Form.Dropdown = Dropdown;
Form.DatePicker = DatePicker;
Form.RadioGroup = RadioGroup;
Form.Submit = FormSubmit;
Form.SubButton = FormSubButton;
Form.Actions = FormActions;

export default Form;
