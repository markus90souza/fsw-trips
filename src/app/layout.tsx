import '@/styles/globals.css'
import { FC, ReactNode } from 'react'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { NextAuthProvider } from '@/providers/auth'

const poppins = Poppins({ subsets: ['latin'] , weight: [ '400', '500', '600', '700', '800', '900']})

export const metadata: Metadata = {
  title: 'FSW Trips',
  description: 'Sistemas de reservas de viagens',
}

type LayoutProps =  {
  children: ReactNode
}

const RootLayout: FC<LayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <NextAuthProvider>
          {children}
        </NextAuthProvider>
      </body>
    </html>
  )
}

export default RootLayout
