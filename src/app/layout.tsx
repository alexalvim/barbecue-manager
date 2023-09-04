'use client'

import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from 'styled-components'
import { light } from '@/styles/themes/light'

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
      <body
        className={inter.className}
        style={{ backgroundColor: light.colors.mainColor }}
      >
        <ThemeProvider theme={light}>{children}</ThemeProvider>
      </body>
    </html>
  )
}
