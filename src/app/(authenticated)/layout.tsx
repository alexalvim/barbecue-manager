'use client'

import { Banner } from '@/components/Banner'
import { AuthProvider } from '@/context/AuthProvider'
import { Header } from '@/components/Header'

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
