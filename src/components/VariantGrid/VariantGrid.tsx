import React from 'react'
import clsx from 'clsx'

export const VariantGrid: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className }) => {
  return <div className={clsx("grid md:grid-cols-2 gap-6", className)}>{children}</div>
}

export default VariantGrid
