import { default as React } from 'react';
import { RadioGroupProps } from './Radio.types';

interface Ctx {
    name: string;
    value: string | undefined;
    setValue: (v: string) => void;
}
export declare const RadioGroup: React.FC<RadioGroupProps>;
export declare function useRadioCtx(): Ctx;
export {};
