import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// 👉 Importar lo necesario de React Query
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

// 👉 Crear la instancia del cliente
const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* 👉 Aquí envuelves toda tu App */}
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </StrictMode>,
)
