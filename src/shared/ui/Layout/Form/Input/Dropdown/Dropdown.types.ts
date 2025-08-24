export interface DropdownProps {
    name: string;
    options: { value: string; label: string }[];
    placeholder?: string;
    disabled?: boolean;
}