import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ServerStylesheet } from './ServerStylesheet'
import dynamic from 'next/dynamic';
import React from 'react'
import { Loading } from '@/components/Loading';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Marvel Heroes',
  description: 'Mergulhe no domínio deslumbrante de todos os personagens clássicos que você ama - e aqueles que você descobrirá em breve!',
}

const NonSSRWrapper = ({ children }: { children: React.ReactNode }) => (<>{children}</>);

const ComponentWithNoSSR = dynamic(() => Promise.resolve(NonSSRWrapper), {
  ssr: false,
  loading: () => <Loading />,
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ServerStylesheet>
          <ComponentWithNoSSR>
            {children}
          </ComponentWithNoSSR>
        </ServerStylesheet>
      </body>
    </html>
  )
}
