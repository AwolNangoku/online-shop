import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { Provider } from 'react-redux'
import { Provider as ChakraProvider } from "@/components/ui/provider"
import { store } from './redux/store/index.ts'
import { PayPalScriptProvider } from '@paypal/react-paypal-js'

const VITE_PAYPAL_CLIENT_ID = import.meta.env.VITE_PAYPAL_CLIENT_ID

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <ChakraProvider>
        <PayPalScriptProvider options={{ clientId: VITE_PAYPAL_CLIENT_ID, intent: "capture" } }>
          <App />
        </PayPalScriptProvider>
      </ChakraProvider> 
    </Provider>
  </StrictMode>
)
