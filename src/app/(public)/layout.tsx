'use client'

import { Banner } from '@/components/Banner'
import { AuthProvider } from '@/context/AuthProvider'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AuthProvider>
      <>
        <Banner withOverlay={true} title={'Agenda de churras'} />
        {children}
      </>
    </AuthProvider>
  )
}
