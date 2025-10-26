import React from 'react'

interface Props {
  id: string
  title: string
  description?: string
  children: React.ReactNode
}

const Section: React.FC<Props> = ({ id, title, description, children }) => {
  return (
    <section id={id} className="bg-white rounded-lg p-6 shadow-sm">
      <h2 className="text-xl font-medium mb-1">{title}</h2>
      {description && <p className="text-sm text-gray-600 mb-4">{description}</p>}
      {children}
    </section>
  )
}

export default Section
