import React from 'react';
import clsx from 'clsx';
import { BadgeProps } from './Badge.types';

const base = 'inline-flex items-center font-medium select-none';
const sizes = {
  sm: 'text-xs px-2 py-0.5 gap-1',
  md: 'text-sm px-2.5 py-1 gap-1.5',
};
const rounds = {
  md: 'rounded-md',
  full: 'rounded-full',
};
const palettes = {
  neutral:  { solid: 'bg-gray-200 text-gray-900',     soft: 'bg-gray-100 text-gray-800' },
  primary:  { solid: 'bg-indigo-600 text-white',       soft: 'bg-indigo-100 text-indigo-800' },
  success:  { solid: 'bg-emerald-600 text-white',      soft: 'bg-emerald-100 text-emerald-800' },
  warning:  { solid: 'bg-amber-500 text-black',        soft: 'bg-amber-100 text-amber-800' },
  danger:   { solid: 'bg-rose-600 text-white',         soft: 'bg-rose-100 text-rose-800' },
};

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>((props, ref) => {
  const {
    variant = 'neutral',
    size = 'sm',
    rounded = 'md',
    soft = false,
    dot = false,
    className,
    children,
    ...rest
  } = props;

  const color = palettes[variant][soft ? 'soft' : 'solid'];

  return (
    <span
      ref={ref}
      className={clsx(base, sizes[size], rounds[rounded], color, className)}
      {...rest}
    >
      {dot && <span className="inline-block h-1.5 w-1.5 rounded-full bg-current" aria-hidden="true" />}
      {children}
    </span>
  );
});

export default Badge;
