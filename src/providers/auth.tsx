'use client'

import  { FC, ReactNode } from 'react'
import { SessionProvider } from 'next-auth/react'

interface AuthProviderProps {
  children: ReactNode
}

export const NextAuthProvider: FC<AuthProviderProps> = ({ children }) => {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  )
}
