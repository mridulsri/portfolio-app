import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource/rubik/400.css'
import '@fontsource/rubik/700.css'

// Import Lato font
import '@fontsource/lato/400.css'
import '@fontsource/lato/700.css'
import './index.css'
import App from './App.jsx'

// GitHub Pages redirect handler
if (window.location.pathname !== '/' && window.location.search.startsWith('?/')) {
  const redirect = window.location.search.slice(2).replace(/~and~/g, '&')
  window.history.replaceState(null, null, window.location.pathname + '/' + redirect + window.location.hash)
}
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
