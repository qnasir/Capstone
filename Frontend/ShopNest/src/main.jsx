import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './Components/i18n.js'
import { dark, neobrutalism, shadesOfPurple } from '@clerk/themes';
import { BrowserRouter } from 'react-router-dom'
import { ClerkProvider } from '@clerk/clerk-react'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <ClerkProvider
        appearance={{
          // baseTheme: [dark, neobrutalism],
          // variables: { colorPrimary: 'red' },
          // variables: {
          //   colorPrimary: "red",
          //   colorText: "white"
          // },
          signIn: { 
            baseTheme: [shadesOfPurple], 
            // variables: {
            //   colorPrimary: "red",
            //   colorText: "white"
            // }
          }
        }}
        publishableKey={PUBLISHABLE_KEY} >
        <React.Suspense fallback="loading...">
          <App />
        </React.Suspense>
      </ClerkProvider>
  </BrowserRouter>
)
