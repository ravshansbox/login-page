import { createRoot } from 'react-dom/client'
import { LocalizationProvider } from './localization'
import { App } from '@/components/pages'
import { globalStyles } from './globalStyles'

globalStyles()

createRoot(document.getElementById('root')!).render(
  <LocalizationProvider>
    <App />
  </LocalizationProvider>,
)
