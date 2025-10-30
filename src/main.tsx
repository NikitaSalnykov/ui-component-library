import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './showcase/App'
import { ToastProvider } from './components/Toast'

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
        <ToastProvider position="top-right" max={3} duration={3000}>    
        <App />
        </ToastProvider>

  </React.StrictMode>
)
