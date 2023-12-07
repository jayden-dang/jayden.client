import type { Metadata } from 'next'
import './globals.css'
import { Providers } from '@/redux/provider'


export const metadata: Metadata = {
  title: 'Jayden Dang - Personal Website',
  description: 'Jayden Dang Blog',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-[#FEFBF6] border border-gray-800 m-2 h-screen">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
