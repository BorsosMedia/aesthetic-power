'use client'

import { TailwindIndicator } from './tailwind-indicator'
import { Toaster } from './ui/toaster'
import { CartProvider } from 'use-shopping-cart'

export function Providers({ children }) {
  return (
    <CartProvider
      currency='USD'
      shouldPersist
      cartMode='checkout-session'
      //   stripe={process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY}
    >
      <Toaster />
      {children}
      <TailwindIndicator />
    </CartProvider>
  )
}
