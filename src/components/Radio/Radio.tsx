import React from 'react'
import clsx from 'clsx'
import type { RadioProps } from './Radio.types'
import { useRadioCtx } from './RadioGroup'

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>((props, ref) => {
  const { value, label, disabled, className, ...rest } = props
  const ctx = useRadioCtx()
  const checked = ctx.value === value

  return (
    <label className={clsx('inline-flex items-center gap-2 select-none', disabled && 'opacity-60 cursor-not-allowed')}>
      <span className="relative inline-flex items-center justify-center h-5 w-5">
        <input
          ref={ref}
          type="radio"
          name={ctx.name}
          value={value}
          checked={checked}
          onChange={() => ctx.setValue(value)}
          disabled={disabled}
          className={clsx(
            'appearance-none h-5 w-5 rounded-full border border-gray-300 bg-white',
            'focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-600',
            'checked:border-indigo-600',
            className
          )}
          {...rest}
        />
        {checked && (
          <span className="pointer-events-none absolute h-2.5 w-2.5 rounded-full bg-indigo-600"></span>
        )}
      </span>
      {label && <span className="text-sm text-gray-800">{label}</span>}
    </label>
  )
})

export default Radio
