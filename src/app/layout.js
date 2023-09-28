import './globals.css'
import './burger.css'
import { Footer } from './components/Footer/Footer'
import { NavBar } from './components/NavBar/NavBar'
import { Providers } from './components/providers'
import { cn } from '@/lib/utils'

export const metadata = {
  title: 'Aesthetic Power',
  description: 'Generated by create next app'
}

export default function RootLayout({ children }) {
  return (
    <html
      lang='en'
      className={cn(
        'font-mainFont scrollbar-thin scrollbar-track-[#000000] scrollbar-thumb-[#870000] scroll-smooth min-h-screen antialiased'
      )}
      suppressHydrationWarning
    >
      <head>
        <script
          src='https://static.elfsight.com/platform/platform.js'
          data-use-service-core
          defer
        ></script>
      </head>
      <body>
        <Providers>
          <NavBar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}