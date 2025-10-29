import React from 'react';
import type { ToastItem, ToastPosition, ToastType } from './Toast.type';
import { Button } from '../Button';
import clsx from 'clsx';

export const positionClasses: Record<ToastPosition, string> = {
  'top-right': 'top-4 right-4',
  'top-left': 'top-4 left-4',
  'bottom-right': 'bottom-4 right-4',
  'bottom-left': 'bottom-4 left-4',
};

export const ToastView: React.FC<{
  position: ToastPosition;
  children: React.ReactNode;
}> = ({ position, children }) => {
  return (
    <div
      className={
        `fixed z-50 flex flex-col gap-2 ${positionClasses[position]} ` +
        `items-${position.endsWith('left') ? 'start' : 'end'}`
      }
      aria-live="polite"
      role="status"
    >
      {children}
    </div>
  );
};

const tone: Record<ToastType, string> = {
  success: 'bg-green-200 text-green-900 border-green-200',
  error: 'bg-red-200 text-rose-900 border-rose-200',
  info: 'bg-blue-200 text-blue-900 border-blue-200',
  warning: 'bg-yellow-200 text-yellow-900 border-yellow-200',
};

export const ToastItemView: React.FC<{
  item: ToastItem;
  onClose: () => void;
}> = ({ item, onClose }) => {
  return (
    <div
      className={clsx(`min-w-[240px] max-w-[360px] border shadow-sm rounded-xl p-3 flex items-center gap-3`, tone[item.type], item.className && item.className)}
      role={item.type === 'error' ? 'alert' : 'status'}
    >
      <div className="flex-1 text-sm">{item.message}</div>
      <Button
        onClick={onClose}
        variant="ghost"
        aria-label="Close notification"
        size='sm'
      >
        ×
      </Button>
    </div>
  );
};
