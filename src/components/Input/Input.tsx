import React from 'react'
import clsx from 'clsx'
import { InputProps } from './Input.types'

const sizeStyles: Record<NonNullable<InputProps['inputSize']>, string> = {
  sm: 'h-9 px-3 text-sm',
  md: 'h-10 px-3 text-base',
  lg: 'h-12 px-4 text-lg',
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    label,
    helperText,
    error = false,            
    inputSize = 'md',
    className,
    containerClassName,
    id,
    disabled,
    required,
    ...rest
  } = props

  const inputId = id || React.useId()
  const hasError = Boolean(error)
  const describedBy = helperText || (typeof error === 'string' && error)
    ? `${inputId}-help`
    : undefined

  return (
    <div className={clsx('w-full', containerClassName)}>
      {label && (
        <label htmlFor={inputId} className="mb-1 block text-sm font-medium text-gray-700">
          {label}
          {required && <span className="ml-0.5 text-red-600">*</span>}
        </label>
      )}

      <div
        className={clsx(
          'relative rounded-md',
          disabled ? 'opacity-60 cursor-not-allowed' : 'opacity-100'
        )}
      >
        <input
          id={inputId}
          ref={ref}
          aria-invalid={hasError || undefined}
          aria-describedby={describedBy}
          disabled={disabled}
          required={required}
          className={clsx(
            'block w-full rounded-md border transition placeholder:text-gray-400',
            'focus:outline-none focus:ring-2 focus:ring-offset-0',
            sizeStyles[inputSize],
            hasError
              ? 'border-red-500 focus:ring-red-500/30 focus:border-red-500'
              : 'border-gray-300 focus:ring-indigo-500/30 focus:border-indigo-600',
            className
          )}
          {...rest}
        />
      </div>

      {(helperText || hasError) && (
        <p
          id={describedBy}
          className={clsx(
            'mt-1 text-xs',
            hasError ? 'text-red-600' : 'text-gray-500'
          )}
        >
          {hasError && typeof error === 'string' ? error : helperText}
        </p>
      )}
    </div>
  )
})

Input.displayName = 'Input'

export default Input
