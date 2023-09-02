'use client'

import { clearAuthToken, getAuthToken } from '@/auth/login'
import { getUserByToken } from '@/service/user'
import { IUser } from '@/types'
import { useRouter } from 'next/navigation'
import { createContext, useEffect, useState } from 'react'

interface IAuthProviderProps {
  children: JSX.Element
  requireLogin?: boolean
}

export const AuthContext = createContext<null | IUser>(null)

export const AuthProvider = ({
  children,
  requireLogin,
}: IAuthProviderProps) => {
  const router = useRouter()
  const [currentUser, setCurrentUser] = useState<null | IUser>(null)

  useEffect(() => {
    const verifyLogin = async () => {
      const token = getAuthToken()

      if (token) {
        const user = await getUserByToken(token)

        if (user && !user.error) {
          if (requireLogin) {
            setCurrentUser(user as IUser)
            return
          }

          clearAuthToken()
          router.push('/home')
          return
        }
      }

      if (requireLogin) {
        router.push('/login')
      }
    }

    verifyLogin()
  }, [])

  return (
    <AuthContext.Provider value={currentUser}>{children}</AuthContext.Provider>
  )
}
