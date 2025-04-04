import { createRoot } from 'react-dom/client'
import { App } from './components/pages'
import { LocalizationProvider } from './localization'

createRoot(document.getElementById('root')!).render(
  <LocalizationProvider>
    <App />
  </LocalizationProvider>,
)
