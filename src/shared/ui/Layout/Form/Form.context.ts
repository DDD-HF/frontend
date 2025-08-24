import { createContext, useContext } from 'react';
import type { FormContextType } from './Form.types';

export const FormContext = createContext<FormContextType | undefined>(undefined);

export const useForm = () => {
    const context = useContext(FormContext);
    if (!context) {
        throw new Error('Form 안에서 사용하세요');
    }
    return context;
};