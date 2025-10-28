import React from 'react'
import clsx from 'clsx'
import { ButtonProps, ButtonVariant, ButtonSize } from './Button.types'

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-indigo-600 text-white hover:bg-indigo-700 active:bg-indigo-900 ',
  secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300 active:bg-gray-400 active:text-white',
  outline: 'border border-gray-300 text-gray-900 bg-transparent active:bg-gray-200',
  ghost: 'bg-transparent text-gray-900 hover:bg-gray-100  active:bg-gray-200',
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className, loading = false, disabled, children, ...rest }, ref) => {

    return (
      <button
        ref={ref}
        type="button"
        className={clsx(
          'rounded-md inline-flex items-center justify-center transition-all focus:outline-none focus:ring-2 focus:ring-offset-2',
          variantClasses[variant],
          sizeClasses[size],
          disabled && 'opacity-50 cursor-not-allowed',
          loading && 'opacity-90 cursor-not-allowed animate-pulse',
          className
        )}
        {...rest}
      >
        <span>{children}</span>
      </button>
    )
  }
)

Button.displayName = 'Button'
export default Button
