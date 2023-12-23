import type { Metadata } from 'next'
import { ThemeProvider } from '../Theme/ThemeProvider'
import Header from './Header'
import Footer from './footer/Footer'
import '../styles/globals.css'

export const metadata: Metadata = {
  title: 'Dog Age Calculator',
  description: 'An accurate dog age to human age calculator based on dog size and the latest formula for Labradors.',
}

type LayoutProps = {
  children: React.ReactNode;
}

const bodyStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'wrap',
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body style={bodyStyle}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
