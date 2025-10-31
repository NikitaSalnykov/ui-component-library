import { FieldValues, RulesMap, UseFormReturn } from './Form.types';
import * as React from 'react';
export declare function useForm<TValues extends FieldValues>(initialValues: TValues, rules?: RulesMap<TValues>): UseFormReturn<TValues>;
export declare function Form<TValues extends FieldValues>(props: {
    form: UseFormReturn<TValues>;
    onSubmit?: (vals: TValues) => void;
    className?: string;
    children: React.ReactNode;
}): import("react/jsx-runtime").JSX.Element;
