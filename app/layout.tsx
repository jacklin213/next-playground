import '@cloudscape-design/global-styles/index.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import AppLayoutWrapper from './AppLayoutWrapper'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next Playground',
  description: 'Playground used to explore next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppLayoutWrapper>{children}</AppLayoutWrapper>
      </body>
    </html>
  )
}