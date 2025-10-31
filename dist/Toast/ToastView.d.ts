import { default as React } from 'react';
import { ToastItem, ToastPosition } from './Toast.type';

export declare const positionClasses: Record<ToastPosition, string>;
export declare const ToastView: React.FC<{
    position: ToastPosition;
    children: React.ReactNode;
}>;
export declare const ToastItemView: React.FC<{
    item: ToastItem;
    onClose: () => void;
}>;
