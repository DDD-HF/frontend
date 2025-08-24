import {
    useState,
    useRef,
    useCallback,
    useEffect,
    useMemo
} from 'react';
import type { ReactNode } from 'react';
import {useForm} from "./Form.context";
import { FormContext } from './Form.context';
import type { FormProps, FormRowProps, FormFieldProps, FormValue } from './Form.types';
import { useFlashAnimation } from './Form.hooks';
import {
    FormWrapper,
    FormRowWrapper,
    FormFieldWrapper,
    Label,
    ErrorMessage,
    SubmitButton,
    SummitButtonWrapper
} from './Form.styles';

import TextInput from "@/shared/ui/Layout/Form/Input/TextInput/TextInput.tsx";
import Dropdown from "@/shared/ui/Layout/Form/Input/Dropdown/Dropdown.tsx";
import DatePicker from "@/shared/ui/Layout/Form/Input/DatePicker/DatePicker.tsx";
import RadioGroup from "@/shared/ui/Layout/Form/Input/RadioGroup/RadioGroup.tsx";

// ========================= Components =========================

const Form = ({ children, onSubmit, initialValues = {} }: FormProps) => {
    const [values, setValues] = useState<Record<string, FormValue>>(initialValues);
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [validationErrors, setValidationErrors] = useState<Record<string, boolean>>({});
    const [requiredFields, setRequiredFields] = useState<Set<string>>(new Set());

    const setValue = useCallback((name: string, value: FormValue) => {
        console.log(`📝 Setting ${name}:`, value);
        setValues(prev => ({ ...prev, [name]: value }));

        // 필수 필드의 값이 입력되면 에러 제거
        if (requiredFields.has(name) && value && String(value).trim() !== '') {
            setErrors(prev => {
                const newErrors = { ...prev };
                delete newErrors[name];
                return newErrors;
            });
        }
    }, [requiredFields]);

    const setError = useCallback((name: string, error: string) => {
        setErrors(prev => ({ ...prev, [name]: error }));
    }, []);

    const clearError = useCallback((name: string) => {
        setErrors(prev => {
            const newErrors = { ...prev };
            delete newErrors[name];
            return newErrors;
        });
    }, []);

    const setValidationError = useCallback((name: string, hasError: boolean) => {
        setValidationErrors(prev => ({ ...prev, [name]: hasError }));
    }, []);

    const addRequiredField = useCallback((name: string) => {
        setRequiredFields(prev => new Set(prev).add(name));
    }, []);

    // 필수 필드 검증을 useMemo로 최적화하고 상태 변경 없이 계산만
    const requiredFieldsValidation = useMemo(() => {
        const missingRequiredFields: string[] = [];

        requiredFields.forEach(fieldName => {
            const value = values[fieldName];
            const isEmpty = !value || String(value).trim() === '';

            if (isEmpty) {
                missingRequiredFields.push(fieldName);
            }
        });

        return {
            isValid: missingRequiredFields.length === 0,
            missingFields: missingRequiredFields
        };
    }, [requiredFields, values]);

    const isFormValid = useMemo(() => {
        const hasValidationErrors = Object.values(validationErrors).some(hasError => hasError);
        const { isValid: requiredFieldsValid } = requiredFieldsValidation;

        return !hasValidationErrors && requiredFieldsValid;
    }, [validationErrors, requiredFieldsValidation, requiredFields, values]);

    // 필수 필드 에러 검증을 별도 함수로 분리
    const validateAndSetRequiredFieldErrors = useCallback(() => {
        const { missingFields } = requiredFieldsValidation;
        const newErrors: Record<string, string> = {};

        missingFields.forEach(fieldName => {
            newErrors[fieldName] = '필수 입력 항목입니다.';
        });

        if (missingFields.length > 0) {
            setErrors(prev => ({ ...prev, ...newErrors }));
        }

        return missingFields.length === 0;
    }, [requiredFieldsValidation]);

    const getFieldProps = useCallback((name: string) => ({
        value: values[name] || '',
        onChange: (value: FormValue) => setValue(name, value),
        error: errors[name],
        hasValidationError: validationErrors[name],
    }), [values, errors, validationErrors, setValue]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        console.log(errors)

        const requiredFieldsValid = validateAndSetRequiredFieldErrors();

        if (!requiredFieldsValid || !isFormValid) {
            console.warn('⚠️ Form has validation errors, submission blocked');
            return;
        }

        console.log('✅ Form submitted successfully:', values);
        onSubmit?.(values);
    };

    return (
        <FormContext.Provider value={{
            values,
            errors,
            validationErrors,
            setValue,
            setError,
            clearError,
            setValidationError,
            getFieldProps,
            isFormValid: () => isFormValid,
            addRequiredField,
        }}>
            <FormWrapper onSubmit={handleSubmit}>
                {children}
            </FormWrapper>
        </FormContext.Provider>
    );
};

const FormRow = ({ children, gap = 16 }: FormRowProps) => (
    <FormRowWrapper $gap={gap}>
        {children}
    </FormRowWrapper>
);

const FormField = ({ name, label, required = false, children }: FormFieldProps) => {
    const { errors, addRequiredField } = useForm();
    const { isFlashing, triggerFlash } = useFlashAnimation();
    const prevErrorRef = useRef<string | undefined>(undefined);

    useEffect(() => {
        if (required && addRequiredField) {
            addRequiredField(name);
        }
    }, [required, name, addRequiredField]);

    useEffect(() => {
        const currentError = errors?.[name];
        if (currentError !== prevErrorRef.current) {
            if (currentError || prevErrorRef.current) {
                triggerFlash();
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
            <SubmitButton type="submit" $disabled={!formValid}>
                {children}
            </SubmitButton>
        </SummitButtonWrapper>
    );
};

// ========================= Compound Component =========================

Form.Row = FormRow;
Form.Field = FormField;
Form.TextInput = TextInput;
Form.Dropdown = Dropdown;
Form.DatePicker = DatePicker;
Form.RadioGroup = RadioGroup;
Form.Submit = FormSubmit;

export default Form;