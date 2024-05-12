import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
const inter = Inter({ subsets: ['latin'] })
import ErrorBoundary from './ErrorBoundary'
import { ContextProviders } from './ContextProviders'
import Navbar from '@/components/Navbar'
export const metadata: Metadata = {
  title: 'LS PLANNER / Home',
  description:
    "Discover optimal scheduling with LS Planner, your premier solution for navigating load shedding challenges. Our innovative service intelligently aggregates and analyzes load shedding schedules to provide you with the best possible times where power cuts won't disrupt your day. Streamline your activities and stay powered with LS Planner.",
  icons: [
    {
      url: '/lsplanner-logo.webp', // Correct the path to point to your logo
      href: '/lsplanner-logo.webp', // Ensure this matches the actual file name and path in the public folder
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ErrorBoundary>
      <html lang="en">
        <body className={`${inter.className}`}>
          <ContextProviders>
            <Navbar />
            {children}
          </ContextProviders>
        </body>
      </html>
    </ErrorBoundary>
  )
}
