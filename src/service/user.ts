import sha256 from 'crypto-js/sha256';
import { v4 as uuidv4 } from 'uuid';

import { ILoginAttributes, IRegisterUser, IUser } from "@/types";

const BASE_URL = 'http://localhost:3003';

export const registerUser = async (user: IRegisterUser) => {
  try {
    const emailsUser: IUser[] = await fetch(`${BASE_URL}/users?email=${user.email}`).then((res) => res.json());

    if(emailsUser.length > 0 ) {
      return { error: 'User already exist' };
    }

    await fetch(`${BASE_URL}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8'
      },
      body: JSON.stringify({
        ...user,
        password: sha256(user.password).toString(),
        barbecues: [],
        authToken: uuidv4(),
      })
    });

    return { error: false };
  } catch (e) {
    console.error('Register failure')
    return { error: 'Connection error' };
  }
}

export const login = async ({ email, password }: ILoginAttributes) => {
  try {
    const matchedUsers: IUser[] = await fetch(
                                            `${BASE_URL}/users?email=${email}&password=${sha256(password).toString()}`
                                            ).then((res) => res.json());

    if(matchedUsers.length > 0 ) {
      return { token: matchedUsers[0].authToken };
    }

    return { error: 'Email or password wrong' };
  } catch (e) {
    console.error('Login failure')
    return { error: 'Login error' };
  }
}

export const getUserByToken = async (token: string): Promise<IUser | { error: string }>=> {
  try {
    const matchedUsers: IUser[] = await fetch(`${BASE_URL}/users?authToken=${token}`).then((res) => res.json());

    if(matchedUsers.length > 0 ) {
      return matchedUsers[0];
    }

    return { error: 'User not found' };
  } catch (e) {
    console.error('User not found')
    return { error: 'User not found' };
  }
}