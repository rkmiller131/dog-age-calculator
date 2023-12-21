import type { Metadata } from 'next'
import { ThemeProvider } from '../Theme/ThemeProvider'
import './globals.css'

export const metadata: Metadata = {
  title: 'Dog Age Calculator',
  description: 'An accurate dog age to human age calculator based on dog size and the latest formula for Labradors.',
}

type LayoutProps = {
  children: React.ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
