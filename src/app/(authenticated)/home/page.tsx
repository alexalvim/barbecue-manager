'use client'

import { AuthContext } from '@/context/AuthProvider'
import { useContext, useState } from 'react'
import { ContentWrapper, LoadingMessage } from './styles'
import { AddBarbecueBox } from '@/components/AddBarbecueBox'
import { RegisterModal } from '@/components/RegisterModal'

const User = () => {
  const user = useContext(AuthContext)
  const [registerModalOpened, setRegisterModalOpened] = useState<boolean>(false)

  if (!user) {
    return <LoadingMessage>Carregando</LoadingMessage>
  }

  return (
    <>
      <ContentWrapper>
        <AddBarbecueBox onClick={() => setRegisterModalOpened(true)} />
      </ContentWrapper>
      <RegisterModal
        user={user}
        onClose={() => setRegisterModalOpened(false)}
        isOpened={registerModalOpened}
      />
    </>
  )
}

export default User
