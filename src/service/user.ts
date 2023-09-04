import sha256 from 'crypto-js/sha256'
import { v4 as uuidv4 } from 'uuid'
import useSWR, { mutate } from 'swr'

import {
  IBarbecue,
  ILoginAttributes,
  IParticipant,
  IRegisterUser,
  IUser,
} from '@/types'
import { BASE_URL } from '../config'
import { fetcher } from './utils'

export const registerUser = async (user: IRegisterUser) => {
  try {
    await fetch(`${BASE_URL}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify({
        ...user,
        password: sha256(user.password).toString(),
        barbecues: [],
        authToken: uuidv4(),
      }),
    })

    return { error: false }
  } catch (e) {
    console.error('Register failure')
    return { error: 'Connection error' }
  }
}

export const verifyEmailAvailability = async (email: string) => {
  try {
    const emailsUser: IUser[] = await fetch(
      `${BASE_URL}/users?email=${email}`,
    ).then((res) => res.json())

    if (emailsUser.length > 0) {
      return { availability: false }
    }

    return { availability: true }
  } catch (e) {
    console.error('Register failure')
    return { error: 'Connection error' }
  }
}

export const login = async ({ email, password }: ILoginAttributes) => {
  try {
    const matchedUsers: IUser[] = await fetch(
      `${BASE_URL}/users?email=${email}&password=${sha256(
        password,
      ).toString()}`,
    ).then((res) => res.json())

    if (matchedUsers.length > 0) {
      return { token: matchedUsers[0].authToken }
    }

    return { error: 'Email or password wrong' }
  } catch (e) {
    console.error('Login failure')
    return { error: 'Login error' }
  }
}

export interface IUseUserReturn {
  user: IUser | undefined
  isLoading: boolean
  error: Error | undefined
}

export const useUser = (token: string): IUseUserReturn => {
  const { data, isLoading, error } = useSWR<IUser[], Error>(
    `${BASE_URL}/users?authToken=${token}`,
    fetcher,
  )

  return {
    user: data && data.length > 0 ? data[0] : undefined,
    isLoading,
    error,
  }
}

interface ICreateBarbecueProps {
  user: IUser
  barbecue: IBarbecue
}

export const createBarbecue = async ({
  user,
  barbecue,
}: ICreateBarbecueProps) => {
  try {
    await fetch(`${BASE_URL}/users/${user.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify({
        ...user,
        barbecues: [...user.barbecues, barbecue],
      }),
    })

    await mutate(`${BASE_URL}/users?authToken=${user.authToken}`)
    return { error: false }
  } catch (e) {
    console.error('Error to creat barbecue')
    return { error: 'Connection error' }
  }
}

interface IAddParticipantProps {
  user: IUser
  barbecueId: string
  participant: IParticipant
}

export const addParticipant = async ({
  user,
  barbecueId,
  participant,
}: IAddParticipantProps) => {
  try {
    await fetch(`${BASE_URL}/users/${user.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify({
        ...user,
        barbecues: user.barbecues.map((b) => {
          if (b.id === barbecueId) {
            return {
              ...b,
              participants: [...b.participants, participant],
            }
          }
          return b
        }),
      }),
    })

    await mutate(`${BASE_URL}/users?authToken=${user.authToken}`)
    return { error: false }
  } catch (e) {
    console.error('Error to add participant')
    return { error: 'Connection error' }
  }
}

interface ITogglePaidParticipant {
  user: IUser
  barbecueId: string
  participantId: string
}

export const togglePaidParticipant = async ({
  user,
  barbecueId,
  participantId,
}: ITogglePaidParticipant) => {
  try {
    await fetch(`${BASE_URL}/users/${user.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify({
        ...user,
        barbecues: user.barbecues.map((b) => {
          if (b.id === barbecueId) {
            return {
              ...b,
              participants: b.participants.map((p) => {
                if (p.id === participantId) {
                  return {
                    ...p,
                    paid: !p.paid,
                  }
                }
                return p
              }),
            }
          }
          return b
        }),
      }),
    })

    await mutate(`${BASE_URL}/users?authToken=${user.authToken}`)
    return { error: false }
  } catch (e) {
    console.error('Error to add participant')
    return { error: 'Connection error' }
  }
}

interface IRemoveBarbecueParticipant {
  user: IUser
  barbecueId: string
  participantId: string
}

export const removeBarbecueParticipant = async ({
  user,
  barbecueId,
  participantId,
}: IRemoveBarbecueParticipant) => {
  try {
    await fetch(`${BASE_URL}/users/${user.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify({
        ...user,
        barbecues: user.barbecues.map((b) => {
          if (b.id === barbecueId) {
            return {
              ...b,
              participants: b.participants.filter(
                (p) => p.id !== participantId,
              ),
            }
          }
          return b
        }),
      }),
    })

    await mutate(`${BASE_URL}/users?authToken=${user.authToken}`)
    return { error: false }
  } catch (e) {
    console.error('Error to add participant')
    return { error: 'Connection error' }
  }
}
