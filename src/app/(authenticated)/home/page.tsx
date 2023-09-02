'use client'

import { AuthContext } from '@/context/AuthProvider'
import { useContext, useState } from 'react'
import { BarbecuesList, ContentWrapper, LoadingMessage } from './styles'
import { AddBarbecueBox } from '@/components/AddBarbecueBox'
import { RegisterModal } from '@/components/RegisterModal'
import { BarbecueBox } from '@/components/BarbecueBox'

const User = () => {
  const user = useContext(AuthContext)
  const [registerModalOpened, setRegisterModalOpened] = useState<boolean>(false)

  if (!user) {
    return <LoadingMessage>Carregando</LoadingMessage>
  }

  return (
    <>
      <ContentWrapper>
        <BarbecuesList>
          {user.barbecues.map((b) => (
            <li key={b.id}>
              <BarbecueBox barbecue={b} />
            </li>
          ))}
          <li>
            <AddBarbecueBox onClick={() => setRegisterModalOpened(true)} />
          </li>
        </BarbecuesList>
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
