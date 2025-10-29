import React from 'react';
import type { ModalProps } from './Modal.type';
import { createPortal } from 'react-dom';
import clsx from 'clsx';

const FOCUS_SELECTOR = [
  'a[href]',
  'button:not([disabled])',
  'textarea:not([disabled])',
  'input:not([disabled])',
  'select:not([disabled])',
  '[tabindex]:not([tabindex="-1"])'
  ].join(',');

  const styles = {
    base: {
      backdrop: "bg-black/40",
      panel: "bg-white text-gray-900",
    },
    glass: {
      backdrop: "bg-black/30 backdrop-blur-md",
      panel:
        "bg-white/30 backdrop-blur-xl border border-white/40 text-gray-900 shadow-2xl",
    },
    dark: {
      backdrop: "bg-gray-900/70",
      panel: "bg-gray-900 text-white border border-gray-700 shadow-2xl",
    },
    gray: {
      backdrop: "bg-gray-900/50",
      panel: "bg-gray-50 text-gray-900 border border-gray-200 shadow-lg",
    },
    red: {
      backdrop: "bg-red-900/60",
      panel: "bg-red-50 text-red-900 border border-red-200 shadow-lg",
    },
    orange: {
      backdrop: "bg-orange-900/60",
      panel: "bg-orange-50 text-orange-900 border border-orange-200 shadow-lg",
    },
    amber: {
      backdrop: "bg-amber-900/60",
      panel: "bg-amber-50 text-amber-900 border border-amber-200 shadow-lg",
    },
    yellow: {
      backdrop: "bg-yellow-900/60",
      panel: "bg-yellow-50 text-yellow-900 border border-yellow-200 shadow-lg",
    },
    green: {
      backdrop: "bg-green-900/60",
      panel: "bg-green-50 text-green-900 border border-green-200 shadow-lg",
    },
    blue: {
      backdrop: "bg-blue-900/60",
      panel: "bg-blue-50 text-blue-900 border border-blue-200 shadow-lg",
    },
    violet: {
      backdrop: "bg-violet-900/60",
      panel: "bg-violet-50 text-violet-900 border border-violet-200 shadow-lg",
    },
  } as const;

export const Modal: React.FC<ModalProps> = ({
  open,
  onClose,
  title,
  closeOnBackdrop = true,
  children,
  blur = true,
  style = 'base',
}) => {
  const backdropRef = React.useRef<HTMLDivElement | null>(null); //// фон
  const panelRef = React.useRef<HTMLDivElement | null>(null); //// модалка
  const lastActiveRef = React.useRef<HTMLElement | null>(null); ////// дефолт эл. на фокусе

  React.useEffect(() => {
    if (open) {
      lastActiveRef.current = document.activeElement as HTMLElement | null;
      const t = setTimeout(() => {
        const panel = panelRef.current;
        if (!panel) return;
        const focusables =
          panel.querySelectorAll<HTMLElement>(FOCUS_SELECTOR);
        if (focusables.length > 0) {
          focusables[0].focus();
        } else {
          panel.tabIndex = -1; 
          panel.focus();
        }
      }, 0);
      return () => clearTimeout(t);
    }
    return;
  }, [open]);


const restoreFocus = React.useCallback(() => {
    const prev = lastActiveRef.current; 
    if (prev && typeof prev.focus === 'function') prev.focus();
    lastActiveRef.current = null; 
  }, []);

  React.useEffect(() => {
    if (!open) return; 

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
      onClose();         
        return;
      }

      if (e.key === 'Tab') {
        const panel = panelRef.current;
        if (!panel) return;

        const focusables = Array
          .from(panel.querySelectorAll<HTMLElement>(FOCUS_SELECTOR))
          .filter(el => !el.hasAttribute('disabled'));

        if (focusables.length === 0) {
          e.preventDefault();
          return;
        }

        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        const active = document.activeElement as HTMLElement | null;

        // переброс на первый
        if (!e.shiftKey && active === last) {
          e.preventDefault();
          first.focus();
        }
        // переброс = на последний
        else if (e.shiftKey && active === first) {
          e.preventDefault();
          last.focus();
        }
      }
    };

    document.addEventListener('keydown', onKeyDown, true);
    return () => document.removeEventListener('keydown', onKeyDown, true);
  }, [open, onClose]);

  const onBackdropClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (!closeOnBackdrop) return;            // дефолт тру
    if (e.target === e.currentTarget) onClose();
  };

  React.useEffect(() => {
    if (!open) restoreFocus();
  }, [open, restoreFocus]);

  if (!open) return null;

  const { backdrop, panel } = styles[style];



  return createPortal(
    <div
      ref={backdropRef}
      onClick={onBackdropClick}
      className={clsx(
        "fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-200",
        blur && "backdrop-blur-[5px]",
        backdrop
      )}
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        className={clsx(
          "w-full max-w-lg rounded-2xl outline-none focus:outline-none transition-transform duration-200",
          panel
        )}
      >
        {title && (
          <div className="px-5 py-4 border-b border-gray-200/50">
            <h2 className="text-lg font-semibold">{title}</h2>
          </div>
        )}

        <div className="px-5 py-4">{children}</div>
      </div>
    </div>,
    document.body
  );
};