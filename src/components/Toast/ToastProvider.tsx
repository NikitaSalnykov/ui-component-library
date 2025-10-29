import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import { ToastItem, ToastOptions, ToastProviderProps } from './Toast.type';
import { ToastItemView, ToastView } from './ToastView';
import { createPortal } from 'react-dom';

const ToastCtx = createContext<{
  show: (options: ToastOptions) => string;
  remove: (id: string) => void;
} | null>(null);

export const useToast = () => {
  const ctx = useContext(ToastCtx);
  if (!ctx) throw new Error('use <ToastProvider/>');
  const success = useCallback(
    (message: React.ReactNode, duration?: number) =>
      ctx.show({
        type: 'success', message, duration,
        className: ''
      }),
    [ctx]
  );
  const error = useCallback(
    (message: React.ReactNode, duration?: number, className?: '') =>
      ctx.show({ type: 'error', message, duration, className }),
    [ctx]
  );
  const info = useCallback(
    (message: React.ReactNode, duration?: number, className?: string) =>
      ctx.show({ type: 'info', message, duration, className }),
    [ctx]
  );
  const warning = useCallback(
    (message: React.ReactNode, duration?: number, className?: string) =>
      ctx.show({ type: 'warning', message, duration, className }),
    [ctx]
  );
  return { ...ctx, success, error, info, warning } as const;
};

export const ToastProvider: React.FC<ToastProviderProps> = ({
  children,
  position = 'top-right',
  max = 3,
  duration = 3000,
}) => {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const remove = useCallback((id: string) => {
    setToasts(prev => {
      const t = prev.find(x => x.id === id);
      if (t?.timer) window.clearTimeout(t.timer);
      return prev.filter(x => x.id !== id);
    });
  }, []);

  const show = useCallback(
    (opts: ToastOptions) => {
      const id = opts.id ?? opts.id ?? Math.random().toString(36).slice(2);

      const base: ToastItem = {
        id,
        type: opts.type ?? 'info',
        message: opts.message,
        duration: opts.duration ?? duration,
        createdAt: Date.now(),
        className: opts.className ?? ''
      };

      setToasts(prev => {
        const next = [...prev, base].sort((a, b) => a.createdAt - b.createdAt);
        while (next.length > max) {
          const removed = next.shift(); //////////////////////////////////////////////////////
          if (removed?.timer) window.clearTimeout(removed.timer);
        }
        return next;
      });

      const timer = window.setTimeout(() => {
        setToasts(prev => prev.filter(t => t.id !== id));
      }, base.duration);

      setToasts(prev => prev.map(t => (t.id === id ? { ...t, timer } : t)));

      return id;
    },
    [duration, max]
  );

  React.useEffect(
    () => () => {
      setToasts(prev => {
        prev.forEach(t => t.timer && window.clearTimeout(t.timer));
        return [];
      });
    },
    []
  );

  const ctxValue = useMemo(() => ({ show, remove }), [show, remove]);

  return (
    <ToastCtx.Provider value={ctxValue}>
      {children}
      {
        createPortal(
          <ToastView position={position}>
            {toasts.map(t => (
              <ToastItemView key={t.id} item={t} onClose={() => remove(t.id)} />
            ))}
          </ToastView>,
          document.body
        )}
    </ToastCtx.Provider>
  );
};

export default ToastProvider;
