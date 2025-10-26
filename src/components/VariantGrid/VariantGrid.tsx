import React from 'react'

const VariantGrid: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="grid md:grid-cols-2 gap-6">{children}</div>
}

export default VariantGrid
