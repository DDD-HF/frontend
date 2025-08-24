import { memo } from 'react';
import type { ChangeEvent } from 'react';
import {useForm} from "@/shared/ui/Layout/Form/Form.context.ts";
import { useFlashAnimation } from '@/shared/ui/Layout/Form/Form.hooks';
import { StyledDropdown } from './Dropdown.styles';
import type { DropdownProps } from './Dropdown.types';

const Dropdown = memo(({ name, options, placeholder, disabled }: DropdownProps) => {
    const { getFieldProps } = useForm();
    const fieldProps = getFieldProps(name);
    const { isFlashing, triggerFlash } = useFlashAnimation();

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        console.log(`📋 Dropdown change in ${name}:`, e.target.value);
        triggerFlash();
        fieldProps.onChange(e.target.value);
    };

    const handleFocus = () => {
        console.log(`👆 Focus on dropdown ${name}`);
        triggerFlash();
    };

    return (
        <StyledDropdown
            $isFlashing={isFlashing}
            value={fieldProps.value as string}
            onChange={handleChange}
            onFocus={handleFocus}
            disabled={disabled}
        >
            {placeholder && <option value="">{placeholder}</option>}
            {options.map(option => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </StyledDropdown>
    );
});

Dropdown.displayName = 'Dropdown';

export default Dropdown;