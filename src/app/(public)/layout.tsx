import { Banner } from '@/components/Banner'
import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { colors } from '@/colors'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Agenda de churras',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ backgroundColor: colors.mainColor }}>
        <Banner
          title={'Agenda de churras'}/>
        {children}
      </body>
    </html>
  )
}
