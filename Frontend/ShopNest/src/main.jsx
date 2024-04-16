import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './components/i18n.js'
import './index.css'
import { dark, neobrutalism, shadesOfPurple } from '@clerk/themes';
import { BrowserRouter } from 'react-router-dom'
import { ClerkProvider } from '@clerk/clerk-react'
import { TooltipProvider } from './components/ui/tooltip.jsx'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <TooltipProvider>
    <BrowserRouter>
      <ClerkProvider
        appearance={{
          signIn: {
            baseTheme: [shadesOfPurple],
          }
        }}
        publishableKey={PUBLISHABLE_KEY} >
        <React.Suspense fallback="loading...">
          <App />
        </React.Suspense>
      </ClerkProvider>
    </BrowserRouter>
  </TooltipProvider>
)
