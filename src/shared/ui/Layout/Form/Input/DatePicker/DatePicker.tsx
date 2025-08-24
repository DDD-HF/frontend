import { memo } from 'react';
import type { ChangeEvent } from 'react';
import { useForm } from "@/shared/ui/Layout/Form/Form.context.ts";
import { useFlashAnimation } from "@/shared/ui/Layout/Form/Form.hooks.ts";
import { StyledDatePicker } from './DatePicker.styles';
import type { DatePickerProps } from './DatePicker.types';

const DatePicker = memo(({ name, disabled, min, max }: DatePickerProps) => {
    const { getFieldProps } = useForm();
    const fieldProps = getFieldProps(name);
    const { isFlashing, triggerFlash } = useFlashAnimation();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(`📅 Date change in ${name}:`, e.target.value);
        triggerFlash();
        fieldProps.onChange(e.target.value);
    };

    const handleFocus = () => {
        console.log(`👆 Focus on date ${name}`);
        triggerFlash();
    };

    return (
        <StyledDatePicker
            type="date"
            $isFlashing={isFlashing}
            value={fieldProps.value as string}
            onChange={handleChange}
            onFocus={handleFocus}
            disabled={disabled}
            min={min}
            max={max}
        />
    );
});

DatePicker.displayName = 'DatePicker';

export default DatePicker;