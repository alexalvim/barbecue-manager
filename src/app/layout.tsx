'use client'

import './globals.css'
import { Raleway } from 'next/font/google'
import { ThemeProvider } from 'styled-components'
import { light } from '@/styles/themes/light'

const raleway = Raleway({ subsets: ['latin'] })

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
        className={raleway.className}
        style={{
          backgroundColor: light.colors.mainColor,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <ThemeProvider theme={light}>{children}</ThemeProvider>
      </body>
    </html>
  )
}
