import { memo } from 'react';
import type { ChangeEvent } from 'react';
import { useForm } from "@/shared/ui/Layout/Form/Form.context.ts";
import { useFlashAnimation } from '@/shared/ui/Layout/Form/Form.hooks';
import { StyledTextInput } from './TextInput.styles';
import type { TextInputProps } from './TextInput.types';

const TextInput = memo(({name, validation, validationMessage, ...props}: TextInputProps) => {
    const { getFieldProps, setError, clearError, setValidationError } = useForm();
    const fieldProps = getFieldProps(name);
    const { isFlashing, triggerFlash } = useFlashAnimation();

    const validateValue = (value: string) => {
        if (!validation) return true;
        return validation.test(value);
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        console.log(`⌨️ Input change in ${name}:`, value);

        triggerFlash();
        fieldProps.onChange(value);

        if (validation && value) {
            const isValid = validateValue(value);
            setValidationError(name, !isValid);

            if (!isValid && validationMessage) {
                setError(name, validationMessage);
            } else if (isValid) {
                clearError(name);
            }
        } else if (!validation) {
            setValidationError(name, false);
            clearError(name);
        }
    };

    const handleFocus = () => {
        console.log(`👆 Focus on ${name}`);
        triggerFlash();
    };

    return (
        <StyledTextInput
            {...props}
            $isFlashing={isFlashing}
            $hasValidationError={fieldProps.hasValidationError || false}
            value={fieldProps.value as string}
            onChange={handleChange}
            onFocus={handleFocus}
        />
    );
});

TextInput.displayName = 'TextInput';

export default TextInput;