import React from 'react'
import clsx from 'clsx'

interface Props {
  id: string
  title: string
  description?: string
  children: React.ReactNode,
  className?: string
}

const Section: React.FC<Props> = ({ id, title, description, children, className }) => {
  return (
    <section id={id} className={clsx("bg-white rounded-lg p-2 md:p-6 shadow-sm", className)}>
      <h2 className="text-xl font-medium mb-1">{title}</h2>
      {description && <p className="text-sm text-gray-800 mb-4">{description}</p>}
      {children}
    </section>
  )
}

export default Section
