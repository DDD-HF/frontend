import type { ReactNode } from 'react';

export type FormValue = string | number | boolean | null | undefined;

export interface FormContextType {
    values: Record<string, FormValue>;
    errors: Record<string, string>;
    validationErrors: Record<string, boolean>; // 정규식 검증 에러
    setValue: (name: string, value: FormValue) => void;
    setError: (name: string, error: string) => void;
    clearError: (name: string) => void;
    setValidationError: (name: string, hasError: boolean) => void;
    getFieldProps: (name: string) => {
        value: FormValue;
        onChange: (value: FormValue) => void;
        error?: string;
        hasValidationError?: boolean;
    };
    isFormValid: () => boolean;
    addRequiredField?: (name: string) => void;

}

export interface FormProps {
    children: ReactNode;
    onSubmit?: (values: Record<string, FormValue>) => void;
    initialValues?: Record<string, FormValue>;
}

export interface FormRowProps {
    children: ReactNode;
    gap?: number;
}

export interface FormFieldProps {
    name: string;
    label?: string;
    required?: boolean;
    children: ReactNode;
}