'use client'

import { clearAuthToken, getAuthToken } from '@/auth/login'
import { useUser } from '@/service/user'
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
  const [token, setToken] = useState<string | null>(null)
  const { user, error, isLoading } = useUser(token || '')

  useEffect(() => {
    setToken(getAuthToken() || '')
  }, [])

  useEffect(() => {
    const verifyLogin = async () => {
      if (isLoading || token === null) {
        return
      }
      if (requireLogin && (!token || !user || error)) {
        clearAuthToken()
        router.push('/login')
      } else if (!requireLogin && token && user) {
        router.push('/home')
      }
    }

    verifyLogin()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading])

  return (
    <AuthContext.Provider value={user || null}>{children}</AuthContext.Provider>
  )
}
