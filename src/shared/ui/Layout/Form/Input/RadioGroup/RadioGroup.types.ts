export interface RadioGroupProps {
    name: string;
    options: { value: string; label: string }[];
    disabled?: boolean;
}