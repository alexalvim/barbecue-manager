'use client';

import { Banner } from '@/components/Banner'
import '../globals.css'
import { Inter } from 'next/font/google'
import { AuthProvider } from '@/context/AuthProvider'
import { ThemeProvider } from 'styled-components';
import { light } from '@/styles/themes/light';

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Agenda de churras</title>
      </head>
      <body className={inter.className}>
        <ThemeProvider theme={light}>
          <AuthProvider requireLogin>
            <>
              <Banner
                title={'Agenda de churras'}/>
              {children}
            </>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
