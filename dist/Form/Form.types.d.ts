export type FieldValues = Record<string, unknown>;
export type FieldRule = {
    required?: boolean | string;
    minLen?: number;
    email?: boolean | string;
};
export type RulesMap<TValues extends FieldValues> = Partial<Record<keyof TValues & string, FieldRule>>;
export type Errors<TValues extends FieldValues> = Partial<Record<keyof TValues & string, string>>;
export interface UseFormReturn<TValues extends FieldValues> {
    values: TValues;
    errors: Errors<TValues>;
    setValue: (name: keyof TValues & string, v: unknown) => void;
    getValue: <K extends keyof TValues & string>(name: K) => TValues[K];
    handleChange: (name: keyof TValues & string) => (next: unknown) => void;
    handleSubmit: (fn: (vals: TValues) => void) => (e?: React.FormEvent) => void;
    reset: (next?: Partial<TValues>) => void;
}
