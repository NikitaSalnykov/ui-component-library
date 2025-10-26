import React from 'react'

export interface FooterProps {
  className?: string
}

export const Footer: React.FC<FooterProps> = ({ className = '' }) => {
  return (
    <footer
      className={`mt-6 text-xs text-gray-500 flex flex-col items-center gap-1 ${className}`}
    >
      <address className="not-italic text-center">
        <p>
          <strong>E-mail:</strong>{' '}
          <a
            href="mailto:salnikov.nkt@gmail.com"
            className="text-indigo-600 hover:underline"
          >
            salnikov.nkt@gmail.com
          </a>
        </p>
        <p>
          <strong>Tel:</strong>{' '}
          <a
            href="tel:+380672037580"
            className="text-indigo-600 hover:underline"
          >
            +380 67 203 7580
          </a>
        </p>
        <p>
          <strong>GitHub:</strong>{' '}
          <a
            href="https://github.com/NikitaSalnykov"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:underline"
          >
            github.com/NikitaSalnykov
          </a>
        </p>
      </address>
    </footer>
  )
}

export default Footer
