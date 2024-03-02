'use client'

import React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { ThemeProviderProps } from 'next-themes/dist/types'
import { ThemeProvider } from 'next-themes'
type Props = {
  children: React.ReactNode
}

export function ThemeProviderProps({ children }: Props) {
  return <ThemeProvider attribute="class">{children}</ThemeProvider>
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

export const ContextProviders = ({ children }: Props) => {
  return (
    <QueryProvider>
      <ThemeProviderProps>{children}</ThemeProviderProps>
    </QueryProvider>
  )
}
