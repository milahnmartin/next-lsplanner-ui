'use client'

import React, { useState } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { type ThemeProviderProps } from 'next-themes/dist/types'
import { SessionProvider } from 'next-auth/react'
import { useContext } from 'react'
import { MobileMenuContext } from '@/contexts/mobile-menu'
type Props = {
  children: React.ReactNode
}

const MobileMenuProvider = ({ children }: Props) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <MobileMenuContext.Provider value={{ isOpen, toggle }}>{children}</MobileMenuContext.Provider>
  )
}

const ThemeProvider = ({ children, ...props }: ThemeProviderProps) => {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: true,
      retry: false,
    },
  },
})
const QueryProvider = ({ children }: Props) => {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}

const NextAuthSessionProvider = ({ children }: Props) => {
  return <SessionProvider>{children}</SessionProvider>
}

export const ContextProviders = ({ children }: Props) => {
  return (
    <NextAuthSessionProvider>
      <QueryProvider>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <MobileMenuProvider>{children}</MobileMenuProvider>
        </ThemeProvider>
      </QueryProvider>
    </NextAuthSessionProvider>
  )
}
