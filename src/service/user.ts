import sha256 from 'crypto-js/sha256'
import { v4 as uuidv4 } from 'uuid'

import { IBarbecue, ILoginAttributes, IRegisterUser, IUser } from '@/types'
import { BASE_URL } from '../config'

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

export const getUserByToken = async (
  token: string,
): Promise<IUser | { error: string }> => {
  try {
    const matchedUsers: IUser[] = await fetch(
      `${BASE_URL}/users?authToken=${token}`,
    ).then((res) => res.json())

    if (matchedUsers.length > 0) {
      return matchedUsers[0]
    }

    return { error: 'User not found' }
  } catch (e) {
    console.error('User not found')
    return { error: 'User not found' }
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

    return { error: false }
  } catch (e) {
    console.error('Error to creat barbecue')
    return { error: 'Connection error' }
  }
}
