'use client'

import { AuthContext } from '@/context/AuthProvider'
import { useContext, useState } from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined'
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn'
import {
  BackLink,
  BarbecueTitle,
  ButtonHolder,
  ContentHeaderLine,
  ContentText,
  ContentWrapper,
  EventDate,
  LoadingMessage,
  ParticipantsList,
  TopicInfo,
} from './styles'
import { useParams, useRouter } from 'next/navigation'
import { Button } from '@/components/Button'
import { AddParticipantModal } from '@/components/AddParticipantModal'
import { formatCentsToCurrency } from '@/utils/formatters'
import { ItemWithCheck } from '@/components/ItemWithCheck'
import {
  removeBarbecueParticipant,
  togglePaidParticipant,
} from '@/service/user'

const Barbecue = () => {
  const user = useContext(AuthContext)
  const router = useRouter()
  const [addParticipantModalOpened, setAddParticipantModalOpened] =
    useState<boolean>(false)
  const { barbecueId } = useParams()
  const barbecue = user?.barbecues.find((b) => b.id === barbecueId)

  if (!user) {
    return (
      <ContentWrapper>
        <LoadingMessage>Carregando</LoadingMessage>
      </ContentWrapper>
    )
  }

  if (!barbecue) {
    router.push('/home')
  }

  return (
    <>
      <ContentWrapper>
        <BackLink href={'/home'}>
          <ArrowBackIcon />
        </BackLink>
        <div>
          <ContentHeaderLine>
            <EventDate>{barbecue?.eventDate}</EventDate>
            <TopicInfo>
              <PeopleOutlineOutlinedIcon />
              {barbecue?.participants.length}
            </TopicInfo>
          </ContentHeaderLine>
          <ContentHeaderLine>
            <BarbecueTitle>{barbecue?.title}</BarbecueTitle>
            <TopicInfo>
              <MonetizationOnIcon />
              R$
              {formatCentsToCurrency(
                barbecue?.participants.reduce(
                  (acc, p) => acc + p.contributeValue,
                  0,
                ) || 0,
              )}
            </TopicInfo>
          </ContentHeaderLine>
        </div>
        {barbecue?.description ? (
          <ContentText>{barbecue.description}</ContentText>
        ) : null}
        {barbecue?.observation ? (
          <ContentText>
            <b>Obs:</b> {barbecue.observation}
          </ContentText>
        ) : null}
        <ParticipantsList>
          {barbecue?.participants.map((p) => (
            <li key={p.id}>
              <ItemWithCheck
                price={p.contributeValue}
                mainLabel={p.name}
                checked={p.paid}
                onCheck={() => {
                  togglePaidParticipant({
                    user,
                    barbecueId: barbecue.id,
                    participantId: p.id,
                  })
                }}
                onRemove={() => {
                  removeBarbecueParticipant({
                    user,
                    barbecueId: barbecue.id,
                    participantId: p.id,
                  })
                }}
              />
            </li>
          ))}
        </ParticipantsList>
        <ButtonHolder>
          <Button onClick={() => setAddParticipantModalOpened(true)}>
            Adicionar participante
          </Button>
        </ButtonHolder>
      </ContentWrapper>
      <AddParticipantModal
        user={user}
        onClose={() => setAddParticipantModalOpened(false)}
        isOpened={addParticipantModalOpened}
        barbecue={barbecue}
      />
    </>
  )
}

export default Barbecue
