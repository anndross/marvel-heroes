import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ServerStylesheet } from './ServerStylesheet'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Marvel Heroes',
  description: 'Mergulhe no domínio deslumbrante de todos os personagens clássicos que você ama - e aqueles que você descobrirá em breve!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ServerStylesheet>{children}</ServerStylesheet>
      </body>
    </html>
  )
}
