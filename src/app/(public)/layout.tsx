import { Banner } from '@/components/Banner'
import '../globals.css';
import { Inter } from 'next/font/google'
import { colors } from '@/colors'
import { AuthProvider } from '@/context/AuthProvider';

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
      <body className={inter.className} style={{ backgroundColor: colors.mainColor }}>
        <AuthProvider>
          <>
            <Banner
              withOverlay
              title={'Agenda de churras'}/>
            {children}
          </>
        </AuthProvider>
      </body>
    </html>
  )
}
