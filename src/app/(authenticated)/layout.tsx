'use client'

import { Banner } from '@/components/Banner'
import '../globals.css'
import { Inter } from 'next/font/google'
import { AuthProvider } from '@/context/AuthProvider'
import { ThemeProvider } from 'styled-components'
import { light } from '@/styles/themes/light'
import { Header } from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AuthProvider requireLogin>
      <>
        <Header />
        <Banner title={'Agenda de churras'} />
        {children}
      </>
    </AuthProvider>
  )
}
