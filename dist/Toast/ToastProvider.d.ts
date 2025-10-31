import { default as React } from 'react';
import { ToastOptions, ToastProviderProps } from './Toast.type';

export declare const useToast: () => {
    readonly success: (message: React.ReactNode, duration?: number) => string;
    readonly error: (message: React.ReactNode, duration?: number, className?: "") => string;
    readonly info: (message: React.ReactNode, duration?: number, className?: string) => string;
    readonly warning: (message: React.ReactNode, duration?: number, className?: string) => string;
    readonly show: (options: ToastOptions) => string;
    readonly remove: (id: string) => void;
};
export declare const ToastProvider: React.FC<ToastProviderProps>;
export default ToastProvider;
