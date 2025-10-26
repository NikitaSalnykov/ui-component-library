import React, { useEffect, useRef } from "react";
import clsx from "clsx";
import { CheckboxProps } from "./Checkbox.types";

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (props, ref) => {
    const {
      label,
      className,
      containerClassName,
      indeterminate = false,
      checked,
      onChange,
      disabled,
      ...rest
    } = props;
    const internalRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
      console.log("indeterminate", indeterminate);
      if (internalRef.current) {
        internalRef.current.indeterminate = !!indeterminate;
      }
    }, [indeterminate]);

    return (
      <label
        className={clsx(
          "inline-flex items-center gap-2 select-none",
          disabled && "opacity-60 cursor-not-allowed",
          containerClassName
        )}
      >
        <span className="relative inline-flex items-center justify-center h-5 w-5">
          <input
            ref={(node) => {
              if (!node) return;
              internalRef.current = node;
              if (typeof ref === "function") ref(node);
              else if (ref)
                (
                  ref as React.MutableRefObject<HTMLInputElement | null>
                ).current = node;
            }}
            type="checkbox"
            className={clsx(
              "appearance-none h-5 w-5 rounded border",
              "focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-600",
              "checked:bg-indigo-600 checked:border-indigo-600",
              indeterminate && "bg-indigo-600",
              className
            )}
            disabled={disabled}
            checked={checked}
            onChange={(e) => onChange?.(e.target.checked, e)}
            {...rest}
          />
          {checked && !indeterminate && (
            <svg
              className="pointer-events-none absolute h-3.5 w-3.5 text-white"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M6 10l2.5 2.5L14 7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
          {indeterminate && (
            <span className="pointer-events-none absolute h-0.5 w-2 bg-white rounded-sm"></span>
          )}
        </span>
        {label && <span className="text-sm text-gray-800">{label}</span>}
      </label>
    );
  }
);

export default Checkbox;
