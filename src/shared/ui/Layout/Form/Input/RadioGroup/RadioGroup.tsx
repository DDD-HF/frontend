
import { memo } from 'react';
import { useForm } from "@/shared/ui/Layout/Form/Form.context.ts";
import { useFlashAnimation } from "@/shared/ui/Layout/Form/Form.hooks.ts";
import { StyledRadioWrapper, RadioItem } from './RadioGroup.styles';
import type { RadioGroupProps } from './RadioGroup.types';

const RadioGroup = memo(({ name, options, disabled }: RadioGroupProps) => {
    const { getFieldProps } = useForm();
    const fieldProps = getFieldProps(name);
    const { isFlashing, triggerFlash } = useFlashAnimation();

    const handleChange = (value: string) => {
        console.log(`📻 Radio change in ${name}:`, value);
        triggerFlash();
        fieldProps.onChange(value);
    };

    const handleFocus = () => {
        console.log(`👆 Focus on radio ${name}`);
        triggerFlash();
    };

    return (
        <StyledRadioWrapper $isFlashing={isFlashing}>
            {options.map(option => (
                <RadioItem key={option.value}>
                    <input
                        type="radio"
                        name={name}
                        value={option.value}
                        checked={fieldProps.value === option.value}
                        onChange={() => handleChange(option.value)}
                        onFocus={handleFocus}
                        disabled={disabled}
                    />
                    {option.label}
                </RadioItem>
            ))}
        </StyledRadioWrapper>
    );
});

RadioGroup.displayName = 'RadioGroup';

export default RadioGroup;