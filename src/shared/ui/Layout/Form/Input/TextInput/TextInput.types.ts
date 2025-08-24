export interface TextInputProps {
    name: string;
    placeholder?: string;
    disabled?: boolean;
    type?: 'text' | 'email' | 'password' | 'number';
    validation?: RegExp;
    validationMessage?: string;
}