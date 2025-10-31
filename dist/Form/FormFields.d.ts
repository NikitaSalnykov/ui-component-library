import { default as React } from 'react';
import { FieldValues as FV, UseFormReturn as FR } from './Form.types';

export declare function InputField<TValues extends FV>(props: {
    form: FR<TValues>;
    name: keyof TValues & string;
    label?: string;
    type?: React.InputHTMLAttributes<HTMLInputElement>['type'];
    placeholder?: string;
    className?: string;
}): import("react/jsx-runtime").JSX.Element;
export declare function CheckboxField<TValues extends FV>(props: {
    form: FR<TValues>;
    name: keyof TValues & string;
    label?: string;
    className?: string;
}): import("react/jsx-runtime").JSX.Element;
export declare function SelectField<TValues extends FV>(props: {
    form: FR<TValues>;
    name: keyof TValues & string;
    label?: string;
    className?: string;
    options: Array<{
        label: string;
        value: string;
    }>;
    placeholder?: string;
    multiple?: boolean;
}): import("react/jsx-runtime").JSX.Element;
export declare function RadioGroupField<TValues extends FV>(props: {
    form: FR<TValues>;
    name: keyof TValues & string;
    label?: string;
    options: Array<{
        label: string;
        value: string;
    }>;
    className?: string;
}): import("react/jsx-runtime").JSX.Element;
