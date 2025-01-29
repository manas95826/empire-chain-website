import { Inter, VT323 } from 'next/font/google'
import Navbar from './components/Navbar'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
})

const vt323 = VT323({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-vt323',
})

export const metadata = {
  title: 'Empire Chain',
  description: 'An orchestration framework for all your AI needs ⚡',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/empire-chain-logo.png', type: 'image/png' },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="!bg-white">
      <body className={`${inter.variable} ${vt323.variable} font-sans !bg-white min-h-screen pt-16`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
