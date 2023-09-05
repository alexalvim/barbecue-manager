'use client'

import { AuthContext } from '@/context/AuthProvider'
import { useContext, useState } from 'react'
import {
  BarbecuesList,
  ContentHolder,
  ContentWrapper,
  LoadingMessage,
} from './styles'
import { AddBarbecueBox } from '@/components/AddBarbecueBox'
import { RegisterBarbecueModal } from '@/components/RegisterBarbecueModal'
import { BarbecueBox } from '@/components/BarbecueBox'

const Home = () => {
  const user = useContext(AuthContext)
  const [registerBarbecueModalOpened, setRegisterBarbecueModalOpened] =
    useState<boolean>(false)

  if (!user) {
    return <LoadingMessage>Carregando</LoadingMessage>
  }

  return (
    <>
      <ContentWrapper>
        <ContentHolder>
          <BarbecuesList>
            {user.barbecues.map((b) => (
              <li key={b.id}>
                <BarbecueBox barbecue={b} />
              </li>
            ))}
            <li>
              <AddBarbecueBox
                onClick={() => setRegisterBarbecueModalOpened(true)}
              />
            </li>
          </BarbecuesList>
        </ContentHolder>
      </ContentWrapper>
      <RegisterBarbecueModal
        user={user}
        onClose={() => setRegisterBarbecueModalOpened(false)}
        isOpened={registerBarbecueModalOpened}
      />
    </>
  )
}

export default Home
